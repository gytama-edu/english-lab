export const lessonData = {
  id: "present-simple-vs-continuous",
  lab: "grammar",
  label: "GRAMMAR LESSON 01",
  level: "Elementary",
  title: "Present Simple vs Present Continuous",
  description: "Learn when to use the present simple for routines and regular situations, and when to use the present continuous for actions happening now or around the present.",
  metaDescription: "Learn the difference between the present simple and present continuous through clear explanations, examples, structures, and common mistakes.",
  backUrl: "../labs/grammar.html",
  practiceUrl: "../activities/multiple-choice.html?id=present-simple-vs-continuous",
  accent: "#4DA3FF",
  objectives: [
    "Recognise routines and regular actions.",
    "Identify actions happening now.",
    "Form affirmative, negative, and question sentences.",
    "Choose the correct tense using context and time expressions."
  ],
  tableOfContents: [
    { id: "main-difference", label: "The Main Difference" },
    { id: "present-simple", label: "Present Simple" },
    { id: "present-continuous", label: "Present Continuous" },
    { id: "time-expressions", label: "Time Expressions" },
    { id: "stative-verbs", label: "Stative Verbs" },
    { id: "compare", label: "Compare the Tenses" },
    { id: "faq", label: "Questions Often Asked" },
    { id: "mistakes", label: "Common Mistakes" },
    { id: "summary", label: "Lesson Summary" }
  ],
  sections: [
    {
      id: "main-difference",
      title: "The Main Difference",
      blocks: [
        {
          type: "comparison-cards",
          cards: [
            {
              title: "Present Simple",
              sentence: "I teach English.",
              meaning: "Meaning: Teaching English is my job or regular activity."
            },
            {
              title: "Present Continuous",
              sentence: "I am teaching English now.",
              meaning: "Meaning: The action is happening at this moment."
            }
          ]
        },
        {
          type: "note",
          content: "The present simple describes what normally happens. The present continuous describes what is happening now or temporarily."
        },
        {
          type: "text",
          content: "Use the **present simple** when an action is regular, repeated, permanent, scheduled, or generally true.\n\nUse the **present continuous** when an action is happening now, happening around the present, temporary, changing, or already arranged for the near future."
        },
        {
          type: "two-column-list",
          columns: [
            {
              title: "PRESENT SIMPLE",
              items: ["Usually", "Regularly", "Every day", "Generally true", "Permanent or long-term"]
            },
            {
              title: "PRESENT CONTINUOUS",
              items: ["Now", "At the moment", "Around the present", "Temporary", "Changing"]
            }
          ]
        },
        {
          type: "note",
          isWarning: true,
          content: "Time expressions can help, but the meaning of the sentence is more important than one individual word."
        }
      ]
    },
    {
      id: "present-simple",
      title: "1. Present Simple",
      blocks: [
        {
          type: "usage-group",
          title: "A. Habits and routines",
          explanation: "Use the present simple for actions that happen regularly.",
          examples: [
            "I wake up at six every morning.",
            "She drinks tea after lunch.",
            "We study English on Tuesdays."
          ]
        },
        {
          type: "usage-group",
          title: "B. Repeated actions",
          explanation: "Use it for actions that happen more than once.",
          examples: [
            "He calls his mother every weekend.",
            "They visit Bandung twice a year."
          ]
        },
        {
          type: "usage-group",
          title: "C. Facts and general truths",
          examples: [
            "Water freezes at 0°C.",
            "The Earth moves around the Sun.",
            "Cats need food and water."
          ]
        },
        {
          type: "usage-group",
          title: "D. Permanent or long-term situations",
          examples: [
            "I live in Bekasi.",
            "She works at a language centre.",
            "They own a small shop."
          ],
          note: "“Permanent” does not mean forever. It means the speaker sees the situation as normal or long-term."
        },
        {
          type: "usage-group",
          title: "E. Schedules and timetables",
          examples: [
            "The lesson begins at 9:00.",
            "The train leaves at 7:30.",
            "The shop closes at ten."
          ],
          note: "Schedules use the present simple even when they refer to the future."
        },
        {
          type: "guided-check",
          prompt: "Choose the better sentence:\n<br>A. He usually drives to work.\n<br>B. He is usually driving to work.",
          answer: "<strong>A.</strong> “Usually” describes a regular routine."
        },
        {
          type: "text",
          heading: "Present Simple Form (Affirmative)"
        },
        {
          type: "structure-table",
          headers: ["Subject", "Rule", "Examples"],
          rows: [
            ["<strong>I / You / We / They</strong>", "base verb", "I <strong>work</strong>.<br>They <strong>study</strong>."],
            ["<strong>He / She / It</strong>", "verb + <strong>-s</strong> or <strong>-es</strong>", "He <strong>works</strong>.<br>She <strong>teaches</strong>."]
          ]
        },
        {
          type: "spelling-rules",
          heading: "Third-Person Singular Rules",
          rules: [
            {
              rule: "<strong>Most verbs:</strong> Add <strong>-s</strong>",
              examples: "work → works | read → reads | play → plays"
            },
            {
              rule: "<strong>Verbs ending in -s, -sh, -ch, -x, or -o:</strong> Add <strong>-es</strong>",
              examples: "watch → watches | wash → washes | go → goes | fix → fixes"
            },
            {
              rule: "<strong>Verbs ending in consonant + y:</strong> Change y to i and add <strong>-es</strong>",
              examples: "study → studies | carry → carries"
            },
            {
              rule: "<strong>Verbs ending in vowel + y:</strong> Add <strong>-s</strong> only",
              examples: "play → plays | enjoy → enjoys"
            },
            {
              rule: "<strong>Important irregular form:</strong>",
              examples: "have → has"
            }
          ]
        },
        {
          type: "text",
          heading: "Present Simple Negatives"
        },
        {
          type: "structure-table",
          headers: ["Subject", "Form", "Contraction"],
          rows: [
            ["<strong>I / You / We / They</strong>", "<strong>do not</strong> + base verb", "<strong>don't</strong>"],
            ["<strong>He / She / It</strong>", "<strong>does not</strong> + base verb", "<strong>doesn't</strong>"]
          ]
        },
        {
          type: "example-block",
          examples: [
            "I <strong>do not</strong> work on Sundays.",
            "They <strong>don't</strong> live here.",
            "She <strong>does not</strong> drive.",
            "He <strong>doesn't</strong> like coffee."
          ]
        },
        {
          type: "note",
          isWarning: true,
          content: "After do, does, don’t, or doesn’t, always use the <strong>base verb</strong>.<br><br>Correct: She does not <strong>work</strong> here.<br>Incorrect: She does not <span style=\"text-decoration: line-through;\">works</span> here."
        },
        {
          type: "text",
          heading: "Present Simple Questions"
        },
        {
          type: "structure-table",
          headers: ["Auxiliary", "Subject", "Main Verb", "Examples"],
          rows: [
            ["<strong>Do</strong>", "I / you / we / they", "base verb?", "Do you speak English?<br>Do they work here?"],
            ["<strong>Does</strong>", "he / she / it", "base verb?", "Does she live nearby?<br>Does he play football?"]
          ]
        },
        {
          type: "example-block",
          heading: "Short Answers",
          examples: [
            "Yes, I do. / No, they don't.",
            "Yes, she does. / No, he doesn't."
          ]
        },
        {
          type: "guided-check",
          prompt: "Choose the correct sentence:\n<br>A. Does he likes pizza?\n<br>B. Does he like pizza?",
          answer: "<strong>B.</strong> After \"does\", you must use the base form of the verb (\"like\")."
        }
      ]
    },
    {
      id: "present-continuous",
      title: "2. Present Continuous",
      blocks: [
        {
          type: "usage-group",
          title: "A. Actions happening now",
          examples: [
            "I am reading now.",
            "She is speaking on the phone.",
            "They are waiting outside."
          ]
        },
        {
          type: "usage-group",
          title: "B. Actions happening around the present",
          explanation: "The activity may not be happening at the exact second of speaking.",
          examples: [
            "I am reading a new novel this week.",
            "She is learning Japanese.",
            "They are working on a new project."
          ]
        },
        {
          type: "usage-group",
          title: "C. Temporary situations",
          examples: [
            "I am staying with my brother this month.",
            "He is working from home today.",
            "We are using a different classroom this week."
          ]
        },
        {
          type: "guided-check",
          prompt: "Identify the meaning:<br>They are staying with friends this week.",
          answer: "The situation is temporary, so the present continuous is used."
        },
        {
          type: "usage-group",
          title: "D. Changing situations",
          examples: [
            "The weather is getting warmer.",
            "Prices are increasing.",
            "Your English is improving."
          ]
        },
        {
          type: "usage-group",
          title: "E. Near-future arrangements",
          explanation: "The present continuous can describe a future arrangement that has already been planned.",
          examples: [
            "I am meeting my teacher tomorrow.",
            "We are having dinner with them tonight.",
            "She is travelling to Bandung this weekend."
          ]
        },
        {
          type: "text",
          heading: "Present Continuous Form (Affirmative)",
          content: "Subject + **am/is/are** + **verb-ing**"
        },
        {
          type: "structure-table",
          headers: ["Subject", "Be Verb", "Contraction", "Example"],
          rows: [
            ["<strong>I</strong>", "am", "I'm", "I <strong>am studying</strong>."],
            ["<strong>He / She / It</strong>", "is", "he's / she's / it's", "She <strong>is working</strong>."],
            ["<strong>You / We / They</strong>", "are", "you're / we're / they're", "They <strong>are talking</strong>."]
          ]
        },
        {
          type: "note",
          content: "The present continuous <strong>always</strong> needs am, is, or are.<br><br>Correct: They <strong>are playing</strong> football.<br>Incorrect: They <span style=\"text-decoration: line-through;\">playing</span> football."
        },
        {
          type: "text",
          heading: "Present Continuous Negatives",
          content: "Subject + **am/is/are not** + **verb-ing**"
        },
        {
          type: "example-block",
          examples: [
            "I <strong>am not</strong> sleeping.",
            "She <strong>is not (isn't)</strong> working today.",
            "They <strong>are not (aren't)</strong> watching television."
          ]
        },
        {
          type: "text",
          heading: "Present Continuous Questions",
          content: "**Am/Is/Are** + subject + **verb-ing**?"
        },
        {
          type: "structure-table",
          headers: ["Be Verb", "Subject", "Verb-ing", "Examples"],
          rows: [
            ["Am", "I", "speaking?", "Am I speaking too quickly?"],
            ["Is", "she / he / it", "working?", "Is she working?"],
            ["Are", "you / we / they", "listening?", "Are you listening?<br>Are they coming?"]
          ]
        },
        {
          type: "example-block",
          heading: "Short Answers",
          examples: [
            "Yes, I am.",
            "No, she isn't.",
            "Yes, they are.",
            "No, we aren't."
          ]
        },
        {
          type: "spelling-rules",
          heading: "How to Add -ing",
          rules: [
            {
              rule: "<strong>Most verbs:</strong> Add <strong>-ing</strong>",
              examples: "work → working | read → reading | play → playing"
            },
            {
              rule: "<strong>Verbs ending in silent -e:</strong> Remove the -e and add <strong>-ing</strong>",
              examples: "make → making | write → writing | dance → dancing"
            },
            {
              rule: "<strong>Verbs ending in -ie:</strong> Change -ie to -y and add <strong>-ing</strong>",
              examples: "lie → lying | die → dying"
            },
            {
              rule: "<strong>Short verbs ending consonant-vowel-consonant:</strong> Double the final consonant",
              examples: "run → running | sit → sitting | stop → stopping"
            }
          ]
        },
        {
          type: "guided-check",
          prompt: "Choose the better sentence:\n<br>A. She works now.\n<br>B. She is working now.",
          answer: "<strong>B.</strong> “Now” shows that the action is happening at this moment."
        }
      ]
    },
    {
      id: "time-expressions",
      title: "4. Time Expressions",
      blocks: [
        {
          type: "two-column-list",
          columns: [
            {
              title: "Present Simple Expressions",
              items: ["always", "usually", "often", "sometimes", "rarely", "never", "every day", "every week", "on Mondays", "once a month"]
            },
            {
              title: "Present Continuous Expressions",
              items: ["now", "right now", "at the moment", "currently", "today", "this week", "these days", "Look!", "Listen!"]
            }
          ]
        },
        {
          type: "note",
          isWarning: true,
          content: "Time expressions are useful clues, but they do not automatically decide the tense. Always consider the meaning."
        }
      ]
    },
    {
      id: "stative-verbs",
      title: "5. Verbs We Do Not Usually Use in the Continuous Form",
      blocks: [
        {
          type: "text",
          content: "Some verbs describe states, feelings, possession, thoughts, or senses rather than visible actions. We normally use these verbs in the **present simple**."
        },
        {
          type: "pill-list",
          heading: "Common Stative Verbs",
          items: ["know", "understand", "believe", "remember", "want", "need", "like", "love", "hate", "prefer", "own", "belong"]
        },
        {
          type: "example-block",
          examples: [
            "<strong>Correct:</strong> I understand the question.",
            "<strong style=\"color: #E66BFF;\">Usually incorrect:</strong> <span style=\"text-decoration: line-through;\">I am understanding the question.</span>",
            "<br><strong>Correct:</strong> She wants some water.",
            "<strong style=\"color: #E66BFF;\">Usually incorrect:</strong> <span style=\"text-decoration: line-through;\">She is wanting some water.</span>",
            "<br><strong>Correct:</strong> They own a house.",
            "<strong style=\"color: #E66BFF;\">Usually incorrect:</strong> <span style=\"text-decoration: line-through;\">They are owning a house.</span>",
            "<br><strong>Correct:</strong> He likes this song."
          ]
        },
        {
          type: "note",
          content: "Some verbs can have different meanings.<br><br><strong>I think this is a good idea.</strong><br>“Think” means believe or have an opinion (stative).<br><br><strong>I am thinking about my future.</strong><br>“Thinking” means considering something now (action)."
        }
      ]
    },
    {
      id: "compare",
      title: "6. Direct Comparison",
      blocks: [
        {
          type: "comparison-table",
          headers: ["Situation", "Present Simple", "Present Continuous"],
          rows: [
            ["<strong>Routine / Temp.</strong>", "I work from home every Monday.<br><em>(Routine)</em>", "I am working from home this week.<br><em>(Temporary situation)</em>"],
            ["<strong>Regular / Now</strong>", "She walks to school.<br><em>(Regular activity)</em>", "She is walking to school now.<br><em>(Happening now)</em>"],
            ["<strong>Perm. / Temp.</strong>", "They live in Jakarta.<br><em>(Permanent situation)</em>", "They are living in Jakarta for three months.<br><em>(Temporary situation)</em>"],
            ["<strong>Fact / Change</strong>", "The company sells computers.<br><em>(General fact)</em>", "The company is growing quickly.<br><em>(Current change)</em>"],
            ["<strong>Usual / Current</strong>", "He wears glasses.<br><em>(Usual appearance)</em>", "He is wearing sunglasses today.<br><em>(Current appearance)</em>"]
          ]
        },
        {
          type: "note",
          content: "The verb may be the same, but the meaning and context determine the tense."
        },
        {
          type: "guided-check",
          prompt: "Which sentence is correct?\n<br>A. Water is boiling at 100 degrees Celsius.\n<br>B. Water boils at 100 degrees Celsius.",
          answer: "<strong>B.</strong> This is a general truth/fact."
        }
      ]
    },
    {
      id: "faq",
      title: "7. Questions Students Often Ask",
      blocks: [
        {
          type: "faq-item",
          question: "Can I use the present simple with “now”?",
          answer: "Usually, actions happening now use the present continuous. However, stative verbs such as “know,” “understand,” and “want” normally remain in the present simple."
        },
        {
          type: "faq-item",
          question: "Does “today” always require the present continuous?",
          answer: "No. Use the tense that matches the meaning.<br><br><ul style=\"margin-left: 1.5rem; margin-top: 0.5rem;\"><li>I drink two cups of coffee every day, including today. <em>(Routine)</em></li><li>I am drinking tea today because there is no coffee. <em>(Temporary)</em></li></ul>"
        },
        {
          type: "faq-item",
          question: "Why do we add -s with he, she, and it?",
          answer: "In affirmative present-simple sentences, third-person singular subjects require a verb ending in -s or -es."
        },
        {
          type: "faq-item",
          question: "Why is there no -s after “does”?",
          answer: "The third-person marker is already carried by “does,” so the main verb returns to its base form.<br><br><strong>Correct:</strong> Does she work here?<br><strong>Incorrect:</strong> Does she <span style=\"text-decoration:line-through;\">works</span> here?"
        }
      ]
    },
    {
      id: "mistakes",
      title: "8. Common Mistakes",
      blocks: [
        {
          type: "mistake-list",
          mistakes: [
            {
              incorrect: "She go to work every day.",
              correct: "She goes to work every day.",
              explanation: "In the present simple, add -s or -es with he, she, and it."
            },
            {
              incorrect: "He doesn’t likes coffee.",
              correct: "He doesn’t like coffee.",
              explanation: "After “does not,” use the base form."
            },
            {
              incorrect: "Does she lives here?",
              correct: "Does she live here?",
              explanation: "After “does,” use the base form."
            },
            {
              incorrect: "They watching television now.",
              correct: "They are watching television now.",
              explanation: "The present continuous needs am, is, or are."
            },
            {
              incorrect: "I am usually going to work by bus.",
              correct: "I usually go to work by bus.",
              explanation: "Use the present simple for a regular routine."
            },
            {
              incorrect: "I am knowing the answer.",
              correct: "I know the answer.",
              explanation: "\"Know\" is a stative verb. Use the present simple."
            }
          ]
        },
        {
          type: "guided-check",
          prompt: "Can you spot the mistake in this sentence?<br>\"Listen! The birds is singing.\"",
          answer: "The subject \"birds\" is plural. It should be \"The birds <strong>are</strong> singing.\""
        }
      ]
    },
    {
      id: "summary",
      title: "Lesson Summary",
      blocks: [
        {
          type: "summary-cards",
          cards: [
            {
              title: "Present Simple",
              useFor: ["Habits", "Routines", "Repeated actions", "Facts", "Schedules", "Regular or long-term situations", "Most stative verbs"],
              forms: [
                "I/You/We/They work",
                "He/She/It works",
                "do/does not + base verb",
                "Do/Does + subject + base verb?"
              ]
            },
            {
              title: "Present Continuous",
              useFor: ["Actions happening now", "Activities around the present", "Temporary situations", "Changes", "Planned arrangements"],
              forms: [
                "am/is/are + verb-ing",
                "am/is/are not + verb-ing",
                "Am/Is/Are + subject + verb-ing?"
              ]
            }
          ]
        },
        {
          type: "note",
          content: "Final reminder: Ask yourself:<br>Is this normal and regular, or is it happening now and temporary?"
        }
      ]
    }
  ]
};
