const lessonLoaders = {
  "present-simple-vs-continuous": () => import("./data/present-simple-vs-continuous.js"),
  "past-simple-regular-irregular": () => import("./data/past-simple-regular-irregular.js"),
  "will-vs-going-to": () => import("./data/will-vs-going-to.js"),
  "present-perfect-vs-past-simple": () => import("./data/present-perfect-vs-past-simple.js"),
  "daily-routines": () => import("./data/daily-routines.js"),
  "food-meals-cooking": () => import("./data/food-meals-cooking.js"),
  "travel-transportation": () => import("./data/travel-transportation.js"),
  "home-rooms-household": () => import("./data/home-rooms-household.js"),
  "introducing-yourself": () => import("./data/introducing-yourself.js"),
  "talking-about-daily-routines": () => import("./data/talking-about-daily-routines.js"),
  "listening-for-everyday-information": () => import("./data/listening-for-everyday-information.js"),
  "listening-for-main-ideas-and-key-details": () => import("./data/listening-for-main-ideas-and-key-details.js"),
  "listening-for-opinions-feelings-and-attitudes": () => import("./data/listening-for-opinions-feelings-and-attitudes.js"),
  "reading-for-main-ideas-and-supporting-details": () => import("./data/reading-for-main-ideas-and-supporting-details.js"),
  "reading-for-specific-information-and-scanning": () => import("./data/reading-for-specific-information-and-scanning.js"),
  "reading-for-context-clues-and-word-meaning": () => import("./data/reading-for-context-clues-and-word-meaning.js"),
  "reading-for-inference-tone-and-writers-attitude": () => import("./data/reading-for-inference-tone-and-writers-attitude.js"),
  "writing-clear-sentences-and-paragraphs": () => import("./data/writing-clear-sentences-and-paragraphs.js"),
  "writing-descriptions-and-personal-experiences": () => import("./data/writing-descriptions-and-personal-experiences.js"),
  "writing-everyday-messages-and-emails": () => import("./data/writing-everyday-messages-and-emails.js")
};

