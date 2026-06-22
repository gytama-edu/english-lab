const activityContainer = document.getElementById('activity-container');

// State
let activityData = null;
let currentQuestionIndex = 0;
let score = {
    correct: 0,
    incorrect: 0
};
let learnerAnswer = "";

// Routing logic
const activityLoaders = {
    "fill-system-test": () => import("./data/fill-system-test.js"),
    "past-simple-verb-forms": () => import("./data/past-simple-verb-forms.js"),
    "will-vs-going-to-fill": () => import("./data/will-vs-going-to-fill.js"),
    "present-perfect-vs-past-simple-fill": () => import("./data/present-perfect-vs-past-simple-fill.js"),
    "daily-routines-fill": () => import("./data/daily-routines-fill.js"),
    "food-meals-cooking-fill": () => import("./data/food-meals-cooking-fill.js"),
    "travel-transportation-fill": () => import("./data/travel-transportation-fill.js"),
    "home-rooms-household-fill": () => import("./data/home-rooms-household-fill.js")
};

document.addEventListener('DOMContentLoaded', init);

async function init() {
    renderLoadingState();
    
    const id = getActivityId();
    if (!id || !activityLoaders[id]) {
        renderUnavailableState();
        return;
    }

    try {
        const module = await activityLoaders[id]();
        if (validateActivity(module.activityData)) {
            activityData = module.activityData;
            applyTheme();
            startActivity();
        } else {
            renderUnavailableState();
        }
    } catch (error) {
        console.warn("Failed to load activity:", error);
        renderUnavailableState();
    }
}

function getActivityId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

function validateActivity(data) {
    if (!data || typeof data !== 'object') return false;
    if (data.type !== 'fill-in-the-blank') return false;
    if (!data.title) return false;
    if (!Array.isArray(data.questions) || data.questions.length === 0) return false;
    
    // Check questions
    const ids = new Set();
    for (const q of data.questions) {
        if (!q.id || ids.has(q.id)) return false;
        ids.add(q.id);
        
        if (!q.prompt && !q.textBefore && !q.textAfter) return false;
        if (!Array.isArray(q.acceptedAnswers) || q.acceptedAnswers.length === 0) return false;
        
        const hasValidAnswer = q.acceptedAnswers.some(ans => typeof ans === 'string' && ans.trim().length > 0);
        if (!hasValidAnswer) return false;
        
        if (!q.displayAnswer || typeof q.displayAnswer !== 'string') return false;
        if (!q.explanation || typeof q.explanation !== 'string') return false;
    }
    
    if (typeof data.backUrl !== 'string') return false;
    
    return true;
}

