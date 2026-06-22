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
  "sports-and-fitness-showdown": "../data/games/sports-and-fitness-showdown.js"
};

class HostKeyController {
  constructor() {
    this.container = document.getElementById("host-key-container");
    this.data = null;
    this.init();
  }

  async init() {
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get("id");

    if (!gameId || !topAnswerShowdownLoaders[gameId]) {
      this.renderUnavailable("Invalid or missing game ID.");
      return;
    }

    // Set return link
    const returnLink = document.getElementById("return-game-link");
    if (returnLink) {
      returnLink.href = `top-answer-showdown.html?id=${gameId}`;
    }

    try {
      await this.loadGameData(topAnswerShowdownLoaders[gameId], gameId);
      if (this.validateData(this.data, gameId)) {
        this.render();
      } else {
        this.renderUnavailable("Game data failed validation.");
      }
    } catch (error) {
      console.error(error);
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

  validateData(data, expectedId) {
    // Validate: Game object exists, Game ID matches, Title exists, Rounds exist
    if (!data || data.id !== expectedId || !data.title || !data.rounds || !Array.isArray(data.rounds)) return false;

    const roundIds = new Set();

    for (const round of data.rounds) {
      // Validate: Every round has a question, multiplier, answers
      if (!round.id || !round.question || round.multiplier === undefined || !round.answers || !Array.isArray(round.answers)) return false;
      
      // Validate: Round IDs are unique
      if (roundIds.has(round.id)) return false;
      roundIds.add(round.id);

      const answerRanks = new Set();
      for (const answer of round.answers) {
        // Validate: Every answer has text, positive points, unique ranks
        if (!answer.text || answer.points === undefined || typeof answer.points !== "number" || answer.points <= 0) return false;
        
        if (answerRanks.has(answer.rank)) return false;
        answerRanks.add(answer.rank);
      }
    }
    return true;
  }

  renderUnavailable(message) {
    this.container.innerHTML = `
      <div class="state-message" style="text-align: center; padding: 4rem 1rem;">
          <h2 style="color: var(--text-primary); margin-bottom: 1rem;">Unavailable</h2>
          <p style="color: var(--text-secondary); margin-bottom: 2rem;">${this.escapeHtml(message)}</p>
          <a href="../labs/game-lab.html" class="button button-primary" style="background-color: var(--orange); border-color: var(--orange); color: var(--space-black);">Return to Game Lab</a>
      </div>
    `;
  }

  render() {
    let html = `
      <div class="host-key-header">
        <h1 class="host-key-title">Top Answer Showdown</h1>
        <h2 class="host-key-subtitle">${this.escapeHtml(this.data.gameTitle || "Host Answer Sheet")} &mdash; ${this.escapeHtml(this.data.title)}</h2>
        <div class="host-key-privacy-notice">
          <strong>Privacy Notice:</strong> Keep this answer sheet on the teacher’s screen and away from the projected classroom display.
        </div>
      </div>
      <div class="host-key-rounds">
    `;

    this.data.rounds.forEach((round, index) => {
      // Sort by rank ascending
      const sortedAnswers = [...round.answers].sort((a, b) => a.rank - b.rank);

      html += `
        <section class="host-key-round" aria-labelledby="round-heading-${index}">
          <header class="round-header">
            <h3 id="round-heading-${index}" class="round-meta">Round ${index + 1} of ${this.data.rounds.length} &middot; &times;${round.multiplier}</h3>
            <p class="round-question">${this.escapeHtml(round.question)}</p>
          </header>
          <ul class="round-answers-list">
      `;

      sortedAnswers.forEach((ans) => {
        html += `
            <li class="round-answer-item">
              <span class="answer-rank-text">${ans.rank}. ${this.escapeHtml(ans.text)} &mdash; ${ans.points} points</span>
            </li>
        `;
      });

      html += `
          </ul>
        </section>
      `;
    });

    html += `
      </div>
      <div class="host-key-print-action print-hidden" style="margin-top: 3rem; text-align: center;">
          <button type="button" onclick="window.print()" class="button button-primary" style="background-color: var(--orange); border-color: var(--orange); color: var(--space-black); font-size: 1.1rem; padding: 1rem 2.5rem;">Print Answer Sheet</button>
      </div>
    `;

    this.container.innerHTML = html;
    document.title = `Host Answer Sheet - ${this.data.title} | Top Answer Showdown`;
  }

  escapeHtml(str) {
    if (!str) return "";
    return str
      .toString()
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  window.keyCtrl = new HostKeyController();
});