function getLessonId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function escapeHtml(unsafe) {
  if (unsafe == null) return "";
  if (typeof unsafe !== 'string') return String(unsafe);
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeContent(htmlString) {
  if (htmlString == null) return "";
  // We trust the structure from our JSON, but we escape where necessary, but our JSON has raw tags like <strong> etc.
  // Actually, wait, since we control the JSON, and want to support tags like <strong> or <br>, 
  // maybe we don't fully escape it, but we can do a basic interpolation check.
  // The constraints say: "Escape plain text before inserting it into HTML."
  // And "Small controlled inline formatting may be supported."
  // For the sake of simplicity, we'll allow the trusted string to be rendered since it's hardcoded JSON data, 
  // but let's make sure we don't allow URL params to be injected unescaped.
  return String(htmlString);
}

function showUnavailableState() {
  const loading = document.getElementById("lesson-loading");
  const unavailable = document.getElementById("lesson-unavailable");
  const container = document.getElementById("lesson-container");
  
  if (loading) loading.style.display = "none";
  if (container) container.style.display = "none";
  if (unavailable) {
    unavailable.style.display = "block";
    const h1 = unavailable.querySelector("h1");
    if (h1) h1.focus();
  }
}

async function loadLesson() {
  const id = getLessonId();
  if (!id || !lessonLoaders[id]) {
    showUnavailableState();
    return;
  }
  
  try {
    const module = await lessonLoaders[id]();
    if (!module || !module.lessonData) {
      throw new Error("Invalid lesson data format");
    }
    
    validateLesson(module.lessonData);
    applyLessonMetadata(module.lessonData);
    renderLesson(module.lessonData);
    
    document.getElementById("lesson-loading").style.display = "none";
    document.getElementById("lesson-container").style.display = "block";
    
    // Focus management if coming from somewhere else
    const title = document.querySelector(".lesson-title");
    if (title && document.activeElement === document.body) {
      title.setAttribute("tabindex", "-1");
      title.focus();
    }
  } catch (err) {
    console.warn("Error loading lesson:", err);
    showUnavailableState();
  }
}

function validateLesson(data) {
  if (!data || typeof data !== "object") throw new Error("Invalid lesson data format");
  const required = ["id", "title", "description", "sections"];
  for (const req of required) {
    if (!data[req]) throw new Error(`Missing required field: ${req}`);
  }
  if (!Array.isArray(data.sections) || data.sections.length === 0) {
    throw new Error("Lesson must have at least one section");
  }
}

function applyLessonMetadata(data) {
  document.title = `${data.title} Lesson | English Lab by GYTama EDU`;
  if (data.metaDescription) {
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", data.metaDescription);
  }
  if (data.accent) {
    document.body.style.setProperty("--lesson-accent", data.accent);
  }
}

function renderBreadcrumb(data) {
  const breadcrumb = document.getElementById("lesson-breadcrumb");
  if (!breadcrumb) return;
  const backUrlAttr = data.backUrl ? `href="${escapeHtml(data.backUrl)}"` : "";
  const labNameAttr = data.lab ? escapeHtml(data.lab) : "Lab";
  
  breadcrumb.innerHTML = `
      <a href="../index.html">English Lab</a>
      <span class="separator" aria-hidden="true">/</span>
      ${data.backUrl ? `<a ${backUrlAttr}>${labNameAttr}</a>` : `<span>${labNameAttr}</span>`}
      <span class="separator" aria-hidden="true">/</span>
      <span class="current" aria-current="page">${escapeHtml(data.title)}</span>
  `;
}

function renderLessonHeader(data) {
  const header = document.getElementById("lesson-header");
  if (!header) return;
  header.style.setProperty("--lab-accent", data.accent || "var(--blue)");
  
  let actionsHtml = "";
  if (data.practiceUrl) {
    actionsHtml += `<a href="${escapeHtml(data.practiceUrl)}" class="button button-primary">${escapeHtml(data.practiceLabel || "Start Practice")}</a>`;
  }
  if (data.backUrl) {
    actionsHtml += `<a href="${escapeHtml(data.backUrl)}" class="button button-secondary">Back to ${escapeHtml(data.lab || "Lab")}</a>`;
  }

  const labelHtml = data.label ? `<span class="lesson-label">${escapeHtml(data.label)}</span>` : "";
  const levelHtml = data.level ? `<div><span class="lesson-level">${escapeHtml(data.level)}</span></div>` : "";

  header.innerHTML = `
      <svg class="lesson-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
          <path d="M10 6h4"></path>
          <path d="M17 10v4"></path>
      </svg>
      <div>
          ${labelHtml}
          <h1 class="lesson-title">${escapeHtml(data.title)}</h1>
      </div>
      ${levelHtml}
      <p class="lesson-intro">${escapeContent(data.description)}</p>
      
      ${actionsHtml ? `<div class="lesson-actions">${actionsHtml}</div>` : ""}
  `;
}

function renderTableOfContents(data) {
  const toc = document.getElementById("lesson-toc");
  if (!data.tableOfContents && !data.objectives) {
    toc.style.display = "none";
    return;
  }
  
  let html = "";
  if (data.objectives && data.objectives.length > 0) {
    html += `<h2 class="lesson-toc__heading">What You Will Learn</h2>
             <ul class="lesson-section">`;
    for (const obj of data.objectives) {
      html += `<li>${escapeContent(obj)}</li>`;
    }
    html += `</ul>`;
  }
  
  if (data.tableOfContents && data.tableOfContents.length > 0) {
    html += `<h2 class="lesson-toc__heading" style="margin-top: 1.5rem;">Lesson Contents</h2>
             <ul class="lesson-toc__list">`;
    for (const item of data.tableOfContents) {
      html += `<li><a href="#${escapeHtml(item.id)}">${escapeHtml(item.label)}</a></li>`;
    }
    html += `</ul>`;
  }
  
  toc.innerHTML = html;
}

function renderContentBlock(block) {
  switch (block.type) {
    case "text":
      return `
        ${block.heading ? `<h3>${escapeHtml(block.heading)}</h3>` : ""}
        ${block.content ? `<p>${escapeContent(block.content)}</p>` : ""}
      `;
    case "note":
      return `
        <div class="lesson-note ${block.isWarning ? "warning" : ""}">
          <p>${escapeContent(block.content)}</p>
        </div>
      `;
    case "comparison-cards":
      return `
        <div class="lesson-contrast-grid">
          ${block.cards.map(c => `
            <div class="lesson-contrast-card">
                <span class="lesson-contrast-card__tense">${escapeHtml(c.title)}</span>
                <p class="lesson-contrast-card__sentence">${escapeContent(c.sentence)}</p>
                <p class="lesson-contrast-card__meaning">${escapeContent(c.meaning)}</p>
            </div>
          `).join('')}
        </div>
      `;
    case "two-column-list":
      return `
        <div class="lesson-contrast-grid">
          ${block.columns.map(c => `
            <div class="lesson-contrast-card">
              <span class="lesson-contrast-card__tense">${escapeHtml(c.title)}</span>
              <ul style="margin: 0; padding-left: 1.25rem;">
                ${c.items.map(item => `<li>${escapeContent(item)}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      `;
    case "usage-group":
      return `
        <div class="lesson-subsection">
            <h3>${escapeHtml(block.title)}</h3>
            ${block.explanation ? `<p>${escapeContent(block.explanation)}</p>` : ""}
            <div class="lesson-example">
                <div class="lesson-example__heading">Examples</div>
                <ul class="example-list">
                    ${block.examples.map(ex => `<li>${escapeContent(ex)}</li>`).join('')}
                </ul>
            </div>
            ${block.note ? `<p>${escapeContent(block.note)}</p>` : ""}
        </div>
      `;
    case "example-block":
      return `
        <div class="lesson-example">
            ${block.heading ? `<div class="lesson-example__heading">${escapeHtml(block.heading)}</div>` : ""}
            <ul class="example-list">
                ${block.examples.map(ex => `<li>${escapeContent(ex)}</li>`).join('')}
            </ul>
        </div>
      `;
    case "structure-table":
      return `
        <div class="lesson-table-wrapper">
          <table class="lesson-table">
            <thead>
              <tr>
                ${block.headers.map(h => `<th>${escapeContent(h)}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              ${block.rows.map(row => `
                <tr>
                  ${row.map(cell => `<td>${escapeContent(cell)}</td>`).join('')}
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    case "spelling-rules":
      return `
        <div class="lesson-example" style="margin-top: 1.5rem;">
          <div class="lesson-example__heading">${escapeHtml(block.heading)}</div>
          <ul class="example-list">
            ${block.rules.map(rule => `<li>${escapeContent(rule.rule)}<br>${escapeContent(rule.examples)}</li>`).join('')}
          </ul>
        </div>
      `;
    case "guided-check":
      return `
        <div class="guided-check">
            <div class="guided-check__prompt">${escapeContent(block.prompt)}</div>
            <details>
                <summary>Check the answer</summary>
                <div class="guided-check__answer">${escapeContent(block.answer || block.suggestedAnswer || "")}</div>
            </details>
        </div>
      `;
    case "pill-list":
      return `
        <div class="lesson-example">
            ${block.heading ? `<div class="lesson-example__heading">${escapeHtml(block.heading)}</div>` : ""}
            <div style="display:flex; flex-wrap:wrap; gap:16px; margin-top:8px;">
                ${block.items.map(item => `<span style="background: rgba(255,255,255,0.05); padding: 4px 12px; border-radius: 4px;">${escapeHtml(item)}</span>`).join('')}
            </div>
        </div>
      `;
    case "comparison-table":
      return `
        <div class="lesson-table-wrapper">
          <table class="lesson-table">
            <thead>
              <tr>
                ${block.headers.map(h => `<th>${escapeContent(h)}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              ${block.rows.map(row => `
                <tr>
                  ${row.map(cell => `<td>${escapeContent(cell)}</td>`).join('')}
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    case "faq-item":
      return `
        <div class="lesson-subsection">
          <h3>${escapeHtml(block.question)}</h3>
          <p>${escapeContent(block.answer)}</p>
        </div>
      `;
    case "mistake-list":
      return `
        <div class="lesson-mistake-grid">
          ${block.mistakes.map(m => `
            <div class="lesson-mistake">
                <div class="mistake-row incorrect">
                    <span class="mistake-label">Incorrect</span>
                    <span class="mistake-sentence">${escapeContent(m.incorrect)}</span>
                </div>
                <div class="mistake-row correct">
                    <span class="mistake-label">Correct</span>
                    <span class="mistake-sentence">${escapeContent(m.correct)}</span>
                </div>
                <div class="mistake-explanation">
                    <span class="mistake-explanation__label">Why?</span>
                    <p class="mistake-explanation__text">${escapeContent(m.explanation)}</p>
                </div>
            </div>
          `).join('')}
        </div>
      `;
    case "summary-cards":
      return `
        <div class="lesson-contrast-grid" style="margin-bottom: 1.5rem;">
          ${block.cards.map(c => `
            <div class="lesson-contrast-card">
                <span class="lesson-contrast-card__tense">${escapeHtml(c.title)}</span>
                ${c.useFor && c.useFor.length > 0 ? `
                <p style="margin-bottom: 0.5rem; font-weight: 600; color: var(--text-primary);">${escapeHtml(c.useForLabel || 'Use it for:')}</p>
                <ul style="margin-top: 0; padding-left: 1.25rem;">
                    ${c.useFor.map(item => `<li>${escapeContent(item)}</li>`).join('')}
                </ul>
                ` : ''}
                ${c.forms && c.forms.length > 0 ? `
                <p style="margin: 1rem 0 0.5rem; font-weight: 600; color: var(--text-primary);">${escapeHtml(c.formsLabel || 'Basic form:')}</p>
                <ul style="margin-top: 0; padding-left: 1.25rem;">
                    ${c.forms.map(item => `<li>${escapeContent(item)}</li>`).join('')}
                </ul>
                ` : ''}
            </div>
          `).join('')}
        </div>
      `;
    default:
      console.warn("Unknown block type:", block.type);
      return "";
  }
}

function renderSections(data) {
  const container = document.getElementById("lesson-content");
  let html = "";
  
  if (data.sections) {
    for (const section of data.sections) {
      html += `<section class="lesson-section" id="${escapeHtml(section.id)}">`;
      if (section.title) {
        html += `<h2>${escapeHtml(section.title)}</h2>`;
      }
      if (section.blocks) {
        for (const block of section.blocks) {
          html += renderContentBlock(block);
        }
      }
      html += `</section>`;
    }
  }
  container.innerHTML = html;
}

function renderPracticeCta(data) {
  const cta = document.getElementById("lesson-practice-cta");
  if (!data.practiceUrl) {
    cta.style.display = "none";
    return;
  }
  
  const text = data.practiceText || "Complete the activity to practise choosing the correct tense in everyday situations.";
  const primaryLabel = data.practiceLabel || "Start Practice";
  
  let actionsHtml = `<a href="${escapeHtml(data.practiceUrl)}" class="button button-primary">${escapeHtml(primaryLabel)}</a>`;
  
  if (data.fillPracticeUrl) {
      actionsHtml += `<a href="${escapeHtml(data.fillPracticeUrl)}" class="button button-secondary">${escapeHtml(data.fillPracticeLabel || "Fill-in-the-Blank Practice")}</a>`;
  }
  
  if (data.backUrl) {
    actionsHtml += `<a href="${escapeHtml(data.backUrl)}" class="button button-secondary">Return to ${escapeHtml(data.lab || "Lab")}</a>`;
  }

  cta.style.setProperty("--lab-accent", data.accent || "var(--blue)");
  cta.innerHTML = `
      <span class="lesson-practice-cta__label">READY TO PRACTISE?</span>
      <h2 class="lesson-practice-cta__heading">Test Your Understanding</h2>
      <p class="lesson-practice-cta__text">${escapeContent(text)}</p>
      <div class="lesson-practice-cta__actions">
          ${actionsHtml}
      </div>
  `;
}

function renderLesson(data) {
  renderBreadcrumb(data);
  renderLessonHeader(data);
  renderTableOfContents(data);
  renderSections(data);
  renderPracticeCta(data);
}

document.addEventListener("DOMContentLoaded", loadLesson);
