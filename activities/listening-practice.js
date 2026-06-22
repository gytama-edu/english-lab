const ACTIVITY_MAP = {
    "listening-for-everyday-information": "./data/listening-for-everyday-information.js",
    "listening-for-main-ideas-and-key-details": "./data/listening-for-main-ideas-and-key-details.js",
    "listening-for-opinions-feelings-and-attitudes": "./data/listening-for-opinions-feelings-and-attitudes.js",
    "listening-system-test": "./data/listening-system-test.js"
};

let state = {
    data: null,
    stage: 'loading', // loading, unavailable, intro, practice, review, results
    currentQuestionIndex: 0,
    answers: {}, // questionId -> answer string
    audioElements: {}, // sectionId -> HTMLAudioElement
    flatQuestions: []
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
    dom.container.addEventListener('click', (e) => {
        const btn = e.target.closest('button, a');
        if (!btn || btn.disabled) return;
        
        if (btn.classList.contains('btn-start')) {
            startPractice();
        } else if (btn.classList.contains('btn-next')) {
            goNext();
        } else if (btn.classList.contains('btn-prev')) {
            goPrev();
        } else if (btn.classList.contains('btn-review')) {
            showReview();
        } else if (btn.classList.contains('btn-submit')) {
            submitAnswers();
        } else if (btn.classList.contains('btn-retry-activity')) {
            retryActivity();
        } else if (btn.classList.contains('btn-edit')) {
            const qIdx = parseInt(btn.dataset.idx, 10);
            goToQuestion(qIdx);
        } else if (btn.classList.contains('nav-dot')) {
            const qIdx = parseInt(btn.dataset.idx, 10);
            goToQuestion(qIdx);
        } else if (btn.classList.contains('button-replay')) {
            const sectionId = btn.dataset.section;
            replayAudio(sectionId);
        }
    });

    dom.container.addEventListener('change', (e) => {
        if (e.target.matches('input[type="radio"]')) {
            saveAnswer(e.target.name, e.target.value);
            renderNavigator();
        }
    });

    dom.container.addEventListener('input', (e) => {
        if (e.target.matches('.short-answer-input')) {
            saveAnswer(e.target.name, e.target.value);
            renderNavigator();
        }
    });
}

function handleVisibilityChange() {
    if (document.hidden) {
        pauseAllAudio();
    }
}

async function loadActivityData() {
    state.stage = 'loading';
    setContainerState();

    const urlParams = new URLSearchParams(window.location.search);
    const activityId = urlParams.get('id');

    if (!activityId || !ACTIVITY_MAP[activityId]) {
        showError("This activity could not be found.");
        return;
    }

    try {
        const modulePath = ACTIVITY_MAP[activityId];
        const module = await import(modulePath);
        
        if (!module.activityData || !validateData(module.activityData) || module.activityData.id !== activityId) {
            throw new Error("Invalid activity data schema or ID mismatch.");
        }

        state.data = module.activityData;
        
        // Flatten questions for easy navigation
        state.flatQuestions = [];
        state.data.sections.forEach(section => {
            section.questions.forEach(q => {
                state.flatQuestions.push({
                    ...q,
                    sectionId: section.id,
                    sectionTitle: section.title,
                    sectionContext: section.context
                });
            });
        });

        // Flat questions check
        if (activityId !== 'listening-system-test' && state.flatQuestions.length !== 10) {
            throw new Error("Public listening activities must contain exactly 10 questions.");
        }

        // Initialize audio elements
        state.data.sections.forEach(section => {
            if (section.audio && section.audio.sources && section.audio.sources.length > 0) {
                const audio = new Audio();
                audio.preload = "metadata";
                
                audio.addEventListener('play', () => {
                    pauseAllAudioExcept(section.id);
                });
                
                audio.addEventListener('error', () => {
                    const errorContainer = document.getElementById(`audio-error-${section.id}`);
                    if (errorContainer) {
                        errorContainer.hidden = false;
                    }
                });

                section.audio.sources.forEach(source => {
                    const srcEl = document.createElement('source');
                    srcEl.src = source.src;
                    srcEl.type = source.type || 'audio/mpeg';
                    audio.appendChild(srcEl);
                });

                state.audioElements[section.id] = audio;
            }
        });

        document.title = `${state.data.title} - Listening Practice | English Lab`;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.content = state.data.description || "Interactive English listening activity.";
        
        renderIntro();
    } catch (err) {
        console.error("Failed to load activity:", err);
        showError("We encountered a problem loading this activity's data.");
    }
}

