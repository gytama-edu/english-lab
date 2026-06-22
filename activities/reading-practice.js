const readingActivityLoaders = {
  "reading-for-main-ideas-and-supporting-details": () => import("./data/reading-for-main-ideas-and-supporting-details.js"),
  "reading-for-specific-information-and-scanning": () => import("./data/reading-for-specific-information-and-scanning.js"),
  "reading-for-context-clues-and-word-meaning": () => import("./data/reading-for-context-clues-and-word-meaning.js"),
  "reading-for-inference-tone-and-writers-attitude": () => import("./data/reading-for-inference-tone-and-writers-attitude.js"),
  "reading-system-test": () => import("./data/reading-system-test.js")
};

let activityData = null;
let flatQuestions = [];
let studentAnswers = {}; // questionId -> answer
let currentQuestionIndex = 0;
let currentSectionId = null;

// Element References
const stateLoading = document.getElementById("state-loading");
const stateUnavailable = document.getElementById("state-unavailable");
const stateIntroduction = document.getElementById("state-introduction");
const stateActive = document.getElementById("state-active");
const stateReview = document.getElementById("state-review");
const stateResults = document.getElementById("state-results");

const introTitle = document.getElementById("intro-title");
const introDesc = document.getElementById("intro-desc");
const introInstructions = document.getElementById("intro-instructions");
const btnStart = document.getElementById("btn-start");
const btnLesson = document.getElementById("btn-lesson");

const passagePanel = document.getElementById("passage-panel");
const passageSectionLabel = document.getElementById("passage-section-label");
const passageTitle = document.getElementById("passage-title");
const passageContext = document.getElementById("passage-context");
const passageContent = document.getElementById("passage-content");

const questionStatus = document.getElementById("question-status");
const questionSectionLabel = document.getElementById("question-section-label");
const questionPrompt = document.getElementById("question-prompt");
const answerContainer = document.getElementById("answer-container");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const btnReview = document.getElementById("btn-review");
const navigatorGrid = document.getElementById("navigator-grid");

const reviewList = document.getElementById("review-list");
const btnBackToQuestions = document.getElementById("btn-back-to-questions");
const btnSubmitAll = document.getElementById("btn-submit-all");

const resultsScore = document.getElementById("results-score");
const resultsMessage = document.getElementById("results-message");
const resultsList = document.getElementById("results-list");
const btnRetry = document.getElementById("btn-retry");
const btnResultsLesson = document.getElementById("btn-results-lesson");

function getParam(param) {
  return new URLSearchParams(window.location.search).get(param);
}