function normalizeAnswer(value) {
    if (value == null) return "";
    return String(value)
        .replace(/[\u00A0\u202F\u2007]/g, ' ') // Non-breaking spaces
        .replace(/[\u2018\u2019\u201B´`]/g, "'") // Curly apostrophes
        .trim()
        .toLowerCase()
        .replace(/\s+/g, ' '); // Collapse whitespaces
}

function applyTheme() {
    if (activityData.accent) {
        document.documentElement.style.setProperty('--activity-accent', activityData.accent);
    }
}

function renderLoadingState() {
    activityContainer.innerHTML = `
        <div style="text-align: center; padding: 4rem 2rem; color: var(--text-secondary);">
            Preparing Activity…
        </div>
    `;
}

function startActivity() {
    currentQuestionIndex = 0;
    score = { correct: 0, incorrect: 0 };
    renderActivityContainer();
}

function renderActivityContainer() {
    activityContainer.innerHTML = `
        <header class="activity-header">
            <a href="${activityData.backUrl || '#'}" class="activity-back-link">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                Back to ${activityData.lab ? capitalize(activityData.lab) + ' Lab' : 'Lab'}
            </a>
            <span class="activity-label">${activityData.label || 'ACTIVITY'}</span>
            <h1 class="activity-title">${activityData.title}</h1>
            ${activityData.description ? '<p class="activity-description">' + escapeHtml(activityData.description) + '</p>' : ''}
            ${activityData.instructions ? '<p class="activity-instructions">' + escapeHtml(activityData.instructions) + '</p>' : ''}
        </header>
        
        <div class="activity-progress" id="activity-progress"></div>
        
        <div class="activity-panel fill-activity" id="activity-panel" aria-live="polite" tabindex="-1"></div>
    `;
    
    updateProgress();
    renderQuestion();
}

function updateProgress() {
    const progressContainer = document.getElementById('activity-progress');
    if (!progressContainer) return;
    
    const total = activityData.questions.length;
    const current = currentQuestionIndex + 1;
    const percent = ((current - 1) / total) * 100;

    progressContainer.innerHTML = `
        <div class="activity-progress__text">
            <span>Question ${current} of ${total}</span>
        </div>
        <div class="activity-progress__bar-bg">
            <div class="activity-progress__bar" style="width: ${percent}%"></div>
        </div>
    `;
    
    setTimeout(() => {
        const bar = progressContainer.querySelector('.activity-progress__bar');
        if (bar) bar.style.width = `${(current / total) * 100}%`;
    }, 10);
}

function renderQuestion() {
    const panel = document.getElementById('activity-panel');
    if (!panel) return;
    
    learnerAnswer = "";
    const question = activityData.questions[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === activityData.questions.length - 1;
    
    const inputLabel = question.inputLabel ? escapeHtml(question.inputLabel) : `Answer for Question ${currentQuestionIndex + 1}`;
    
    panel.innerHTML = `
        <div class="fill-question">
            ${question.prompt ? `<h2 class="fill-caption">${escapeHtml(question.prompt)}</h2>` : ''}
            
            <div class="fill-sentence">
                ${question.textBefore ? `<span class="fill-sentence__before">${escapeHtml(question.textBefore)}</span>` : ''}
                <input type="text" 
                    id="blanks-input" 
                    class="fill-input" 
                    aria-label="${inputLabel}" 
                    autocomplete="off" 
                    autocapitalize="none" 
                    spellcheck="false"
                >
                ${question.textAfter ? `<span class="fill-sentence__after">${escapeHtml(question.textAfter)}</span>` : ''}
            </div>
        </div>
        
        <div class="fill-feedback" id="activity-feedback" aria-live="polite"></div>
        
        <div class="fill-controls">
            <button class="button button-primary" id="btn-check" disabled>Check Answer</button>
            <button class="button button-secondary" id="btn-next" style="display: none;">${isLastQuestion ? 'View Results' : 'Next Question'}</button>
        </div>
    `;
    
    bindQuestionEvents();
    focusCurrentInput();
}

function bindQuestionEvents() {
    const input = document.getElementById('blanks-input');
    const btnCheck = document.getElementById('btn-check');
    const btnNext = document.getElementById('btn-next');
    
    input.addEventListener('input', (e) => {
        learnerAnswer = e.target.value;
        const normalized = normalizeAnswer(learnerAnswer);
        btnCheck.disabled = normalized.length === 0;
    });
    
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (!btnCheck.disabled && btnCheck.style.display !== 'none') {
                checkAnswer();
            } else if (btnNext.style.display !== 'none') {
                goToNextQuestion();
            }
        }
    });
    
    btnCheck.addEventListener('click', checkAnswer);
    btnNext.addEventListener('click', goToNextQuestion);
}

function focusCurrentInput() {
    const input = document.getElementById('blanks-input');
    if (input) {
        input.focus();
    }
}

function checkAnswer() {
    const question = activityData.questions[currentQuestionIndex];
    const input = document.getElementById('blanks-input');
    const btnCheck = document.getElementById('btn-check');
    const btnNext = document.getElementById('btn-next');
    
    const normalizedLearner = normalizeAnswer(learnerAnswer);
    if (normalizedLearner.length === 0) return;
    
    let isCorrect = false;
    for (const ans of question.acceptedAnswers) {
        if (normalizeAnswer(ans) === normalizedLearner) {
            isCorrect = true;
            break;
        }
    }
    
    // Lock input
    input.readOnly = true;
    
    btnCheck.style.display = 'none';
    btnNext.style.display = 'inline-flex';
    
    if (isCorrect) {
        score.correct++;
        input.classList.add('correct');
    } else {
        score.incorrect++;
        input.classList.add('incorrect');
    }
    
    renderFeedback(isCorrect, question);
}

function renderFeedback(isCorrect, question) {
    const feedbackEl = document.getElementById('activity-feedback');
    const checkIcon = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"></path></svg>`;
    const xIcon = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
    
    if (isCorrect) {
        feedbackEl.className = 'fill-feedback show correct';
        feedbackEl.innerHTML = `
            <div class="fill-feedback__status">${checkIcon} Correct</div>
            ${
                normalizeAnswer(learnerAnswer) !== normalizeAnswer(question.displayAnswer) 
                ? `<div class="fill-feedback__answer">Correct answer: ${escapeHtml(question.displayAnswer)}</div>` 
                : ''
            }
            <div class="fill-feedback__explanation">${escapeHtml(question.explanation || '')}</div>
        `;
    } else {
        feedbackEl.className = 'fill-feedback show incorrect';
        feedbackEl.innerHTML = `
            <div class="fill-feedback__status">${xIcon} Not quite</div>
            <div class="fill-feedback__answer">Your answer: ${escapeHtml(learnerAnswer)}</div>
            <div class="fill-feedback__answer" style="color: #4AD8C1;">Correct answer: ${escapeHtml(question.displayAnswer)}</div>
            <div class="fill-feedback__explanation">${escapeHtml(question.explanation || '')}</div>
        `;
    }
}

function goToNextQuestion() {
    if (currentQuestionIndex < activityData.questions.length - 1) {
        currentQuestionIndex++;
        updateProgress();
        renderQuestion();
        
        // Return focus to panel for accessibility
        const panel = document.getElementById('activity-panel');
        if (panel) panel.focus();
    } else {
        renderResults();
    }
}

function renderResults() {
    const container = document.getElementById('activity-container');
    const total = activityData.questions.length;
    const percentage = Math.round((score.correct / total) * 100);
    
    container.innerHTML = `
        <div class="activity-panel activity-results" tabindex="-1" id="results-panel">
            <svg class="activity-results__icon" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <h1 class="activity-results__heading">Activity Complete</h1>
            <p class="activity-results__stats">${score.correct} out of ${total} correct</p>
            <div class="activity-results__score">${percentage}%</div>
            
            <div class="activity-results__actions">
                <button class="button button-secondary" id="btn-retry">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg>
                    Retry Activity
                </button>
                <a href="${activityData.backUrl || '../index.html'}" class="button button-primary">Return to Lab</a>
            </div>
        </div>
    `;
    
    document.getElementById('btn-retry').addEventListener('click', startActivity);
    
    // Focus results for accessibility
    document.getElementById('results-panel').focus();
}

function renderUnavailableState() {
    activityContainer.innerHTML = `
        <div class="activity-unavailable" tabindex="-1" id="unavailable-panel">
            <h1 class="activity-unavailable__heading">Activity Unavailable</h1>
            <p class="activity-unavailable__text">This activity could not be loaded. Please return to the lab and try again later.</p>
            <a href="../index.html" class="button button-primary" style="margin-bottom: 1rem;">Return to English Lab</a>
            <br>
            <a href="../labs/grammar.html" class="activity-back-link" style="margin-top: 1rem;">Return to Grammar Lab</a>
        </div>
    `;
    
    const panel = document.getElementById('unavailable-panel');
    if (panel) panel.focus();
}

function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function escapeHtml(unsafe) {
    if (!unsafe) return '';
    return String(unsafe)
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
}
