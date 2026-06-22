const ACTIVITY_MAP = {
    "speaking-system-test": "./data/speaking-system-test.js",
    "introducing-yourself-speaking": "./data/introducing-yourself-speaking.js",
    "talking-about-daily-routines-speaking": "./data/talking-about-daily-routines-speaking.js"
};

let state = {
    data: null,
    currentRoundIndex: 0,
    stage: 'loading', // loading, error, intro, prepare, speak, review, summary
    timerStartText: 0,
    remainingMs: 0,
    timerDeadline: 0,
    timerPaused: false,
    timerInterval: null,
    totalSpeakingMsAttempted: 0,
    completedRounds: 0,
    selectedChecklistItems: [],
    roundSpeakingMsStart: 0
};

const dom = {};

let hasInitialised = false;

async function init() {
    if (hasInitialised) return;
    hasInitialised = true;

    cacheDom();
    bindEvents();
    await loadActivityData();
    
    document.addEventListener("visibilitychange", handleVisibilityChange);
}

function cacheDom() {
    dom.container = document.getElementById("activity-container");
    dom.loading = document.getElementById("loading-state");
    dom.error = document.getElementById("error-state");
    dom.errorMessage = document.getElementById("error-message");
    dom.announcer = document.getElementById("announcer");
}

function bindEvents() {
    // Event delegation on container
    dom.container.addEventListener('click', (e) => {
        const btn = e.target.closest('.control-btn');
        if (!btn || btn.disabled) return;
        
        const action = btn.dataset.action;
        if (action === 'start') {
            transitionTo('prepare');
        } else if (action === 'speak-now') {
            transitionTo('speak');
        } else if (action === 'pause') {
            pauseTimer();
        } else if (action === 'resume') {
            resumeTimer();
        } else if (action === 'finish-early') {
            finishSpeaking();
        } else if (action === 'next-round') {
            nextRound();
        } else if (action === 'restart') {
            resetActivity();
        }
    });

    dom.container.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox' && e.target.closest('.review-item')) {
            const index = Number(e.target.dataset.index);
            if (e.target.checked) {
                if (!state.selectedChecklistItems.includes(index)) {
                     state.selectedChecklistItems.push(index);
                }
            } else {
                state.selectedChecklistItems = state.selectedChecklistItems.filter(i => i !== index);
            }
        }
    });
}

function showView(viewName) {
    const views = {
        loading: dom.loading,
        error: dom.error,
        intro: document.getElementById('stage-intro'),
        prepare: document.getElementById('stage-prepare'),
        speak: document.getElementById('stage-speak'),
        review: document.getElementById('stage-review'),
        summary: document.getElementById('stage-summary')
    };

    // Keep the container visible if we're showing a sub-stage
    const isActivityStage = ['intro', 'prepare', 'speak', 'review', 'summary'].includes(viewName);
    dom.container.hidden = !isActivityStage;
    dom.container.setAttribute('aria-hidden', String(!isActivityStage));

    for (const [name, element] of Object.entries(views)) {
        if (!element) continue;
        const isActive = name === viewName;
        element.hidden = !isActive;
        element.setAttribute("aria-hidden", String(!isActive));
    }
}

async function loadActivityData() {
    showView('loading');
    
    // Stop timers and reset state before loading
    stopTimer();
    state.currentRoundIndex = 0;
    state.totalSpeakingMsAttempted = 0;
    state.completedRounds = 0;
    state.selectedChecklistItems = [];
    
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    if (!id) {
        showError();
        return;
    }

    const dataPath = ACTIVITY_MAP[id];
    if (!dataPath) {
        showError();
        return;
    }

    try {
        const module = await import(dataPath);
        const activityData = module.activityData;
        
        if (!activityData) {
            throw new Error("Invalid activity data module structure.");
        }
        
        if (!validateData(activityData)) {
            throw new Error("Activity data failed validation.");
        }

        state.data = activityData;
        applyAccentColor(state.data.accent);
        renderInitialState();
        transitionTo('intro');
        
        const breadcrumbCurrent = document.getElementById('breadcrumb-current');
        if (breadcrumbCurrent) {
            breadcrumbCurrent.textContent = String(state.data.title);
        }
        
        document.title = `${state.data.title} - Speaking Practice`;

    } catch (error) {
        console.error("Failed to load speaking activity:", error);
        stopTimer();
        showError();
        return;
    }
}

