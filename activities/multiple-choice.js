const activityContainer = document.getElementById('activity-container');

// State
let activityData = null;
let currentQuestionIndex = 0;
let score = {
    correct: 0,
    incorrect: 0
};
let selectedOptionIndex = null;

// Routing logic
const activityLoaders = {
    "system-test": () => import("./data/system-test.js"),
    "present-simple-vs-continuous": () => import("./data/present-simple-vs-continuous.js"),
    "past-simple-regular-irregular": () => import("./data/past-simple-regular-irregular.js"),
    "will-vs-going-to": () => import("./data/will-vs-going-to.js"),
    "present-perfect-vs-past-simple": () => import("./data/present-perfect-vs-past-simple.js"),
    "daily-routines": () => import("./data/daily-routines.js"),
    "food-meals-cooking": () => import("./data/food-meals-cooking.js"),
    "travel-transportation": () => import("./data/travel-transportation.js"),
    "home-rooms-household": () => import("./data/home-rooms-household.js")
};

document.addEventListener('DOMContentLoaded', init);

async function init() {
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
    if (!data.title) return false;
    if (!Array.isArray(data.questions) || data.questions.length === 0) return false;
    
    // Quick validate questions
    for (const q of data.questions) {
        if (!q.options || !Array.isArray(q.options) || typeof q.correctAnswer !== 'number') {
            return false;
        }
    }
    return true;
}

function applyTheme() {
    if (activityData.accent) {
        document.documentElement.style.setProperty('--activity-accent', activityData.accent);
    }
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
        
        <div class="activity-panel" id="activity-panel" aria-live="polite" tabindex="-1"></div>
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
    
    // Animate to new width
    setTimeout(() => {
        const bar = progressContainer.querySelector('.activity-progress__bar');
        if (bar) bar.style.width = `${(current / total) * 100}%`;
    }, 10);
}

function renderQuestion() {
    const panel = document.getElementById('activity-panel');
    if (!panel) return;
    
    selectedOptionIndex = null;
    const question = activityData.questions[currentQuestionIndex];
    
    const isLastQuestion = currentQuestionIndex === activityData.questions.length - 1;
    
    const optionsHtml = question.options
        .map(
            (opt, idx) => `
                <li class="activity-option" id="option-container-${idx}">
                    <input type="radio" class="activity-option__input" name="activity-answer" id="option-${idx}" value="${idx}">
                    <label class="activity-option__label" for="option-${idx}">
                        <span class="activity-option__text">${escapeHtml(opt)}</span>
                        <span class="activity-option__indicator" id="indicator-${idx}" aria-hidden="true"></span>
                    </label>
                </li>
            `
        )
        .join("");

    panel.innerHTML = `
        <div class="activity-question">
            <h2 class="activity-question__prompt">${escapeHtml(question.prompt)}</h2>
        </div>
        
        <ul class="activity-options" id="activity-options">
            ${optionsHtml}
        </ul>
        
        <div class="activity-feedback" id="activity-feedback" aria-live="polite"></div>
        
        <div class="activity-controls">
            <button class="button button-primary" id="btn-check" disabled>Check Answer</button>
            <button class="button button-secondary" id="btn-next" style="display: none;">${isLastQuestion ? 'View Results' : 'Next Question'}</button>
        </div>
    `;
    
    bindQuestionEvents();
}

function bindQuestionEvents() {
    const inputs = document.querySelectorAll('.activity-option__input');
    const btnCheck = document.getElementById('btn-check');
    const btnNext = document.getElementById('btn-next');
    
    inputs.forEach(input => {
        input.addEventListener('change', (e) => {
            selectedOptionIndex = parseInt(e.target.value, 10);
            btnCheck.disabled = false;
        });
    });
    
    btnCheck.addEventListener('click', checkAnswer);
    btnNext.addEventListener('click', goToNextQuestion);
}

function checkAnswer() {
    const question = activityData.questions[currentQuestionIndex];
    const optionsContainer = document.getElementById('activity-options');
    const btnCheck = document.getElementById('btn-check');
    const btnNext = document.getElementById('btn-next');
    
    if (selectedOptionIndex === null) return;
    
    // Lock options
    optionsContainer.classList.add('locked');
    const inputs = document.querySelectorAll('.activity-option__input');
    inputs.forEach(input => input.disabled = true);
    
    btnCheck.style.display = 'none';
    btnNext.style.display = 'inline-flex';
    
    const isCorrect = selectedOptionIndex === question.correctAnswer;
    
    if (isCorrect) {
        score.correct++;
    } else {
        score.incorrect++;
    }
    
    showFeedback(isCorrect, question.explanation, question.correctAnswer);
}

function showFeedback(isCorrect, explanation, correctIndex) {
    const feedbackEl = document.getElementById('activity-feedback');
    
    // Mark options visually
    const selectedContainer = document.getElementById(`option-container-${selectedOptionIndex}`);
    const correctContainer = document.getElementById(`option-container-${correctIndex}`);
    
    const checkIcon = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"></path></svg>`;
    const xIcon = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
    
    if (isCorrect) {
        selectedContainer.classList.add('correct');
        document.getElementById(`indicator-${selectedOptionIndex}`).innerHTML = checkIcon;
        
        feedbackEl.className = 'activity-feedback show correct';
        feedbackEl.innerHTML = `
            <div class="activity-feedback__status">${checkIcon} Correct</div>
            <div class="activity-feedback__explanation">${escapeHtml(explanation || '')}</div>
        `;
    } else {
        selectedContainer.classList.add('incorrect');
        document.getElementById(`indicator-${selectedOptionIndex}`).innerHTML = xIcon;
        
        // Also highlight correct answer
        if (correctContainer) {
            correctContainer.classList.add('correct');
            document.getElementById(`indicator-${correctIndex}`).innerHTML = checkIcon;
        }
        
        feedbackEl.className = 'activity-feedback show incorrect';
        feedbackEl.innerHTML = `
            <div class="activity-feedback__status">${xIcon} Not quite</div>
            <div class="activity-feedback__explanation">${escapeHtml(explanation || '')}</div>
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
            <a href="../index.html" class="button button-primary">Return to English Lab</a>
        </div>
    `;
    
    document.getElementById('unavailable-panel').focus();
}

function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function escapeHtml(unsafe) {
    if (!unsafe) return '';
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
}
