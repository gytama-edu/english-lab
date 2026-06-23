const englishJeopardyDataLoaders = {
    "english-mix-1": "../data/games/english-mix-challenge.js",
    "grammar-challenge": "../data/games/grammar-challenge.js",
    "vocabulary-challenge": "../data/games/vocabulary-challenge.js"
};

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const packId = urlParams.get("id");

    const container = document.getElementById("content");

    if (!packId || !englishJeopardyDataLoaders[packId]) {
        container.innerHTML = `<h1>Error</h1><p>Invalid or missing pack ID.</p>`;
        return;
    }

    // Since we statically loaded the pack scripts in the HTML, we can just use window.JEOPARDY_DATA
    const data = window.JEOPARDY_DATA && window.JEOPARDY_DATA[packId];
    if (data) {
        renderSheet(data, container);
    } else {
        container.innerHTML = `<h1>Error</h1><p>Data not found for ${packId}.</p>`;
    }
});

function renderSheet(data, container) {
    document.title = `Host Answer Sheet - ${data.title}`;

    let html = `
        <div class="header-actions">
            <div>
                <h1 class="pack-title">${escapeHtml(data.title)}</h1>
                <p>Private Host Answer Sheet - Do not show to students</p>
            </div>
            <div class="no-print" style="display: flex; gap: 0.5rem; flex-direction: column;">
                <button onclick="window.print()" class="button button-primary" style="background-color: var(--orange); border-color: var(--orange); color: var(--space-black);">Print Answer Sheet</button>
                <button onclick="window.close()" class="button button-secondary">Close Tab</button>
            </div>
        </div>
    `;

    data.categories.forEach(cat => {
        html += `
            <div class="category-block">
                <div class="category-header">${escapeHtml(cat.title)}</div>
                <div class="category-clues">
        `;
        
        cat.clues.forEach(clue => {
            const accepted = Array.isArray(clue.acceptedAnswers) && clue.acceptedAnswers.length > 0
                ? clue.acceptedAnswers.map(answer => escapeHtml(answer)).join("; ")
                : "";
            html += `
                <div class="clue-row">
                    <div class="clue-value">${clue.value}</div>
                    <div class="clue-content">
                        <div class="clue-q">Q: ${escapeHtml(clue.question)}</div>
                        <div class="clue-a">A: ${escapeHtml(clue.answer)}</div>
                        ${accepted ? `<div class="clue-accepted">Accepted answers: ${accepted}</div>` : ""}
                        ${clue.explanation ? `<div class="clue-explanation">Explanation: ${escapeHtml(clue.explanation)}</div>` : ""}
                    </div>
                </div>
            `;
        });

        html += `
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function escapeHtml(unsafe) {
    if (!unsafe) return "";
    return unsafe
      .toString()
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
}
