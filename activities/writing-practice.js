const writingActivityLoaders = {
  "writing-clear-sentences-and-paragraphs": () => import("./data/writing-clear-sentences-and-paragraphs.js"),
  "writing-descriptions-and-personal-experiences": () => import("./data/writing-descriptions-and-personal-experiences.js"),
  "writing-everyday-messages-and-emails": () => import("./data/writing-everyday-messages-and-emails.js"),
  "writing-system-test": () => import("./data/writing-system-test.js")
};

let currentActivity = null;
let currentTaskIndex = 0;
let studentAnswers = {}; // Map of taskId -> string (choice or text)
let studentChecklists = {}; // Map of taskId -> array of boolean representing checked state
let flattenedTasks = []; // Ordered list of all tasks across sections
let isActivityComplete = false;

function getActivityId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function escapeHtml(unsafe) {
  if (unsafe == null) return "";
  return String(unsafe)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function showState(stateId) {
  const states = ["state-loading", "state-unavailable", "state-introduction", "state-active", "state-review", "state-results"];
  states.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (id === stateId) {
        el.removeAttribute("hidden");
        // Focus management
        const focusTarget = el.querySelector("h1, h2, #question-panel, #review-panel, #results-panel");
        if (focusTarget) {
            focusTarget.setAttribute("tabindex", "-1");
            focusTarget.focus();
        }
      } else {
        el.setAttribute("hidden", "true");
      }
    }
  });
}

async function loadActivity() {
  const id = getActivityId();
  if (!id || !writingActivityLoaders[id]) {
    showState("state-unavailable");
    return;
  }

  try {
    const module = await writingActivityLoaders[id]();
    if (!module || !module.activityData) {
      throw new Error("Invalid activity data format");
    }

    validateActivity(module.activityData);
    currentActivity = module.activityData;
    setupTasks();
    renderIntroduction();
    showState("state-introduction");

  } catch (err) {
    console.error("Error loading activity:", err);
    showState("state-unavailable");
  }
}

function validateActivity(data) {
  if (!data.id || !data.title || !data.sections || !Array.isArray(data.sections) || data.sections.length !== 3) {
    throw new Error("Malformed activity: Requires 3 sections and basic metadata.");
  }
  
  let taskCount = 0;
  let singleChoiceCount = 0;
  let sentenceCount = 0;
  let paragraphCount = 0;
  
  const sectionIds = new Set();
  const taskIds = new Set();
  
  data.sections.forEach(section => {
      if (!section.id || sectionIds.has(section.id)) throw new Error("Duplicate or missing section ID.");
      sectionIds.add(section.id);
      
      section.tasks.forEach(task => {
          if (!task.id || taskIds.has(task.id)) throw new Error("Duplicate or missing task ID.");
          taskIds.add(task.id);
          
          if (!task.prompt) throw new Error("Missing task prompt.");
          
          if (task.type === "single-choice") {
              singleChoiceCount++;
              if (!task.options || task.options.length === 0 || !task.correctAnswer || !task.explanation) {
                  throw new Error("Malformed single-choice task.");
              }
              if (!task.options.includes(task.correctAnswer)) {
                  throw new Error("Correct answer not in options.");
              }
          } else if (task.type === "sentence-response") {
              sentenceCount++;
              if (!task.guidance || !task.selfReview || !task.sampleResponse) throw new Error("Malformed open response.");
          } else if (task.type === "paragraph-response") {
              paragraphCount++;
              if (!task.guidance || !task.selfReview || !task.sampleResponse) throw new Error("Malformed open response.");
          } else {
              throw new Error("Unsupported task type: " + task.type);
          }
          taskCount++;
      });
  });
  
  if (taskCount !== 10) throw new Error("Activity must have exactly 10 tasks");
  if (singleChoiceCount !== 6) throw new Error("Activity must have exactly 6 single-choice tasks");
  if (sentenceCount !== 3) throw new Error("Activity must have exactly 3 sentence-response tasks");
  if (paragraphCount !== 1) throw new Error("Activity must have exactly 1 paragraph-response task");
}

function setupTasks() {
    flattenedTasks = [];
    currentActivity.sections.forEach((section, secObjRef) => {
        section.tasks.forEach((task, taskObjRef) => {
            flattenedTasks.push({
                ...task,
                sectionTitle: section.title,
                sectionIntro: section.introduction,
                sectionIndex: secObjRef,
                taskIndexInSection: taskObjRef
            });
        });
    });
}

