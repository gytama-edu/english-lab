export const lessonData = {
  id: "past-simple-regular-irregular",
  lab: "grammar",
  label: "GRAMMAR LESSON 02",
  level: "Elementary",
  title: "Past Simple: Regular and Irregular Verbs",
  description: "Learn how to talk about completed actions in the past using regular verbs, irregular verbs, negatives, and questions.",
  metaDescription: "Learn the past simple through clear explanations of regular verbs, irregular verbs, negatives, questions, spelling rules, examples, and common mistakes.",
  backUrl: "../labs/grammar.html",
  practiceUrl: "../activities/multiple-choice.html?id=past-simple-regular-irregular",
  accent: "#4DA3FF",
  objectives: [
    "Know when to use the past simple.",
    "Form regular and irregular past verbs.",
    "Make negative sentences.",
    "Ask questions in the past simple."
  ],
  tableOfContents: [
    { id: "main-idea", label: "The Main Idea" },
    { id: "when-we-use-it", label: "When We Use It" },
    { id: "regular-verbs", label: "Regular Verbs" },
    { id: "irregular-verbs", label: "Irregular Verbs" },
    { id: "verb-be", label: "The Verb Be" },
    { id: "negative-sentences", label: "Negative Sentences" },
    { id: "questions", label: "Questions" },
    { id: "time-expressions", label: "Time Expressions" },
    { id: "compare", label: "Compare the Forms" },
    { id: "mistakes", label: "Common Mistakes" },
    { id: "summary", label: "Lesson Summary" }
  ],
  sections: [
    {
      id: "main-idea",
      title: "The Main Idea",
      blocks: [
        {
          type: "text",
          content: "Use the past simple for actions, events, and situations that were completed before now."
        },
        {
          type: "example-block",
          examples: [
            "I watched a film last night.",
            "She visited her grandmother on Sunday.",
            "They moved to Jakarta in 2022.",
            "We had breakfast at seven.",
            "He did his homework yesterday."
          ]
        },
        {
          type: "note",
          content: "The action is finished. It is not happening now."
        },
        {
          type: "comparison-cards",
          cards: [
            {
              title: "Present",
              sentence: "I live in Bekasi.",
              meaning: "This is a regular present action."
            },
            {
              title: "Past",
              sentence: "I lived in Bandung five years ago.",
              meaning: "The action happened and finished in the past."
            }
          ]
        },
        {
          type: "comparison-cards",
          cards: [
            {
              title: "Present",
              sentence: "They play football every Saturday.",
              meaning: "This is a regular present action."
            },
            {
              title: "Past",
              sentence: "They played football last Saturday.",
              meaning: "The action happened and finished in the past."
            }
          ]
        }
      ]
    },
    {
      id: "when-we-use-it",
      title: "When We Use the Past Simple",
      blocks: [
        {
          type: "usage-group",
          title: "A. Completed actions",
          explanation: "Use the past simple for an action that began and ended in the past.",
          examples: [
            "I cleaned my room yesterday.",
            "She called me last night.",
            "They arrived at nine."
          ]
        },
        {
          type: "usage-group",
          title: "B. A series of completed actions",
          explanation: "Use it for several past actions that happened one after another.",
          examples: [
            "I woke up, took a shower, ate breakfast, and left the house."
          ]
        },
        {
          type: "usage-group",
          title: "C. Past habits",
          explanation: "Use it for actions that happened regularly in the past.",
          examples: [
            "We played outside every afternoon.",
            "He walked to school when he was young.",
            "My father read to me every night."
          ]
        },
        {
          type: "usage-group",
          title: "D. Past states and situations",
          examples: [
            "She lived in Surabaya for three years.",
            "I liked that cartoon when I was a child.",
            "They owned a small restaurant."
          ]
        },
        {
          type: "usage-group",
          title: "E. Historical events and facts",
          examples: [
            "Indonesia declared independence in 1945.",
            "The first astronauts landed on the Moon in 1969.",
            "Alexander Graham Bell invented the telephone."
          ]
        }
      ]
    },
    {
      id: "regular-verbs",
      title: "Regular Verbs",
      blocks: [
        {
          type: "text",
          content: "Regular verbs usually form the past simple by adding -ed."
        },
        {
          type: "structure-table",
          headers: ["Base verb", "Past simple"],
          rows: [
            ["work", "worked"],
            ["clean", "cleaned"],
            ["watch", "watched"],
            ["visit", "visited"],
            ["start", "started"]
          ]
        },
        {
          type: "example-block",
          examples: [
            "I worked yesterday.",
            "She worked yesterday.",
            "They worked yesterday."
          ]
        },
        {
          type: "note",
          content: "Past-simple verbs do not change for he, she, or it."
        },
        {
          type: "spelling-rules",
          heading: "Regular Verb Spelling Rules",
          rules: [
            {
              rule: "<strong>Rule 1: Most verbs</strong><br>Add <strong>-ed</strong>.",
              examples: "work → worked<br>play → played<br>clean → cleaned"
            },
            {
              rule: "<strong>Rule 2: Verbs ending in -e</strong><br>Add <strong>-d</strong> only.",
              examples: "live → lived<br>love → loved<br>dance → danced"
            },
            {
              rule: "<strong>Rule 3: Verbs ending in consonant + y</strong><br>Change y to i and add <strong>-ed</strong>.",
              examples: "study → studied<br>carry → carried<br>try → tried"
            },
            {
              rule: "<strong>Rule 4: Verbs ending in vowel + y</strong><br>Add <strong>-ed</strong> normally.",
              examples: "play → played<br>enjoy → enjoyed<br>stay → stayed"
            },
            {
              rule: "<strong>Rule 5: Short consonant-vowel-consonant verbs</strong><br>Double the final consonant and add <strong>-ed</strong>.",
              examples: "stop → stopped<br>plan → planned<br>shop → shopped"
            }
          ]
        },
        {
          type: "text",
          heading: "How We Pronounce -ed",
          content: "The ending -ed has three common pronunciations."
        },
        {
          type: "two-column-list",
          columns: [
            {
              title: "/t/",
              items: ["worked", "watched", "washed", "helped"]
            },
            {
              title: "/d/",
              items: ["played", "cleaned", "lived", "called"]
            },
            {
              title: "/ɪd/",
              items: ["wanted", "needed", "started", "visited"]
            }
          ]
        },
        {
          type: "note",
          content: "The spelling is always -ed, but the pronunciation may be different."
        }
      ]
    },
    {
      id: "irregular-verbs",
      title: "Irregular Verbs",
      blocks: [
        {
          type: "text",
          content: "Irregular verbs do not follow the normal -ed rule. Their past forms must be learned."
        },
        {
          type: "structure-table",
          headers: ["Base verb", "Past simple", "Example"],
          rows: [
            ["go", "went", "We went home early."],
            ["have", "had", "She had a headache."],
            ["do", "did", "I did my homework."],
            ["see", "saw", "They saw a rainbow."],
            ["eat", "ate", "He ate breakfast."],
            ["drink", "drank", "I drank some water."],
            ["come", "came", "She came late."],
            ["take", "took", "We took the bus."],
            ["make", "made", "He made dinner."],
            ["get", "got", "They got home at ten."],
            ["give", "gave", "She gave me a book."],
            ["buy", "bought", "I bought a new bag."],
            ["bring", "brought", "He brought some food."],
            ["think", "thought", "We thought it was funny."],
            ["know", "knew", "I knew the answer."],
            ["write", "wrote", "She wrote an email."],
            ["read", "read", "They read the story."],
            ["speak", "spoke", "He spoke to the manager."],
            ["run", "ran", "The children ran outside."],
            ["sleep", "slept", "I slept for eight hours."]
          ]
        },
        {
          type: "note",
          content: "For the verb <strong>read</strong>, the spelling remains “read,” but the past pronunciation is /red/."
        },
        {
          type: "note",
          isWarning: true,
          content: "Do not add -ed to irregular verbs.<br><br>Correct: She went home.<br>Incorrect: She <span style=\"text-decoration: line-through;\">goed</span> home."
        }
      ]
    },
    {
      id: "verb-be",
      title: "The Past Simple of Be",
      blocks: [
        {
          type: "text",
          content: "The verb be has two past forms: was and were."
        },
        {
          type: "structure-table",
          headers: ["Subject", "Past Form", "Examples"],
          rows: [
            ["<strong>I / He / She / It</strong>", "was", "I was tired.<br>She was at home.<br>It was cold."],
            ["<strong>You / We / They</strong>", "were", "You were late.<br>We were busy.<br>They were happy."]
          ]
        },
        {
          type: "text",
          heading: "Negative Forms",
          content: "was not → wasn’t<br>were not → weren’t"
        },
        {
          type: "example-block",
          examples: [
            "I was not hungry.",
            "She wasn’t at work.",
            "We were not ready.",
            "They weren’t at school."
          ]
        },
        {
          type: "text",
          heading: "Questions with Be",
          content: "Was + I/he/she/it?<br>Were + you/we/they?"
        },
        {
          type: "example-block",
          examples: [
            "Was he tired?",
            "Was she at home?",
            "Were they busy?",
            "Were you at school?"
          ]
        },
        {
          type: "text",
          heading: "Short answers:",
          content: "Yes, he was.<br>No, she wasn’t.<br>Yes, they were.<br>No, we weren’t."
        },
        {
          type: "note",
          isWarning: true,
          content: "Do not use “did” with was or were.<br><br>Correct: Was she tired?<br>Incorrect: Did she be tired?"
        }
      ]
    },
    {
      id: "affirmative-sentences",
      title: "Affirmative Sentences",
      blocks: [
        {
          type: "text",
          content: "Subject + past-simple verb"
        },
        {
          type: "example-block",
          examples: [
            "I visited my aunt.",
            "He studied English.",
            "She went to the market.",
            "We watched a film.",
            "They had dinner together."
          ]
        },
        {
          type: "note",
          content: "Use the same past verb form with all subjects.<br><br>I worked.<br>He worked.<br>They worked."
        }
      ]
    },
    {
      id: "negative-sentences",
      title: "Negative Sentences",
      blocks: [
        {
          type: "text",
          content: "Subject + did not + base verb<br><br>Use did not or didn’t with every subject."
        },
        {
          type: "example-block",
          examples: [
            "I did not watch the film.",
            "She didn’t call me.",
            "He did not go to work.",
            "We didn’t understand the question.",
            "They did not buy anything."
          ]
        },
        {
          type: "note",
          isWarning: true,
          content: "After did not or didn’t, use the base verb.<br><br>Correct: She didn’t go.<br>Incorrect: She didn’t went.<br><br>Correct: He did not study.<br>Incorrect: He did not studied."
        },
        {
          type: "note",
          content: "Clarify that was and were use their own negative forms: was not and were not."
        }
      ]
    },
    {
      id: "questions",
      title: "Questions in the Past Simple",
      blocks: [
        {
          type: "text",
          content: "Did + subject + base verb?"
        },
        {
          type: "example-block",
          examples: [
            "Did you watch the film?",
            "Did she call you?",
            "Did he go to work?",
            "Did they finish the project?"
          ]
        },
        {
          type: "text",
          heading: "Short answers",
          content: "Yes, I did.<br>No, she didn’t.<br>Yes, he did.<br>No, they didn’t."
        },
        {
          type: "note",
          isWarning: true,
          content: "After did, use the base verb.<br><br>Correct: Did she go?<br>Incorrect: Did she went?"
        },
        {
          type: "text",
          heading: "Wh-Questions",
          content: "Question word + did + subject + base verb?"
        },
        {
          type: "example-block",
          examples: [
            "Where did you go?",
            "What did she buy?",
            "When did they arrive?",
            "Why did he leave?",
            "Who did you call?"
          ]
        }
      ]
    },
    {
      id: "time-expressions",
      title: "Common Past-Time Expressions",
      blocks: [
        {
          type: "pill-list",
          heading: "Time Expressions",
          items: [
            "yesterday",
            "yesterday morning",
            "last night",
            "last week",
            "last month",
            "last year",
            "two days ago",
            "three weeks ago",
            "in 2020",
            "when I was young",
            "this morning",
            "on Monday"
          ]
        },
        {
          type: "usage-group",
          title: "Ago",
          explanation: "Use ago to count backwards from now.",
          examples: [
            "I saw her two days ago.",
            "They moved here five years ago."
          ]
        },
        {
          type: "note",
          isWarning: true,
          content: "Time expressions are helpful clues, but always consider the full meaning of the sentence."
        }
      ]
    },
    {
      id: "compare",
      title: "Compare the Forms",
      blocks: [
        {
          type: "structure-table",
          headers: ["Affirmative", "Negative", "Question"],
          rows: [
            ["She visited her aunt.", "She did not visit her aunt.", "Did she visit her aunt?"],
            ["He went home.", "He did not go home.", "Did he go home?"],
            ["They were tired. (be)", "They were not tired.", "Were they tired?"]
          ]
        },
        {
          type: "note",
          content: "Only affirmative sentences normally use the past form of the main verb. After did or didn’t, the main verb returns to its base form."
        }
      ]
    },
    {
      id: "mistakes",
      title: "Common Mistakes",
      blocks: [
        {
          type: "mistake-list",
          mistakes: [
            {
              incorrect: "She go to school yesterday.",
              correct: "She went to school yesterday.",
              explanation: "The action happened in the past, so use the past form."
            },
            {
              incorrect: "They visit their grandmother last weekend.",
              correct: "They visited their grandmother last weekend.",
              explanation: "Regular verbs usually add -ed in affirmative past-simple sentences."
            },
            {
              incorrect: "He goed home early.",
              correct: "He went home early.",
              explanation: "Go is irregular. Its past form is went."
            },
            {
              incorrect: "She didn’t went to work.",
              correct: "She didn’t go to work.",
              explanation: "After didn’t, use the base verb."
            },
            {
              incorrect: "Did you watched the film?",
              correct: "Did you watch the film?",
              explanation: "After did, use the base verb."
            },
            {
              incorrect: "They was happy.",
              correct: "They were happy.",
              explanation: "Use were with they."
            },
            {
              incorrect: "Did she was tired?",
              correct: "Was she tired?",
              explanation: "Use was directly when the main verb is be. Do not use did."
            },
            {
              incorrect: "I stoped the car.",
              correct: "I stopped the car.",
              explanation: "Stop is a short consonant-vowel-consonant verb, so double the final consonant before adding -ed."
            }
          ]
        }
      ]
    },
    {
      id: "guided-checks",
      title: "Check Your Understanding",
      blocks: [
        {
          type: "guided-check",
          prompt: "Choose the correct sentence.\n<br>A. I visit my aunt yesterday.\n<br>B. I visited my aunt yesterday.",
          answer: "<strong>B.</strong> The action finished yesterday, so use the past simple."
        },
        {
          type: "guided-check",
          prompt: "Choose the correct form.\n<br>She ___ to the market last night.\n<br>A. go\n<br>B. went\n<br>C. goed",
          answer: "<strong>B.</strong> Went is the irregular past form of go."
        },
        {
          type: "guided-check",
          prompt: "Choose the correct negative sentence.\n<br>A. He didn’t ate breakfast.\n<br>B. He didn’t eat breakfast.",
          answer: "<strong>B.</strong> After didn’t, use the base verb eat."
        },
        {
          type: "guided-check",
          prompt: "Choose the correct question.\n<br>A. Did they arrive early?\n<br>B. Did they arrived early?",
          answer: "<strong>A.</strong> After did, use the base form arrive."
        },
        {
          type: "guided-check",
          prompt: "Complete the sentence.\n<br>We ___ very tired after the journey.",
          answer: "<strong>were</strong><br>Use were with we."
        },
        {
          type: "guided-check",
          prompt: "Choose the correct form.\n<br>She ___ English for two hours last night.\n<br>A. studyed\n<br>B. studied\n<br>C. studies",
          answer: "<strong>B.</strong> Study ends in consonant + y, so change y to i and add -ed."
        },
        {
          type: "guided-check",
          prompt: "What does this sentence describe?\n<br>They lived in Bali for three years.",
          answer: "It describes a finished past situation."
        },
        {
          type: "guided-check",
          prompt: "Choose the correct question.\n<br>A. Was he at school yesterday?\n<br>B. Did he be at school yesterday?",
          answer: "<strong>A.</strong> Use was directly with the verb be."
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
              title: "When to use it",
              useForLabel: "Use it for:",
              useFor: [
                "Finished past actions",
                "A sequence of completed events",
                "Past habits",
                "Past situations",
                "Historical events"
              ],
              forms: []
            },
            {
              title: "Forms",
              useForLabel: "Rules:",
              useFor: [
                "<strong>Regular verbs:</strong> usually add -ed and follow spelling rules where necessary.",
                "<strong>Irregular verbs:</strong> change form and must be learned individually.",
                "<strong>The verb be:</strong> I/he/she/it was, you/we/they were."
              ],
              formsLabel: "Sentence Structure:",
              forms: [
                "<strong>Affirmative:</strong> Subject + past verb (She worked. He went.)",
                "<strong>Negative:</strong> Subject + did not + base verb (She did not work. He did not go.)",
                "<strong>Question:</strong> Did + subject + base verb? (Did she work? Did he go?)"
              ]
            }
          ]
        },
        {
          type: "note",
          content: "Final reminder: Use the past verb in affirmative sentences. After did or didn’t, return to the base verb."
        }
      ]
    }
  ]
};
