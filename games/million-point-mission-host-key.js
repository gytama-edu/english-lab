const LADDER_VALUES = [
    100, 200, 300, 500, 1000, 
    2000, 4000, 8000, 16000, 32000, 
    64000, 125000, 250000, 500000, 1000000
];
const MILESTONES = [4, 9];

document.addEventListener("DOMContentLoaded", () => {
    const packs = window.MILLION_DATA || {};
    const select = document.getElementById("pack-select");
    const container = document.getElementById("sheet-container");

    const packKeys = Object.keys(packs);
    if(packKeys.length === 0) {
        container.innerHTML = "<p>No edition data found.</p>";
        return;
    }

    packKeys.forEach(k => {
        const pack = packs[k];
        const title = pack.title || k;
        const opt = document.createElement("option");
        opt.value = k;
        opt.textContent = title;
        select.appendChild(opt);
    });

    select.addEventListener("change", () => renderSheet(select.value));
    renderSheet(select.value);

    function escapeHtml(unsafe) {
        if(!unsafe) return "";
        return unsafe.toString()
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function renderQuestionBlock(q, isReserve, levelIndex) {
        const val = LADDER_VALUES[levelIndex];
        const isMilestone = MILESTONES.includes(levelIndex) && !isReserve;
        
        let html = `
        <div class="q-block">
            <div class="q-header ${isMilestone ? 'milestone' : ''}">
                <span>Q${levelIndex + 1} &bull; ${val.toLocaleString('en-US')} Points ${isMilestone ? '(SAFE MILESTONE)' : ''}</span>
                ${isReserve ? '<span class="reserve-label">Reserve</span>' : ''}
            </div>
            <div class="q-body">
                <div class="q-topic">Topic: ${escapeHtml(q.topic)}</div>
                <div class="q-text">${escapeHtml(q.question)}</div>
                <div class="q-options">
        `;
        
        ["A","B","C","D"].forEach(l => {
            const isCorr = q.correctAnswer === l;
            html += `<div class="q-option ${isCorr ? 'correct' : ''}"><strong>${l}:</strong> ${escapeHtml(q.options[l])}</div>`;
        });

        html += `
                </div>
                <div class="q-explanation"><strong>Explanation:</strong> ${escapeHtml(q.explanation)}</div>
            </div>
        </div>`;
        return html;
    }

    function renderSheet(packId) {
        const pack = packs[packId];
        if(!pack) return;

        let html = `
            <h1>Million Point Mission: ${escapeHtml(pack.title)}</h1>
            <p class="sheet-desc">${escapeHtml(pack.description)}</p>
            <h2>Primary Questions</h2>
        `;

        pack.questions.forEach((q, i) => {
            html += renderQuestionBlock(q, false, i);
        });

        html += `<h2 style="margin-top: 3rem;">Reserve Questions</h2>`;
        
        pack.questions.forEach((q, i) => {
            if(q.reserve) {
                html += renderQuestionBlock(q.reserve, true, i);
            }
        });

        container.innerHTML = html;
    }
});