function validateData(data) {
    if (!data.id || data.type !== 'speaking-practice') return false;
    if (!data.title || !data.level || !data.backUrl) return false;
    if (typeof data.preparationSeconds !== 'number' || data.preparationSeconds < 0) return false;
    if (typeof data.speakingSeconds !== 'number' || data.speakingSeconds <= 0) return false;
    if (!Array.isArray(data.rounds) || data.rounds.length === 0) return false;
    
    for (const r of data.rounds) {
        if (!r.id || !r.prompt || !Array.isArray(r.supportQuestions) || !Array.isArray(r.usefulLanguage) || !Array.isArray(r.selfCheck) || r.selfCheck.length === 0) {
            return false;
        }
    }
    return true;
}

function applyAccentColor(accent) {
    if (accent) {
        document.documentElement.style.setProperty('--activity-accent', accent);
    }
}

function showError() {
    showView('error');
    if (dom.errorMessage) {
        dom.errorMessage.textContent = "We couldn't load this activity. It might not exist or the URL is incorrect.";
    }
    announce("Activity Unavailable. We couldn't load this activity.");
    
    // Move focus to error heading
    const errorHeading = dom.error.querySelector('h1, h2, h3');
    if (errorHeading) {
        errorHeading.tabIndex = -1;
        errorHeading.focus();
    }
}

function announce(message) {
    if (dom.announcer) dom.announcer.textContent = message;
}

// Stage rendering and transitions

function transitionTo(newStage) {
    stopTimer();
    state.stage = newStage;
    
    showView(newStage);
    
    // Setup state for new stage
    if (newStage === 'prepare') {
        setupPrepareStage();
    } else if (newStage === 'speak') {
        setupSpeakStage();
    } else if (newStage === 'review') {
        setupReviewStage();
    } else if (newStage === 'summary') {
        setupSummaryStage();
    }
    
    // Managing focus
    const newEl = document.getElementById(`stage-${newStage}`);
    if (newEl) {
        const heading = newEl.querySelector('h1, h2, h3');
        if (heading) {
            heading.tabIndex = -1;
            heading.focus();
        }
    }
}

