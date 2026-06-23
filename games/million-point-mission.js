class AudioEngine {
    constructor() {
        this.ctx = null;
        this.enabled = true;
        this.synths = {};
    }
    
    init() {
        if (!this.ctx) {
            try {
                this.ctx = new (window.AudioContext || window.webkitAudioContext)();
                this.buildSynths();
            } catch(e) {
                console.warn("AudioContext not supported", e);
                this.enabled = false;
            }
        }
        if(this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    buildSynths() {
        this.synths = {
            select: () => this.playTone(400, "sine", 0.1, 0.05),
            lock: () => this.playTone(300, "square", 0.15, 0.1),
            correct: () => {
                this.playTone(523.25, "sine", 0.1, 0.1);
                setTimeout(() => this.playTone(659.25, "sine", 0.1, 0.1), 100);
                setTimeout(() => this.playTone(783.99, "sine", 0.2, 0.1), 200);
            },
            incorrect: () => {
                this.playTone(200, "sawtooth", 0.3, 0.15);
                setTimeout(() => this.playTone(150, "sawtooth", 0.4, 0.15), 200);
            },
            tick: () => this.playTone(800, "sine", 0.05, 0.02),
            lifeline: () => {
                this.playTone(600, "sine", 0.1, 0.1);
                setTimeout(() => this.playTone(800, "sine", 0.2, 0.1), 100);
            },
            milestone: () => {
                this.playTone(440, "sine", 0.2, 0.1);
                setTimeout(() => this.playTone(554.37, "sine", 0.2, 0.1), 150);
                setTimeout(() => this.playTone(659.25, "sine", 0.4, 0.1), 300);
            },
            victory: () => {
                const notes = [523.25, 659.25, 783.99, 1046.50];
                notes.forEach((freq, i) => {
                    setTimeout(() => this.playTone(freq, "sine", 0.3, 0.1), i * 150);
                });
            }
        };
    }

    playTone(freq, type, duration, vol) {
        if(!this.enabled || !this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        
        gain.gain.setValueAtTime(vol, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + duration);
        
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
    }
    
    play(soundName) {
        if(this.enabled && this.synths[soundName]) {
            this.init();
            this.synths[soundName]();
        }
    }
}

const audioApp = new AudioEngine();

const LADDER_VALUES = [
    100, 200, 300, 500, 1000, 
    2000, 4000, 8000, 16000, 32000, 
    64000, 125000, 250000, 500000, 1000000
];
const MILESTONES = [4, 9]; // 0-indexed: Q5 (1000), Q10 (32000)

class MillionPointMission {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.timerInterval = null;
        this.packs = window.MILLION_DATA || {};
        
        let storedSound = localStorage.getItem("mpm-sound");
        if(storedSound !== null) {
            audioApp.enabled = (storedSound === "true");
        }

        this.loadState();
        if(this.state.gameActive) {
            this.renderResumePrompt();
        } else {
            this.renderSetup();
        }

        this.handleKeyDown = this.handleKeyDown.bind(this);
        window.addEventListener("keydown", this.handleKeyDown);
    }

    getInitialState() {
        return {
            gameActive: false,
            packId: "",
            mode: "1",
            teams: ["Player"],
            activeTeamIdx: 0,
            timerMode: "auto", // auto, off
            
            level: 0, // 0 to 14
            score: 0,
            safeScore: 0,
            
            questionData: null, // primary or reserve
            selectedAnswer: null,
            locked: false,
            revealed: false,
            
            lifelines: {
                fiftyFifty: true,
                classVote: true,
                switch: true
            },
            removedOptions: [], // for 50:50
            switchedLevels: [], // levels where switch was used
            
            timerRemaining: 0,
            timerPaused: false,
            
            modal: null, // 'vote', 'walkaway', 'incorrect', 'victory'
            voteData: null,
            
            undoStack: []
        };
    }

    saveState() {
        if(!this.state.gameActive && this.state.modal === null) {
            localStorage.removeItem("mpm-save");
        } else {
            // don't save undo stack to local storage to save space, or just keep last 1
            const stateToSave = { ...this.state, undoStack: [] };
            localStorage.setItem("mpm-save", JSON.stringify(stateToSave));
        }
    }

    loadState() {
        try {
            const saved = localStorage.getItem("mpm-save");
            if(saved) {
                this.state = JSON.parse(saved);
                this.state.undoStack = [];
                return;
            }
        } catch(e) {
            console.error("Failed to load state", e);
            localStorage.removeItem("mpm-save");
        }
        this.state = this.getInitialState();
    }
    
    pushUndo() {
        // Deep copy essential state
        const snap = JSON.parse(JSON.stringify(this.state));
        delete snap.undoStack; // don't nest
        this.state.undoStack.push(snap);
        if(this.state.undoStack.length > 10) {
            this.state.undoStack.shift();
        }
    }

    popUndo() {
        if(this.state.undoStack.length > 0) {
            const snap = this.state.undoStack.pop();
            const stack = this.state.undoStack;
            this.state = snap;
            this.state.undoStack = stack;
            this.saveState();
            this.renderGame();
        }
    }

    escapeHtml(unsafe) {
        if(!unsafe) return "";
        return unsafe.toString()
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    renderResumePrompt() {
        this.container.innerHTML = `
            <div class="overlay">
                <div class="modal">
                    <h2>Game in Progress</h2>
                    <p>An unfinished game was found.</p>
                    <div class="modal-actions">
                        <button class="button button-secondary" id="btn-resume-new">Start New Game</button>
                        <button class="button button-primary" id="btn-resume-continue">Resume Game</button>
                    </div>
                </div>
            </div>
        `;
        document.getElementById("btn-resume-new").onclick = () => {
            this.state = this.getInitialState();
            this.saveState();
            this.renderSetup();
        };
        document.getElementById("btn-resume-continue").onclick = () => {
            this.startTimerIfNeeded();
            this.renderGame();
        };
    }

    validatePack(pack) {
        let errors = [];
        if (!pack.id) errors.push("Missing pack ID.");
        if (!pack.title) errors.push("Missing pack title.");
        if (!pack.description) errors.push("Missing description.");
        if (!pack.questions || pack.questions.length !== 15) {
            errors.push("Must contain exactly 15 primary questions.");
        } else {
            const seenLevels = new Set();
            pack.questions.forEach((q, i) => {
                if(q.level !== i + 1) errors.push(`Question ${i+1}: expected level ${i+1}, got ${q.level}.`);
                if(seenLevels.has(q.level)) errors.push(`Question ${i+1}: duplicate level ${q.level}.`);
                seenLevels.add(q.level);
                
                if(q.value !== LADDER_VALUES[i]) errors.push(`Question ${i+1}: value should be ${LADDER_VALUES[i]}.`);
                if(!q.options || Object.keys(q.options).length !== 4) errors.push(`Question ${i+1}: needs exactly 4 options.`);
                if(!["A","B","C","D"].includes(q.correctAnswer)) errors.push(`Question ${i+1}: invalid correct answer ${q.correctAnswer}.`);
                if(!q.explanation) errors.push(`Question ${i+1}: missing explanation.`);
                
                const expectedMilestone = MILESTONES.includes(i);
                if(q.milestone !== expectedMilestone) errors.push(`Question ${i+1}: milestone flag incorrect.`);
                
                if(!q.reserve) {
                    errors.push(`Question ${i+1}: missing reserve question.`);
                } else {
                    if(!q.reserve.options || Object.keys(q.reserve.options).length !== 4) errors.push(`Reserve ${i+1}: needs exactly 4 options.`);
                    if(!["A","B","C","D"].includes(q.reserve.correctAnswer)) errors.push(`Reserve ${i+1}: invalid correct answer ${q.reserve.correctAnswer}.`);
                    if(!q.reserve.explanation) errors.push(`Reserve ${i+1}: missing explanation.`);
                }
            });
        }
        return errors;
    }

    renderSetup() {
        audioApp.init();
        
        let packOptions = "";
        let packKeys = Object.keys(this.packs);
        if(packKeys.length === 0) {
            packOptions = `<option value="">No editions found</option>`;
        } else {
            packKeys.forEach(k => {
                const pack = this.packs[k];
                const title = pack.title || k;
                packOptions += `<option value="${k}">${this.escapeHtml(title)}</option>`;
            });
        }

        this.container.innerHTML = `
            <div class="setup-screen">
                <h1>Million Point Mission</h1>
                <p id="edition-desc">Select an edition to begin.</p>
                <div id="setup-error" style="display: none; background: rgba(255, 90, 90, 0.1); border: 1px solid #FF5A5A; color: #FF5A5A; padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem; text-align: left; font-size: 0.9rem;"></div>
                
                <form id="mission-setup-form">
                    <div class="form-group">
                        <label for="pack-select">Choose Edition</label>
                        <select id="pack-select">
                            ${packOptions}
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="mode-select">Game Mode</label>
                        <select id="mode-select">
                            <option value="1">Individual Player</option>
                            <option value="2">2 Teams</option>
                            <option value="3">3 Teams</option>
                            <option value="4">4 Teams</option>
                        </select>
                    </div>
                    
                    <div class="team-inputs" id="team-inputs">
                        <!-- populated by js -->
                    </div>
                    
                    <div class="form-group" style="margin-top: 1rem;">
                        <label for="timer-select">Timer Settings</label>
                        <select id="timer-select">
                            <option value="auto">Automatic (30s / 45s / 60s)</option>
                            <option value="off">Timer Disabled</option>
                        </select>
                    </div>
                    
                    <div class="form-group" style="display: flex; align-items: center; gap: 0.5rem; justify-content: center; margin-top: 1rem;">
                        <input type="checkbox" id="sound-toggle" ${audioApp.enabled ? 'checked' : ''} style="width: auto;">
                        <label for="sound-toggle" style="margin: 0;">Enable Sound Effects</label>
                    </div>
                    
                    <div class="setup-actions">
                        <a href="million-point-mission-host-key.html" target="_blank" class="button button-secondary">Host Answer Sheet</a>
                        <button type="submit" class="button button-primary" id="btn-start">Start Game</button>
                    </div>
                </form>
                <div style="margin-top: 1rem; text-align: center;">
                    <a href="../labs/game-lab.html" class="button" style="text-decoration: underline; color: var(--text-secondary); background: transparent; border: none;">Return to Game Lab</a>
                </div>
            </div>
        `;

        const modeSelect = document.getElementById("mode-select");
        const teamInputs = document.getElementById("team-inputs");
        const packSelect = document.getElementById("pack-select");
        const editionDesc = document.getElementById("edition-desc");

        const setupError = document.getElementById("setup-error");
        const showSetupError = (msg) => {
            setupError.innerHTML = msg;
            setupError.style.display = "block";
        };

        const hideSetupError = () => {
            setupError.style.display = "none";
            setupError.innerHTML = "";
        };

        const updateDesc = () => {
            hideSetupError();
            const pack = this.packs[packSelect.value];
            if(pack) {
                editionDesc.textContent = pack.description || "Climb a fifteen-question general-knowledge ladder.";
            } else {
                editionDesc.textContent = "Climb a fifteen-question general-knowledge ladder.";
            }
        };
        packSelect.addEventListener("change", updateDesc);
        updateDesc();
        
        const updateTeams = () => {
            const count = parseInt(modeSelect.value);
            let html = "";
            if (count === 1) {
                html = `
                    <div class="form-group" style="margin-bottom:0;">
                        <label>Player Name</label>
                        <input type="text" id="team-0" value="Player" maxlength="20">
                    </div>
                `;
            } else {
                for(let i=0; i<count; i++) {
                    html += `
                        <div class="form-group" style="margin-bottom:0;">
                            <label>Team ${i+1} Name</label>
                            <input type="text" id="team-${i}" value="Team ${i+1}" maxlength="20">
                        </div>
                    `;
                }
            }
            teamInputs.innerHTML = html;
        };
        
        modeSelect.addEventListener("change", updateTeams);
        updateTeams();
        
        document.getElementById("sound-toggle").addEventListener("change", (e) => {
            audioApp.enabled = e.target.checked;
            localStorage.setItem("mpm-sound", audioApp.enabled);
        });

        document.getElementById("mission-setup-form").addEventListener("submit", (e) => {
            e.preventDefault();
            hideSetupError();
            this.clearTimer();
            
            const packId = document.getElementById("pack-select").value;
            if(!packId || !this.packs[packId]) {
                showSetupError("Invalid edition selected.");
                return;
            }
            
            const pack = this.packs[packId];
            const validationErrors = this.validatePack(pack);
            if(validationErrors.length > 0) {
                console.error("Invalid Million Point Mission edition:", validationErrors);
                showSetupError(`<strong>This edition contains invalid or incomplete question data:</strong><br><br>&bull; ${validationErrors.join('<br>&bull; ')}`);
                return;
            }
            
            const count = parseInt(modeSelect.value);
            const teams = [];
            for(let i=0; i<count; i++) {
                const inputEl = document.getElementById(`team-${i}`);
                teams.push(inputEl && inputEl.value ? inputEl.value : `Team ${i+1}`);
            }
            
            this.state = this.getInitialState();
            this.state.gameActive = true;
            this.state.packId = packId;
            this.state.mode = count.toString();
            this.state.teams = teams;
            this.state.timerMode = document.getElementById("timer-select").value;
            
            this.loadQuestionForLevel();
            this.saveState();
            this.renderGame();
        });
    }

    loadQuestionForLevel() {
        const pack = this.packs[this.state.packId];
        const qData = pack.questions[this.state.level];
        const isSwitched = this.state.switchedLevels.includes(this.state.level);
        
        if(isSwitched && qData.reserve) {
            this.state.questionData = JSON.parse(JSON.stringify(qData.reserve));
        } else {
            this.state.questionData = JSON.parse(JSON.stringify(qData));
        }
        
        this.state.selectedAnswer = null;
        this.state.locked = false;
        this.state.revealed = false;
        this.state.removedOptions = [];
        this.state.voteData = null;
        
        this.resetTimerForCurrentLevel();
        audioApp.play("select");
    }

    getTimerDurationForLevel(level) {
        if(level < 5) return 30;
        if(level < 10) return 45;
        return 60;
    }

    resetTimerForCurrentLevel() {
        this.clearTimer();
        if(this.state.timerMode === "auto") {
            this.state.timerRemaining = this.getTimerDurationForLevel(this.state.level);
            this.state.timerPaused = false;
        } else {
            this.state.timerRemaining = 0;
            this.state.timerPaused = true;
        }
    }

    clearTimer() {
        if(this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }

    startTimerIfNeeded() {
        this.clearTimer();
        if(this.state.timerMode === "auto" && !this.state.timerPaused && !this.state.locked && this.state.timerRemaining > 0 && !this.state.modal) {
            this.timerInterval = setInterval(() => {
                if(this.state.timerRemaining > 0) {
                    this.state.timerRemaining--;
                    this.renderTimerOnly();
                    if(this.state.timerRemaining <= 5 && this.state.timerRemaining > 0) {
                        audioApp.play("tick");
                    }
                    if(this.state.timerRemaining === 0) {
                        this.clearTimer();
                        audioApp.play("incorrect");
                        // Don't auto reveal, just stop.
                    }
                }
            }, 1000);
        }
    }

    renderTimerOnly() {
        const tDisp = document.getElementById("timer-display");
        if(tDisp && this.state.timerMode === "auto") {
            tDisp.textContent = this.state.timerRemaining;
            if(this.state.timerRemaining <= 5 && this.state.timerRemaining > 0) {
                tDisp.classList.add("warning");
            } else {
                tDisp.classList.remove("warning");
            }
        }
    }

    formatMoney(val) {
        return val.toLocaleString('en-US');
    }

    renderGame() {
        if(!this.state.gameActive) return;
        
        const pack = this.packs[this.state.packId];
        const qData = this.state.questionData;
        const currentVal = LADDER_VALUES[this.state.level];
        const activeTeamName = this.state.teams[this.state.activeTeamIdx];
        
        let ladderHTML = "";
        for(let i=0; i<15; i++) {
            const val = LADDER_VALUES[i];
            const isMilestone = MILESTONES.includes(i);
            const isActive = i === this.state.level;
            const isCompleted = i < this.state.level;
            
            let classes = ["ladder-step"];
            if(isMilestone) classes.push("milestone");
            if(isActive) classes.push("active");
            if(isCompleted) classes.push("completed");
            
            ladderHTML += `<div class="${classes.join(" ")}">
                <span class="lvl">${i+1}</span>
                <span class="val">${this.formatMoney(val)}</span>
            </div>`;
        }

        let optionsHTML = "";
        const letters = ["A", "B", "C", "D"];
        letters.forEach(l => {
            const isSelected = this.state.selectedAnswer === l;
            const isCorrect = this.state.revealed && qData.correctAnswer === l;
            const isIncorrect = this.state.revealed && this.state.selectedAnswer === l && !isCorrect;
            const isRemoved = this.state.removedOptions.includes(l);
            
            let classes = ["option-btn"];
            if(isSelected) classes.push("selected");
            if(this.state.locked && isSelected) classes.push("locked");
            if(isCorrect) classes.push("correct");
            if(isIncorrect) classes.push("incorrect");
            if(isRemoved) classes.push("hidden-by-lifeline");
            
            const text = qData.options[l];
            optionsHTML += `
                <button class="${classes.join(" ")}" data-opt="${l}" 
                    ${(this.state.locked || isRemoved) ? 'disabled' : ''}>
                    <span class="option-label">${l}:</span> 
                    <span class="option-text">${this.escapeHtml(text)}</span>
                </button>
            `;
        });

        this.container.innerHTML = `
            <div class="mission-screen">
                <div class="gameplay-header" style="margin-bottom: 16px;">
                    <div class="header-info">
                        <h2>Million Point Mission</h2>
                        <div class="edition-name">${this.escapeHtml(pack.title)}</div>
                        <div class="active-team">${this.escapeHtml(activeTeamName)}</div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 16px;">
                        <div class="timer-display ${this.state.timerRemaining <= 5 && this.state.timerRemaining > 0 ? 'warning' : ''}" id="timer-display">
                            ${this.state.timerMode === "auto" ? this.state.timerRemaining : '∞'}
                        </div>
                        <a class="back-to-game-lab" href="../labs/game-lab.html" id="btn-back-gamelab">
                            &larr; Back to Game Lab
                        </a>
                    </div>
                </div>

                <div class="mission-layout">
                    <div class="mission-main-column">
                        <section class="question-card">
                            <div>
                                <div class="question-meta">Question ${this.state.level + 1} &bull; ${this.escapeHtml(qData.topic)} &bull; ${this.formatMoney(currentVal)} Points</div>
                                <div class="question-text">${this.escapeHtml(qData.question)}</div>
                            </div>
                            <div class="options-grid" id="options-grid">
                                ${optionsHTML}
                            </div>
                            <div class="explanation-box ${this.state.revealed ? 'show' : ''}">
                                <strong>Explanation:</strong> ${this.escapeHtml(qData.explanation)}
                            </div>
                        </section>

                        <section class="host-controls-card">
                            <h3>Host Controls</h3>
                            <div class="host-controls-grid">
                                <button class="control-btn primary" id="btn-lock" ${!this.state.selectedAnswer || this.state.locked ? 'disabled' : ''}>Lock Answer</button>
                                <button class="control-btn primary" id="btn-reveal" ${!this.state.locked || this.state.revealed ? 'disabled' : ''}>Reveal</button>
                                <button class="control-btn primary" id="btn-next" ${!this.state.revealed ? 'disabled' : ''}>Next Question</button>
                                <button class="control-btn" id="btn-walk" ${this.state.locked ? 'disabled' : ''}>Walk Away</button>
                                <button class="control-btn" id="btn-pause" ${this.state.timerMode !== "auto" || this.state.locked ? 'disabled' : ''}>
                                    ${this.state.timerPaused ? 'Resume' : 'Pause'}
                                </button>
                                <button class="control-btn" id="btn-reset-timer" ${this.state.timerMode !== "auto" || this.state.locked ? 'disabled' : ''}>Restart Timer</button>
                                <button class="control-btn" id="btn-undo" ${this.state.undoStack.length === 0 ? 'disabled' : ''}>Undo</button>
                                <button class="control-btn" id="btn-reset-q">Reset Question</button>
                                <button class="control-btn" id="btn-sound">${audioApp.enabled ? 'Sound Off' : 'Sound On'}</button>
                                <button class="control-btn" id="btn-quit">Quit</button>
                            </div>
                        </section>
                    </div>
                    
                    <aside class="mission-sidebar">
                        <section class="score-ladder-card">
                            ${ladderHTML}
                        </section>
                        
                        <section class="lifelines-card">
                            <div class="lifeline-grid">
                                <button class="lifeline-btn" id="btn-5050" ${!this.state.lifelines.fiftyFifty || this.state.locked ? 'disabled' : ''}>50:50</button>
                                <button class="lifeline-btn" id="btn-vote" ${!this.state.lifelines.classVote || this.state.locked ? 'disabled' : ''}>Class Vote</button>
                                <button class="lifeline-btn" id="btn-switch" ${!this.state.lifelines.switch || this.state.locked ? 'disabled' : ''}>Switch</button>
                            </div>
                        </section>
                    </aside>
                </div>
            </div>
            ${this.renderModal()}
        `;

        this.attachGameListeners();
        
        if(!this.state.modal) {
            this.startTimerIfNeeded();
        } else {
            this.clearTimer();
        }
    }

    renderModal() {
        if(!this.state.modal) return "";
        
        if(this.state.modal === 'vote') {
            const v = this.state.voteData || {A:0, B:0, C:0, D:0};
            return `
            <div class="overlay">
                <div class="modal" style="max-width: 600px;">
                    <h2>Class Vote</h2>
                    <div class="vote-bars">
                        ${["A","B","C","D"].map(l => `
                        <div class="vote-bar-container" ${this.state.removedOptions.includes(l) ? 'style="opacity:0.3"' : ''}>
                            <div class="vote-label">${l}</div>
                            <div class="vote-track"><div class="vote-fill" style="width: ${v[l]}%;"></div></div>
                            <div class="vote-percent">${v[l]}%</div>
                        </div>
                        `).join("")}
                    </div>
                    <div class="vote-inputs">
                        ${["A","B","C","D"].map(l => `
                        <div class="vote-input-group">
                            <label>${l}</label>
                            <input type="number" id="vote-in-${l}" value="${v[l]}" min="0" max="100" ${this.state.removedOptions.includes(l) ? 'disabled' : ''}>
                        </div>
                        `).join("")}
                    </div>
                    <div class="modal-actions">
                        <div class="row">
                            <button class="button button-secondary" id="btn-sim-vote">Simulate Vote</button>
                            <button class="button button-primary" id="btn-apply-vote">Update Bars</button>
                        </div>
                        <button class="button button-secondary" id="btn-close-vote" style="margin-top: 1rem;">Close</button>
                    </div>
                </div>
            </div>`;
        }
        
        if(this.state.modal === 'walkaway') {
            return `
            <div class="overlay">
                <div class="modal">
                    <h2>Walk Away</h2>
                    <p>Are you sure you want to walk away?</p>
                    <p>You will leave with your currently secured score:</p>
                    <div class="score-highlight">${this.formatMoney(this.state.score)}</div>
                    <div class="modal-actions row">
                        <button class="button button-secondary" id="btn-cancel-walk">Cancel</button>
                        <button class="button button-primary" id="btn-confirm-walk" style="background:#FF5A5A;border-color:#FF5A5A;">Confirm Walk Away</button>
                    </div>
                </div>
            </div>`;
        }

        if(this.state.modal === 'walkaway-result') {
            return `
            <div class="overlay">
                <div class="modal">
                    <h2>Game Over</h2>
                    <p>${this.escapeHtml(this.state.teams[this.state.activeTeamIdx])} walked away.</p>
                    <p>Final Score:</p>
                    <div class="score-highlight">${this.formatMoney(this.state.score)}</div>
                    <p>Questions Completed: ${this.state.level}</p>
                    <div class="modal-actions row">
                        <button class="button button-primary" id="btn-play-again">Play Again</button>
                        <button class="button button-secondary" id="btn-home">Menu</button>
                    </div>
                </div>
            </div>`;
        }

        if(this.state.modal === 'incorrect') {
            const pack = this.packs[this.state.packId];
            return `
            <div class="overlay">
                <div class="modal">
                    <h2 style="color:#FF5A5A">Incorrect!</h2>
                    <p>${this.escapeHtml(this.state.teams[this.state.activeTeamIdx])} selected the wrong answer.</p>
                    <p>Final Secured Score:</p>
                    <div class="score-highlight">${this.formatMoney(this.state.safeScore)}</div>
                    <p>Milestone Reached: ${this.state.safeScore > 0 ? this.formatMoney(this.state.safeScore) : 'None'}</p>
                    <div class="modal-actions row">
                        <button class="button button-primary" id="btn-play-again">Play Again</button>
                        <button class="button button-secondary" id="btn-home">Menu</button>
                    </div>
                </div>
            </div>`;
        }

        if(this.state.modal === 'victory') {
            return `
            <div class="overlay">
                <div class="modal">
                    <h2>Million Point Mission Complete!</h2>
                    <div class="victory-icon">🏆</div>
                    <p>Congratulations ${this.escapeHtml(this.state.teams[this.state.activeTeamIdx])}!</p>
                    <p>You have completed all 15 questions.</p>
                    <div class="score-highlight">1,000,000</div>
                    <div class="modal-actions row">
                        <button class="button button-primary" id="btn-play-again">Play Again</button>
                        <button class="button button-secondary" id="btn-home">Menu</button>
                    </div>
                </div>
            </div>`;
        }

        return "";
    }

    attachGameListeners() {
        // Options
        const opts = document.querySelectorAll(".option-btn");
        opts.forEach(btn => {
            btn.addEventListener("click", () => {
                if(this.state.locked) return;
                this.pushUndo();
                this.state.selectedAnswer = btn.getAttribute("data-opt");
                this.saveState();
                this.renderGame();
                audioApp.play("select");
            });
        });

        // Host Controls
        const bind = (id, fn) => {
            const el = document.getElementById(id);
            if(el) el.addEventListener("click", fn);
        };

        bind("btn-lock", () => {
            if(!this.state.selectedAnswer || this.state.locked) return;
            this.pushUndo();
            this.clearTimer();
            this.state.locked = true;
            this.saveState();
            this.renderGame();
            audioApp.play("lock");
        });

        bind("btn-reveal", () => {
            if(!this.state.locked || this.state.revealed) return;
            this.pushUndo();
            this.state.revealed = true;
            
            const isCorrect = this.state.selectedAnswer === this.state.questionData.correctAnswer;
            if(isCorrect) {
                this.state.score = LADDER_VALUES[this.state.level];
                if(MILESTONES.includes(this.state.level)) {
                    this.state.safeScore = this.state.score;
                    audioApp.play("milestone");
                } else {
                    audioApp.play("correct");
                }
            } else {
                audioApp.play("incorrect");
            }
            this.saveState();
            this.renderGame();
        });

        bind("btn-next", () => {
            if(!this.state.revealed) return;
            const isCorrect = this.state.selectedAnswer === this.state.questionData.correctAnswer;
            
            if(isCorrect) {
                if(this.state.level === 14) {
                    this.state.modal = "victory";
                    audioApp.play("victory");
                    this.state.gameActive = false; // complete
                } else {
                    this.pushUndo();
                    this.state.level++;
                    
                    // switch team if multi
                    const tCount = this.state.teams.length;
                    if(tCount > 1) {
                        this.state.activeTeamIdx = (this.state.activeTeamIdx + 1) % tCount;
                    }
                    
                    this.loadQuestionForLevel();
                }
            } else {
                this.state.modal = "incorrect";
                this.state.gameActive = false; // game over
            }
            this.saveState();
            this.renderGame();
        });

        bind("btn-walk", () => {
            this.pushUndo();
            this.state.modal = "walkaway";
            this.saveState();
            this.renderGame();
        });

        bind("btn-pause", () => {
            if(this.state.timerPaused) {
                this.state.timerPaused = false;
                this.startTimerIfNeeded();
            } else {
                this.state.timerPaused = true;
                this.clearTimer();
            }
            this.saveState();
            this.renderGame();
        });

        bind("btn-reset-timer", () => {
            this.resetTimerForCurrentLevel();
            this.startTimerIfNeeded();
            this.saveState();
            this.renderGame();
        });

        bind("btn-undo", () => {
            this.popUndo();
        });

        bind("btn-reset-q", () => {
            if(confirm("Reset the current question? This clears locked answers and restarts the timer.")) {
                this.pushUndo();
                this.state.selectedAnswer = null;
                this.state.locked = false;
                this.state.revealed = false;
                this.state.voteData = null;
                this.resetTimerForCurrentLevel();
                this.saveState();
                this.renderGame();
            }
        });

        bind("btn-sound", () => {
            audioApp.enabled = !audioApp.enabled;
            localStorage.setItem("mpm-sound", audioApp.enabled);
            this.renderGame();
        });

        bind("btn-quit", () => {
            if(confirm("Are you sure you want to quit this game? Progress will be lost.")) {
                localStorage.removeItem("mpm-save");
                this.state = this.getInitialState();
                this.renderSetup();
            }
        });

        bind("btn-back-gamelab", (e) => {
            if (this.state.gameActive && !this.state.modal) {
                const confirmed = window.confirm("Leave the current game and return to Game Lab?");
                if (!confirmed) {
                    e.preventDefault();
                }
            }
        });

        // Lifelines
        bind("btn-5050", () => {
            if(!this.state.lifelines.fiftyFifty || this.state.locked) return;
            if(confirm("Use 50:50 Lifeline?")) {
                this.pushUndo();
                this.state.lifelines.fiftyFifty = false;
                
                const correct = this.state.questionData.correctAnswer;
                const wrong = ["A","B","C","D"].filter(l => l !== correct);
                // remove 2 wrong
                const keepWrong = wrong[Math.floor(Math.random() * wrong.length)];
                this.state.removedOptions = wrong.filter(l => l !== keepWrong);
                
                if(this.state.removedOptions.includes(this.state.selectedAnswer)) {
                    this.state.selectedAnswer = null;
                }
                
                audioApp.play("lifeline");
                this.saveState();
                this.renderGame();
            }
        });

        bind("btn-vote", () => {
            if(!this.state.lifelines.classVote || this.state.locked) return;
            this.pushUndo();
            this.state.lifelines.classVote = false;
            this.state.modal = 'vote';
            this.state.voteData = {A:0, B:0, C:0, D:0};
            audioApp.play("lifeline");
            this.saveState();
            this.renderGame();
        });

        bind("btn-switch", () => {
            if(!this.state.lifelines.switch || this.state.locked) return;
            if(confirm("Use Switch Question Lifeline?")) {
                this.pushUndo();
                this.state.lifelines.switch = false;
                this.state.switchedLevels.push(this.state.level);
                this.loadQuestionForLevel();
                audioApp.play("lifeline");
                this.saveState();
                this.renderGame();
            }
        });

        // Modal Controls
        bind("btn-close-vote", () => {
            this.state.modal = null;
            this.saveState();
            this.renderGame();
        });

        bind("btn-sim-vote", () => {
            const correct = this.state.questionData.correctAnswer;
            let weights = {A:10, B:10, C:10, D:10};
            
            // Higher level = less confident
            const conf = Math.max(30, 80 - (this.state.level * 3));
            weights[correct] += conf;
            
            this.state.removedOptions.forEach(l => weights[l] = 0);
            
            let v = {A:0, B:0, C:0, D:0};
            let total = 0;
            ["A","B","C","D"].forEach(l => {
                if(weights[l] > 0) {
                    v[l] = Math.floor(weights[l] + Math.random() * 20);
                }
                total += v[l];
            });
            
            // normalize to 100
            let sum = 0;
            let maxL = "A";
            ["A","B","C","D"].forEach(l => {
                v[l] = Math.round((v[l] / total) * 100);
                sum += v[l];
                if(v[l] > v[maxL]) maxL = l;
            });
            
            // fix rounding
            if(sum !== 100 && sum > 0) {
                v[maxL] += (100 - sum);
            }
            
            this.state.voteData = v;
            this.renderGame();
        });

        bind("btn-apply-vote", () => {
            let v = {A:0, B:0, C:0, D:0};
            let total = 0;
            ["A","B","C","D"].forEach(l => {
                let val = parseInt(document.getElementById(`vote-in-${l}`).value) || 0;
                v[l] = val;
                total += val;
            });
            if(total !== 100 && total !== 0) {
                alert("Percentages must add up to 100.");
                return;
            }
            this.state.voteData = v;
            this.renderGame();
        });

        bind("btn-cancel-walk", () => {
            this.popUndo(); // restores modal=null
        });

        bind("btn-confirm-walk", () => {
            this.state.modal = "walkaway-result";
            this.state.gameActive = false;
            this.saveState();
            this.renderGame();
        });

        const resetGame = () => {
            localStorage.removeItem("mpm-save");
            this.state = this.getInitialState();
            this.renderSetup();
        };

        bind("btn-play-again", resetGame);
        bind("btn-home", resetGame);
    }

    handleKeyDown(e) {
        if(!this.state.gameActive) return;
        
        // Don't trigger if inside input
        if(["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) return;

        const key = e.key.toUpperCase();
        
        if(this.state.modal) {
            if(key === "ESCAPE" && this.state.modal === 'vote') {
                document.getElementById("btn-close-vote")?.click();
            }
            return;
        }

        const optionMap = { "1": "A", "2": "B", "3": "C", "4": "D" };
        const mappedKey = optionMap[key] || key;

        if(["A","B","C","D"].includes(mappedKey)) {
            const btn = document.querySelector(`.option-btn[data-opt="${mappedKey}"]`);
            if(btn && !btn.disabled) btn.click();
        } else if(key === "ENTER") {
            document.getElementById("btn-lock")?.click();
        } else if(key === "R") {
            document.getElementById("btn-reveal")?.click();
        } else if(key === " ") {
            e.preventDefault();
            document.getElementById("btn-pause")?.click();
        } else if(key === "5") {
            document.getElementById("btn-5050")?.click();
        } else if(key === "V") {
            document.getElementById("btn-vote")?.click();
        } else if(key === "S") {
            document.getElementById("btn-switch")?.click();
        } else if(key === "U") {
            document.getElementById("btn-undo")?.click();
        } else if(key === "F") {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(()=>{});
            } else {
                document.exitFullscreen().catch(()=>{});
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    window.gameCtrl = new MillionPointMission("app-container");
});