function escapeHtml(unsafe) {
  if (typeof unsafe !== 'string') return unsafe;
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function showState(stateElement) {
  [stateLoading, stateUnavailable, stateIntroduction, stateActive, stateReview, stateResults].forEach(el => {
    if (el) el.hidden = true;
  });
  if (stateElement) {
    stateElement.hidden = false;
  }
}

async function init() {
  const id = getParam("id");
  if (!id || !readingActivityLoaders[id]) {
    showState(stateUnavailable);
    return;
  }

  try {
    const module = await readingActivityLoaders[id]();
    if (!module || !module.activityData) {
      throw new Error("Invalid reading activity data format.");
    }
    
    activityData = module.activityData;
    validateActivity(activityData);
    setupData();
    renderIntroduction();
    showState(stateIntroduction);
  } catch (err) {
    console.warn("Error loading reading activity:", err);
    showState(stateUnavailable);
  }
}

function validateActivity(data) {
  if (!data.id || !data.title || !data.sections || !Array.isArray(data.sections) || data.sections.length !== 3) {
    throw new Error("Invalid activity structure or invalid number of sections.");
  }
  
  let qCount = 0;
  const sectionIds = new Set();
  const questionIds = new Set();
  
  data.sections.forEach(sec => {
    if (!sec.passage || !sec.passage.heading) {
      throw new Error("Invalid passage structure in section " + sec.id);
    }
    
    const hasParagraphs = Array.isArray(sec.passage.paragraphs) && sec.passage.paragraphs.length > 0;
    const hasBlocks = Array.isArray(sec.passage.blocks) && sec.passage.blocks.length > 0;
    
    if (!hasParagraphs && !hasBlocks) {
      throw new Error("Passage must have either paragraphs or blocks in section " + sec.id);
    }
    
    if (hasBlocks) {
      sec.passage.blocks.forEach((block, idx) => {
        if (!block.type) throw new Error(`Missing block type in section ${sec.id} block ${idx}`);
        if (block.type === "paragraph" && typeof block.text !== "string") {
            throw new Error(`Invalid paragraph block in section ${sec.id}`);
        }
        if (block.type === "heading" && typeof block.text !== "string") {
            throw new Error(`Invalid heading block in section ${sec.id}`);
        }
        if (block.type === "list" && (!Array.isArray(block.items) || block.items.length === 0)) {
            throw new Error(`Invalid list block in section ${sec.id}`);
        }
        if (block.type === "table") {
          if (!Array.isArray(block.headers) || !Array.isArray(block.rows)) {
            throw new Error(`Invalid table block in section ${sec.id}`);
          }
          const expectedCells = block.headers.length;
          block.rows.forEach(row => {
            if (!Array.isArray(row) || row.length !== expectedCells) {
               throw new Error(`Table row length mismatch in section ${sec.id}`);
            }
          });
        }
        if (!["paragraph", "heading", "list", "table"].includes(block.type)) {
          throw new Error(`Unsupported block type ${block.type} in section ${sec.id}`);
        }
      });
    }
    
    if (sectionIds.has(sec.id)) throw new Error("Duplicate section ID: " + sec.id);
    sectionIds.add(sec.id);
    
    sec.questions.forEach(q => {
      if (questionIds.has(q.id)) throw new Error("Duplicate question ID: " + q.id);
      questionIds.add(q.id);
      
      if (q.type !== "single-choice" && q.type !== "short-answer") {
        throw new Error("Unsupported question type: " + q.type);
      }
      if (q.type === "single-choice" && (!q.options || q.options.length === 0)) {
        throw new Error("Missing options for single-choice question " + q.id);
      }
      if (q.type === "short-answer" && !q.acceptedAnswers) {
        throw new Error("Missing acceptedAnswers for short-answer question " + q.id);
      }
      if (!q.explanation) {
        throw new Error("Missing explanation for question " + q.id);
      }
      qCount++;
    });
  });
  
  if (qCount !== 10) {
    throw new Error(`Invalid number of questions. Expected 10, found ${qCount}.`);
  }
}

function setupData() {
  flatQuestions = [];
  activityData.sections.forEach(sec => {
    sec.questions.forEach(q => {
      flatQuestions.push({
        ...q,
        sectionId: sec.id,
        sectionTitle: sec.title,
        passageHeading: sec.passage.heading,
        context: sec.context,
        paragraphs: sec.passage.paragraphs || null,
        blocks: sec.passage.blocks || null
      });
    });
  });

  if (activityData.accent) {
    document.body.style.setProperty("--gold", activityData.accent);
  }
}

function renderIntroduction() {
  document.title = `${activityData.title} | Reading Practice | English Lab`;
  introTitle.textContent = activityData.title;
  introDesc.textContent = activityData.description || "";
  
  if (activityData.instructions) {
    introInstructions.innerHTML = activityData.instructions.map(inst => `<p>${escapeHtml(inst)}</p>`).join("");
  }
  
  if (activityData.lessonId) {
    btnLesson.href = `../lessons/lesson.html?id=${encodeURIComponent(activityData.lessonId)}`;
  } else {
    btnLesson.hidden = true;
  }
}

// Event Listeners for flow
btnStart.addEventListener("click", () => {
  currentQuestionIndex = 0;
  currentSectionId = null;
  studentAnswers = {};
  renderQuestion(currentQuestionIndex);
  showState(stateActive);
  passagePanel.focus();
});

btnNext.addEventListener("click", () => {
  saveCurrentAnswer();
  if (currentQuestionIndex < flatQuestions.length - 1) {
    currentQuestionIndex++;
    renderQuestion(currentQuestionIndex);
  }
});

btnPrev.addEventListener("click", () => {
  saveCurrentAnswer();
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion(currentQuestionIndex);
  }
});

btnReview.addEventListener("click", () => {
  saveCurrentAnswer();
  renderReview();
  showState(stateReview);
});

btnBackToQuestions.addEventListener("click", () => {
  renderQuestion(currentQuestionIndex);
  showState(stateActive);
});

btnSubmitAll.addEventListener("click", () => {
  renderResults();
  showState(stateResults);
  const h2 = stateResults.querySelector("h2");
  if (h2) h2.focus();
});

btnRetry.addEventListener("click", () => {
  studentAnswers = {};
  currentQuestionIndex = 0;
  currentSectionId = null;
  renderQuestion(currentQuestionIndex);
  showState(stateActive);
  passagePanel.focus();
});