function validateData(data) {
    if (!data.id || !data.title || !data.sections || data.sections.length === 0) return false;
    for (const s of data.sections) {
        if (!s.id || !s.title || !s.questions || !s.audio || !s.transcript) return false;
        for (const q of s.questions) {
            if (!q.id || !q.type || !q.prompt || !q.explanation) return false;
            if (q.type !== 'single-choice' && q.type !== 'short-answer') return false;
            if (q.type === 'single-choice' && (!q.options || !q.correctAnswer)) return false;
            if (q.type === 'short-answer' && (!q.primaryAnswer || !q.acceptedAlternatives)) return false;
        }
    }
    return true;
}

function showError(msg) {
    pauseAllAudio();
    state.stage = 'unavailable';
    dom.errorMessage.textContent = msg;
    setContainerState();
    announce("Activity unavailable.");
}

function setContainerState() {
    dom.loading.hidden = state.stage !== 'loading';
    dom.error.hidden = state.stage !== 'unavailable';
    dom.container.hidden = (state.stage === 'loading' || state.stage === 'unavailable');
    
    // Private Listening system test verification
    const isTest = (state.data && state.data.id === 'listening-system-test') || window.location.search.includes('id=listening-system-test');
    if (isTest) {
        const visibleStates = [!dom.loading.hidden, !dom.error.hidden, !dom.container.hidden].filter(Boolean).length;
        if (visibleStates !== 1) {
            console.error(`System test failed: ${visibleStates} major states are visible simultaneously.`);
        } else {
            console.log(`System test passed for state: ${state.stage}`);
        }
    }
}

function announce(msg) {
    dom.announcer.textContent = msg;
}

function renderIntro() {
    state.stage = 'intro';
    setContainerState();

    let totalQs = state.flatQuestions.length;
    let totalSecs = state.data.sections.length;

    dom.container.innerHTML = `
        <div class="listening-intro" id="intro-container" tabindex="-1">
            <h1 class="sr-only" id="stage-heading">${escapeHtml(state.data.title)}</h1>
            <p class="listening-intro__desc" style="margin-top: 0;">${escapeHtml(state.data.instructions)}</p>
            
            <div class="listening-intro__facts">
                <span class="fact-item">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                    ${totalSecs} Recordings
                </span>
                <span class="fact-item">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                    ${totalQs} Questions
                </span>
            </div>

            <button class="button button-primary btn-start listening-intro__start">Start Listening</button>
            
            <div style="margin-top: 1rem;">
                <a href="../lessons/lesson.html?id=${encodeURIComponent(state.data.lessonId)}" class="activity-back-link" style="margin: 0; font-size: 13px;">Review closely related lesson</a>
            </div>
        </div>
    `;

    document.getElementById("intro-container")?.focus();
    announce("Introduction ready. " + state.data.instructions);
}

function startPractice() {
    state.stage = 'practice';
    setContainerState();
    state.currentQuestionIndex = 0;
    state.answers = {};
    renderPractice();
    announce("Practice started.");
}

function pauseAllAudio() {
    Object.values(state.audioElements).forEach(audio => {
        if (!audio.paused) {
            audio.pause();
        }
    });
}

function pauseAllAudioExcept(skipId) {
    Object.entries(state.audioElements).forEach(([id, audio]) => {
        if (id !== skipId && !audio.paused) {
            audio.pause();
        }
    });
}