function renderInitialState() {
    const data = state.data;
    
    const html = `
        <div id="stage-intro" class="speaking-stage intro-stage">
            <div class="intro-stage__header">
                <span class="intro-stage__label">${escapeHTML(data.label)} • ${escapeHTML(data.level)}</span>
                <h1 class="intro-stage__title">${escapeHTML(data.title)}</h1>
                <p class="intro-stage__desc">${escapeHTML(data.description)}</p>
                <div class="intro-stage__privacy-note">
                    <strong>Note:</strong> You may use real information or invent safe fictional details.
                </div>
            </div>
            
            <div class="intro-stage__info">
                <div class="intro-stage__info-item">
                    <span class="intro-stage__info-value">${data.rounds.length}</span>
                    <span class="intro-stage__info-label">Rounds</span>
                </div>
                <div class="intro-stage__info-item">
                    <span class="intro-stage__info-value">${data.preparationSeconds}s</span>
                    <span class="intro-stage__info-label">Prep Time</span>
                </div>
                <div class="intro-stage__info-item">
                    <span class="intro-stage__info-value">${data.speakingSeconds}s</span>
                    <span class="intro-stage__info-label">Speaking Time</span>
                </div>
            </div>
            
            <p>${escapeHTML(data.instructions)}</p>
            
            <div class="intro-stage__actions controls-area">
                <button class="control-btn control-btn--primary" data-action="start">Start Practice</button>
                <a href="${escapeHTML(data.backUrl)}" class="control-btn control-btn--secondary" style="text-decoration:none;">Return to Speaking Lab</a>
            </div>
        </div>

        <div id="stage-prepare" class="speaking-stage">
            <div class="stage-header">
                <span class="stage-progress" id="prepare-progress">Round 1 of ${data.rounds.length}</span>
                <span class="stage-category" id="prepare-category"></span>
            </div>
            
            <div class="prompt-area">
                <h2 class="prompt-area__text" id="prepare-prompt"></h2>
                <div class="prompt-area__support" id="prepare-support" style="display:none;">
                    <div class="prompt-area__support-title">Think about:</div>
                    <ul class="prompt-area__support-list" id="prepare-support-list"></ul>
                </div>
            </div>
            
            <div class="useful-language" id="prepare-language" style="display:none;">
                <h3 class="useful-language__title">Useful Language</h3>
                <div class="useful-language__grid" id="prepare-language-list"></div>
            </div>
            
            <div class="timer-area timer-area--prepare">
                <div class="timer-label">Preparation Time</div>
                <div class="timer-display" id="prepare-timer-display" aria-live="off">00:30</div>
                <div class="timer-status">Get ready to speak</div>
            </div>
            
            <div class="controls-area">
                <button class="control-btn control-btn--primary" data-action="speak-now">Start Speaking Now</button>
            </div>
        </div>

        <div id="stage-speak" class="speaking-stage">
            <div class="stage-header">
                <span class="stage-progress" id="speak-progress">Round 1 of ${data.rounds.length}</span>
                <span class="stage-category" id="speak-category"></span>
            </div>
            
            <div class="prompt-area">
                <h2 class="prompt-area__text" id="speak-prompt"></h2>
                <div class="prompt-area__support" id="speak-support" style="display:none;">
                    <ul class="prompt-area__support-list" id="speak-support-list"></ul>
                </div>
            </div>
            
            <div class="timer-area timer-area--speak">
                <div class="timer-label">Speaking Time</div>
                <div class="timer-display" id="speak-timer-display" aria-live="off">01:00</div>
                <div class="timer-status" id="speak-timer-status" aria-live="polite">Speaking</div>
            </div>
            
            <div class="controls-area">
                <button class="control-btn control-btn--secondary" id="btn-pause" data-action="pause">Pause</button>
                <button class="control-btn control-btn--secondary" id="btn-resume" data-action="resume" style="display:none;">Resume</button>
                <button class="control-btn control-btn--primary" data-action="finish-early">Finish Response</button>
            </div>
        </div>

        <div id="stage-review" class="speaking-stage">
            <h2 style="font-size: 24px; margin:0;">How did your response go?</h2>
            <div class="prompt-area">
                <div class="prompt-area__text" id="review-prompt" style="font-size: 16px; margin:0;"></div>
            </div>
            
            <div class="review-checklist" id="review-checklist"></div>
            
            <div id="review-sample-container" style="display:none;">
                <details class="sample-response">
                    <summary>View Sample Response</summary>
                    <div class="sample-response__content" id="review-sample"></div>
                </details>
            </div>
            
            <div class="controls-area">
                <button class="control-btn control-btn--primary" data-action="next-round" id="btn-next-round">Complete Round</button>
            </div>
        </div>

        <div id="stage-summary" class="speaking-stage summary-stage">
            <h2>Activity Complete!</h2>
            <p id="summary-message" style="color: var(--text-secondary); max-width: 500px; margin: 0 auto;"></p>
            
            <div class="summary-stats">
                <div class="summary-stat">
                    <div class="summary-stat__value" id="stat-rounds">0</div>
                    <div class="summary-stat__label">Rounds Completed</div>
                </div>
                <div class="summary-stat">
                    <div class="summary-stat__value" id="stat-time">0m 0s</div>
                    <div class="summary-stat__label">Speaking Time Attempted</div>
                </div>
                <div class="summary-stat">
                    <div class="summary-stat__value" id="stat-checks">0</div>
                    <div class="summary-stat__label">Self-Check Points</div>
                </div>
            </div>
            
            <div class="controls-area">
                <button class="control-btn control-btn--primary" data-action="restart">Practise Again</button>
                <a href="${escapeHTML(data.lessonUrl)}" class="control-btn control-btn--secondary" style="text-decoration:none;">Review Lesson</a>
                <a href="${escapeHTML(data.backUrl)}" class="control-btn control-btn--secondary" style="text-decoration:none;">Return to Speaking Lab</a>
            </div>
        </div>
    `;
    
    dom.container.innerHTML = html;
}

// Stage Setups