function renderIntroduction() {
  document.getElementById("intro-title").textContent = currentActivity.title;
  document.getElementById("intro-desc").textContent = currentActivity.description;
  document.title = `${currentActivity.title} | Writing Practice | English Lab`;
  
  if (currentActivity.instructions) {
      document.getElementById("intro-instructions").innerHTML = currentActivity.instructions.map(inst => `<p>${escapeHtml(inst)}</p>`).join("");
  }
  
  document.getElementById("btn-lesson").href = `../lessons/lesson.html?id=${escapeHtml(currentActivity.lessonId)}`;
}

document.getElementById("btn-start").addEventListener("click", () => {
    currentTaskIndex = 0;
    renderTask();
    showState("state-active");
});

function renderTask() {
    const task = flattenedTasks[currentTaskIndex];
    
    document.getElementById("question-status").textContent = `Task ${currentTaskIndex + 1} of ${flattenedTasks.length}`;
    document.getElementById("question-section-label").textContent = task.sectionTitle;
    document.getElementById("section-introduction").textContent = task.sectionIntro;
    
    document.getElementById("question-prompt").textContent = task.prompt;
    
    const guidanceEl = document.getElementById("question-guidance");
    if (task.guidance) {
        guidanceEl.textContent = task.guidance;
        guidanceEl.removeAttribute("hidden");
    } else {
        guidanceEl.setAttribute("hidden", "true");
    }
    
    const answerContainer = document.getElementById("answer-container");
    answerContainer.innerHTML = "";
    
    if (task.type === "single-choice") {
        const ul = document.createElement("ul");
        ul.className = "options-list";
        
        task.options.forEach((opt, i) => {
            const li = document.createElement("li");
            li.className = "option-item";
            
            const isSelected = studentAnswers[task.id] === opt;
            
            li.innerHTML = `
                <label class="option-label ${isSelected ? 'selected' : ''}">
                    <input type="radio" name="focus-choice" value="${escapeHtml(opt)}" class="option-input sr-only" ${isSelected ? 'checked' : ''}>
                    <span>${escapeHtml(opt)}</span>
                </label>
            `;
            
            const labelEl = li.querySelector("label");
            const inputEl = li.querySelector("input");
            
            inputEl.addEventListener("change", () => {
                ul.querySelectorAll(".option-label").forEach(l => l.classList.remove("selected"));
                if (inputEl.checked) {
                    labelEl.classList.add("selected");
                    studentAnswers[task.id] = opt;
                    renderNavigator();
                    updateReviewButton();
                }
            });
            
            ul.appendChild(li);
        });
        answerContainer.appendChild(ul);
    } else {
        // Sentence or Paragraph response
        const textarea = document.createElement("textarea");
        textarea.className = `writing-textarea ${task.type === 'paragraph-response' ? 'large' : ''}`;
        textarea.placeholder = "Write your response here...";
        textarea.setAttribute("aria-label", "Your response");
        textarea.value = studentAnswers[task.id] || "";
        
        const countDiv = document.createElement("div");
        countDiv.className = "character-count";
        countDiv.textContent = `${textarea.value.length} characters`;
        if (task.suggestedLength) {
            countDiv.textContent += ` (Suggested: ${task.suggestedLength})`;
        }
        
        textarea.addEventListener("input", (e) => {
            const val = e.target.value;
            studentAnswers[task.id] = val;
            let countText = `${val.length} characters`;
            if (task.suggestedLength) {
                countText += ` (Suggested: ${task.suggestedLength})`;
            }
            countDiv.textContent = countText;
            renderNavigator();
            updateReviewButton();
        });
        
        answerContainer.appendChild(textarea);
        answerContainer.appendChild(countDiv);
    }
    
    // Navigation buttons
    document.getElementById("btn-prev").disabled = currentTaskIndex === 0;
    
    const isLastTask = currentTaskIndex === flattenedTasks.length - 1;
    const btnNext = document.getElementById("btn-next");
    const btnReview = document.getElementById("btn-review");
    
    if (isLastTask) {
        btnNext.setAttribute("hidden", "true");
        btnReview.removeAttribute("hidden");
        updateReviewButton();
    } else {
        btnNext.removeAttribute("hidden");
        btnReview.setAttribute("hidden", "true");
    }
    
    renderNavigator();
    
    // Focus the question panel title so screen reader announces new task
    document.getElementById("question-status").focus();
}

function updateReviewButton() {
    const btnReview = document.getElementById("btn-review");
    if (!btnReview.hasAttribute("hidden")) {
        const allAnswered = flattenedTasks.every(t => {
            const val = studentAnswers[t.id];
            if (t.type === "single-choice") return !!val;
            return val && val.trim().length > 0;
        });
        btnReview.disabled = !allAnswered;
    }
}

