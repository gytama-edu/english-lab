export const lessonData = {
  id: "writing-descriptions-and-personal-experiences",
  title: "Writing Descriptions and Personal Experiences",
  description: "Learn how to help readers picture a person, place, object, or event through specific details and clear organisation.",
  lab: "Writing Lab",
  backUrl: "../labs/writing.html",
  practiceUrl: "../activities/writing-practice.html?id=writing-descriptions-and-personal-experiences",
  practiceLabel: "Start Writing Practice",
  accent: "var(--pink)",
  level: "Beginner",
  label: "Writing Descriptions",
  metaDescription: "Learn to describe people, places, objects, and personal experiences in clear English paragraphs.",
  
  tableOfContents: [
    { id: "what-is-descriptive-writing", label: "What is descriptive writing?" },
    { id: "specific-nouns", label: "Choose specific nouns" },
    { id: "precise-verbs", label: "Use precise verbs" },
    { id: "adjectives", label: "Use adjectives carefully" },
    { id: "sensory-details", label: "Use sensory details" },
    { id: "describe-people", label: "Describe people naturally" },
    { id: "describe-places", label: "Describe places clearly" },
    { id: "describe-objects", label: "Describe objects" },
    { id: "what-is-personal-experience", label: "What is personal-experience writing?" },
    { id: "start-opening", label: "Start with a clear opening" },
    { id: "organise-events", label: "Organise events in sequence" },
    { id: "past-forms", label: "Use past forms consistently" },
    { id: "feelings", label: "Include feelings and reactions" },
    { id: "important-moments", label: "Show important moments" },
    { id: "relevant-details", label: "Keep details relevant" },
    { id: "end-reflection", label: "End with reflection" },
    { id: "descriptive-structure", label: "Descriptive paragraph structure" },
    { id: "personal-experience-structure", label: "Personal-experience paragraph structure" },
    { id: "revise-description", label: "Revise descriptive writing" },
    { id: "revise-experience", label: "Revise personal-experience writing" },
    { id: "common-mistakes", label: "Common mistakes" },
    { id: "writing-checklist", label: "Writing checklist" },
    { id: "guided-checks", label: "Guided Checks" }
  ],

  sections: [
    {
      id: "what-is-descriptive-writing",
      title: "What is descriptive writing?",
      blocks: [
        {
          type: "text",
          content: "Descriptive writing helps the reader imagine something clearly."
        },
        {
          type: "pill-list",
          heading: "A description may focus on:",
          items: [
            "A person",
            "A place",
            "An object",
            "A moment",
            "An experience",
            "A feeling"
          ]
        },
        {
          type: "text",
          heading: "Weak description:",
          content: "The park was nice."
        },
        {
          type: "text",
          heading: "Clearer description:",
          content: "The park had tall trees, quiet walking paths, and a small lake beside the entrance."
        },
        {
          type: "text",
          heading: "Main message:",
          content: "<strong>Clear descriptions use specific details instead of general words.</strong>"
        }
      ]
    },
    {
      id: "specific-nouns",
      title: "Choose specific nouns",
      blocks: [
        {
          type: "text",
          content: "Specific nouns create a clearer picture."
        },
        {
          type: "text",
          heading: "General:",
          content: "I saw an animal."
        },
        {
          type: "text",
          heading: "Specific:",
          content: "I saw a small brown dog."
        },
        {
          type: "text",
          heading: "General:",
          content: "There was food on the table."
        },
        {
          type: "text",
          heading: "Specific:",
          content: "There were bowls of rice, grilled chicken, and fresh fruit on the table."
        },
        {
          type: "text",
          content: "Do not encourage unnecessary detail in every sentence."
        }
      ]
    },
    {
      id: "precise-verbs",
      title: "Use precise verbs",
      blocks: [
        {
          type: "text",
          content: "Strong verbs often communicate more clearly than general verbs plus many extra words."
        },
        {
          type: "text",
          heading: "General:",
          content: "She went quickly across the road."
        },
        {
          type: "text",
          heading: "More precise:",
          content: "She hurried across the road."
        },
        {
          type: "text",
          heading: "General:",
          content: "He looked at the message for a long time."
        },
        {
          type: "text",
          heading: "More precise:",
          content: "He studied the message."
        },
        {
          type: "two-column-list",
          heading: "Useful descriptive verbs may include:",
          columns: [
            {
              items: [
                "hurried",
                "whispered",
                "stared",
                "wandered",
                "rushed"
              ]
            },
            {
              items: [
                "smiled",
                "grabbed",
                "noticed",
                "approached",
                "disappeared"
              ]
            }
          ]
        }
      ]
    },
    {
      id: "adjectives",
      title: "Use adjectives carefully",
      blocks: [
        {
          type: "text",
          content: "Adjectives add useful information about nouns."
        },
        {
          type: "example-block",
          heading: "Examples:",
          examples: [
            "a narrow street",
            "a crowded room",
            "a warm, friendly teacher",
            "an old wooden table"
          ]
        },
        {
          type: "text",
          content: "Choose adjectives that add meaning."
        },
        {
          type: "text",
          heading: "Avoid:",
          content: "It was a beautiful, amazing, wonderful, fantastic, lovely place."
        },
        {
          type: "text",
          heading: "Clearer:",
          content: "It was a peaceful beach with clear water and soft white sand."
        }
      ]
    },
    {
      id: "sensory-details",
      title: "Use sensory details",
      blocks: [
        {
          type: "pill-list",
          heading: "Introduce the five senses:",
          items: [
            "Sight",
            "Sound",
            "Smell",
            "Taste",
            "Touch"
          ]
        },
        {
          type: "two-column-list",
          heading: "Examples:",
          columns: [
            {
              title: "Sense",
              items: [
                "Sight",
                "Sound",
                "Smell",
                "Taste",
                "Touch"
              ]
            },
            {
              title: "Example",
              items: [
                "Bright lights reflected on the wet road.",
                "Music and laughter came from the café.",
                "The kitchen smelled of coffee and warm bread.",
                "The soup was slightly spicy.",
                "The stone wall felt cold and rough."
              ]
            }
          ]
        },
        {
          type: "text",
          content: "Students do not need to use every sense in one paragraph."
        }
      ]
    },
    {
      id: "describe-people",
      title: "Describe people naturally",
      blocks: [
        {
          type: "pill-list",
          heading: "Useful areas:",
          items: [
            "Appearance",
            "Voice",
            "Behaviour",
            "Personality",
            "Habits",
            "Effect on other people"
          ]
        },
        {
          type: "text",
          heading: "Example:",
          content: "Mr Rahman speaks quietly, but everyone listens because his explanations are clear and patient."
        },
        {
          type: "text",
          content: "Avoid reducing a person to appearance only.<br>Do not encourage insulting or inappropriate descriptions."
        }
      ]
    },
    {
      id: "describe-places",
      title: "Describe places clearly",
      blocks: [
        {
          type: "pill-list",
          heading: "Teach a useful order:",
          items: [
            "1. Name the place",
            "2. Give the general impression",
            "3. Describe important features",
            "4. Explain what happens there",
            "5. Give a personal reaction"
          ]
        },
        {
          type: "text",
          heading: "Example:",
          content: "The small library near my house is one of my favourite places. It has large windows, long wooden tables, and a quiet reading area at the back. Students often study there in the afternoon. I like it because it feels calm and welcoming."
        }
      ]
    },
    {
      id: "describe-objects",
      title: "Describe objects through purpose and detail",
      blocks: [
        {
          type: "pill-list",
          heading: "Students can describe:",
          items: [
            "Appearance",
            "Size",
            "Material",
            "Use",
            "Importance",
            "Personal meaning"
          ]
        },
        {
          type: "text",
          heading: "Example:",
          content: "My old notebook has a dark blue cover and several folded pages. I use it to record lesson ideas, new vocabulary, and reminders. It is not expensive, but it is important because it contains many useful plans."
        }
      ]
    },
    {
      id: "what-is-personal-experience",
      title: "What is personal-experience writing?",
      blocks: [
        {
          type: "text",
          content: "Personal-experience writing tells the reader about something that happened to the writer."
        },
        {
          type: "pill-list",
          heading: "It should normally answer:",
          items: [
            "What happened?",
            "When and where did it happen?",
            "Who was involved?",
            "What happened first, next, and finally?",
            "How did the writer feel?",
            "Why was the experience important?"
          ]
        }
      ]
    },
    {
      id: "start-opening",
      title: "Start with a clear opening",
      blocks: [
        {
          type: "text",
          content: "A strong opening introduces the experience."
        },
        {
          type: "text",
          heading: "Weak:",
          content: "I want to tell you something."
        },
        {
          type: "text",
          heading: "Clearer:",
          content: "Last Saturday, I attended my first community cooking class."
        },
        {
          type: "pill-list",
          heading: "Other opening patterns:",
          items: [
            "Last year, I…",
            "One afternoon,…",
            "The first time I…",
            "During my holiday,…",
            "A few weeks ago,…"
          ]
        },
        {
          type: "text",
          content: "Do not require every paragraph to begin with a date."
        }
      ]
    },
    {
      id: "organise-events",
      title: "Organise events in sequence",
      blocks: [
        {
          type: "two-column-list",
          heading: "Teach sequence expressions:",
          columns: [
            {
              items: [
                "first",
                "at first",
                "next",
                "then",
                "after that",
                "a few minutes later"
              ]
            },
            {
              items: [
                "while",
                "when",
                "eventually",
                "finally",
                "in the end"
              ]
            }
          ]
        },
        {
          type: "text",
          heading: "Example:",
          content: "At first, I felt nervous. After a few minutes, I began speaking more confidently. In the end, I enjoyed the presentation."
        },
        {
          type: "text",
          content: "Students should not begin every sentence with “then.”"
        }
      ]
    },
    {
      id: "past-forms",
      title: "Use past forms consistently",
      blocks: [
        {
          type: "text",
          content: "Completed personal experiences are usually written mainly in the past."
        },
        {
          type: "text",
          heading: "Example:",
          content: "We arrived early, found our seats, and waited for the event to begin."
        },
        {
          type: "pill-list",
          heading: "Remind students to check:",
          items: [
            "Past verb forms",
            "Irregular verbs",
            "Time expressions",
            "Consistency"
          ]
        },
        {
          type: "text",
          heading: "Incorrect:",
          content: "We arrived at the station and wait for the train."
        },
        {
          type: "text",
          heading: "Correct:",
          content: "We arrived at the station and waited for the train."
        }
      ]
    },
    {
      id: "feelings",
      title: "Include feelings and reactions",
      blocks: [
        {
          type: "text",
          content: "Writers can state feelings directly:<br><strong>I felt nervous.</strong>"
        },
        {
          type: "text",
          content: "They can also show feelings through actions:<br><strong>My hands shook as I opened the classroom door.</strong>"
        },
        {
          type: "two-column-list",
          heading: "Useful feeling words:",
          columns: [
            {
              items: [
                "excited",
                "nervous",
                "relieved",
                "proud",
                "surprised"
              ]
            },
            {
              items: [
                "disappointed",
                "embarrassed",
                "grateful",
                "worried",
                "satisfied"
              ]
            }
          ]
        },
        {
          type: "text",
          content: "Feelings should connect naturally to the event."
        }
      ]
    },
    {
      id: "important-moments",
      title: "Show important moments",
      blocks: [
        {
          type: "text",
          content: "Teach students to slow down and describe an important moment."
        },
        {
          type: "text",
          heading: "General:",
          content: "The performance was good."
        },
        {
          type: "text",
          heading: "Clearer:",
          content: "When the final song ended, the audience stood, clapped, and cheered for several minutes."
        },
        {
          type: "text",
          content: "This helps the reader understand why the moment mattered."
        }
      ]
    },
    {
      id: "relevant-details",
      title: "Keep details relevant",
      blocks: [
        {
          type: "pill-list",
          heading: "Every detail should help the reader understand:",
          items: [
            "The place",
            "The event",
            "The people",
            "The mood",
            "The writer’s reaction"
          ]
        },
        {
          type: "text",
          heading: "Topic:",
          content: "My first cooking class"
        },
        {
          type: "text",
          heading: "Relevant:",
          content: "I learned how to prepare fresh pasta."
        },
        {
          type: "text",
          heading: "Not relevant:",
          content: "My neighbour owns a red motorcycle."
        },
        {
          type: "text",
          content: "Remove details that do not support the experience."
        }
      ]
    },
    {
      id: "end-reflection",
      title: "End with reflection",
      blocks: [
        {
          type: "pill-list",
          heading: "A concluding sentence may explain:",
          items: [
            "What the writer learned",
            "Why the experience mattered",
            "How the writer felt afterward",
            "Whether the writer would do it again"
          ]
        },
        {
          type: "example-block",
          heading: "Examples:",
          examples: [
            "The experience taught me that speaking becomes easier with practice.",
            "Although the journey was tiring, it became one of my favourite memories.",
            "I would happily join another class in the future."
          ]
        },
        {
          type: "text",
          content: "Do not introduce a completely new event in the conclusion."
        }
      ]
    },
    {
      id: "descriptive-structure",
      title: "Descriptive paragraph structure",
      blocks: [
        {
          type: "pill-list",
          heading: "Suggested structure:",
          items: [
            "1. Topic sentence",
            "2. General impression",
            "3. Specific visual or sensory details",
            "4. Purpose or activity",
            "5. Personal reaction",
            "6. Conclusion"
          ]
        },
        {
          type: "text",
          heading: "Example:",
          content: "The café near my workplace is a comfortable place to relax. It has warm lighting, small wooden tables, and large windows facing the street. Soft music plays in the background, and the room usually smells of coffee and fresh bread. I often sit there before work and prepare my lesson notes. The calm atmosphere helps me focus. For this reason, it has become one of my favourite places in the neighbourhood."
        }
      ]
    },
    {
      id: "personal-experience-structure",
      title: "Personal-experience paragraph structure",
      blocks: [
        {
          type: "pill-list",
          heading: "Suggested structure:",
          items: [
            "1. Opening situation",
            "2. First event",
            "3. Next event",
            "4. Important moment",
            "5. Feeling or reaction",
            "6. Conclusion or lesson"
          ]
        },
        {
          type: "text",
          heading: "Example:",
          content: "Last month, I joined a public speaking workshop for the first time. At first, I felt nervous because I did not know anyone. The instructor gave us a simple topic and a few minutes to prepare. When my turn came, I spoke slowly and tried to remember the main points. I made a few mistakes, but the other participants were supportive. By the end of the session, I felt more confident. The experience showed me that practice can reduce fear."
        }
      ]
    },
    {
      id: "revise-description",
      title: "Revise descriptive writing",
      blocks: [
        {
          type: "pill-list",
          heading: "Check:",
          items: [
            "Are the nouns specific?",
            "Are the verbs clear?",
            "Do the adjectives add useful information?",
            "Are there one or two helpful sensory details?",
            "Can the reader picture the subject?",
            "Are unnecessary details removed?"
          ]
        }
      ]
    },
    {
      id: "revise-experience",
      title: "Revise personal-experience writing",
      blocks: [
        {
          type: "pill-list",
          heading: "Check:",
          items: [
            "Is the event clear?",
            "Is the sequence easy to follow?",
            "Are past forms consistent?",
            "Are feelings connected to the event?",
            "Is there an important moment?",
            "Does the ending explain why the experience mattered?"
          ]
        }
      ]
    },
    {
      id: "common-mistakes",
      title: "Common mistakes",
      blocks: [
        {
          type: "pill-list",
          items: [
            "Using only general words",
            "Adding too many adjectives",
            "Listing details without organisation",
            "Changing tense unnecessarily",
            "Repeating “then” in every sentence",
            "Including unrelated information",
            "Naming feelings without explaining the situation",
            "Ending suddenly",
            "Adding a new event in the conclusion",
            "Writing descriptions that are too personal or inappropriate"
          ]
        }
      ]
    },
    {
      id: "writing-checklist",
      title: "Writing checklist",
      blocks: [
        {
          type: "pill-list",
          heading: "For descriptions:",
          items: [
            "Did I identify the person, place, or object?",
            "Did I use specific details?",
            "Did I choose clear verbs?",
            "Did I include useful sensory information?",
            "Can the reader picture it?",
            "Did I include a personal reaction?"
          ]
        },
        {
          type: "pill-list",
          heading: "For experiences:",
          items: [
            "Did I explain when and where it happened?",
            "Are events in a clear order?",
            "Did I use past forms consistently?",
            "Did I include my feelings or reactions?",
            "Did I describe an important moment?",
            "Did I finish with a conclusion or reflection?"
          ]
        }
      ]
    },
    {
      id: "guided-checks",
      title: "Guided Checks",
      blocks: [
        {
          type: "guided-check",
          prompt: "Which sentence gives the clearest description?<br><br>A) The room was nice.<br>B) The room had large windows, pale walls, and quiet music.<br>C) There was a room.<br>D) I saw the room yesterday.",
          answer: "B) The room had large windows, pale walls, and quiet music.<br><br>It uses specific details that help the reader imagine the room."
        },
        {
          type: "guided-check",
          prompt: "Choose the most precise verb:<br><br>The child ___ across the playground because she was late.<br><br>A) went<br>B) existed<br>C) hurried<br>D) stayed",
          answer: "C) hurried<br><br>“Hurried” clearly communicates fast movement caused by urgency."
        },
        {
          type: "guided-check",
          prompt: "Which sequence is clearest?<br><br>A) Finally, first, then<br>B) First, next, finally<br>C) Yesterday, because, but<br>D) Quietly, slowly, often",
          answer: "B) First, next, finally"
        },
        {
          type: "guided-check",
          prompt: "Which is the best concluding sentence for a paragraph about a first teaching experience?<br><br>A) The classroom had twenty chairs.<br>B) My colleague owns a bicycle.<br>C) The experience taught me to prepare carefully and stay calm.<br>D) The lesson started at two o’clock.",
          answer: "C) The experience taught me to prepare carefully and stay calm.<br><br>It reflects on the importance of the experience."
        }
      ]
    }
  ]
};