function setupPrepareStage() {
    const r = state.data.rounds[state.currentRoundIndex];
    document.getElementById('prepare-progress').textContent = `Round ${state.currentRoundIndex + 1} of ${state.data.rounds.length}`;
    document.getElementById('prepare-category').textContent = r.category || '';
    document.getElementById('prepare-prompt').textContent = r.prompt;
    
    const supportEl = document.getElementById('prepare-support');
    const supportList = document.getElementById('prepare-support-list');
    if (r.supportQuestions && r.supportQuestions.length > 0) {
        supportList.innerHTML = r.supportQuestions.map(q => `<li>${escapeHTML(q)}</li>`).join('');
        supportEl.style.display = 'block';
    } else {
        supportEl.style.display = 'none';
        supportList.innerHTML = '';
    }
    
    const langEl = document.getElementById('prepare-language');
    const langList = document.getElementById('prepare-language-list');
    if (r.usefulLanguage && r.usefulLanguage.length > 0) {
        langList.innerHTML = r.usefulLanguage.map(l => `<div class="useful-language__item">${escapeHTML(l)}</div>`).join('');
        langEl.style.display = 'block';
    } else {
        langEl.style.display = 'none';
        langList.innerHTML = '';
    }
    
    announce(`Preparation page for Round ${state.currentRoundIndex + 1}. Prompt: ${r.prompt}. You have ${state.data.preparationSeconds} seconds to prepare.`);
    
    startTimer(state.data.preparationSeconds, document.getElementById('prepare-timer-display'), () => {
        transitionTo('speak');
    });
}

function setupSpeakStage() {
    const r = state.data.rounds[state.currentRoundIndex];
    document.getElementById('speak-progress').textContent = `Round ${state.currentRoundIndex + 1} of ${state.data.rounds.length}`;
    document.getElementById('speak-category').textContent = r.category || '';
    document.getElementById('speak-prompt').textContent = r.prompt;
    
    const supportEl = document.getElementById('speak-support');
    const supportList = document.getElementById('speak-support-list');
    if (r.supportQuestions && r.supportQuestions.length > 0) {
         supportList.innerHTML = r.supportQuestions.map(q => `<li>${escapeHTML(q)}</li>`).join('');
         supportEl.style.display = 'block';
    } else {
         supportEl.style.display = 'none';
         supportList.innerHTML = '';
    }
    
    const statusEl = document.getElementById('speak-timer-status');
    statusEl.textContent = "Speaking";
    
    document.getElementById('btn-pause').style.display = "flex";
    document.getElementById('btn-resume').style.display = "none";
    document.querySelector('.timer-area--speak').classList.remove('timer-area--paused');
    
    announce(`Speaking phase for Round ${state.currentRoundIndex + 1}. You have up to ${formatTime(state.data.speakingSeconds)}.`);
    
    state.roundSpeakingMsStart = state.data.speakingSeconds * 1000;
    
    startTimer(state.data.speakingSeconds, document.getElementById('speak-timer-display'), () => {
        finishSpeaking();
    });
}

function finishSpeaking() {
    // Record speaking time
    const timeSpentMs = state.roundSpeakingMsStart - Math.max(0, state.remainingMs);
    state.totalSpeakingMsAttempted += timeSpentMs;
    announce("Speaking time finished. Moving to self-review.");
    transitionTo('review');
}

function setupReviewStage() {
    const r = state.data.rounds[state.currentRoundIndex];
    document.getElementById('review-prompt').textContent = r.prompt;
    
    const cl = document.getElementById('review-checklist');
    cl.innerHTML = r.selfCheck.map((item, index) => {
        const globalIndex = state.currentRoundIndex * 100 + index; // Simple unique ID
        const isChecked = state.selectedChecklistItems.includes(globalIndex) ? 'checked' : '';
        return `
            <label class="review-item" for="chk-${globalIndex}">
                <input type="checkbox" id="chk-${globalIndex}" data-index="${globalIndex}" ${isChecked}>
                <span>${escapeHTML(item)}</span>
            </label>
        `;
    }).join('');
    
    const sampleCont = document.getElementById('review-sample-container');
    const sampleEl = document.getElementById('review-sample');
    if (r.sampleResponse) {
        sampleEl.textContent = r.sampleResponse;
        sampleCont.style.display = 'block';
    } else {
        sampleEl.textContent = '';
        sampleCont.style.display = 'none';
    }
    
    state.completedRounds = Math.max(state.completedRounds, state.currentRoundIndex + 1);
    
    const isLastRound = state.currentRoundIndex === state.data.rounds.length - 1;
    document.getElementById('btn-next-round').textContent = isLastRound ? "View Summary" : "Next Round";
}

