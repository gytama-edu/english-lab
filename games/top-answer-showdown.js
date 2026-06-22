const topAnswerShowdownLoaders = {
  "everyday-english-showdown": "../data/games/everyday-english-showdown.js",
  "top-answer-showdown-system-test": "../data/games/top-answer-showdown-system-test.js",
  "food-and-drinks-showdown": "../data/games/food-and-drinks-showdown.js",
  "lifestyle-and-daily-life-showdown": "../data/games/lifestyle-and-daily-life-showdown.js",
  "school-and-campus-showdown": "../data/games/school-and-campus-showdown.js",
  "travel-and-transportation-showdown": "../data/games/travel-and-transportation-showdown.js",
  "famous-people-and-entertainment-showdown": "../data/games/famous-people-and-entertainment-showdown.js",
  "family-and-home-showdown": "../data/games/family-and-home-showdown.js",
  "shopping-and-money-showdown": "../data/games/shopping-and-money-showdown.js",
  "social-media-and-technology-showdown": "../data/games/social-media-and-technology-showdown.js",
  "sports-and-fitness-showdown": "../data/games/sports-and-fitness-showdown.js",
};

class AudioEngine {
  constructor() {
    this.ctx = null;

    let storedMute = localStorage.getItem("tas_muted");
    this.muted = storedMute === "true";

    let storedVol = localStorage.getItem("tas_volume");
    this.volume = storedVol ? parseFloat(storedVol) : 0.8;
  }