function replayAudio(sectionId) {
    const audio = state.audioElements[sectionId];
    if (!audio) return;
    
    pauseAllAudioExcept(sectionId);
    audio.pause();
    audio.currentTime = 0;
    const playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise.catch(e => {
            console.error("Audio replay blocked or failed:", e);
            const errorContainer = document.getElementById(`audio-error-${sectionId}`);
            if (errorContainer) {
                errorContainer.hidden = false;
            }
        });
    }
    announce("Audio restarted.");
}

function renderPractice() {
    setContainerState();
    const qIndex = state.currentQuestionIndex;
    const q = state.flatQuestions[qIndex];
    const sectionIndex = state.data.sections.findIndex(s => s.id === q.sectionId);
    
    let html = `
        <div class="listening-active split-layout">
            <header class="listening-header">
                <h1 id="stage-heading" tabindex="-1" class="sr-only">Question ${qIndex + 1} of ${state.flatQuestions.length}</h1>
                <div class="question-progress">Question ${qIndex + 1} of ${state.flatQuestions.length}</div>
            </header>

            <div class="section-card">
                <div class="section-label">Section ${sectionIndex + 1}</div>
                <div class="section-context">${escapeHtml(q.sectionContext)}</div>
                
                <div class="audio-player-wrapper">
                    <div class="audio-controls">
                        <audio controls class="audio-native" id="audio-${q.sectionId}" aria-label="Audio recording for section ${sectionIndex + 1}"></audio>
                        <button class="button-replay" data-section="${q.sectionId}" aria-label="Replay audio from beginning">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                            Replay
                        </button>
                    </div>
                    <div id="audio-error-${q.sectionId}" class="audio-error" hidden>
                        <span>This recording could not be loaded.</span>
                        <button class="button-retry" onclick="document.getElementById('audio-${q.sectionId}').load(); this.parentElement.hidden = true;">Retry Audio</button>
                    </div>
                </div>
            </div>

            <div class="question-card">
                <div class="question-prompt" id="q-prompt">${escapeHtml(q.prompt)}</div>
                ${renderQuestionInput(q)}
            </div>

            <div class="question-actions">
                <button class="button button-secondary btn-prev" ${qIndex === 0 ? 'disabled' : ''}>Previous</button>
                ${qIndex === state.flatQuestions.length - 1 
                    ? `<button class="button button-primary btn-review">Review Answers</button>`
                    : `<button class="button button-primary btn-next">Next</button>`
                }
            </div>

            <div class="question-navigator" id="question-navigator">
                ${renderNavigatorHtml()}
            </div>
        </div>
    `;

    dom.container.innerHTML = html;

    // Attach existing audio element to UI
    const audioEl = state.audioElements[q.sectionId];
    const audioContainer = document.getElementById(`audio-${q.sectionId}`);
    if (audioEl && audioContainer) {
        // Just copy attributes/sources to the DOM element
        audioContainer.innerHTML = audioEl.innerHTML;
        // Listen to native events to sync with state audio
        audioContainer.addEventListener('play', () => {
            pauseAllAudioExcept(q.sectionId);
            // Replace our in-memory audio ref with the live DOM one for this section so replay works on the real DOM element
            state.audioElements[q.sectionId] = audioContainer;
        });
    }

    document.getElementById("q-prompt")?.focus();
}

function renderQuestionInput(q) {
    const savedAns = state.answers[q.id] || "";
    if (q.type === 'single-choice') {
        return `
            <div class="options-list">
                ${q.options.map((opt, i) => {
                    const isSelected = savedAns === opt;
                    return `
                    <label class="option-label ${isSelected ? 'selected' : ''}">
                        <input type="radio" name="${q.id}" value="${escapeHtml(opt)}" class="option-input" ${isSelected ? 'checked' : ''}>
                        <span>${escapeHtml(opt)}</span>
                    </label>
                    `;
                }).join('')}
            </div>
        `;
    } else if (q.type === 'short-answer') {
        return `
            <div>
                <input type="text" class="short-answer-input" name="${q.id}" value="${escapeHtml(savedAns)}" placeholder="Type your answer here..." aria-labelledby="q-prompt">
            </div>
        `;
    }
    return "";
}