function renderNavigator() {
    const grid = document.getElementById("navigator-grid");
    grid.innerHTML = "";
    
    flattenedTasks.forEach((task, i) => {
        const btn = document.createElement("button");
        btn.className = "navigator-btn";
        btn.textContent = i + 1;
        btn.setAttribute("aria-label", `Go to task ${i + 1}`);
        
        const val = studentAnswers[task.id];
        const hasAnswer = task.type === "single-choice" ? !!val : (val && val.trim().length > 0);
        
        if (i === currentTaskIndex) {
            btn.classList.add("current");
            btn.setAttribute("aria-current", "step");
        } else if (hasAnswer) {
            btn.classList.add("answered");
        }
        
        btn.addEventListener("click", () => {
            currentTaskIndex = i;
            renderTask();
        });
        
        grid.appendChild(btn);
    });
}

document.getElementById("btn-prev").addEventListener("click", () => {
    if (currentTaskIndex > 0) {
        currentTaskIndex--;
        renderTask();
    }
});

document.getElementById("btn-next").addEventListener("click", () => {
    if (currentTaskIndex < flattenedTasks.length - 1) {
        currentTaskIndex++;
        renderTask();
    }
});

document.getElementById("btn-review").addEventListener("click", () => {
    renderReviewState();
    showState("state-review");
});

document.getElementById("btn-back-to-tasks").addEventListener("click", () => {
    showState("state-active");
    renderTask(); // Ensure textarea is updated if they changed stuff (though they don't edit in review directly)
});

function renderReviewState() {
    const list = document.getElementById("review-list");
    list.innerHTML = "";
    
    flattenedTasks.forEach((task, index) => {
        const div = document.createElement("div");
        div.className = "review-item";
        
        const ans = studentAnswers[task.id];
        const isUnanswered = task.type === "single-choice" ? !ans : !(ans && ans.trim().length > 0);
        const displayAns = isUnanswered ? "No response provided" : escapeHtml(ans);
        
        div.innerHTML = `
            <div class="review-item-header">
                <div>
                    <span class="review-q-num">Task ${index + 1}</span>
                    <span class="review-section-title" style="margin-left:8px;">${escapeHtml(task.sectionTitle)}</span>
                </div>
                <button class="edit-btn" data-index="${index}">Edit</button>
            </div>
            <div class="review-prompt">${escapeHtml(task.prompt)}</div>
            <div class="review-answer ${isUnanswered ? 'unanswered' : ''}">${displayAns}</div>
        `;
        
        if (task.type !== "single-choice") {
             const checklist = task.selfReview || [];
             if (!studentChecklists[task.id]) {
                 studentChecklists[task.id] = new Array(checklist.length).fill(false);
             }
             
             const ul = document.createElement("ul");
             ul.className = "self-review-checklist";
             
             checklist.forEach((item, cIndex) => {
                 const li = document.createElement("li");
                 li.className = "self-review-item";
                 const checkboxId = `chk-${task.id}-${cIndex}`;
                 const isChecked = studentChecklists[task.id][cIndex];
                 
                 const cb = document.createElement("input");
                 cb.type = "checkbox";
                 cb.id = checkboxId;
                 cb.className = "self-review-checkbox";
                 cb.checked = isChecked;
                 cb.addEventListener("change", (e) => {
                     studentChecklists[task.id][cIndex] = e.target.checked;
                 });
                 
                 const lbl = document.createElement("label");
                 lbl.htmlFor = checkboxId;
                 lbl.className = "self-review-label";
                 lbl.textContent = item;
                 
                 li.appendChild(cb);
                 li.appendChild(lbl);
                 ul.appendChild(li);
             });
             div.appendChild(ul);
        }
        
        div.querySelector(".edit-btn").addEventListener("click", (e) => {
            currentTaskIndex = parseInt(e.target.getAttribute("data-index"));
            showState("state-active");
            renderTask();
        });
        
        list.appendChild(div);
    });
}

document.getElementById("btn-submit-all").addEventListener("click", () => {
    isActivityComplete = true;
    renderResultsState();
    showState("state-results");
});