function renderQuestion(index) {
  const qData = flatQuestions[index];
  
  // Render Passage if section changed
  if (currentSectionId !== qData.sectionId) {
    currentSectionId = qData.sectionId;
    passageSectionLabel.textContent = qData.sectionTitle;
    passageTitle.textContent = qData.passageHeading;
    if (qData.context) {
      passageContext.hidden = false;
      passageContext.textContent = qData.context;
    } else {
      passageContext.hidden = true;
    }
    
    if (qData.blocks) {
      let html = "";
      qData.blocks.forEach(block => {
        if (block.type === "paragraph") {
          html += `<p>${escapeHtml(block.text)}</p>`;
        } else if (block.type === "heading") {
          const level = block.level || 3;
          html += `<h${level}>${escapeHtml(block.text)}</h${level}>`;
        } else if (block.type === "list") {
          const tag = block.style === "ordered" ? "ol" : "ul";
          html += `<${tag} class="passage-list">`;
          block.items.forEach(item => {
            html += `<li>${escapeHtml(item)}</li>`;
          });
          html += `</${tag}>`;
        } else if (block.type === "table") {
          html += `<div class="passage-table-container">`;
          html += `<table class="passage-table">`;
          if (block.caption) {
            html += `<caption>${escapeHtml(block.caption)}</caption>`;
          }
          html += `<thead><tr>`;
          block.headers.forEach(h => {
             html += `<th scope="col">${escapeHtml(h)}</th>`;
          });
          html += `</tr></thead><tbody>`;
          block.rows.forEach(r => {
             html += `<tr>`;
             r.forEach(cell => {
               html += `<td>${escapeHtml(cell)}</td>`;
             });
             html += `</tr>`;
          });
          html += `</tbody></table></div>`;
        }
      });
      passageContent.innerHTML = html;
    } else {
      passageContent.innerHTML = qData.paragraphs.map(p => `<p>${escapeHtml(p)}</p>`).join("");
    }
    passagePanel.scrollTop = 0;
  }

  // Render Question
  questionStatus.textContent = `Question ${index + 1} of 10`;
  questionSectionLabel.textContent = qData.sectionTitle;
  questionPrompt.textContent = qData.prompt;
  
  answerContainer.innerHTML = "";
  if (qData.type === "single-choice") {
    const list = document.createElement("ul");
    list.className = "options-list";
    qData.options.forEach((opt, i) => {
      const li = document.createElement("li");
      li.className = "option-item";
      
      const label = document.createElement("label");
      label.className = "option-label";
      
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "q-option";
      input.value = opt;
      input.className = "option-input";
      
      if (studentAnswers[qData.id] === opt) {
        input.checked = true;
        label.classList.add("selected");
      }
      
      input.addEventListener("change", () => {
        list.querySelectorAll(".option-label").forEach(l => l.classList.remove("selected"));
        if (input.checked) label.classList.add("selected");
      });
      
      const textNode = document.createTextNode(opt);
      label.appendChild(input);
      label.appendChild(textNode);
      li.appendChild(label);
      list.appendChild(li);
    });
    answerContainer.appendChild(list);
  } else if (qData.type === "short-answer") {
    const input = document.createElement("input");
    input.type = "text";
    input.className = "short-answer-input";
    input.placeholder = "Type your answer here";
    if (studentAnswers[qData.id]) {
      input.value = studentAnswers[qData.id];
    }
    answerContainer.appendChild(input);
  }

  // Buttons
  btnPrev.disabled = index === 0;
  
  const isLast = index === flatQuestions.length - 1;
  btnNext.hidden = isLast;
  btnReview.hidden = !isLast;

  renderNavigator();
}

function saveCurrentAnswer() {
  const qData = flatQuestions[currentQuestionIndex];
  if (qData.type === "single-choice") {
    const checked = answerContainer.querySelector("input:checked");
    if (checked) {
      studentAnswers[qData.id] = checked.value;
    } else {
      delete studentAnswers[qData.id];
    }
  } else if (qData.type === "short-answer") {
    const input = answerContainer.querySelector("input");
    const val = input.value.trim();
    if (val) {
      studentAnswers[qData.id] = val;
    } else {
      delete studentAnswers[qData.id];
    }
  }
}