function renderNavigatorHtml() {
    return state.flatQuestions.map((q, i) => {
        const isAnswered = !!(state.answers[q.id] && state.answers[q.id].trim() !== "");
        const isCurrent = i === state.currentQuestionIndex;
        let cName = "nav-dot";
        if (isCurrent) cName += " current";
        else if (isAnswered) cName += " answered";
        
        let ariaLabel = `Question ${i + 1}`;
        if (isCurrent) ariaLabel += ", current";
        else if (isAnswered) ariaLabel += ", answered";
        else ariaLabel += ", unanswered";

        return `<button class="nav-dot ${cName}" data-idx="${i}" aria-label="${ariaLabel}">${i + 1}</button>`;
    }).join('');
}

function renderNavigator() {
    const nav = document.getElementById("question-navigator");
    if (nav) {
        nav.innerHTML = renderNavigatorHtml();
    }
    
    // Update labels classes for single choice
    const q = state.flatQuestions[state.currentQuestionIndex];
    if (q.type === 'single-choice') {
        const checked = document.querySelector(`input[name="${q.id}"]:checked`);
        document.querySelectorAll('.option-label').forEach(lbl => lbl.classList.remove('selected'));
        if (checked) {
            checked.closest('.option-label').classList.add('selected');
        }
    }
}

function saveAnswer(id, val) {
    state.answers[id] = val;
}

function goNext() {
    if (state.currentQuestionIndex < state.flatQuestions.length - 1) {
        pauseAllAudio();
        state.currentQuestionIndex++;
        renderPractice();
    }
}

function goPrev() {
    if (state.currentQuestionIndex > 0) {
        pauseAllAudio();
        state.currentQuestionIndex--;
        renderPractice();
    }
}

function goToQuestion(idx) {
    if (idx >= 0 && idx < state.flatQuestions.length && state.stage !== 'results') {
        pauseAllAudio();
        state.stage = 'practice';
        state.currentQuestionIndex = idx;
        renderPractice();
    }
}

function showReview() {
    pauseAllAudio();
    state.stage = 'review';
    setContainerState();
    
    let html = `
        <div class="listening-active">
            <h1 id="stage-heading" class="listening-intro__title" tabindex="-1">Review Answers</h1>
            
            <div style="display: flex; flex-direction: column; gap: 1rem;">
                ${state.flatQuestions.map((q, i) => {
                    const ans = state.answers[q.id] || "";
                    const isEmpty = !ans || ans.trim() === "";
                    return `
                    <div class="review-card">
                        <div class="review-header">
                            <span class="review-qnum">Question ${i + 1}</span>
                            <button class="button button-secondary btn-edit" data-idx="${i}" style="padding: 0.25rem 0.75rem; font-size: 0.75rem;">Edit</button>
                        </div>
                        <div class="review-prompt">${escapeHtml(q.prompt)}</div>
                        <div class="review-answer ${isEmpty ? 'empty' : ''}">${isEmpty ? 'No answer provided' : escapeHtml(ans)}</div>
                    </div>
                    `;
                }).join('')}
            </div>

            <div class="question-actions" style="margin-top: 2rem;">
                <button class="button button-secondary btn-edit" data-idx="${state.currentQuestionIndex}">Return to Questions</button>
                <button class="button button-primary btn-submit">Submit Answers</button>
            </div>
        </div>
    `;

    dom.container.innerHTML = html;
    document.getElementById("stage-heading")?.focus();
    announce("Review your answers.");
}