  async ensureReady() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.ctx.state === "suspended") {
      await this.ctx.resume();
    }
  }

  setMuted(muted) {
    this.muted = muted;
    try {
      localStorage.setItem("tas_muted", muted);
    } catch (e) {}
  }

  setVolume(vol) {
    this.volume = vol;
    try {
      localStorage.setItem("tas_volume", vol);
    } catch (e) {}
  }

  async playTone(freqs, type, duration, volMultiplier = 1, fadeOutStart = 0.8) {
    if (this.muted) return;
    try {
      await this.ensureReady();
      const gain = this.ctx.createGain();
      gain.connect(this.ctx.destination);

      const startVol = this.volume * volMultiplier;
      gain.gain.setValueAtTime(0, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(startVol, this.ctx.currentTime + 0.02);
      gain.gain.setValueAtTime(
        startVol,
        this.ctx.currentTime + duration * fadeOutStart,
      );
      gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + duration);

      freqs.forEach((freq) => {
        const osc = this.ctx.createOscillator();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        osc.connect(gain);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      });
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  playCoinFlip() {
    if (this.muted) return;
    try {
      this.ensureReady();
      const dur = 0.5;
      const time = this.ctx.currentTime;

      for (let i = 0; i < 5; i++) {
        // rapid flutter
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "triangle";
        osc.frequency.value = 1200 + Math.random() * 400;
        gain.gain.setValueAtTime(0, time + i * 0.1);
        gain.gain.linearRampToValueAtTime(
          this.volume * 0.2,
          time + i * 0.1 + 0.02,
        );
        gain.gain.linearRampToValueAtTime(0, time + i * 0.1 + 0.08);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(time + i * 0.1);
        osc.stop(time + i * 0.1 + 0.08);
      }
    } catch (e) {}
  }

  playCoinLand() {
    this.playTone([800, 1600], "sine", 0.2, 0.4);
  }
  playReveal() {
    this.playTone([523.25, 659.25, 783.99, 1046.5], "sine", 0.4, 0.5);
  } // C major chord
  playStrike() {
    this.playTone([150, 200], "sawtooth", 0.4, 0.4);
  }
  playStealMode() {
    this.playTone([300, 350], "square", 0.3, 0.3);
  }
  playStealSuccess() {
    this.playTone([440], "sine", 0.1, 0.5);
    setTimeout(
      () => this.playTone([554.37, 659.25, 880], "sine", 0.5, 0.6),
      100,
    );
  }
  playStealFail() {
    this.playTone([300], "sawtooth", 0.3, 0.4);
    setTimeout(() => this.playTone([200], "sawtooth", 0.4, 0.4), 300);
  }
  playRoundAward() {
    this.playTone([440, 554.37, 659.25], "triangle", 0.6, 0.5);
  }
  playFinalWinner() {
    this.playTone([523.25, 659.25, 783.99, 1046.5], "triangle", 1.0, 0.6);
  }
}

const audioApp = new AudioEngine();

class GameController {
  constructor() {
    this.container = document.getElementById("game-container");
    this.data = null;
    this.state = {
      mode: "loading", // loading, unavailable, setup, gameplay, final
      teamA: { name: "Team A", score: 0, roundsWon: 0 },
      teamB: { name: "Team B", score: 0, roundsWon: 0 },
      currentRoundIndex: 0,
      roundBank: 0,
      strikes: 0,
      tossWinnerTeamId: null,
      originalPlayingTeamId: null,
      potentialStealingTeamId: null,
      awardToTeamId: null,
      subMode: null, // 'intro', 'toss', 'toss-selection', 'play-pass', 'active', 'steal', 'summary'
      revealedAnswers: new Set(),
      history: [], // for undo
      isBoardHidden: false,
      roundResults: {} // Track awarded points per round to avoid double subtraction
    };

    this.bindEvents();
    this.bindKeyboardShortcuts();
    this.init();
  }

  bindEvents() {
    const root = document.body;
    root.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-action]');
        if (!btn) return;
        const action = btn.getAttribute('data-action');
        
        if (action === 'reset-round') {
            this.showConfirmModal("Reset this round? Current reveals, strikes, bank points, toss decisions, and steal progress will be cleared.", () => this.resetCurrentRound());
        } else if (action === 'reset-game') {
            this.showConfirmModal("Reset the entire game? All scores, round results, revealed answers, strikes, and progress will be cleared.", () => this.resetEntireGame());
        } else if (action === 'toggle-sound') {
            audioApp.setMuted(!audioApp.muted);
            this.updateSoundUI();
            if (!audioApp.muted) audioApp.ensureReady();
        } else if (action === 'cancel-confirm') {
            this.closeConfirmModal(false);
        } else if (action === 'confirm-action') {
            if (this.pendingConfirmAction) this.pendingConfirmAction();
            this.closeConfirmModal(true);
        } else if (action === 'steal-failed') {
            this.stealFailed();
        }
    });

    root.addEventListener('input', (e) => {
        if (e.target.matches('input[data-action="volume-change"]')) {
            audioApp.setVolume(e.target.value);
            this.updateSoundUI();
        }
    });
  }

  bindKeyboardShortcuts() {
    document.addEventListener("keydown", (e) => {
      if (this.state.mode !== "gameplay") return;

      // Ignore if focused on input/textarea
      if (document.querySelector(".confirmation-dialog-active")) return; // hypothetical

      const target = e.target;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") return;
      if (e.ctrlKey || e.altKey || e.metaKey) return;
      if (e.repeat) return;

      const key = e.key.toLowerCase();

      if (key >= "1" && key <= "8") {
        const num = parseInt(key, 10);
        const round = this.data.rounds[this.state.currentRoundIndex];
        if (round) {
          const ans = round.answers.find((a) => a.rank === num);
          if (ans) {
            this.manualReveal(ans.id);
          }
        }
      } else if (key === " " || key === "x") {
        if (key === " ") {
          e.preventDefault();
        }
        this.addStrike();
      } else if (key === "u") {
        this.undoLastAction();
      } else if (key === "f") {
        if (this.state.subMode === "steal") {
          this.stealFailed();
        }
      }
    });
  }

  async init() {
    this.renderLoading();

    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get("id");
    this.gameId = gameId;

    if (!gameId || !topAnswerShowdownLoaders[gameId]) {
      this.state.mode = "unavailable";
      this.renderUnavailable("Invalid or missing game ID.");
      return;
    }

    try {
      await this.loadGameData(topAnswerShowdownLoaders[gameId], gameId);
      if (this.validateData(this.data)) {
        this.state.mode = "setup";
        this.renderSetup();
      } else {
        this.state.mode = "unavailable";
        this.renderUnavailable("Game data is invalid.");
      }
    } catch (error) {
      console.error(error);
      this.state.mode = "unavailable";
      this.renderUnavailable("Failed to load game data.");
    }
  }

  loadGameData(scriptUrl, gameId) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = scriptUrl;
      script.onload = () => {
        if (window.GAME_DATA && window.GAME_DATA[gameId]) {
          this.data = window.GAME_DATA[gameId];
          resolve();
        } else {
          reject(new Error("Data not found in GAME_DATA"));
        }
      };
      script.onerror = () => reject(new Error("Script failed to load"));
      document.head.appendChild(script);
    });
  }

  validateData(data) {
    if (!data || !data.id || !data.title || !data.rounds) return false;
    if (data.rounds.length !== 8) return false;

    const roundIds = new Set();
    const answerIds = new Set();

    for (const round of data.rounds) {
      if (
        !round.question ||
        round.multiplier <= 0 ||
        !round.answers ||
        round.answers.length < 1 ||
        round.answers.length > 8
      )
        return false;
      if (roundIds.has(round.id)) return false;
      roundIds.add(round.id);

      const ranks = new Set();
      for (const ans of round.answers) {
        if (answerIds.has(ans.id)) return false;
        answerIds.add(ans.id);
        if (ranks.has(ans.rank)) return false;
        if (ans.rank < 1) return false;
        ranks.add(ans.rank);

        if (ans.points <= 0 || !ans.text) return false;
      }
    }
    if (!data.completion) return false;
    return true;
  }

  normalizeString(str) {
    return str
      .toLowerCase()
      .trim()
      .replace(/\s+/g, " ")
      .replace(/[.,!?]/g, "")
      .replace(/['’`‘]/g, "'")
      .replace(/&/g, "and");
  }

  saveState(actionDesc) {
    if (this.state.history.length > 20) this.state.history.shift();
    this.state.history.push({
      actionDesc,
      snapshot: JSON.parse(
        JSON.stringify({
          teamA: this.state.teamA,
          teamB: this.state.teamB,
          currentRoundIndex: this.state.currentRoundIndex,
          roundBank: this.state.roundBank,
          bankAwarded: this.state.bankAwarded,
          strikes: this.state.strikes,
          tossWinnerTeamId: this.state.tossWinnerTeamId,
          originalPlayingTeamId: this.state.originalPlayingTeamId,
          potentialStealingTeamId: this.state.potentialStealingTeamId,
          awardToTeamId: this.state.awardToTeamId,
          subMode: this.state.subMode,
          revealedAnswers: Array.from(this.state.revealedAnswers),
          isBoardHidden: this.state.isBoardHidden,
        }),
      ),
    });
  }

  undoLastAction() {
    if (this.state.history.length === 0) return;
    const last = this.state.history.pop();
    const snap = last.snapshot;
    this.state.teamA = snap.teamA;
    this.state.teamB = snap.teamB;
    this.state.currentRoundIndex = snap.currentRoundIndex;
    this.state.roundBank = snap.roundBank;
    this.state.bankAwarded = snap.bankAwarded || false;
    this.state.strikes = snap.strikes;
    this.state.tossWinnerTeamId = snap.tossWinnerTeamId;
    this.state.originalPlayingTeamId = snap.originalPlayingTeamId;
    this.state.potentialStealingTeamId = snap.potentialStealingTeamId;
    this.state.awardToTeamId = snap.awardToTeamId;
    this.state.subMode = snap.subMode;
    this.state.revealedAnswers = new Set(snap.revealedAnswers);
    this.state.isBoardHidden = snap.isBoardHidden || false;
    
    if (!this.state.bankAwarded) {
      delete this.state.roundResults[this.state.currentRoundIndex];
    }
    
    this.renderGameplay();
  }

  // ==========================================
  // Rendering
  // ==========================================

  renderLoading() {
    this.container.innerHTML = `
            <div class="state-message">
                <div class="spinner"></div>
                <h2>Loading Game Data...</h2>
            </div>
        `;
  }

  renderUnavailable(msg) {
    this.container.innerHTML = `
            <div class="state-message">
                <h2>Game Unavailable</h2>
                <p style="color: var(--text-secondary)">${msg}</p>
                <a href="../labs/game-lab.html" class="button button-primary" style="margin-top: 2rem; display: inline-flex;">Return to Game Lab</a>
            </div>
        `;
  }

  renderSetup() {
    this.container.innerHTML = `
            <section class="showdown-setup">
                <header class="showdown-setup__header">
                    <div class="showdown-setup__identity">
                        <h1>Top Answer Showdown</h1>
                        <h2>${this.escapeHtml(this.data.title)}</h2>
                    </div>
                    <div class="showdown-audio-control">
                        <button type="button" class="showdown-sound-toggle button button-secondary" data-action="toggle-sound" aria-pressed="${!audioApp.muted}">
                            ${audioApp.muted ? 'Sound Off' : 'Sound On'}
                        </button>
                        <label class="sound-vol-label">
                            Volume
                            <input type="range" class="sound-vol-slider" min="0" max="1" step="0.05" value="${audioApp.volume}" data-action="volume-change">
                            <span class="sound-vol-pct">${Math.round(audioApp.volume * 100)}%</span>
                        </label>
                    </div>
                </header>
                
                <div class="showdown-setup__content">
                    <div class="showdown-setup__introduction">
                        <p>Divide the class into two teams. Students call out answers, and the teacher reveals the matching numbered tile.</p>
                        <p class="summary-info"><strong>${this.data.rounds.length} rounds &middot; Two teams &middot; Teacher-hosted</strong></p>
                    </div>
                    <aside class="showdown-setup__information">
                        <p><strong>Note:</strong> Board values are authored game points for this classroom activity. They are not survey statistics.</p>
                    </aside>
                </div>
                
                <div class="showdown-team-fields">
                    <div class="input-group">
                        <label for="team-a-name">Team A Name</label>
                        <input type="text" id="team-a-name" value="${this.escapeHtml(this.state.teamA.name)}" maxlength="25">
                    </div>
                    <div class="input-group">
                        <label for="team-b-name">Team B Name</label>
                        <input type="text" id="team-b-name" value="${this.escapeHtml(this.state.teamB.name)}" maxlength="25">
                    </div>
                </div>
                
                <div class="showdown-setup__actions">
                    <a href="top-answer-showdown-host-key.html?id=${this.gameId}" target="_blank" rel="noopener noreferrer" class="button button-secondary" style="text-decoration: none;">
                        Host Answer Sheet <span style="font-size: 0.8rem; opacity: 0.8; margin-left: 0.25rem;">(Opens in a new tab)</span>
                    </a>
                    <button type="button" id="start-game-btn" class="button button-primary start-btn">Start Game</button>
                </div>
            </section>
        `;

    document.getElementById("start-game-btn").addEventListener("click", () => {
      audioApp.ensureReady();
      let aName = document.getElementById("team-a-name").value.trim();
      let bName = document.getElementById("team-b-name").value.trim();
      this.state.teamA.name = aName || "Team A";
      this.state.teamB.name = bName || "Team B";
      this.state.mode = "gameplay";
      this.startRound(0);
    });

    // Escape to close modal
    document.addEventListener("keydown", this.handleGlobalKeyDown.bind(this));
  }

  handleGlobalKeyDown(e) {
    if (e.key === "Escape") {
      this.closeConfirmModal();
    }
  }

  startRound(index) {
    this.state.currentRoundIndex = index;
    this.state.roundBank = 0;
    this.state.bankAwarded = false;
    this.state.strikes = 0;
    this.state.tossWinnerTeamId = null;
    this.state.originalPlayingTeamId = null;
    this.state.potentialStealingTeamId = null;
    this.state.awardToTeamId = null;
    this.state.subMode = "intro";
    this.state.revealedAnswers.clear();
    this.state.history = []; // Clear history on new round start
    this.state.isBoardHidden = false;
    this.renderGameplay();
  }

  renderGameplay() {
    const round = this.data.rounds[this.state.currentRoundIndex];
    const playingTeam =
      this.state.subMode === "steal"
        ? this.state.potentialStealingTeamId
        : this.state.originalPlayingTeamId;
    const playingName = playingTeam ? this.state[playingTeam].name : "None";

    let html = `
            <div class="gameplay-layout">
                <div class="team-panels-wrapper">
                    <div class="team-panel ${playingTeam === "teamA" ? "active-team" : ""}" id="panel-team-a">
                        <div class="team-name">${this.escapeHtml(this.state.teamA.name)}</div>
                        <div class="team-score">${this.state.teamA.score}</div>
                        
                        <div class="manual-score-adjust">
                            <button class="score-btn" onclick="gameCtrl.adjustScore('teamA', 5)" aria-label="Add 5 to Team A">+5</button>
                            <button class="score-btn" onclick="gameCtrl.adjustScore('teamA', -5)" aria-label="Subtract 5 from Team A">-5</button>
                            <button class="score-btn" onclick="gameCtrl.adjustScore('teamA', 10)" aria-label="Add 10 to Team A">+10</button>
                            <button class="score-btn" onclick="gameCtrl.adjustScore('teamA', -10)" aria-label="Subtract 10 from Team A">-10</button>
                        </div>
                    </div>
                    <div class="team-panel ${playingTeam === "teamB" ? "active-team" : ""}" id="panel-team-b">
                        <div class="team-name">${this.escapeHtml(this.state.teamB.name)}</div>
                        <div class="team-score">${this.state.teamB.score}</div>
                        
                        <div class="manual-score-adjust">
                            <button class="score-btn" onclick="gameCtrl.adjustScore('teamB', 5)" aria-label="Add 5 to Team B">+5</button>
                            <button class="score-btn" onclick="gameCtrl.adjustScore('teamB', -5)" aria-label="Subtract 5 from Team B">-5</button>
                            <button class="score-btn" onclick="gameCtrl.adjustScore('teamB', 10)" aria-label="Add 10 to Team B">+10</button>
                            <button class="score-btn" onclick="gameCtrl.adjustScore('teamB', -10)" aria-label="Subtract 10 from Team B">-10</button>
                        </div>
                    </div>
                </div>

                <div class="main-board-area">
                    <div class="question-panel">
                        ${["active", "steal", "summary"].includes(this.state.subMode) 
                            ? `<h3 tabindex="-1">${this.escapeHtml(round.question)}</h3>` 
                            : `<div class="concealed-question-panel">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-bottom: 0.5rem; opacity: 0.8;"><path d="M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2Z"></path><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                <h3 tabindex="-1">QUESTION LOCKED</h3>
                                <p style="margin: 0.5rem 0 0; font-size: 0.95rem; opacity: 0.9;">The round topic will be revealed after Play or Pass is decided.</p>
                                <span class="sr-only">Question locked. The round question will be revealed after the team chooses Play or Pass.</span>
                               </div>`
                        }
                        <div class="round-info" style="margin-top: 0.5rem; text-transform: none; font-weight: normal; font-size: 0.95rem; color: var(--text-secondary);">
                            <span style="color: var(--orange); font-weight: 600; text-transform: uppercase;">Round ${this.state.currentRoundIndex + 1} of ${this.data.rounds.length}</span> &bull; 
                            ${round.answers.length} hidden answers &bull; 
                            &times;${round.multiplier}
                            ${["active", "steal", "summary"].includes(this.state.subMode) ? ` &bull; Playing: <strong>${this.escapeHtml(playingName)}</strong> &bull; Bank: <strong style="color: #4AD8C1;">${this.state.roundBank}</strong> &bull; Strikes: <strong style="color: #ff4d4d;">${this.state.strikes}/3</strong>` : ""}
                        </div>
                    </div>

                    <div class="answer-board">
                        ${round.answers.map((ans) => this.renderAnswerTile(ans)).join("")}
                    </div>

                    <div class="host-controls" id="host-controls-area">
                        ${this.renderHostControls()}
                    </div>
                </div>
            </div>
            
            <button class="presentation-toggle-btn" style="right: 20px;" onclick="document.body.classList.toggle('presentation-mode')" aria-label="Toggle Presentation Mode" title="Presentation Mode">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
            </button>
            <button class="presentation-toggle-btn host-mode-btn" style="right: 80px; display: none;" onclick="document.getElementById('host-controls-area').classList.toggle('show-controls')" aria-label="Toggle Host Controls" title="Host Controls">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
            </button>
        `;

    this.container.innerHTML = html;
    this.updateSoundUI();
  }

  renderAnswerTile(ans) {
    const isRevealed = this.state.revealedAnswers.has(ans.id);
    const showAnswer = isRevealed && !this.state.isBoardHidden;

    if (showAnswer) {
      return `
                <div class="answer-tile revealed" tabindex="0">
                    <div class="answer-text">${this.escapeHtml(ans.text)}</div>
                    <div class="answer-points">${ans.points}</div>
                </div>
            `;
    } else {
      if (this.state.subMode === "summary") {
        return `
                <div class="answer-tile" tabindex="0">
                    <div class="answer-number" style="font-size: 1rem; font-weight: normal;">Answer ${ans.rank} &mdash; Not revealed</div>
                </div>
        `;
      }
      return `
                <div class="answer-tile" tabindex="0" onclick="gameCtrl.manualReveal('${ans.id}')" aria-label="Reveal hidden answer number ${ans.rank}">
                    <div class="answer-number">${ans.rank}</div>
                </div>
            `;
    }
  }

  renderHostControls() {
    const round = this.data.rounds[this.state.currentRoundIndex];

    let controls = `
            <div class="host-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <div class="host-title" style="font-weight: 600; color: var(--text-primary);">Host Controls: ${this.state.subMode.toUpperCase()}</div>
                <div style="display: flex; gap: 0.5rem; align-items: center;">
                    <a href="top-answer-showdown-host-key.html?id=${this.gameId}" target="_blank" rel="noopener noreferrer" class="button button-secondary" style="padding: 0.25rem 0.5rem; font-size: 0.8rem; text-decoration: none;">
                        Host Answer Sheet <span style="font-size: 0.75rem; opacity: 0.8; margin-left: 0.25rem;">(Opens in a new tab)</span>
                    </a>
                    <div class="showdown-audio-control" style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1); padding: 0.25rem 0.5rem; border-radius: 8px; display: flex; align-items: center; gap: 0.75rem;">
                        <button type="button" class="showdown-sound-toggle button button-secondary" data-action="toggle-sound" aria-pressed="${!audioApp.muted}" style="padding: 0.15rem 0.5rem; font-size: 0.75rem;">
                            ${audioApp.muted ? 'Sound Off' : 'Sound On'}
                        </button>
                        <label class="sound-vol-label" style="font-size: 0.75rem;">
                            Vol
                            <input type="range" class="sound-vol-slider" min="0" max="1" step="0.05" value="${audioApp.volume}" data-action="volume-change" style="width: 60px;">
                        </label>
                    </div>
                </div>
            </div>
            
            <div class="control-section" style="margin-bottom: 1rem;">
        `;

    if (this.state.subMode === "intro") {
      controls += `
                <p style="margin-bottom: 1rem;">Begin the round with a coin toss to determine who plays first.</p>
                <div class="action-buttons">
                    <button class="button button-primary" onclick="gameCtrl.startCoinToss()">Begin Coin Toss</button>
                </div>
            `;
    } else if (this.state.subMode === "toss") {
      controls += `
                <div style="text-align: center; padding: 1rem;">
                    <div class="showdown-coin-container" aria-hidden="true">
                        <div id="coin" class="showdown-coin">
                            <div class="showdown-coin__face showdown-coin__face--heads">
                                <img src="../assets/images/games/showdown-coin-heads.svg" alt="Heads">
                            </div>
                            <div class="showdown-coin__face showdown-coin__face--tails">
                                <img src="../assets/images/games/showdown-coin-tails.svg" alt="Tails">
                            </div>
                        </div>
                    </div>
                    <div id="coin-result-text" style="height: 1.5rem; font-weight: bold; margin-bottom: 0.5rem; color: var(--text-secondary);"></div>
                    <button id="flip-btn" class="button button-primary" onclick="gameCtrl.flipCoin()">Flip Coin</button>
                    <button class="button button-secondary" onclick="gameCtrl.skipToss()">Skip Toss</button>
                </div>
            `;
    } else if (this.state.subMode === "toss-selection") {
      controls += `
                <p style="margin-bottom: 1rem;">Which team won the toss?</p>
                <div class="action-buttons">
                    <button class="button button-secondary" onclick="gameCtrl.setTossWinner('teamA')">${this.escapeHtml(this.state.teamA.name)}</button>
                    <button class="button button-secondary" onclick="gameCtrl.setTossWinner('teamB')">${this.escapeHtml(this.state.teamB.name)}</button>
                </div>
            `;
    } else if (this.state.subMode === "play-pass") {
      const tossWinner =
        this.state.tossWinnerTeamId === "teamA"
          ? this.state.teamA.name
          : this.state.teamB.name;
      controls += `
                <p style="margin-bottom: 1rem;"><strong>${this.escapeHtml(tossWinner)}</strong> won the toss. Do they want to Play or Pass?</p>
                <div class="action-buttons">
                    <button class="button button-primary" onclick="gameCtrl.choosePlayPass('play')">Play</button>
                    <button class="button button-secondary" onclick="gameCtrl.choosePlayPass('pass')">Pass</button>
                </div>
            `;
    } else if (
      this.state.subMode === "active" ||
      this.state.subMode === "steal"
    ) {
      const isSteal = this.state.subMode === "steal";

      if (isSteal) {
        const stealingTeamName =
          this.state.potentialStealingTeamId === "teamA"
            ? this.state.teamA.name
            : this.state.teamB.name;
        controls += `<div style="background: var(--surface-elevated); padding: 0.75rem; border-left: 4px solid var(--orange); margin-bottom: 1rem;"><strong style="color: var(--orange);">Steal Mode</strong><br>${this.escapeHtml(stealingTeamName)} has one chance to reveal any remaining answer and take the round.</div>`;
      }

      controls += `
                <div style="display: flex; flex-wrap: wrap; gap: 1rem; align-items: center; margin-bottom: 1rem; font-size: 0.95rem;">
                    <div>Award To: 
                        <select id="award-to-select" onchange="gameCtrl.setAwardTo(this.value)" style="background: var(--surface); color: var(--text-primary); border: 1px solid var(--border); padding: 0.25rem; border-radius: 4px;">
                            <option value="teamA" ${this.state.awardToTeamId === "teamA" ? "selected" : ""}>${this.escapeHtml(this.state.teamA.name)}</option>
                            <option value="teamB" ${this.state.awardToTeamId === "teamB" ? "selected" : ""}>${this.escapeHtml(this.state.teamB.name)}</option>
                        </select>
                    </div>
                    <div>Round Bank: <strong>${this.state.roundBank}</strong></div>
                    <div>Strikes: <strong>${this.state.strikes} / 3</strong></div>
                    <button class="button button-secondary" style="padding: 0.25rem 0.75rem; font-size: 0.85rem;" onclick="gameCtrl.undoLastAction()" ${this.state.history.length === 0 ? "disabled" : ""}>Undo</button>
                </div>
                
                <div class="action-buttons">
                    <button class="button button-secondary" style="color: #ff4d4d; border-color: #ff4d4d;" onclick="gameCtrl.addStrike()">Strike (Space/X)</button>
                    ${isSteal ? `<button type="button" class="button button-primary" style="background-color: #ff4d4d; border-color: #ff4d4d;" data-action="steal-failed">Steal Failed</button>` : ""}
                    <button class="button button-secondary" onclick="gameCtrl.revealAll()">Reveal All (No points)</button>
                    
                    ${
                      this.state.isBoardHidden
                        ? `<button class="button button-secondary" onclick="gameCtrl.toggleBoardHide()">Restore Board</button>`
                        : `<button class="button button-secondary" onclick="gameCtrl.toggleBoardHide()">Cover Board</button>`
                    }
                </div>
            `;
    } else if (this.state.subMode === "summary") {
      controls += `
                <div style="margin-bottom: 1rem;">
                  <p style="margin-bottom: 0.25rem;">Round won by <strong>${this.state.awardToTeamId ? this.escapeHtml(this.state[this.state.awardToTeamId].name) : "None"}</strong></p>
                  <p style="margin-bottom: 0.25rem; font-size: 0.95rem; color: var(--text-secondary);">Round bank: ${this.state.roundBank} points</p>
                  <p style="margin-bottom: 0.25rem; font-size: 0.95rem; color: var(--text-secondary);">Revealed answers: ${this.state.revealedAnswers.size} of ${round.answers.length}</p>
                  <p style="margin-bottom: 0; font-size: 0.95rem; color: var(--text-secondary);">Hidden answers remaining: ${round.answers.length - this.state.revealedAnswers.size}</p>
                </div>
                <div class="action-buttons">
                    ${
                      this.state.currentRoundIndex < this.data.rounds.length - 1
                        ? `<button class="button button-primary" onclick="gameCtrl.startRound(${this.state.currentRoundIndex + 1})">Next Round</button>`
                        : `<button class="button button-primary" onclick="gameCtrl.showFinalResults()">View Final Scores</button>`
                    }
                    <button class="button button-secondary" onclick="gameCtrl.undoLastAction()" ${this.state.history.length === 0 ? "disabled" : ""}>Undo</button>
                </div>
            `;
    }

    controls += `</div>`;

    controls += `
            <div class="action-buttons" style="border-top: 1px solid var(--border); padding-top: 1rem; margin-top: 1rem;">
                <button type="button" class="button button-secondary" style="font-size: 0.85rem; padding: 0.5rem 1rem;" data-action="reset-round">Reset Round</button>
                <button type="button" class="button button-secondary" style="font-size: 0.85rem; padding: 0.5rem 1rem;" data-action="reset-game">Reset Game</button>
                <div style="margin-left: auto; font-size: 0.8rem; color: var(--text-muted);">Hotkeys: 1–8 reveal &middot; Space/X strike &middot; U undo &middot; F failed steal</div>
            </div>
        `;

    return controls;
  }

  // ==========================================
  // Actions
  // ==========================================

  revealAnswer(ansId, awardPoints) {
    if (this.state.revealedAnswers.has(ansId)) return;
    this.state.revealedAnswers.add(ansId);

    if (awardPoints) {
      const round = this.data.rounds[this.state.currentRoundIndex];
      const ans = round.answers.find((a) => a.id === ansId);
      this.state.roundBank += ans.points * round.multiplier;
    }

    this.renderGameplay();
  }

  startCoinToss() {
    this.saveState("Start Coin Toss");
    this.state.subMode = "toss";
    this.renderGameplay();
  }

  flipCoin() {
    const coin = document.getElementById("coin");
    const flipBtn = document.getElementById("flip-btn");
    const resultText = document.getElementById("coin-result-text");

    if (!coin || !flipBtn) return;

    flipBtn.disabled = true;
    const result = Math.random() < 0.5 ? "Heads" : "Tails";
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    audioApp.playCoinFlip();

    if (reducedMotion) {
      // direct swap
      coin.style.transform =
        result === "Tails" ? "rotateY(180deg)" : "rotateY(0deg)";
      resultText.textContent = `Coin result: ${result}`;
      this.announce(`Coin flip result: ${result}`);
      audioApp.playCoinLand();

      setTimeout(() => {
        this.saveState("Coin Flipped");
        this.state.subMode = "toss-selection";
        this.renderGameplay();
      }, 1500);
    } else {
      coin.className =
        "showdown-coin " + (result === "Tails" ? "flipping-tails" : "flipping");

      setTimeout(() => {
        resultText.textContent = `Coin result: ${result}`;
        this.announce(`Coin flip result: ${result}`);
        audioApp.playCoinLand();

        setTimeout(() => {
          this.saveState("Coin Flipped");
          this.state.subMode = "toss-selection";
          this.renderGameplay();
        }, 1500);
      }, 1000); // Wait for the 1s animation to finish
    }
  }

  skipToss() {
    this.saveState("Skip Toss");
    this.state.subMode = "toss-selection";
    this.renderGameplay();
  }

  setTossWinner(teamId) {
    this.saveState("Set Toss Winner");
    this.state.tossWinnerTeamId = teamId;
    this.state.subMode = "play-pass";
    this.renderGameplay();
  }

  choosePlayPass(choice) {
    this.saveState("Play/Pass Decision");
    if (choice === "play") {
      this.state.originalPlayingTeamId = this.state.tossWinnerTeamId;
      this.state.potentialStealingTeamId =
        this.state.tossWinnerTeamId === "teamA" ? "teamB" : "teamA";
    } else {
      this.state.originalPlayingTeamId =
        this.state.tossWinnerTeamId === "teamA" ? "teamB" : "teamA";
      this.state.potentialStealingTeamId = this.state.tossWinnerTeamId;
    }
    this.state.awardToTeamId = this.state.originalPlayingTeamId;
    this.state.subMode = "active";
    this.renderGameplay();

    const round = this.data.rounds[this.state.currentRoundIndex];
    setTimeout(() => {
        this.announce(`The round question is now revealed: ${round.question}`);
        const qPanel = document.querySelector('.question-panel h3');
        if (qPanel) qPanel.focus();
    }, 100);
  }

  setAwardTo(teamId) {
    this.saveState("Change Award To");
    this.state.awardToTeamId = teamId;
    this.renderGameplay();
  }

  manualReveal(ansId) {
    if (
      this.state.subMode !== "active" &&
      this.state.subMode !== "steal" &&
      this.state.subMode !== "summary"
    )
      return;
    if (this.state.revealedAnswers.has(ansId)) return;

    this.saveState("Reveal Answer");

    const round = this.data.rounds[this.state.currentRoundIndex];
    const ans = round.answers.find((a) => a.id === ansId);

    this.revealAnswer(ansId, true);
    audioApp.playReveal();

    if (ans) {
      this.announce(
        `Answer number ${ans.rank} revealed: ${ans.text}, ${ans.points * round.multiplier} points.`,
      );
    }

    if (this.state.subMode === "steal") {
      audioApp.playStealSuccess();
      this.announce(`Successful steal!`);
      this.state.awardToTeamId = this.state.potentialStealingTeamId;
      this.awardRoundBank(this.state.awardToTeamId);
      this.state.subMode = "summary";
      this.renderGameplay();
      return;
    }

    this.checkBoardClear();
  }

  stealFailed() {
    if (this.state.subMode !== "steal") return;
    this.saveState("Steal Failed");
    audioApp.playStealFail();
    this.announce(`Steal failed.`);

    this.state.awardToTeamId = this.state.originalPlayingTeamId;
    this.awardRoundBank(this.state.awardToTeamId);

    this.state.subMode = "summary";
    this.renderGameplay();
  }

  addStrike() {
    if (this.state.subMode !== "active") return;
    this.saveState("Add Strike");
    this.state.strikes++;
    audioApp.playStrike();
    this.announce(`Strike ${this.state.strikes} of 3.`);

    if (this.state.strikes >= 3) {
      this.state.subMode = "steal";
      const stealingName =
        this.state.potentialStealingTeamId === "teamA"
          ? this.state.teamA.name
          : this.state.teamB.name;
      setTimeout(() => audioApp.playStealMode(), 500);
      this.announce(`Three strikes. Steal opportunity for ${stealingName}`);
    }

    this.renderGameplay();
  }

  checkBoardClear() {
    const round = this.data.rounds[this.state.currentRoundIndex];
    if (this.state.revealedAnswers.size === round.answers.length) {
      if (this.state.subMode !== "summary") {
        this.saveState("Clear Board");
        this.awardRoundBank(this.state.awardToTeamId);
        this.state.subMode = "summary";
        this.announce(`All answers revealed. Round over.`);
        this.renderGameplay();
      }
    }
  }

  revealAll() {
    if (this.state.subMode === "steal") {
      if (
        !confirm(
          "This will reveal all remaining answers and award no points. Are you sure?",
        )
      )
        return;
    }
    this.saveState("Reveal All");
    const round = this.data.rounds[this.state.currentRoundIndex];
    for (const ans of round.answers) {
      this.state.revealedAnswers.add(ans.id);
    }
    this.renderGameplay();
  }

  toggleBoardHide() {
    this.saveState(this.state.isBoardHidden ? "Restore Board" : "Cover Board");
    this.state.isBoardHidden = !this.state.isBoardHidden;
    this.renderGameplay();
  }

  revealRemaining() {
    this.revealAll();
  }

  awardRoundBank(teamId, manual = false) {
    if (this.state.bankAwarded) return;

    if (manual) this.saveState("Award Round Bank");

    if (teamId === "teamA") {
      this.state.teamA.score += this.state.roundBank;
      this.state.teamA.roundsWon++;
    } else if (teamId === "teamB") {
      this.state.teamB.score += this.state.roundBank;
      this.state.teamB.roundsWon++;
    }

    this.state.bankAwarded = true;
    this.state.roundResults[this.state.currentRoundIndex] = {
      teamId: teamId,
      amount: this.state.roundBank
    };

    if (this.state.roundBank > 0) audioApp.playRoundAward();

    if (manual) this.renderGameplay();
  }

  resetCurrentRound() {
    // Reverse only the officially awarded bank for this round exactly once
    const priorAward = this.state.roundResults[this.state.currentRoundIndex];
    if (priorAward && priorAward.teamId) {
      let t = priorAward.teamId;
      this.state[t].score = Math.max(0, this.state[t].score - priorAward.amount);
      this.state[t].roundsWon = Math.max(0, this.state[t].roundsWon - 1);
      delete this.state.roundResults[this.state.currentRoundIndex];
    } else if (this.state.bankAwarded && this.state.awardToTeamId) {
      // Fallback if not tracked in roundResults for some reason but state flags it
      let t = this.state.awardToTeamId;
      this.state[t].score = Math.max(0, this.state[t].score - this.state.roundBank);
      this.state[t].roundsWon = Math.max(0, this.state[t].roundsWon - 1);
    }

    this.state.roundBank = 0;
    this.state.bankAwarded = false;
    this.state.strikes = 0;
    this.state.tossWinnerTeamId = null;
    this.state.originalPlayingTeamId = null;
    this.state.potentialStealingTeamId = null;
    this.state.awardToTeamId = null;
    this.state.subMode = "intro";
    this.state.revealedAnswers.clear();
    this.state.history = [];
    this.state.isBoardHidden = false;

    this.closeConfirmModal();
    this.renderGameplay();
    
    setTimeout(() => {
        const tossBtn = document.querySelector('button[onclick="gameCtrl.startCoinToss()"]');
        if (tossBtn) tossBtn.focus();
    }, 10);
  }

  resetEntireGame() {
    this.state.teamA.score = 0;
    this.state.teamA.roundsWon = 0;
    this.state.teamB.score = 0;
    this.state.teamB.roundsWon = 0;
    this.state.history = [];
    this.state.mode = "setup";
    this.state.roundResults = {};

    this.state.currentRoundIndex = 0;
    this.state.roundBank = 0;
    this.state.bankAwarded = false;
    this.state.strikes = 0;
    this.state.tossWinnerTeamId = null;
    this.state.originalPlayingTeamId = null;
    this.state.potentialStealingTeamId = null;
    this.state.awardToTeamId = null;
    this.state.subMode = "intro";
    this.state.revealedAnswers.clear();
    this.state.isBoardHidden = false;

    this.closeConfirmModal();
    document.body.classList.remove('presentation-mode');
    this.renderSetup();
  }

  adjustScore(teamId, amount) {
    this.saveState("Manual Score Adjustment");
    if (teamId === "teamA") {
      this.state.teamA.score = Math.max(0, this.state.teamA.score + amount);
    } else {
      this.state.teamB.score = Math.max(0, this.state.teamB.score + amount);
    }
    this.renderGameplay();
  }

  showFinalResults() {
    this.state.mode = "final";

    let winMsg = "";
    if (this.state.teamA.score > this.state.teamB.score) {
      winMsg = `Congratulations, ${this.escapeHtml(this.state.teamA.name)}! You won the showdown with ${this.state.teamA.score} points.`;
      this.announce(`Game over. ${this.state.teamA.name} wins!`);
    } else if (this.state.teamB.score > this.state.teamA.score) {
      winMsg = `Congratulations, ${this.escapeHtml(this.state.teamB.name)}! You won the showdown with ${this.state.teamB.score} points.`;
      this.announce(`Game over. ${this.state.teamB.name} wins!`);
    } else {
      winMsg = `The game ends in a tie. Both teams finished with ${this.state.teamA.score} points.`;
      this.announce(`Game over. It's a tie!`);
    }

    audioApp.playFinalWinner();

    this.container.innerHTML = `
            <div class="final-results">
                <div style="display: flex; justify-content: flex-end; margin-bottom: 1rem;">
                    <a href="top-answer-showdown-host-key.html?id=${this.gameId}" target="_blank" rel="noopener noreferrer" class="button button-secondary" style="text-decoration: none;">
                        Host Answer Sheet <span style="font-size: 0.8rem; opacity: 0.8; margin-left: 0.25rem;">(Opens in a new tab)</span>
                    </a>
                </div>
                <h2 style="font-family: var(--font-heading); font-size: 2rem; color: var(--text-primary); margin-bottom: 0.5rem;">${this.escapeHtml(this.data.completion.title)}</h2>
                <div class="winner-announcement">${winMsg}</div>
                
                <div class="final-scores">
                    <div class="final-team-score ${this.state.teamA.score > this.state.teamB.score ? "winner" : ""}">
                        <div style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">${this.escapeHtml(this.state.teamA.name)}</div>
                        <div style="font-size: 3.5rem; font-family: var(--font-heading); color: var(--text-primary);">${this.state.teamA.score}</div>
                        <div style="color: var(--text-secondary); margin-top: 1rem; font-size: 0.9rem;">Rounds Won: ${this.state.teamA.roundsWon}</div>
                    </div>
                    <div class="final-team-score ${this.state.teamB.score > this.state.teamA.score ? "winner" : ""}">
                        <div style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">${this.escapeHtml(this.state.teamB.name)}</div>
                        <div style="font-size: 3.5rem; font-family: var(--font-heading); color: var(--text-primary);">${this.state.teamB.score}</div>
                        <div style="color: var(--text-secondary); margin-top: 1rem; font-size: 0.9rem;">Rounds Won: ${this.state.teamB.roundsWon}</div>
                    </div>
                </div>

                <div style="margin-top: 3rem; display: flex; justify-content: center; gap: 1rem;">
                    <button type="button" class="button button-primary" data-action="reset-game" style="background-color: var(--orange); border-color: var(--orange); color: var(--space-black);">Play Again / Reset Game</button>
                    <a href="../labs/game-lab.html" class="button button-secondary">Return to Game Lab</a>
                </div>
            </div>
        `;
  }

  // ==========================================
  // UI Helpers & Answer Sheet
  // ==========================================

  updateSoundUI() {
    document
      .querySelectorAll("#sound-mute, #sound-mute-host")
      .forEach((el) => (el.checked = audioApp.muted));
    document
      .querySelectorAll("#sound-vol, #sound-vol-host")
      .forEach((el) => (el.value = audioApp.volume));
  }

  announce(msg) {
    const ann = document.getElementById("game-announcer");
    if (ann) {
      ann.textContent = msg;
    }
  }

  escapeHtml(unsafe) {
    if (!unsafe) return "";
    return unsafe
      .toString()
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  showConfirmModal(message, onConfirm) {
    this.pendingConfirmAction = onConfirm;
    const overlay = document.getElementById("confirm-modal-overlay");
    if (overlay) {
      document.getElementById("confirm-modal-message").textContent = message;
      overlay.classList.add("active");
    } else {
      const div = document.createElement("div");
      div.id = "confirm-modal-overlay";
      div.className = "confirm-overlay active";
      div.setAttribute("role", "dialog");
      div.setAttribute("aria-modal", "true");
      div.innerHTML = `
        <div class="confirm-modal" style="max-width: 400px; padding: 2rem; border: 2px solid var(--neon-blue); background: var(--panel-bg); border-radius: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.5);">
            <p id="confirm-modal-message" style="margin-bottom: 2rem; font-size: 1.1rem; color: var(--text-primary); text-align: center;">${this.escapeHtml(message)}</p>
            <div style="display: flex; gap: 1rem; justify-content: center;">
                <button type="button" class="button button-secondary" data-action="cancel-confirm">Cancel</button>
                <button type="button" class="button button-primary" id="confirm-modal-yes" style="background: var(--orange); color: var(--space-black); border: none;" data-action="confirm-action">Confirm</button>
            </div>
        </div>
      `;
      document.body.appendChild(div);
    }
    setTimeout(() => {
        const btn = document.getElementById("confirm-modal-yes");
        if (btn) btn.focus();
    }, 10);
  }

  closeConfirmModal() {
    const overlay = document.getElementById("confirm-modal-overlay");
    if (overlay) overlay.classList.remove("active");
    this.pendingConfirmAction = null;
  }
}

window.gameCtrl = null;
document.addEventListener("DOMContentLoaded", () => {
  window.gameCtrl = new GameController();
});