function nextRound() {
    if (state.currentRoundIndex < state.data.rounds.length - 1) {
        state.currentRoundIndex++;
        transitionTo('prepare');
    } else {
        transitionTo('summary');
    }
}

function setupSummaryStage() {
    document.getElementById('stat-rounds').textContent = `${state.completedRounds} / ${state.data.rounds.length}`;
    
    const totalSecs = Math.round(state.totalSpeakingMsAttempted / 1000);
    const m = Math.floor(totalSecs / 60);
    const s = totalSecs % 60;
    document.getElementById('stat-time').textContent = m > 0 ? `${m}m ${s}s` : `${s}s`;
    
    document.getElementById('stat-checks').textContent = state.selectedChecklistItems.length;
    
    const msg = "You completed all speaking rounds. Review the areas you selected and repeat the activity to build greater fluency and confidence.";
    document.getElementById('summary-message').textContent = msg;
    announce("Activity complete. " + msg);
}

function resetActivity() {
    state.currentRoundIndex = 0;
    state.totalSpeakingMsAttempted = 0;
    state.completedRounds = 0;
    state.selectedChecklistItems = [];
    transitionTo('intro');
}

// Timer Logic

function startTimer(seconds, displayElement, onComplete) {
    stopTimer();
    state.timerPaused = false;
    state.remainingMs = seconds * 1000;
    state.timerDeadline = performance.now() + state.remainingMs;
    
    updateTimerDisplay(displayElement, state.remainingMs);
    
    state.timerInterval = setInterval(() => {
        if (state.timerPaused) return;
        
        const now = performance.now();
        state.remainingMs = state.timerDeadline - now;
        
        if (state.remainingMs <= 0) {
            stopTimer();
            state.remainingMs = 0;
            updateTimerDisplay(displayElement, 0);
            if(onComplete) onComplete();
        } else {
            updateTimerDisplay(displayElement, state.remainingMs);
        }
    }, 100);
}

function stopTimer() {
    if (state.timerInterval) {
        clearInterval(state.timerInterval);
        state.timerInterval = null;
    }
}

function pauseTimer() {
    if (state.stage !== 'speak' || state.timerPaused) return;
    
    state.timerPaused = true;
    
    const statusEl = document.getElementById('speak-timer-status');
    statusEl.textContent = "Paused";
    
    document.getElementById('btn-pause').style.display = "none";
    document.getElementById('btn-resume').style.display = "flex";
    document.querySelector('.timer-area--speak').classList.add('timer-area--paused');
    
    announce("Timer paused.");
}

function resumeTimer() {
    if (state.stage !== 'speak' || !state.timerPaused) return;
    
    state.timerPaused = false;
    // Recalculate deadline based on remaining MS
    state.timerDeadline = performance.now() + state.remainingMs;
    
    const statusEl = document.getElementById('speak-timer-status');
    statusEl.textContent = "Speaking";
    
    document.getElementById('btn-resume').style.display = "none";
    document.getElementById('btn-pause').style.display = "flex";
    document.querySelector('.timer-area--speak').classList.remove('timer-area--paused');
    
    announce("Timer resumed.");
}

function handleVisibilityChange() {
    if (document.hidden) {
        // We don't automatically pause unless requested, but if not paused, we let it run based on deadline
        // When unhidden, the next interval tick uses performance.now(), which includes background time
        // So we don't need to do anything special unless we want to force pause on hide.
        // Guidelines say: "Do not silently stop the timer unless the user pressed Pause."
    }
}

function updateTimerDisplay(element, ms) {
    if (!element) return;
    const totalSecs = Math.ceil(ms / 1000);
    element.textContent = formatTime(totalSecs);
}

function formatTime(totalSeconds) {
    const validSecs = Math.max(0, totalSeconds);
    const m = Math.floor(validSecs / 60);
    const s = validSecs % 60;
    if (m > 0) {
       return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
    return `00:${s.toString().padStart(2, '0')}`;
}

// Utility

function escapeHTML(str) {
    if (!str) return '';
    return str.toString()
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
} else {
    init();
}
