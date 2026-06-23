const englishJeopardyDataLoaders = {
  "english-mix-1": "../data/games/english-mix-challenge.js",
  "everyday-english-challenge": "../data/games/everyday-english-challenge.js"
};

class AudioEngine {
  constructor() {
    this.ctx = null;
    this.muted = localStorage.getItem("jeopardy-muted") === "true";
    this.volume = parseFloat(localStorage.getItem("jeopardy-volume") || "0.6");
  }

  setMuted(m) {
    this.muted = m;
    localStorage.setItem("jeopardy-muted", m.toString());
  }

  setVolume(v) {
    this.volume = parseFloat(v);
    localStorage.setItem("jeopardy-volume", v.toString());
  }

  ensureReady() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  playTone(freq, type, duration, volMod = 1) {
    if (this.muted) return;
    this.ensureReady();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
    
    gain.gain.setValueAtTime(0, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(this.volume * volMod, this.ctx.currentTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  }

  playOpenClue() {
    if(this.muted) return;
    this.playTone(440, "sine", 0.3, 0.5);
    setTimeout(() => this.playTone(660, "sine", 0.5, 0.5), 100);
  }

  playTick() {
    this.playTone(800, "square", 0.1, 0.1);
  }

  playTimeWarning() {
    this.playTone(400, "sawtooth", 0.2, 0.3);
  }

  playCorrect() {
    if(this.muted) return;
    this.playTone(523.25, "sine", 0.2, 0.5);
    setTimeout(() => this.playTone(659.25, "sine", 0.2, 0.5), 100);
    setTimeout(() => this.playTone(783.99, "sine", 0.4, 0.5), 200);
  }

  playIncorrect() {
    if(this.muted) return;
    this.playTone(300, "sawtooth", 0.5, 0.5);
    setTimeout(() => this.playTone(250, "sawtooth", 0.5, 0.5), 200);
  }
}

const audioApp = new AudioEngine();

class EnglishJeopardyController {
  constructor() {
    this.container = document.getElementById("game-container");
    this.data = null;
    this.packId = null;

    this.timerInterval = null;

    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      mode: "setup", // setup, board, complete
      subMode: null, // clue, steal
      teams: [
        { id: "team1", name: "Team 1", score: 0 },
        { id: "team2", name: "Team 2", score: 0 }
      ],
      usedTiles: [], // array of strings format "catIndex-clueIndex"
      currentClue: null, // { catIndex, clueIndex, value, question, answer }
      timerActive: false,
      timerLeft: 30, // config
      history: [],
      allowDeduction: false
    };
  }

  saveGameLocally() {
    if (this.state.mode === "setup") {
        localStorage.removeItem("jeopardy-save");
        return;
    }
    const saveObj = {
        packId: this.packId,
        state: this.state
    };
    localStorage.setItem("jeopardy-save", JSON.stringify(saveObj));
  }

  loadGameLocally() {
      const stored = localStorage.getItem("jeopardy-save");
      if (!stored) return false;
      try {
          return JSON.parse(stored);
      } catch (e) {
          return false;
      }
  }

  async init() {
    document.getElementById("loading-state").style.display = "none";
    this.container.style.display = "block";

    const saved = this.loadGameLocally();
    if (saved && saved.packId && englishJeopardyDataLoaders[saved.packId]) {
        this.renderResumePrompt(saved);
    } else {
        this.renderSetup();
    }
    this.bindEvents();
    this.bindKeyboardShortcuts();
  }

  async loadData(packId) {
      if(!this.data || this.packId !== packId) {
          if (window.JEOPARDY_DATA && window.JEOPARDY_DATA[packId]) {
              this.data = window.JEOPARDY_DATA[packId];
              this.packId = packId;
              return Promise.resolve(true);
          }
          return new Promise((resolve, reject) => {
              const loader = englishJeopardyDataLoaders[packId];
              if(!loader) {
                  reject(new Error("Invalid pack"));
                  return;
              }
              const script = document.createElement("script");
              script.src = loader;
              script.onload = () => {
                  if(window.JEOPARDY_DATA && window.JEOPARDY_DATA[packId]) {
                      this.data = window.JEOPARDY_DATA[packId];
                      this.packId = packId;
                      resolve(true);
                  } else {
                      reject(new Error("Data missing after load"));
                  }
              };
              script.onerror = () => reject(new Error("Failed to load pack script"));
              document.head.appendChild(script);
          });
      }
      return Promise.resolve(true);
  }

  validateData(data) {
    if(!data || !data.categories || data.categories.length !== 6) return false;
    for(const cat of data.categories) {
        if(!cat.clues || cat.clues.length !== 4) return false;
        let v = 100;
        for(const clue of cat.clues) {
            if(clue.value !== v) return false;
            if(!clue.question || !clue.answer) return false;
            v += 100;
        }
    }
    return true;
  }

  bindEvents() {
    this.container.addEventListener('input', (e) => {
        if (e.target.matches('input[data-action="volume-change"]')) {
            audioApp.setVolume(e.target.value);
            this.updateSoundUI();
        }
    });
  }

  bindKeyboardShortcuts() {
      document.addEventListener("keydown", (e) => {
          if (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA") return;
          
          const key = e.key.toLowerCase();
          
          if (this.state.mode === "board" && this.state.subMode === "clue") {
              if (key === " ") {
                  e.preventDefault();
                  this.toggleTimer();
              } else if (key === "a") {
                  if (!this.state.currentClue.answerRevealed) {
                      this.revealClueAnswer();
                  }
              } else if (key === "escape") {
                  if(!this.state.currentClue.answerRevealed) {
                      this.closeClueSafely();
                  } else if (this.state.currentClue.offerSteal || this.state.currentClue.isSteal) {
                      this.closeIfNoSteal();
                  }
              } else if (key === "c") {
                  if (this.state.currentClue.answerRevealed) this.markCorrect();
              } else if (key === "x") {
                  if (this.state.currentClue.answerRevealed) this.markIncorrect();
              } else if (key === "s") {
                  if (this.state.currentClue.answerRevealed) this.openSteal();
              }
          }
          
          // u for undo anywhere in board mode
          if (key === "u" && this.state.mode === "board" && !this.state.subMode) {
              this.undoLastAction();
          }
          
          // f for fullscreen
          if (key === "f") {
              if (!document.fullscreenElement) {
                  document.documentElement.requestFullscreen().catch(err => {});
              } else {
                  if (document.exitFullscreen) {
                      document.exitFullscreen();
                  }
              }
          }
      });
  }

  saveState(desc) {
      if(this.state.history.length > 20) this.state.history.shift();
      const snap = JSON.parse(JSON.stringify({
          teams: this.state.teams,
          usedTiles: this.state.usedTiles,
          allowDeduction: this.state.allowDeduction
      }));
      this.state.history.push({ desc, snapshot: snap });
  }

  undoLastAction() {
      if(this.state.history.length === 0) return;
      if(this.state.subMode) return; // don't undo while clue is open
      
      const last = this.state.history.pop();
      const snap = last.snapshot;
      this.state.teams = snap.teams;
      this.state.usedTiles = snap.usedTiles;
      this.state.allowDeduction = snap.allowDeduction;
      
      this.renderBoard();
      this.saveGameLocally();
      this.announce(`Action undone: ${last.desc}`);
  }

  // ==== Renders ====
  
  renderResumePrompt(saved) {
      this.container.innerHTML = `
        <div class="jeopardy-setup-container">
            <div class="jeopardy-setup" style="text-align: center;">
                <h1>Resume Game?</h1>
                <p>An active game was found.</p>
                <div style="display: flex; gap: 1rem; justify-content: center;">
                    <button type="button" class="button button-primary" id="btn-resume">Resume Game</button>
                    <button type="button" class="button button-secondary" id="btn-new">Start New Game</button>
                </div>
            </div>
        </div>
      `;
      document.getElementById("btn-resume").onclick = async () => {
          try {
            await this.loadData(saved.packId);
            this.state = saved.state;
            if(this.state.subMode === "clue" || this.state.subMode === "steal") {
                this.state.subMode = null; // reset any open modal on reload
                this.state.currentClue = null;
            }
            this.renderBoard();
          } catch(e) {
              this.renderSetup();
          }
      };
      document.getElementById("btn-new").onclick = () => {
          localStorage.removeItem("jeopardy-save");
          this.renderSetup();
      };
  }

  renderSetup() {
      audioApp.ensureReady();
      this.state = this.getInitialState();
      this.saveGameLocally();

      let packOptions = "";
      for(const k in englishJeopardyDataLoaders) {
          packOptions += `<option value="${k}">${k}</option>`;
      }

      this.container.innerHTML = `
        <div class="jeopardy-setup-container">
            <div class="jeopardy-setup">
                <h1 style="color: var(--orange); margin-bottom: 0.5rem; text-align: center; font-size: 2.5rem; font-family: var(--font-heading);">English Jeopardy</h1>
                <p style="text-align: center; margin-bottom: 2rem;">Host-controlled classroom Jeopardy game for English practice.</p>
                
                <div class="form-group">
                    <label for="pack-select">Question Pack</label>
                    <select id="pack-select">
                        ${packOptions}
                    </select>
                </div>

                <div class="form-group">
                    <label for="num-teams">Number of Teams</label>
                    <select id="num-teams" onchange="gameCtrl.updateTeamInputs()">
                        <option value="2">2 Teams</option>
                        <option value="3">3 Teams</option>
                        <option value="4">4 Teams</option>
                    </select>
                </div>

                <div class="team-inputs" id="team-inputs-container">
                    <div class="form-group">
                        <label>Team 1 Name</label>
                        <input type="text" id="tname-0" value="Team 1" maxlength="20">
                    </div>
                    <div class="form-group">
                        <label>Team 2 Name</label>
                        <input type="text" id="tname-1" value="Team 2" maxlength="20">
                    </div>
                </div>

                <div class="form-group" style="display: flex; gap: 0.5rem; align-items: center;">
                    <input type="checkbox" id="deduction-toggle" style="width: auto;">
                    <label for="deduction-toggle" style="margin: 0;">Allow points deduction for incorrect answers</label>
                </div>
                
                <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem;">
                    <button type="button" class="button button-primary" onclick="gameCtrl.startGame()" style="background-color: var(--orange); border-color: var(--orange); color: var(--space-black);">Start Game</button>
                </div>

                <div class="setup-footer">
                     <a href="../labs/game-lab.html" class="button button-secondary" style="font-size: 0.9rem;">Return to Game Lab</a>
                     <label class="setup-sound-toggle">
                         <input type="checkbox" id="setup-sound" ${!audioApp.muted ? "checked" : ""} onchange="audioApp.setMuted(!this.checked)"> Sound On
                     </label>
                     <button type="button" class="button button-secondary" onclick="gameCtrl.openHostKeyFromSetup()" style="font-size: 0.9rem;">Host Answer Sheet</button>
                </div>
            </div>
        </div>
      `;
  }

  updateTeamInputs() {
      const num = parseInt(document.getElementById("num-teams").value, 10);
      const container = document.getElementById("team-inputs-container");
      // preserve existing
      const currentNames = [];
      for(let i=0; i<4; i++) {
          const el = document.getElementById(`tname-${i}`);
          if(el) currentNames[i] = el.value;
      }
      
      let html = "";
      for(let i=0; i<num; i++) {
          html += `
            <div class="form-group">
                <label>Team ${i+1} Name</label>
                <input type="text" id="tname-${i}" value="${currentNames[i] || 'Team ' + (i+1)}" maxlength="20">
            </div>
          `;
      }
      container.innerHTML = html;
  }

  openHostKeyFromSetup() {
      const packId = document.getElementById("pack-select").value;
      if(packId) {
          window.open(`english-jeopardy-host-key.html?id=${packId}`, '_blank', 'noopener,noreferrer');
      }
  }

  async startGame() {
      const packId = document.getElementById("pack-select").value;
      const numTeams = parseInt(document.getElementById("num-teams").value, 10);
      const ded = document.getElementById("deduction-toggle").checked;

      const newTeams = [];
      for(let i=0; i<numTeams; i++) {
          newTeams.push({
              id: `team${i+1}`,
              name: document.getElementById(`tname-${i}`).value.trim() || `Team ${i+1}`,
              score: 0
          });
      }

      try {
          await this.loadData(packId);
          if(!this.validateData(this.data)) {
              alert("The selected pack has invalid data format.");
              return;
          }

          this.state.teams = newTeams;
          this.state.allowDeduction = ded;
          this.state.usedTiles = [];
          this.state.history = [];
          this.state.mode = "board";
          this.saveGameLocally();
          this.renderBoard();
          this.activeTeamIdx = 0; // fallback although not strictly needed for this game style
          this.saveGameLocally();
          this.renderBoard();
      } catch(e) {
          alert("Error loading game data.");
          console.error(e);
      }
  }

  renderBoard() {
      if(!this.data) return;

      const isComplete = this.state.usedTiles.length === 24;
      if(isComplete) {
          this.renderComplete();
          return;
      }

      let catHtml = "";
      this.data.categories.forEach((cat, catIdx) => {
          catHtml += `<div class="jeopardy-category">
              <div class="category-header">${this.escapeHtml(cat.title)}</div>`;
          
          cat.clues.forEach((clue, clueIdx) => {
              const tileId = `${catIdx}-${clueIdx}`;
              const isUsed = this.state.usedTiles.includes(tileId);
              catHtml += `
                  <button type="button" class="jeopardy-tile ${isUsed?'used':''}" 
                          onclick="gameCtrl.openClue(${catIdx}, ${clueIdx})" 
                          ${isUsed ? 'disabled tabindex="-1"' : ''}
                          aria-label="${isUsed ? 'Used tile' : `Category ${this.escapeHtml(cat.title)} for ${clue.value} points`}">
                      ${isUsed ? '' : clue.value}
                  </button>
              `;
          });
          catHtml += `</div>`;
      });

      let scoreHtml = "";
      this.state.teams.forEach((t, i) => {
          scoreHtml += `
              <div class="team-score">
                  <div class="team-score-name">${this.escapeHtml(t.name)}</div>
                  <div class="team-score-value">${t.score}</div>
                  <div class="score-adjust">
                      <button onclick="gameCtrl.adjustScore(${i}, -100)" aria-label="Subtract 100" title="-100">-</button>
                      <button onclick="gameCtrl.adjustScore(${i}, 100)" aria-label="Add 100" title="+100">+</button>
                  </div>
              </div>
          `;
      });

      this.container.innerHTML = `
          <div class="game-screen">
              <div class="jeopardy-board">
                  <div class="jeopardy-header">
                      <h1 class="jeopardy-title">${this.escapeHtml(this.data.title)}</h1>
                      <div class="jeopardy-controls">
                          <button type="button" class="button button-secondary" onclick="gameCtrl.undoLastAction()" ${this.state.history.length === 0 ? 'disabled' : ''} title="Undo (U)">Undo</button>
                          <button type="button" class="button button-secondary" onclick="gameCtrl.confirmResetBoard()">Reset Board</button>
                          <button type="button" class="button button-secondary" onclick="gameCtrl.confirmResetGame()">Reset Game</button>
                          <button type="button" class="button button-secondary" onclick="audioApp.setMuted(!audioApp.muted); gameCtrl.renderBoard();">${audioApp.muted ? 'Sound Off' : 'Sound On'}</button>
                          <a href="english-jeopardy-host-key.html?id=${this.packId}" target="_blank" rel="noopener noreferrer" class="button button-secondary" title="Host Answer Sheet">Key</a>
                          <button type="button" class="button button-secondary" onclick="gameCtrl.toggleFullscreen()" title="Fullscreen (F)">⛶</button>
                      </div>
                  </div>
                  <div class="board-scroll-container">
                      <div class="jeopardy-grid">
                          ${catHtml}
                      </div>
                  </div>
                  <div class="scoreboard">
                      ${scoreHtml}
                  </div>
                  <div style="text-align: center; margin-top: 0.5rem; font-size: 0.8rem; color: var(--text-muted);">
                      Shortcuts: F (Fullscreen) &middot; U (Undo) &middot; Space (Timer) &middot; A (Reveal) &middot; C (Correct) &middot; X (Incorrect) &middot; S (Steal)
                  </div>
              </div>
          </div>
      `;
  }

  toggleFullscreen() {
      if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(err => {});
      } else {
          if (document.exitFullscreen) {
              document.exitFullscreen();
          }
      }
  }

  confirmResetBoard() {
      if(confirm("Reset the board? Team names and scores will be preserved.")) {
          this.clearTimer();
          this.state.subMode = null;
          this.state.currentClue = null;
          this.state.history = [];
          this.saveState("Reset Board");
          this.state.usedTiles = [];
          this.state.isComplete = false;
          this.saveGameLocally();
          this.renderBoard();
          audioApp.playOpenClue();
      }
  }

  playAgain() {
      if(confirm("Play again? This will reset the board and clear all scores.")) {
          this.clearTimer();
          this.state.subMode = null;
          this.state.currentClue = null;
          this.state.history = [];
          this.state.usedTiles = [];
          this.state.isComplete = false;
          this.state.teams.forEach(t => t.score = 0);
          this.saveGameLocally();
          this.renderBoard();
          audioApp.playOpenClue();
      }
  }

  confirmResetGame() {
      if(confirm("Reset the entire game? Scores and progress will be cleared.")) {
          this.clearTimer();
          localStorage.removeItem("jeopardy-save");
          this.state = this.getInitialState();
          this.renderSetup();
      }
  }

  adjustScore(teamIdx, amount) {
      if(this.state.subMode) return;
      this.saveState(`Adjust Score ${this.state.teams[teamIdx].name} by ${amount}`);
      this.state.teams[teamIdx].score += amount;
      this.saveGameLocally();
      this.renderBoard();
      if(amount > 0) audioApp.playCorrect();
      else if(amount < 0) audioApp.playIncorrect();
  }

  // ==== CLUE MODAL ====

  openClue(catIdx, clueIdx) {
      if(this.state.subMode) return;
      const tileId = `${catIdx}-${clueIdx}`;
      if(this.state.usedTiles.includes(tileId)) return;

      audioApp.playOpenClue();

      const cat = this.data.categories[catIdx];
      const clue = cat.clues[clueIdx];
      
      this.clearTimer();
      
      this.state.currentClue = {
          catIdx, clueIdx,
          categoryId: cat.id,
          categoryTitle: cat.title,
          value: clue.value,
          question: clue.question,
          answer: clue.answer,
          answerRevealed: false,
          timerRunning: false,
          timeLeft: this.state.timerLeft,
          selectedTeamIdx: 0
      };
      this.state.subMode = "clue";
      this.startTimer();
      this.announce(`Opened clue in ${cat.title} for ${clue.value}. Question: ${clue.question}`);
  }

  renderClueModal() {
      const clue = this.state.currentClue;
      if(!clue) return;

      const modalOverlay = document.createElement("div");
      modalOverlay.className = "modal-overlay";
      modalOverlay.id = "clue-modal-overlay";

      let teamOpts = "";
      this.state.teams.forEach((t, i) => {
          teamOpts += `<button type="button" class="team-btn ${i === clue.selectedTeamIdx ? 'selected' : ''}" onclick="gameCtrl.selectModalTeam(${i})">${this.escapeHtml(t.name)}</button>`;
      });

      let content = `
        <div class="clue-modal" role="dialog" aria-modal="true" aria-labelledby="modal-clue-title">
            <button class="close-modal-btn" onclick="gameCtrl.closeClueSafely()" aria-label="Close question panel">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <div class="clue-header" id="modal-clue-title">
                <span>${this.escapeHtml(clue.categoryTitle)}</span>
                <span>${clue.value} Points</span>
            </div>
            
            <div class="clue-text">${this.escapeHtml(clue.question)}</div>
            
            ${clue.answerRevealed 
                ? `<div class="answer-text">Answer: ${this.escapeHtml(clue.answer)}</div>` 
                : `<div class="timer ${clue.timeLeft <= 5 && clue.timeLeft > 0 ? 'warning' : ''}" id="clue-timer">${clue.timeLeft}</div>`
            }

            <div class="clue-controls">
                ${!clue.answerRevealed ? `
                    <button type="button" class="button button-primary" onclick="gameCtrl.toggleTimer()">${clue.timerRunning ? 'Pause (Space)' : 'Start Timer (Space)'}</button>
                    <button type="button" class="button button-secondary" onclick="gameCtrl.restartTimer()">Restart Timer</button>
                    <button type="button" class="reveal-answer-btn" onclick="gameCtrl.revealClueAnswer()">Reveal Answer (A)</button>
                ` : clue.offerSteal ? `
                    <div class="scoring-controls">
                        <div style="font-weight: bold; margin-bottom: 1.5rem; color: var(--text-secondary);">Incorrect answer. Offer a steal to another team?</div>
                        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                            <button type="button" class="button button-primary" onclick="gameCtrl.openSteal()" style="background-color: var(--orange); border-color: var(--orange); color: var(--space-black);">Open Steal (S)</button>
                            <button type="button" class="button button-secondary" onclick="gameCtrl.closeIfNoSteal()">Close Question</button>
                            <button type="button" class="button button-secondary" onclick="gameCtrl.resetCurrentQuestion()">Reset Question</button>
                        </div>
                    </div>
                ` : `
                    <div class="scoring-controls">
                        <div style="font-weight: bold; margin-bottom: 0.5rem; color: var(--text-secondary);">${clue.isSteal ? 'Steal opportunity:' : 'Select team to award points:'}</div>
                        <div class="team-selector">${teamOpts}</div>
                        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                            <button type="button" class="button button-primary" style="background: #4AD8C1; border-color: #4AD8C1; color: var(--space-black);" onclick="gameCtrl.markCorrect()">Correct (C)</button>
                            <button type="button" class="button button-secondary" style="color: #ff4d4d; border-color: #ff4d4d;" onclick="gameCtrl.markIncorrect()">Incorrect (X)</button>
                            ${clue.isSteal ? `<button type="button" class="button button-secondary" onclick="gameCtrl.closeIfNoSteal()">Close Question</button>` : ''}
                            <button type="button" class="button button-secondary" onclick="gameCtrl.resetCurrentQuestion()">Reset Question</button>
                        </div>
                    </div>
                `}
            </div>
        </div>
      `;
      modalOverlay.innerHTML = content;

      // Ensure we clean up existing
      const existing = document.getElementById("clue-modal-overlay");
      if(existing) existing.remove();
      this.container.appendChild(modalOverlay);

      // Focus
      if(!clue.answerRevealed) {
          setTimeout(() => {
              const btn = document.querySelector('.reveal-answer-btn');
              if(btn) btn.focus();
          }, 50);
      }
  }

  toggleTimer() {
      const clue = this.state.currentClue;
      if(!clue || clue.answerRevealed) return;
      if(clue.timerRunning) {
          this.stopTimer();
      } else {
          if(clue.timeLeft <= 0) clue.timeLeft = this.state.timerLeft;
          this.startTimer();
      }
  }

  startTimer() {
      const clue = this.state.currentClue;
      if(!clue || clue.answerRevealed) return;
      this.clearTimer(); // Ensure no duplicates
      clue.timerRunning = true;
      this.renderClueModal();
      audioApp.playTick();
      this.timerInterval = setInterval(() => {
          if(!this.state.currentClue) {
              this.clearTimer();
              return;
          }
          this.state.currentClue.timeLeft--;
          if(this.state.currentClue.timeLeft <= 0) {
              this.stopTimer(); // updates modal
              audioApp.playTimeWarning(); // actually time up
          } else if(this.state.currentClue.timeLeft <= 3) {
              audioApp.playTimeWarning();
          } else {
              // regular tick
          }
          const tEl = document.getElementById("clue-timer");
          if(tEl) {
              tEl.textContent = this.state.currentClue.timeLeft;
              if(this.state.currentClue.timeLeft <= 5 && this.state.currentClue.timeLeft > 0) {
                  tEl.classList.add("warning");
              } else {
                  tEl.classList.remove("warning");
              }
          }
      }, 1000);
  }

  clearTimer() {
      if(this.timerInterval) {
          clearInterval(this.timerInterval);
          this.timerInterval = null;
      }
      if(this.state.currentClue) {
          this.state.currentClue.timerRunning = false;
      }
  }

  stopTimer() {
      this.clearTimer();
      this.renderClueModal();
  }

  restartTimer() {
      const clue = this.state.currentClue;
      if(!clue || clue.answerRevealed) return;
      this.clearTimer();
      clue.timeLeft = this.state.timerLeft;
      this.startTimer();
  }

  resetCurrentQuestion() {
      const clue = this.state.currentClue;
      if(!clue) return;
      this.clearTimer();
      clue.timerRunning = false;
      clue.timeLeft = this.state.timerLeft;
      clue.answerRevealed = false;
      clue.isSteal = false;
      clue.offerSteal = false;
      clue.selectedTeamIdx = 0;
      this.startTimer();
  }

  closeClueSafely() {
      // Allow close without scoring, e.g. accidental click
      this.clearTimer();
      this.state.subMode = null;
      this.state.currentClue = null;
      const existing = document.getElementById("clue-modal-overlay");
      if(existing) existing.remove();
      this.renderBoard();
  }

  revealClueAnswer() {
      const clue = this.state.currentClue;
      if(!clue || clue.answerRevealed) return;
      this.clearTimer();
      clue.answerRevealed = true;
      this.renderClueModal();
      audioApp.playReveal?.() || audioApp.playOpenClue(); // Use open sound if reveal isn't defined explicitly
      this.announce(`Answer revealed: ${clue.answer}`);
  }

  selectModalTeam(idx) {
      if(!this.state.currentClue) return;
      this.state.currentClue.selectedTeamIdx = idx;
      this.renderClueModal();
  }

  markCorrect() {
      const clue = this.state.currentClue;
      if(!clue) return;
      
      this.saveState(`Correct answer by ${this.state.teams[clue.selectedTeamIdx].name} for ${clue.value}`);
      
      this.state.teams[clue.selectedTeamIdx].score += clue.value;
      const tileId = `${clue.catIdx}-${clue.clueIdx}`;
      this.state.usedTiles.push(tileId);
      
      audioApp.playCorrect();
      this.closeClueFully();
  }

  markIncorrect() {
      const clue = this.state.currentClue;
      if(!clue) return;
      
      if(this.state.allowDeduction) {
          this.saveState(`Incorrect answer by ${this.state.teams[clue.selectedTeamIdx].name} for -${clue.value}`);
          this.state.teams[clue.selectedTeamIdx].score -= clue.value;
      } else {
          this.saveState(`Incorrect answer by ${this.state.teams[clue.selectedTeamIdx].name}`);
      }
      audioApp.playIncorrect();

      if (clue.isSteal) {
          // If it was already a steal, it fails. Close clue.
          this.announce("Steal failed.");
          const tileId = `${clue.catIdx}-${clue.clueIdx}`;
          this.state.usedTiles.push(tileId);
          this.closeClueFully();
      } else {
          // Normal incorrect. Ask optionally via UI, don't use confirm.
          clue.offerSteal = true;
          this.renderClueModal();
      }
  }

  openSteal() {
      const clue = this.state.currentClue;
      if(!clue || !clue.offerSteal) return;
      clue.offerSteal = false;
      clue.isSteal = true;
      // Auto-select the next team
      clue.selectedTeamIdx = (clue.selectedTeamIdx + 1) % this.state.teams.length;
      this.renderClueModal();
      this.announce(`Steal opportunity open.`);
  }

  closeIfNoSteal() {
      const clue = this.state.currentClue;
      if(!clue) return;
      const tileId = `${clue.catIdx}-${clue.clueIdx}`;
      this.state.usedTiles.push(tileId);
      this.closeClueFully();
  }

  closeClueFully() {
      this.clearTimer();
      this.state.subMode = null;
      this.state.currentClue = null;
      const existing = document.getElementById("clue-modal-overlay");
      if(existing) existing.remove();
      this.saveGameLocally();
      this.renderBoard();
  }

  renderComplete() {
      this.state.mode = "complete";
      
      const sortedTeams = [...this.state.teams].sort((a,b) => b.score - a.score);
      const topScore = sortedTeams[0].score;
      const winners = sortedTeams.filter(t => t.score === topScore);

      let winMsg = "";
      if(winners.length === 1) {
          winMsg = `<div class="winner-highlight">Winner: ${this.escapeHtml(winners[0].name)}!</div>`;
          this.announce(`Game complete. The winner is ${winners[0].name} with ${topScore} points.`);
      } else {
          winMsg = `<div class="winner-highlight">It's a tie between ${winners.map(w=>this.escapeHtml(w.name)).join(' and ')}!</div>`;
          this.announce(`Game complete. It's a tie with ${topScore} points.`);
      }
      audioApp.playCorrect();

      let ranksHtml = "";
      sortedTeams.forEach(t => {
          const isWinner = t.score === topScore;
          ranksHtml += `
            <div class="final-team-score ${isWinner ? 'winner' : ''}">
                <strong style="font-size: 1.5rem;">${this.escapeHtml(t.name)}</strong>
                <div style="font-size: 2.5rem; font-family: var(--font-heading); color: var(--text-primary); margin-top: 0.5rem;">${t.score} points</div>
            </div>
          `;
      });

      this.container.innerHTML = `
        <div class="jeopardy-setup" style="max-width: 800px; text-align: center;">
            <h1 style="font-size: 3rem;">Game Complete</h1>
            ${winMsg}
            
            <div style="display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; margin: 2rem 0;">
                ${ranksHtml}
            </div>

            <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 3rem;">
                <button class="button button-primary" onclick="gameCtrl.confirmResetBoard()" style="background-color: var(--orange); border-color: var(--orange); color: var(--space-black);">Play Again</button>
                <a href="../labs/game-lab.html" class="button button-secondary">Return to Game Lab</a>
            </div>
        </div>
      `;
  }

  announce(msg) {
      const ann = document.getElementById("game-announcer");
      if(ann) ann.textContent = msg;
  }

  escapeHtml(unsafe) {
      if(!unsafe) return "";
      return unsafe
          .toString()
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#039;");
  }
}

const gameCtrl = new EnglishJeopardyController();
document.addEventListener("DOMContentLoaded", () => gameCtrl.init());
