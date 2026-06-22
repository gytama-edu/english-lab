export const activityData = {
  id: "writing-descriptions-and-personal-experiences",
  title: "Writing Descriptions and Personal Experiences",
  description: "Complete guided checks, write descriptive sentences, plan a personal experience, and create one clear paragraph.",
  lessonId: "writing-descriptions-and-personal-experiences",
  
  instructions: [
    "Read each prompt carefully.",
    "Choose the best answers for the objective tasks.",
    "Write clear responses for the open tasks.",
    "Use the guidance and self-review checklists to improve your writing."
  ],
  
  sections: [
    {
      id: "write-clear-descriptions",
      title: "Write Clear Descriptions",
      introduction: "Choose specific language and practise helping the reader imagine a person, place, or object.",
      tasks: [
        {
          id: "task-1",
          type: "single-choice",
          prompt: "Which sentence gives the clearest description of a market?",
          options: [
            "The market was good.",
            "The market had colourful fruit stalls, narrow paths, and the smell of grilled food.",
            "There were things at the market.",
            "I went to a market."
          ],
          correctAnswer: "The market had colourful fruit stalls, narrow paths, and the smell of grilled food.",
          explanation: "The sentence uses specific visual and sensory details."
        },
        {
          id: "task-2",
          type: "single-choice",
          prompt: "Choose the most precise verb:\n\nThe man ___ at the timetable because he could not find his train.",
          options: [
            "looked",
            "stared",
            "was",
            "had"
          ],
          correctAnswer: "stared",
          explanation: "“Stared” shows that he looked carefully for a period of time."
        },
        {
          id: "task-3",
          type: "single-choice",
          prompt: "Which detail uses the sense of sound?",
          options: [
            "The bread smelled warm and sweet.",
            "The stone floor felt cold.",
            "Laughter and music came from the open door.",
            "Bright signs covered the wall."
          ],
          correctAnswer: "Laughter and music came from the open door.",
          explanation: "The sentence describes sounds."
        },
        {
          id: "task-4",
          type: "sentence-response",
          prompt: "Write one clear sentence describing a place where you feel comfortable.",
          guidance: "Include at least two specific details. You may describe what you see, hear, smell, or feel.",
          suggestedLength: "One or two complete sentences",
          selfReview: [
            "I clearly named or identified the place.",
            "I included at least two specific details.",
            "My description is easy to imagine.",
            "My sentence is complete.",
            "I checked capitalisation and punctuation."
          ],
          sampleResponse: "I feel comfortable in the small library near my house because it has soft lighting, quiet tables, and large windows facing the garden."
        }
      ]
    },
    {
      id: "organise-personal-experience",
      title: "Organise a Personal Experience",
      introduction: "Choose clear openings, sequence events, and connect feelings to what happened.",
      tasks: [
        {
          id: "task-5",
          type: "single-choice",
          prompt: "Which is the clearest opening for a personal-experience paragraph?",
          options: [
            "Something happened once.",
            "Last Saturday, I joined my first community cooking class.",
            "There are many different classes.",
            "I want to write a paragraph."
          ],
          correctAnswer: "Last Saturday, I joined my first community cooking class.",
          explanation: "It clearly introduces when the event happened and what the experience was."
        },
        {
          id: "task-6",
          type: "single-choice",
          prompt: "Choose the best sequence expression:\n\nWe arrived at the station early. ___, we checked the departure screen and found our platform.",
          options: [
            "Next",
            "Because",
            "Although",
            "Quietly"
          ],
          correctAnswer: "Next",
          explanation: "“Next” introduces the following action in the sequence."
        },
        {
          id: "task-7",
          type: "single-choice",
          prompt: "Which sentence best shows that the writer felt nervous?",
          options: [
            "The room had twenty chairs.",
            "My hands shook slightly as I walked towards the front of the room.",
            "The presentation started at ten.",
            "My friend waited outside."
          ],
          correctAnswer: "My hands shook slightly as I walked towards the front of the room.",
          explanation: "The physical reaction suggests nervousness without only naming the feeling."
        },
        {
          id: "task-8",
          type: "sentence-response",
          prompt: "Write two connected sentences about an important moment during an experience.",
          guidance: "Explain what happened and how you felt. Use a sequence expression such as “when,” “after that,” “a few minutes later,” or “finally.”",
          suggestedLength: "Two complete sentences",
          selfReview: [
            "I described one clear moment.",
            "My sentences follow a logical sequence.",
            "I included a feeling or reaction.",
            "I used past forms where appropriate.",
            "I checked punctuation."
          ],
          sampleResponse: "When the teacher called my name, I walked to the front of the class and began speaking. At first, I felt nervous, but I became calmer after the first few sentences."
        }
      ]
    },
    {
      id: "plan-and-write-personal-experience",
      title: "Plan and Write a Personal Experience",
      introduction: "Plan one meaningful experience and organise it into a clear paragraph.",
      tasks: [
        {
          id: "task-9",
          type: "sentence-response",
          prompt: "Plan a paragraph about a memorable personal experience.",
          guidance: "Write short notes for:\n- What happened\n- When and where it happened\n- Who was involved\n- What happened first\n- The most important moment\n- How you felt\n- What you learned or why it mattered",
          suggestedLength: "Short planning notes",
          selfReview: [
            "I chose one specific experience.",
            "I identified when and where it happened.",
            "My events have a clear order.",
            "I included an important moment.",
            "I included a feeling or reaction.",
            "I have an idea for the conclusion."
          ],
          sampleResponse: "Experience: first time teaching a large class\nTime and place: last year at a language centre\nPeople: me and twenty-five students\nFirst: prepared the room and checked the materials\nImportant moment: projector stopped working\nFeeling: nervous at first, then calm\nResult: continued using the whiteboard\nLesson: preparation and flexibility are both important"
        },
        {
          id: "task-10",
          type: "paragraph-response",
          prompt: "Using your plan, write a clear paragraph about a memorable personal experience.",
          guidance: "Include a clear opening, events in a logical order, an important moment, your feelings or reactions, and a concluding reflection. Aim for approximately six to eight sentences, but focus on clarity rather than an exact number.",
          selfReview: [
            "My opening clearly introduces the experience.",
            "I explained when and where it happened.",
            "My events are in a logical order.",
            "I used sequence expressions where useful.",
            "I used past forms consistently.",
            "I described an important moment.",
            "I included my feelings or reactions.",
            "My conclusion explains why the experience mattered.",
            "I removed unrelated information.",
            "I checked capital letters and punctuation."
          ],
          sampleResponse: "Last year, I taught a large class for the first time at a language centre. Before the lesson, I prepared the room and checked all of my materials carefully. The students arrived, and I began the lesson feeling excited but slightly nervous. A few minutes later, the projector suddenly stopped working. At first, I worried that the lesson would fail, but I continued by drawing examples on the whiteboard. The students remained interested and participated actively. By the end of the class, I felt relieved and proud. The experience taught me that good preparation is important, but teachers also need to remain flexible."
        }
      ]
    }
  ],
  completion: {
    message: "Writing practice complete. Review your descriptions, sequence, and personal reflection. Compare your responses with the optional samples and choose one part you would improve."
  }
};