function normalizeAnswer(value) {
    if (value == null) return "";
    return String(value)
        .replace(/[\u00A0\u202F\u2007]/g, ' ') 
        .replace(/[\u2018\u2019\u201B´`]/g, "'") 
        .replace(/[.,!?]$/, '') // strip harmless punctuation at end
        .trim()
        .toLowerCase()
        .replace(/\s+/g, ' '); 
}

function submitAnswers() {
    pauseAllAudio();
    state.stage = 'results';
    setContainerState();
    
    let correctCount = 0;
    const resultsHtml = state.flatQuestions.map((q, i) => {
        const studentRaw = state.answers[q.id] || "";
        const studentNorm = normalizeAnswer(studentRaw);
        
        let isCorrect = false;
        let displayCorrect = "";
        
        if (q.type === 'single-choice') {
            isCorrect = studentNorm === normalizeAnswer(q.correctAnswer);
            displayCorrect = q.correctAnswer;
        } else if (q.type === 'short-answer') {
            isCorrect = normalizeAnswer(q.primaryAnswer) === studentNorm;
            if (!isCorrect && q.acceptedAlternatives) {
                isCorrect = q.acceptedAlternatives.some(alt => normalizeAnswer(alt) === studentNorm);
            }
            displayCorrect = q.primaryAnswer;
        }

        if (isCorrect) correctCount++;

        return `
            <div class="results-card">
                <div class="review-qnum" style="margin-bottom:0.5rem">Question ${i + 1}</div>
                <div class="result-status ${isCorrect ? 'correct' : 'incorrect'}">
                    ${isCorrect ? 'Correct' : 'Incorrect'}
                </div>
                <div class="result-prompt">${escapeHtml(q.prompt)}</div>
                
                <div class="result-details">
                    <div class="result-detail-row">
                        <span class="result-detail-label">Your answer:</span>
                        <span style="font-weight:600; color: var(--text-primary); ${!studentRaw ? 'font-style:italic;color:var(--text-secondary);' : ''}">${studentRaw || 'No answer'}</span>
                    </div>
                    ${!isCorrect ? `
                    <div class="result-detail-row">
                        <span class="result-detail-label">Correct answer:</span>
                        <span style="font-weight:600; color: #4AD8C1;">${escapeHtml(displayCorrect)}</span>
                    </div>
                    ` : ''}
                </div>
                
                <div class="result-explanation">${escapeHtml(q.explanation)}</div>
            </div>
        `;
    }).join('');

    const transcriptsHtml = state.data.sections.map((sec, i) => `
        <details class="transcript-details">
            <summary class="transcript-summary">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                Transcript: ${escapeHtml(sec.title)}
            </summary>
            <div class="transcript-content">
                ${escapeHtml(sec.transcript).replace(/\n/g, '<br>')}
            </div>
        </details>
    `).join('');

    let html = `
        <div class="listening-active">
            <h1 id="stage-heading" class="listening-intro__title" tabindex="-1">Results</h1>
            
            <div class="listening-intro" style="margin-bottom: 2rem;">
                <div style="font-size: 2rem; font-weight: 700; color: var(--lab-accent, #42D9FF); margin-bottom: 0.5rem;">
                    ${correctCount} out of ${state.flatQuestions.length} correct
                </div>
                <p style="color: var(--text-secondary);">${escapeHtml(state.data.completion.message)}</p>
                
                <div style="margin-top: 1.5rem; display: flex; flex-wrap:wrap; justify-content: center; gap: 1rem;">
                    <button class="button button-primary btn-retry-activity">Practise Again</button>
                    <a href="../lessons/lesson.html?id=${encodeURIComponent(state.data.lessonId)}" class="button button-secondary">Return to Lesson</a>
                </div>
            </div>

            <div>
                ${resultsHtml}
            </div>

            <div class="transcript-section">
                <h2 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;">Transcripts</h2>
                ${transcriptsHtml}
            </div>
        </div>
    `;

    dom.container.innerHTML = html;
    document.getElementById("stage-heading")?.focus();
    announce(`Results ready. You got ${correctCount} out of ${state.flatQuestions.length} correct.`);
}

function retryActivity() {
    pauseAllAudio();
    // Restart logic
    state.answers = {};
    Object.values(state.audioElements).forEach(a => {
        a.currentTime = 0;
    });
    renderIntro();
}

const entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
};
function escapeHtml(string) {
    if (string == null) return '';
    return String(string).replace(/[&<>"']/g, function (s) {
        return entityMap[s];
    });
}

init();