function renderNavigator() {
  navigatorGrid.innerHTML = "";
  flatQuestions.forEach((q, i) => {
    const btn = document.createElement("button");
    btn.className = "navigator-btn";
    btn.textContent = i + 1;
    btn.setAttribute("aria-label", `Go to question ${i + 1}`);
    
    if (studentAnswers[q.id]) {
      btn.classList.add("answered");
    }
    if (i === currentQuestionIndex) {
      btn.classList.add("current");
      btn.setAttribute("aria-current", "step");
    }
    
    btn.addEventListener("click", () => {
      saveCurrentAnswer();
      currentQuestionIndex = i;
      renderQuestion(currentQuestionIndex);
    });
    
    navigatorGrid.appendChild(btn);
  });
}

function renderReview() {
  reviewList.innerHTML = "";
  flatQuestions.forEach((q, i) => {
    const item = document.createElement("div");
    item.className = "review-item";
    
    const sanswer = studentAnswers[q.id];
    const displayAnswer = sanswer ? escapeHtml(sanswer) : "No answer provided";
    
    item.innerHTML = `
      <div class="review-item-header">
        <div style="flex-grow: 1;">
          <span class="review-q-num">Question ${i + 1}</span>
          <span class="review-section-title"> • ${escapeHtml(q.sectionTitle)}</span>
          <p class="review-prompt">${escapeHtml(q.prompt)}</p>
        </div>
        <button class="edit-btn" data-index="${i}">Edit</button>
      </div>
      <div class="review-answer ${!sanswer ? 'unanswered' : ''}">${displayAnswer}</div>
    `;
    
    item.querySelector(".edit-btn").addEventListener("click", (e) => {
      const idx = parseInt(e.target.getAttribute("data-index"), 10);
      currentQuestionIndex = idx;
      renderQuestion(idx);
      showState(stateActive);
    });
    
    reviewList.appendChild(item);
  });
}

function normalizeShortAnswer(answer) {
  if (!answer) return "";
  return answer.trim().toLowerCase().replace(/\s+/g, ' ').replace(/[.!?]$/, "");
}

function checkShortAnswerMatch(student, correct, accepted) {
  const normalizedStudent = normalizeShortAnswer(student);
  if (normalizeShortAnswer(correct) === normalizedStudent) return true;
  if (accepted) {
    for (const alt of accepted) {
      if (normalizeShortAnswer(alt) === normalizedStudent) return true;
    }
  }
  return false;
}

function renderResults() {
  resultsList.innerHTML = "";
  let correctCount = 0;
  
  flatQuestions.forEach((q, i) => {
    const item = document.createElement("div");
    item.className = "results-item";
    
    const sanswer = studentAnswers[q.id];
    let isCorrect = false;
    
    if (q.type === "single-choice") {
      isCorrect = sanswer === q.correctAnswer;
    } else if (q.type === "short-answer") {
      isCorrect = checkShortAnswerMatch(sanswer, q.correctAnswer, q.acceptedAnswers);
    }
    
    if (isCorrect) correctCount++;
    
    item.classList.add(isCorrect ? "correct" : "incorrect");
    
    const displayAnswer = sanswer ? escapeHtml(sanswer) : "No answer provided";
    
    item.innerHTML = `
      <div class="review-section-title" style="margin-bottom: 0.5rem;">Question ${i + 1} • ${escapeHtml(q.sectionTitle)}</div>
      <div class="review-prompt">${escapeHtml(q.prompt)}</div>
      <div class="result-status ${isCorrect ? 'correct' : 'incorrect'}">
        ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
      </div>
      
      <div class="result-details">
        <div class="result-detail-row">
          <span class="result-label">Your Answer:</span>
          <span class="result-value" style="color: var(--text-secondary);">${displayAnswer}</span>
        </div>
        ${!isCorrect ? `
        <div class="result-detail-row">
          <span class="result-label">Correct Answer:</span>
          <span class="result-value">${escapeHtml(q.correctAnswer)}</span>
        </div>
        ` : ''}
      </div>
      <div class="result-explanation">
        <strong>Explanation:</strong> ${escapeHtml(q.explanation)}
      </div>
    `;
    
    resultsList.appendChild(item);
  });
  
  resultsScore.textContent = `${correctCount} / 10`;
  
  if (activityData.completion && activityData.completion.message) {
    resultsMessage.textContent = activityData.completion.message;
  }
  
  if (activityData.lessonId) {
    btnResultsLesson.href = `../lessons/lesson.html?id=${encodeURIComponent(activityData.lessonId)}`;
  } else {
    btnResultsLesson.hidden = true;
  }
}

document.addEventListener("DOMContentLoaded", init);