function renderResultsState() {
    const list = document.getElementById("results-list");
    list.innerHTML = "";
    
    let objectiveTotal = 0;
    let objectiveCorrect = 0;
    
    let writingTotal = 0;
    let writingCompleted = 0;
    
    flattenedTasks.forEach((task, index) => {
        const div = document.createElement("div");
        div.className = "results-item";
        
        const ans = studentAnswers[task.id];
        
        if (task.type === "single-choice") {
            objectiveTotal++;
            const isCorrect = ans === task.correctAnswer;
            if (isCorrect) objectiveCorrect++;
            
            div.classList.add(isCorrect ? "correct" : "incorrect");
            
            div.innerHTML = `
                <span class="result-status ${isCorrect ? 'correct' : 'incorrect'}">
                    Task ${index + 1}: ${isCorrect ? 'Correct' : 'Incorrect'}
                </span>
                <div class="review-prompt">${escapeHtml(task.prompt)}</div>
                
                <div class="result-details">
                    <div class="result-detail-row">
                        <span class="result-label">Your answer</span>
                        <span class="result-value" style="color: ${isCorrect ? '#10b981' : '#ef4444'}">${ans ? escapeHtml(ans) : 'No answer'}</span>
                    </div>
                    ${!isCorrect ? `
                    <div class="result-detail-row">
                        <span class="result-label">Correct answer</span>
                        <span class="result-value" style="color: #10b981">${escapeHtml(task.correctAnswer)}</span>
                    </div>
                    ` : ''}
                </div>
                <div class="result-explanation">
                    <strong>Explanation:</strong> ${escapeHtml(task.explanation)}
                </div>
            `;
        } else {
            writingTotal++;
            const isCompleted = ans && ans.trim().length > 0;
            if (isCompleted) writingCompleted++;
            
            div.classList.add("open-response");
            
            const checklistItems = task.selfReview || [];
            let checkedCount = 0;
            let checklistHtml = "";
            
            if (checklistItems.length > 0 && studentChecklists[task.id]) {
                 checklistHtml += `<ul class="self-review-checklist" style="border-top:none; margin-top:0.5rem; padding-top:0;">`;
                 checklistItems.forEach((item, cIndex) => {
                     const isChecked = studentChecklists[task.id][cIndex];
                     if(isChecked) checkedCount++;
                     checklistHtml += `
                         <li class="self-review-item">
                             <input type="checkbox" disabled ${isChecked ? 'checked' : ''} style="margin-top:0.25rem;">
                             <label style="font-size:0.9rem; color:var(--text-secondary); opacity: 0.8;">${escapeHtml(item)}</label>
                         </li>
                     `;
                 });
                 checklistHtml += `</ul>`;
            }
            
            div.innerHTML = `
                <span class="result-status open-response">Task ${index + 1}: Open Response</span>
                <div class="review-prompt">${escapeHtml(task.prompt)}</div>
                
                <div class="result-details">
                    <div class="result-detail-row">
                        <span class="result-label">Your response</span>
                        <span class="result-value">${ans ? escapeHtml(ans) : 'No answer'}</span>
                    </div>
                    
                    <div class="result-detail-row" style="margin-top: 1rem;">
                        <span class="result-label">Self-Review checklist (${checkedCount}/${checklistItems.length})</span>
                        ${checklistHtml}
                    </div>
                    
                    ${task.sampleResponse ? `
                    <details class="sample-response-container">
                        <summary class="sample-label" style="cursor: pointer; display: list-item; list-style-position: inside;">One possible response (Click to view)</summary>
                        <div class="sample-content" style="margin-top: 0.5rem;">${escapeHtml(task.sampleResponse)}</div>
                    </details>
                    ` : ""}
                </div>
            `;
        }
        
        list.appendChild(div);
    });
    
    document.getElementById("results-score").textContent = `${objectiveCorrect} / ${objectiveTotal}`;
    document.getElementById("results-writing-score").textContent = `Writing tasks completed: ${writingCompleted} out of ${writingTotal}`;
    document.getElementById("results-message").textContent = currentActivity.completion.message;
    document.getElementById("btn-results-lesson").href = `../lessons/lesson.html?id=${escapeHtml(currentActivity.lessonId)}`;
}

// Dialog Logic
const dialog = document.getElementById("dialog-confirm-retry");

document.getElementById("btn-retry").addEventListener("click", () => {
    dialog.removeAttribute("hidden");
    document.getElementById("btn-cancel-retry").focus();
});

document.getElementById("btn-cancel-retry").addEventListener("click", () => {
    dialog.setAttribute("hidden", "true");
});

document.getElementById("btn-confirm-retry").addEventListener("click", () => {
    dialog.setAttribute("hidden", "true");
    studentAnswers = {};
    studentChecklists = {};
    isActivityComplete = false;
    currentTaskIndex = 0;
    renderIntroduction();
    showState("state-introduction");
});

// Init
document.addEventListener("DOMContentLoaded", loadActivity);
