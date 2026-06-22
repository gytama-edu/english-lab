const showdownCategories = [
    {
        id: "everyday-english-showdown",
        title: "Mixed Everyday English",
        description: "A general collection about routines, classrooms, travel, food, places, and everyday life."
    },
    {
        id: "food-and-drinks-showdown",
        title: "Food & Drinks",
        description: "Familiar meals, street food, cafés, warungs, snacks, and drinks commonly recognised in Indonesia."
    },
    {
        id: "lifestyle-and-daily-life-showdown",
        title: "Lifestyle & Daily Life",
        description: "Phones, routines, weekends, online transport, rainy days, and common daily habits."
    },
    {
        id: "family-and-home-showdown",
        title: "Family & Home",
        description: "Familiar answers about family routines, household chores, guests, living spaces, and everyday life at home."
    },
    {
        id: "school-and-campus-showdown",
        title: "School & Campus",
        description: "Classes, exams, canteens, homework, group projects, and student life."
    },
    {
        id: "shopping-and-money-showdown",
        title: "Shopping & Money",
        description: "Online shopping, minimarkets, monthly bills, cashless payments, sales, phones, and everyday spending."
    },
    {
        id: "travel-and-transportation-showdown",
        title: "Travel & Transportation",
        description: "Motorcycles, trains, traffic, holidays, public transport, and familiar Indonesian destinations."
    },
    {
        id: "social-media-and-technology-showdown",
        title: "Social Media & Technology",
        description: "Phones, apps, viral videos, online accounts, video calls, artificial intelligence, and digital habits."
    },
    {
        id: "sports-and-fitness-showdown",
        title: "Sports & Fitness",
        description: "Football, badminton, basketball, fitness, famous athletes, famous clubs, and sports commonly enjoyed in Indonesia."
    },
    {
        id: "famous-people-and-entertainment-showdown",
        title: "Famous People & Entertainment",
        description: "Familiar footballers, singers, actors, superheroes, anime, K-pop, and entertainment platforms."
    }
];

function renderCategories() {
    const grid = document.getElementById('categories-grid');
    if (!grid) return;

    let html = '';
    showdownCategories.forEach(cat => {
        html += `
            <div class="experiment-card category-card" style="border-top-color: var(--orange);">
                <h3 class="experiment-card__title category-card__title">${escapeHtml(cat.title)}</h3>
                <p class="experiment-card__description category-card__desc">${escapeHtml(cat.description)}</p>
                <div class="experiment-card__actions category-card__actions">
                    <a href="top-answer-showdown.html?id=${cat.id}" class="button button-primary">Start Game</a>
                    <div class="host-key-link-wrapper">
                        <a href="top-answer-showdown-host-key.html?id=${cat.id}" target="_blank" rel="noopener noreferrer" class="button button-secondary host-key-btn">
                            Host Answer Sheet
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                        <p style="font-size: 0.75rem; color: var(--text-muted); text-align: center; margin-top: 0.5rem; margin-bottom: 0;">Host Answer Sheet opens in a new tab.</p>
                    </div>
                </div>
            </div>
        `;
    });

    grid.innerHTML = html;
}

function escapeHtml(str) {
    if (!str) return "";
    return str
        .toString()
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

document.addEventListener('DOMContentLoaded', renderCategories);
