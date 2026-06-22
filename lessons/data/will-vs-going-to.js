export const lessonData = {
  id: "will-vs-going-to",
  lab: "grammar",
  label: "GRAMMAR LESSON 03",
  level: "Elementary",
  title: "Will vs Be Going To",
  description: "Learn how to talk about future decisions, plans, promises, offers, and predictions using will and be going to.",
  metaDescription: "Learn the difference between will and be going to through clear explanations, forms, examples, comparisons, common mistakes, and guided practice.",
  backUrl: "../labs/grammar.html",
  practiceUrl: "../activities/multiple-choice.html?id=will-vs-going-to",
  practiceLabel: "Multiple-Choice Practice",
  fillPracticeUrl: "../activities/fill-in-the-blank.html?id=will-vs-going-to-fill",
  fillPracticeLabel: "Fill-in-the-Blank Practice",
  practiceText: "Practise choosing and producing the correct future form in everyday situations.",
  accent: "#4DA3FF",
  objectives: [
    "Know the main difference between will and be going to.",
    "Form affirmative, negative, and question sentences.",
    "Express instant decisions, offers, and promises.",
    "Talk about prior plans and make predictions based on evidence."
  ],
  tableOfContents: [
    { id: "main-difference", label: "Main Difference" },
    { id: "will", label: "Will" },
    { id: "form-of-will", label: "The Form of Will" },
    { id: "be-going-to", label: "Be Going To" },
    { id: "form-of-be-going-to", label: "The Form of Be Going To" },
    { id: "predictions", label: "Predictions" },
    { id: "compare-forms", label: "Compare the Forms" },
    { id: "time-expressions", label: "Time Expressions" },
    { id: "common-mistakes", label: "Common Mistakes" },
    { id: "guided-checks", label: "Check Your Understanding" },
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
              title: "Situation 1",
              sentence: "The phone is ringing. I will answer it.",
              meaning: "The speaker decides at the moment of speaking."
            },
            {
              title: "Situation 2",
              sentence: "I have already decided to study tonight. I am going to study tonight.",
              meaning: "The plan existed before the speaker started talking."
            }
          ]
        },
        {
          type: "note",
          content: "Use <strong>will</strong> for decisions made now.<br><br>Use <strong>be going to</strong> for plans decided before now."
        },
        {
          type: "comparison-cards",
          cards: [
            {
              title: "Opinion",
              sentence: "I think our team will win.",
              meaning: "Based mainly on the speaker's expectation."
            },
            {
              title: "Present evidence",
              sentence: "Look at the score. Our team is going to win.",
              meaning: "Based on evidence available now."
            }
          ]
        },
        {
          type: "text",
          content: "Both forms can describe predictions. The reason for the prediction helps us choose the form."
        },
        {
          type: "text",
          content: "Both will and be going to can describe the future, but they often express different ideas."
        },
        {
          type: "two-column-list",
          columns: [
            {
              title: "WILL",
              items: [
                "Decisions made at the moment of speaking",
                "Offers",
                "Promises",
                "Predictions based mainly on opinion or belief",
                "Future facts"
              ]
            },
            {
              title: "BE GOING TO",
              items: [
                "Plans decided before speaking",
                "Intentions",
                "Predictions based on present evidence",
                "Actions the speaker already intends to do"
              ]
            }
          ]
        },
        {
          type: "note",
          isWarning: true,
          content: "Do not choose only by looking at a time word. Think about whether the idea is a new decision, an existing plan, an opinion, or visible evidence."
        }
      ]
    },
    {
      id: "will",
      title: "Will",
      blocks: [
        {
          type: "usage-group",
          title: "A. Instant decisions",
          explanation: "Use will when someone decides what to do at the moment of speaking.",
          examples: [
            "The doorbell is ringing. I will open the door.",
            "I am thirsty. I will get some water.",
            "We do not have any bread. I will buy some."
          ]
        },
        {
          type: "note",
          content: "The decision did not exist before the conversation."
        },
        {
          type: "usage-group",
          title: "B. Offers",
          explanation: "Use will when offering to help or do something.",
          examples: [
            "I will carry that bag for you.",
            "We will help you clean the room.",
            "I will make you some tea."
          ]
        },
        {
          type: "usage-group",
          title: "C. Promises",
          examples: [
            "I will call you tonight.",
            "I will not tell anyone.",
            "We will finish the work on time."
          ]
        },
        {
          type: "usage-group",
          title: "D. Predictions based on opinion",
          explanation: "Use will when the prediction comes mainly from what someone thinks, believes, expects, or imagines.",
          examples: [
            "I think people will live longer in the future.",
            "She will probably pass the test.",
            "Maybe it will rain tomorrow.",
            "I believe the film will be successful."
          ]
        },
        {
          type: "pill-list",
          heading: "Common expressions:",
          items: [
            "I think",
            "I believe",
            "probably",
            "perhaps",
            "maybe",
            "I expect",
            "I am sure"
          ]
        },
        {
          type: "usage-group",
          title: "E. Future facts",
          examples: [
            "The sun will rise tomorrow.",
            "Next year will be 2027.",
            "The meeting will begin at ten."
          ]
        }
      ]
    },
    {
      id: "form-of-will",
      title: "How to Form Sentences with Will",
      blocks: [
        {
          type: "text",
          heading: "Affirmative",
          content: "Subject + will + base verb"
        },
        {
          type: "example-block",
          examples: [
            "I will call you.",
            "She will arrive soon.",
            "They will help us."
          ]
        },
        {
          type: "note",
          isWarning: true,
          content: "Will is followed by the base form of the verb.<br><br>Correct: She will go.<br>Incorrect: She will <span style=\"text-decoration: line-through;\">goes</span>.<br>Incorrect: She will <span style=\"text-decoration: line-through;\">to go</span>."
        },
        {
          type: "text",
          heading: "Contractions",
          content: "I will → I’ll<br>you will → you’ll<br>he will → he’ll<br>she will → she’ll<br>it will → it’ll<br>we will → we’ll<br>they will → they’ll"
        },
        {
          type: "text",
          heading: "Negative",
          content: "Subject + will not + base verb<br><br>Contraction: will not → won’t"
        },
        {
          type: "example-block",
          examples: [
            "I will not forget.",
            "She won’t be late.",
            "They will not come tonight.",
            "We won’t need a taxi."
          ]
        },
        {
          type: "text",
          heading: "Question",
          content: "Will + subject + base verb?"
        },
        {
          type: "example-block",
          examples: [
            "Will you call me?",
            "Will she come tomorrow?",
            "Will they help us?",
            "Will it rain tonight?"
          ]
        },
        {
          type: "text",
          heading: "Short answers",
          content: "Yes, I will.<br>No, I won’t.<br>Yes, she will.<br>No, they won’t."
        },
        {
          type: "text",
          heading: "Wh-Questions",
          content: "What will you do?<br>Where will they stay?<br>When will she arrive?<br>Who will help us?"
        }
      ]
    },
    {
      id: "be-going-to",
      title: "Be Going To",
      blocks: [
        {
          type: "usage-group",
          title: "A. Plans decided before speaking",
          explanation: "Use be going to when the speaker already has a plan.",
          examples: [
            "I am going to study tonight.",
            "We are going to visit Bali next month.",
            "She is going to buy a new laptop.",
            "They are going to move to a new house."
          ]
        },
        {
          type: "usage-group",
          title: "B. Intentions",
          explanation: "An intention is something a person plans or wants to do.",
          examples: [
            "I am going to learn Japanese.",
            "He is going to exercise more.",
            "We are going to save money this year."
          ]
        },
        {
          type: "usage-group",
          title: "C. Predictions based on present evidence",
          explanation: "Use be going to when something happening now makes the future result seem clear.",
          examples: [
            "Look at those dark clouds. It is going to rain.",
            "Be careful! You are going to drop those plates.",
            "The baby is tired. She is going to fall asleep.",
            "Our team is five goals ahead. We are going to win."
          ]
        },
        {
          type: "note",
          content: "The evidence is visible or available now."
        }
      ]
    },
    {
      id: "form-of-be-going-to",
      title: "How to Form Sentences with Be Going To",
      blocks: [
        {
          type: "text",
          content: "Be going to needs the correct form of be:<br>I + am<br>he, she, it + is<br>you, we, they + are"
        },
        {
          type: "text",
          heading: "Affirmative",
          content: "Subject + am/is/are + going to + base verb"
        },
        {
          type: "example-block",
          examples: [
            "I am going to cook dinner.",
            "She is going to study.",
            "We are going to travel."
          ]
        },
        {
          type: "text",
          heading: "Contractions",
          content: "I am → I’m<br>he is → he’s<br>she is → she’s<br>it is → it’s<br>you are → you’re<br>we are → we’re<br>they are → they’re"
        },
        {
          type: "text",
          heading: "Negative",
          content: "Subject + am/is/are not + going to + base verb"
        },
        {
          type: "example-block",
          examples: [
            "I am not going to stay.",
            "He is not going to drive.",
            "She isn’t going to buy it.",
            "They aren’t going to travel."
          ]
        },
        {
          type: "text",
          heading: "Question",
          content: "Am/Is/Are + subject + going to + base verb?"
        },
        {
          type: "example-block",
          examples: [
            "Are you going to study?",
            "Is she going to come?",
            "Are they going to move?",
            "Am I going to need a ticket?"
          ]
        },
        {
          type: "text",
          heading: "Short answers",
          content: "Yes, I am.<br>No, I’m not.<br>Yes, she is.<br>No, she isn’t.<br>Yes, they are.<br>No, they aren’t."
        },
        {
          type: "text",
          heading: "Wh-Questions",
          content: "What are you going to do?<br>Where is she going to stay?<br>When are they going to leave?<br>Who are you going to invite?"
        },
        {
          type: "note",
          isWarning: true,
          content: "Do not remove am, is, or are.<br><br>Correct: They are going to travel.<br>Incorrect: They <span style=\"text-decoration: line-through;\">going</span> to travel."
        }
      ]
    },
    {
      id: "predictions",
      title: "Predictions",
      blocks: [
        {
          type: "text",
          content: "Both forms can make predictions.<br><br>Use will when the prediction is mainly an opinion, belief, or expectation.<br><br>Use be going to when the prediction is based on present evidence."
        },
        {
          type: "structure-table",
          headers: ["Situation", "Example", "Reason"],
          rows: [
            ["Personal opinion", "I think the film will be popular.", "This is what the speaker believes."],
            ["Visible evidence", "The cinema is completely full. The film is going to be popular.", "The speaker can see evidence now."],
            ["Personal expectation", "She will probably get the job.", "The prediction is based mainly on expectation."],
            ["Clear present sign", "She answered every question confidently. She is going to get the job.", "There is current evidence supporting the prediction."]
          ]
        },
        {
          type: "note",
          content: "In some real situations, both forms may be possible. The form shows how the speaker sees the future: as an opinion or as a result supported by present evidence."
        }
      ]
    },
    {
      id: "compare-forms",
      title: "Compare Will and Be Going To",
      blocks: [
        {
          type: "structure-table",
          headers: ["Situation", "Will", "Be going to"],
          rows: [
            ["Decision made now", "The phone is ringing. I’ll answer it.", "Not normally used for a completely spontaneous decision."],
            ["Plan decided earlier", "May sound like a new decision.", "I’m going to visit my aunt this weekend."],
            ["Offer", "I’ll carry your bag.", "Not normally used for a spontaneous offer."],
            ["Promise", "I’ll call you tonight.", "Can describe an intention, but will is more natural for a direct promise."],
            ["Prediction based on opinion", "I think it will be expensive.", "Possible in some contexts, but will is common for a simple opinion."],
            ["Prediction based on evidence", "Possible, but does not emphasize the evidence.", "Look at the price. It’s going to be expensive."]
          ]
        },
        {
          type: "comparison-cards",
          cards: [
            {
              title: "Example 1",
              sentence: "I will make dinner.",
              meaning: "The speaker has just decided."
            },
            {
              title: "Example 1",
              sentence: "I am going to make dinner.",
              meaning: "The speaker already planned it."
            }
          ]
        },
        {
          type: "comparison-cards",
          cards: [
            {
              title: "Example 2",
              sentence: "I think they will win.",
              meaning: "This is an opinion."
            },
            {
              title: "Example 2",
              sentence: "Look at the score. They are going to win.",
              meaning: "There is evidence now."
            }
          ]
        },
        {
          type: "comparison-cards",
          cards: [
            {
              title: "Example 3",
              sentence: "I’ll help you with your homework.",
              meaning: "This is an offer made now."
            },
            {
              title: "Example 3",
              sentence: "I’m going to help my brother with his homework tonight.",
              meaning: "This is an existing plan."
            }
          ]
        },
        {
          type: "comparison-cards",
          cards: [
            {
              title: "Example 4",
              sentence: "I won’t tell anyone.",
              meaning: "This is a promise."
            },
            {
              title: "Example 4",
              sentence: "I’m not going to tell them yet.",
              meaning: "This is the speaker’s current intention."
            }
          ]
        }
      ]
    },
    {
      id: "time-expressions",
      title: "Common Future-Time Expressions",
      blocks: [
        {
          type: "pill-list",
          heading: "Expressions",
          items: [
            "tomorrow",
            "tonight",
            "later",
            "soon",
            "next week",
            "next month",
            "next year",
            "this weekend",
            "in two days",
            "in the future"
          ]
        },
        {
          type: "note",
          isWarning: true,
          content: "These expressions can appear with both will and be going to. The time expression does not decide the form by itself."
        },
        {
          type: "example-block",
          examples: [
            "I will call you tomorrow.",
            "I am going to call my manager tomorrow."
          ]
        },
        {
          type: "text",
          content: "The first may be a promise or new decision.<br>The second describes an existing plan."
        }
      ]
    },
    {
      id: "common-mistakes",
      title: "Common Mistakes",
      blocks: [
        {
          type: "mistake-list",
          mistakes: [
            {
              incorrect: "She will goes tomorrow.",
              correct: "She will go tomorrow.",
              explanation: "Use the base verb after will."
            },
            {
              incorrect: "I will to help you.",
              correct: "I will help you.",
              explanation: "Do not use to between will and the main verb."
            },
            {
              incorrect: "They going to travel next week.",
              correct: "They are going to travel next week.",
              explanation: "Be going to needs am, is, or are."
            },
            {
              incorrect: "He is going to studies tonight.",
              correct: "He is going to study tonight.",
              explanation: "Use the base verb after going to."
            },
            {
              incorrect: "Are she going to come?",
              correct: "Is she going to come?",
              explanation: "Use is with she."
            },
            {
              incorrect: "Will you going to call me?",
              correct: "Will you call me?",
              explanation: "Do not combine will and be going to in the same verb phrase."
            },
            {
              incorrect: "I am go to buy a new phone.",
              correct: "I am going to buy a new phone.",
              explanation: "The complete structure is am/is/are + going to + base verb."
            },
            {
              incorrect: "She won’t comes tonight.",
              correct: "She won’t come tonight.",
              explanation: "Use the base verb after won’t."
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
          prompt: "The phone is ringing. Choose the better response.\n<br>A. I will answer it.\n<br>B. I am going to answer it yesterday.",
          answer: "<strong>A.</strong> The speaker decides at the moment of speaking."
        },
        {
          type: "guided-check",
          prompt: "We bought the tickets last week. We ___ Bali next month.",
          answer: "<strong>are going to visit</strong><br>The plan existed before the conversation."
        },
        {
          type: "guided-check",
          prompt: "Look at those clouds. It ___.",
          answer: "<strong>is going to rain</strong><br>The clouds are present evidence."
        },
        {
          type: "guided-check",
          prompt: "I think people ___ more renewable energy in the future.",
          answer: "<strong>will use</strong><br>This is a prediction based mainly on opinion."
        },
        {
          type: "guided-check",
          prompt: "Choose the correct promise.\n<br>A. I am going to not forget.\n<br>B. I won’t forget.",
          answer: "<strong>B.</strong> Will is commonly used for promises."
        },
        {
          type: "guided-check",
          prompt: "Complete the question.\n<br>___ they going to move next year?",
          answer: "<strong>Are</strong><br>Use are with they."
        },
        {
          type: "guided-check",
          prompt: "Correct the sentence.\n<br>She will studies tonight.",
          answer: "<strong>She will study tonight.</strong><br>Use the base verb after will."
        },
        {
          type: "guided-check",
          prompt: "What is the difference?\n<br>I’ll cook dinner.\n<br>I’m going to cook dinner.",
          answer: "“I’ll cook dinner” can show a decision made now. “I’m going to cook dinner” shows an existing plan or intention."
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
              title: "Will",
              useForLabel: "Use will for:",
              useFor: [
                "Decisions made now",
                "Offers",
                "Promises",
                "Predictions based mainly on opinion",
                "Future facts"
              ],
              formsLabel: "Structure:",
              forms: [
                "subject + will + base verb",
                "subject + will not/won’t + base verb",
                "will + subject + base verb?"
              ]
            },
            {
              title: "Be Going To",
              useForLabel: "Use be going to for:",
              useFor: [
                "Prior plans",
                "Intentions",
                "Predictions based on present evidence"
              ],
              formsLabel: "Structure:",
              forms: [
                "subject + am/is/are + going to + base verb",
                "subject + am/is/are not + going to + base verb",
                "am/is/are + subject + going to + base verb?"
              ]
            }
          ]
        },
        {
          type: "note",
          content: "Final reminder: Ask yourself:<br>Am I deciding now, or did I already have the plan?<br>Is this only my opinion, or can I see evidence now?"
        }
      ]
    }
  ]
};
