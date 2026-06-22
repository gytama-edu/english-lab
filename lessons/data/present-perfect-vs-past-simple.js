export const lessonData = {
  id: "present-perfect-vs-past-simple",
  lab: "grammar",
  label: "GRAMMAR LESSON 04",
  level: "Pre-Intermediate",
  title: "Present Perfect vs Past Simple",
  description: "Learn how to distinguish finished past actions from experiences, recent events, unfinished time periods, and situations connected to the present.",
  metaDescription: "Learn the difference between the present perfect and past simple through clear explanations, forms, examples, time expressions, common mistakes, and guided practice.",
  backUrl: "../labs/grammar.html",
  practiceUrl: "../activities/multiple-choice.html?id=present-perfect-vs-past-simple",
  practiceLabel: "Multiple-Choice Practice",
  fillPracticeUrl: "../activities/fill-in-the-blank.html?id=present-perfect-vs-past-simple-fill",
  fillPracticeLabel: "Fill-in-the-Blank Practice",
  practiceText: "Practise choosing and producing the correct tense in experiences, finished past events, recent actions, and continuing situations.",
  accent: "#4DA3FF",
  objectives: [
    "Identify when to use the past simple and present perfect.",
    "Form present perfect sentences with have, has, and past participles.",
    "Talk about life experiences, recent events, and continuing situations.",
    "Use time words like ever, never, just, already, yet, for, and since."
  ],
  tableOfContents: [
    { id: "main-difference", label: "Main Difference" },
    { id: "past-simple-review", label: "Past Simple Review" },
    { id: "present-perfect", label: "Present Perfect" },
    { id: "past-participles", label: "Past Participles" },
    { id: "experiences", label: "Experiences" },
    { id: "recent-events", label: "Recent Events" },
    { id: "already-and-yet", label: "Already and Yet" },
    { id: "unfinished-time", label: "Unfinished Time Periods" },
    { id: "for-and-since", label: "For and Since" },
    { id: "been-and-gone", label: "Been and Gone" },
    { id: "compare-tenses", label: "Compare the Tenses" },
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
              title: "Past simple",
              sentence: "I visited Bali in 2024.",
              meaning: "The action happened at a specific finished time."
            },
            {
              title: "Present perfect",
              sentence: "I have visited Bali.",
              meaning: "This is a life experience. The exact time is not important or not stated."
            }
          ]
        },
        {
          type: "note",
          content: "Use the past simple when the finished past time is stated or clearly understood.<br><br>Use the present perfect when the action is connected to the present and no finished past time is stated."
        },
        {
          type: "comparison-cards",
          cards: [
            {
              title: "Past simple",
              sentence: "She lost her key yesterday.",
              meaning: "The sentence tells us when the action happened."
            },
            {
              title: "Present perfect",
              sentence: "She has lost her key.",
              meaning: "The key is still missing now, so there is a present result."
            }
          ]
        },
        {
          type: "two-column-list",
          columns: [
            {
              title: "PAST SIMPLE",
              items: [
                "Completed actions at a finished past time",
                "Events with a stated past time",
                "A sequence of completed past actions",
                "Past situations that are no longer true"
              ]
            },
            {
              title: "PRESENT PERFECT",
              items: [
                "Life experiences without a stated finished time",
                "Recent actions with a result now",
                "Actions during an unfinished time period",
                "Situations that began in the past and continue now",
                "Actions with just, already, and yet"
              ]
            }
          ]
        },
        {
          type: "example-block",
          heading: "Past Simple Examples",
          examples: [
            "I saw the film last night.",
            "She travelled to Japan in 2023.",
            "We finished the project yesterday.",
            "He lived in Bandung when he was a child."
          ]
        },
        {
          type: "example-block",
          heading: "Present Perfect Examples",
          examples: [
            "I have seen that film.",
            "She has just arrived.",
            "We have completed three tasks today.",
            "He has lived here for five years."
          ]
        },
        {
          type: "note",
          content: "The present perfect connects the past to the present."
        }
      ]
    },
    {
      id: "past-simple-review",
      title: "Past Simple Review",
      blocks: [
        {
          type: "text",
          content: "Use the past simple when an action happened and finished at a finished time in the past."
        },
        {
          type: "pill-list",
          heading: "Common finished-time expressions:",
          items: [
            "yesterday",
            "last night",
            "last week",
            "last year",
            "two days ago",
            "in 2022",
            "when I was a child",
            "on Monday"
          ]
        },
        {
          type: "text",
          heading: "Affirmative",
          content: "Subject + past-simple verb"
        },
        {
          type: "example-block",
          examples: [
            "I visited my grandmother yesterday.",
            "She went to work at eight.",
            "They bought a house in 2020."
          ]
        },
        {
          type: "text",
          heading: "Negative",
          content: "Subject + did not + base verb"
        },
        {
          type: "example-block",
          examples: [
            "I did not see him yesterday.",
            "She didn’t finish the work.",
            "They did not go to the meeting."
          ]
        },
        {
          type: "text",
          heading: "Question",
          content: "Did + subject + base verb?"
        },
        {
          type: "example-block",
          examples: [
            "Did you call her last night?",
            "Did she arrive on time?",
            "Did they visit Bali in 2023?"
          ]
        },
        {
          type: "note",
          isWarning: true,
          content: "After did or didn’t, use the base verb."
        }
      ]
    },
    {
      id: "present-perfect",
      title: "How to Form the Present Perfect",
      blocks: [
        {
          type: "text",
          content: "The present perfect uses: have or has + past participle"
        },
        {
          type: "structure-table",
          headers: ["Subjects with have", "Examples"],
          rows: [
            ["I", "I have finished."],
            ["you", "You have seen it."],
            ["we", "We have arrived."],
            ["they", "They have left."]
          ]
        },
        {
          type: "structure-table",
          headers: ["Subjects with has", "Examples"],
          rows: [
            ["he", "He has finished."],
            ["she", "She has seen it."],
            ["it", "It has stopped."]
          ]
        },
        {
          type: "text",
          heading: "Affirmative",
          content: "Subject + have/has + past participle"
        },
        {
          type: "example-block",
          examples: [
            "I have completed the task.",
            "She has visited Singapore.",
            "They have eaten lunch."
          ]
        },
        {
          type: "text",
          heading: "Contractions",
          content: "I have → I’ve<br>you have → you’ve<br>we have → we’ve<br>they have → they’ve<br>he has → he’s<br>she has → she’s<br>it has → it’s"
        },
        {
          type: "note",
          content: "In present-perfect sentences, he’s and she’s mean he has and she has."
        },
        {
          type: "text",
          heading: "Negative",
          content: "Subject + have not/has not + past participle<br><br>Contractions:<br>have not → haven’t<br>has not → hasn’t"
        },
        {
          type: "example-block",
          examples: [
            "I haven’t finished.",
            "She hasn’t called.",
            "They have not arrived."
          ]
        },
        {
          type: "text",
          heading: "Question",
          content: "Have/Has + subject + past participle?"
        },
        {
          type: "example-block",
          examples: [
            "Have you finished?",
            "Has she called?",
            "Have they arrived?",
            "Has he seen the film?"
          ]
        },
        {
          type: "text",
          heading: "Short answers",
          content: "Yes, I have.<br>No, I haven’t.<br>Yes, she has.<br>No, he hasn’t.<br>Yes, they have.<br>No, they haven’t."
        }
      ]
    },
    {
      id: "past-participles",
      title: "Past Participles",
      blocks: [
        {
          type: "text",
          content: "The present perfect needs the past participle form of the main verb."
        },
        {
          type: "text",
          heading: "Regular Verbs",
          content: "For regular verbs, the past participle is usually the same as the past-simple form."
        },
        {
          type: "structure-table",
          headers: ["Base", "Past simple", "Past participle"],
          rows: [
            ["work", "worked", "worked"],
            ["visit", "visited", "visited"],
            ["clean", "cleaned", "cleaned"],
            ["study", "studied", "studied"]
          ]
        },
        {
          type: "text",
          heading: "Irregular Verbs",
          content: "Some irregular verbs have different past-simple and past-participle forms."
        },
        {
          type: "structure-table",
          headers: ["Base", "Past simple", "Past participle"],
          rows: [
            ["go", "went", "gone"],
            ["see", "saw", "seen"],
            ["eat", "ate", "eaten"],
            ["drink", "drank", "drunk"],
            ["write", "wrote", "written"],
            ["take", "took", "taken"],
            ["do", "did", "done"],
            ["speak", "spoke", "spoken"],
            ["break", "broke", "broken"],
            ["choose", "chose", "chosen"],
            ["know", "knew", "known"],
            ["give", "gave", "given"],
            ["begin", "began", "begun"],
            ["buy", "bought", "bought"],
            ["make", "made", "made"],
            ["find", "found", "found"],
            ["read", "read", "read"],
            ["leave", "left", "left"]
          ]
        },
        {
          type: "note",
          isWarning: true,
          content: "Correct: She has gone home.<br>Incorrect: She has <span style=\"text-decoration: line-through;\">went</span> home."
        }
      ]
    },
    {
      id: "experiences",
      title: "Life Experiences",
      blocks: [
        {
          type: "text",
          content: "Use the present perfect to talk about experiences at any time before now when the exact time is not important."
        },
        {
          type: "example-block",
          examples: [
            "I have visited Malaysia.",
            "She has ridden a horse.",
            "They have never seen snow.",
            "We have tried Korean food."
          ]
        },
        {
          type: "text",
          heading: "Ever",
          content: "Use ever mainly in questions about experiences."
        },
        {
          type: "example-block",
          examples: [
            "Have you ever travelled abroad?",
            "Has she ever met a famous person?",
            "Have they ever eaten sushi?"
          ]
        },
        {
          type: "text",
          heading: "Never",
          content: "Never means at no time before now."
        },
        {
          type: "example-block",
          examples: [
            "I have never flown in a helicopter.",
            "He has never visited Europe.",
            "We have never tried that restaurant."
          ]
        },
        {
          type: "note",
          isWarning: true,
          content: "Do not use a specific finished past time with the present perfect.<br><br>Incorrect: I have visited Bali <span style=\"text-decoration: line-through;\">last year</span>.<br>Correct: I visited Bali last year.<br>Correct: I have visited Bali."
        }
      ]
    },
    {
      id: "recent-events",
      title: "Recent Events and Present Results",
      blocks: [
        {
          type: "text",
          content: "Use the present perfect when a past action has an important result now."
        },
        {
          type: "example-block",
          examples: [
            "I have lost my wallet.<br><span class=\"lesson-hint\">Result: I do not have it now.</span>",
            "She has broken her glasses.<br><span class=\"lesson-hint\">Result: The glasses are broken now.</span>",
            "We have finished the project.<br><span class=\"lesson-hint\">Result: The project is complete now.</span>",
            "He has gone home.<br><span class=\"lesson-hint\">Result: He is not here now.</span>"
          ]
        },
        {
          type: "text",
          heading: "Just",
          content: "Use just for something that happened a very short time ago.<br><br>Place just between have/has and the past participle.<br>Structure: have/has + just + past participle"
        },
        {
          type: "example-block",
          examples: [
            "She has just arrived.",
            "I have just finished lunch.",
            "They have just left."
          ]
        }
      ]
    },
    {
      id: "already-and-yet",
      title: "Already and Yet",
      blocks: [
        {
          type: "text",
          heading: "Already",
          content: "Use already when something happened earlier than expected or before now.<br>It usually appears in affirmative sentences.<br><br>Common position: have/has + already + past participle"
        },
        {
          type: "example-block",
          examples: [
            "I have already eaten.",
            "She has already finished.",
            "They have already booked the tickets."
          ]
        },
        {
          type: "text",
          heading: "Yet",
          content: "Use yet mainly in negative sentences and questions.<br>It normally appears at the end."
        },
        {
          type: "example-block",
          examples: [
            "I haven’t finished yet.",
            "She hasn’t called yet.",
            "Have they arrived yet?",
            "Has he completed the task yet?"
          ]
        },
        {
          type: "structure-table",
          headers: ["Word", "Meaning"],
          rows: [
            ["Already", "The action has happened."],
            ["Yet in a question", "Has the action happened?"],
            ["Yet in a negative", "The action has not happened, but it may happen later."]
          ]
        }
      ]
    },
    {
      id: "unfinished-time",
      title: "Unfinished Time Periods",
      blocks: [
        {
          type: "text",
          content: "Use the present perfect for actions during a time period that is still continuing."
        },
        {
          type: "example-block",
          examples: [
            "I have had two cups of coffee today.",
            "She has attended three meetings this week.",
            "We have watched four films this month.",
            "They have travelled twice this year."
          ]
        },
        {
          type: "comparison-cards",
          cards: [
            {
              title: "Today is still continuing:",
              sentence: "I have spoken to three students today.",
              meaning: ""
            },
            {
              title: "Yesterday is finished:",
              sentence: "I spoke to three students yesterday.",
              meaning: ""
            }
          ]
        },
        {
          type: "comparison-cards",
          cards: [
            {
              title: "This week is still continuing:",
              sentence: "We have completed two activities this week.",
              meaning: ""
            },
            {
              title: "Last week is finished:",
              sentence: "We completed two activities last week.",
              meaning: ""
            }
          ]
        },
        {
          type: "note",
          content: "A time expression such as today, this week, or this year can use the present perfect when the period is not finished."
        }
      ]
    },
    {
      id: "for-and-since",
      title: "For and Since",
      blocks: [
        {
          type: "text",
          content: "Use the present perfect for a situation that started in the past and continues now."
        },
        {
          type: "text",
          heading: "For",
          content: "Use for with a length of time.<br>Examples: for two hours, for three days, for six months, for a long time."
        },
        {
          type: "example-block",
          examples: [
            "I have lived here for five years.",
            "She has worked there for six months.",
            "They have known each other for a long time."
          ]
        },
        {
          type: "text",
          heading: "Since",
          content: "Use since with the starting point.<br>Examples: since Monday, since 2022, since January, since I was a child."
        },
        {
          type: "example-block",
          examples: [
            "I have lived here since 2021.",
            "She has worked there since January.",
            "We have known each other since school."
          ]
        },
        {
          type: "structure-table",
          headers: ["Word", "Usage"],
          rows: [
            ["For", "Answers “How long?”"],
            ["Since", "Answers “From when?”"]
          ]
        },
        {
          type: "note",
          isWarning: true,
          content: "Do not use ago after the present perfect.<br><br>Incorrect: I have lived here since five years <span style=\"text-decoration: line-through;\">ago</span>.<br>Better: I have lived here for five years.<br>Or: I have lived here since 2021."
        }
      ]
    },
    {
      id: "been-and-gone",
      title: "Been and Gone",
      blocks: [
        {
          type: "text",
          content: "<strong>Has gone to</strong> means the person went somewhere and is still there or has not returned.<br><br>Example: Rina has gone to the supermarket.<br>Meaning: Rina is at the supermarket or travelling there now.<br><br><strong>Has been to</strong> means the person visited the place and returned.<br><br>Example: Rina has been to the supermarket.<br>Meaning: Rina visited it and has returned."
        },
        {
          type: "example-block",
          heading: "For experiences:",
          examples: [
            "I have been to Singapore twice.",
            "He has never been to Australia."
          ]
        }
      ]
    },
    {
      id: "compare-tenses",
      title: "Compare the Tenses",
      blocks: [
        {
          type: "structure-table",
          headers: ["Situation", "Past simple", "Present perfect"],
          rows: [
            ["Finished past time", "I visited Bali last year.", "Not used with “last year.”"],
            ["Life experience", "I visited Bali in 2024.", "I have visited Bali."],
            ["Recent event with a result now", "I lost my key yesterday.", "I have lost my key."],
            ["Finished time period", "I drank two cups of coffee yesterday.", "Not normally used because yesterday is finished."],
            ["Unfinished time period", "Possible when referring to a specific completed time.", "I have drunk two cups of coffee today."],
            ["Past situation that ended", "She lived here for five years, but she moved away.", "Not appropriate if she no longer lives here."],
            ["Situation continuing now", "Does not show that it continues now.", "She has lived here for five years."]
          ]
        },
        {
          type: "comparison-cards",
          cards: [
            {
              title: "Example 1",
              sentence: "I saw that film last night.",
              meaning: "A finished action at a stated past time."
            },
            {
              title: "Example 1",
              sentence: "I have seen that film.",
              meaning: "A life experience; no specific finished time is stated."
            }
          ]
        },
        {
          type: "comparison-cards",
          cards: [
            {
              title: "Example 2",
              sentence: "She went to Paris in 2023.",
              meaning: "The trip happened at a specific time."
            },
            {
              title: "Example 2",
              sentence: "She has been to Paris.",
              meaning: "She has the experience of visiting Paris."
            }
          ]
        },
        {
          type: "comparison-cards",
          cards: [
            {
              title: "Example 3",
              sentence: "We finished three tasks yesterday.",
              meaning: "Yesterday is finished."
            },
            {
              title: "Example 3",
              sentence: "We have finished three tasks today.",
              meaning: "Today is still continuing."
            }
          ]
        },
        {
          type: "comparison-cards",
          cards: [
            {
              title: "Example 4",
              sentence: "He lived here for ten years.",
              meaning: "He probably does not live here now."
            },
            {
              title: "Example 4",
              sentence: "He has lived here for ten years.",
              meaning: "He still lives here now."
            }
          ]
        }
      ]
    },
    {
      id: "time-expressions",
      title: "Common Time Expressions",
      blocks: [
        {
          type: "two-column-list",
          columns: [
            {
              title: "PAST SIMPLE",
              items: [
                "yesterday",
                "last night",
                "last week",
                "last year",
                "two days ago",
                "in 2020",
                "when I was young"
              ]
            },
            {
              title: "PRESENT PERFECT",
              items: [
                "ever",
                "never",
                "just",
                "already",
                "yet",
                "recently",
                "so far",
                "today",
                "this week",
                "this month",
                "this year",
                "for",
                "since"
              ]
            }
          ]
        },
        {
          type: "note",
          isWarning: true,
          content: "Time expressions are helpful, but always check whether the time is finished and whether the action connects to the present."
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
              incorrect: "I have seen her yesterday.",
              correct: "I saw her yesterday.",
              explanation: "Yesterday is a finished past time, so use the past simple."
            },
            {
              incorrect: "She has went home.",
              correct: "She has gone home.",
              explanation: "The present perfect requires the past participle gone, not the past-simple form went."
            },
            {
              incorrect: "Did you ever visit Japan?",
              correct: "Have you ever visited Japan?",
              explanation: "Use the present perfect for life experiences when no finished time is stated.<br>(Note: The past simple can be correct when asking about a specific finished trip or time)."
            },
            {
              incorrect: "He have finished the work.",
              correct: "He has finished the work.",
              explanation: "Use has with he, she, and it."
            },
            {
              incorrect: "They has arrived.",
              correct: "They have arrived.",
              explanation: "Use have with they."
            },
            {
              incorrect: "I haven’t saw the film.",
              correct: "I haven’t seen the film.",
              explanation: "Use the past participle after have or has."
            },
            {
              incorrect: "She has called me last night.",
              correct: "She called me last night.",
              explanation: "Last night is a finished past time."
            },
            {
              incorrect: "We have lived here since five years.",
              correct: "We have lived here for five years.",
              explanation: "Use for with a length of time."
            },
            {
              incorrect: "I have worked here for 2022.",
              correct: "I have worked here since 2022.",
              explanation: "Use since with a starting point."
            },
            {
              incorrect: "Have you finished already?",
              correct: "Have you finished yet?",
              explanation: "Yet is common at the end of questions asking whether an expected action has happened.<br>(Note: Already can appear in questions when expressing surprise, but yet is the neutral beginner form)."
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
          prompt: "Choose the correct sentence.\n<br>A. I have visited Jakarta last week.\n<br>B. I visited Jakarta last week.",
          answer: "<strong>B.</strong> Last week is a finished past time."
        },
        {
          type: "guided-check",
          prompt: "Complete the experience question.\n<br>___ you ever travelled by plane?",
          answer: "<strong>Have</strong><br>Use the present perfect for a life experience without a stated finished time."
        },
        {
          type: "guided-check",
          prompt: "Choose the correct participle.\n<br>She has ___ the email.\n<br>A. wrote\n<br>B. written",
          answer: "<strong>B.</strong> Written is the past participle of write."
        },
        {
          type: "guided-check",
          prompt: "Choose the correct sentence.\n<br>A. I have finished the work yesterday.\n<br>B. I finished the work yesterday.",
          answer: "<strong>B.</strong> Yesterday requires the past simple."
        },
        {
          type: "guided-check",
          prompt: "Complete the recent event.\n<br>They have just ___.",
          answer: "<strong>arrived</strong><br>Just appears between have or has and the past participle."
        },
        {
          type: "guided-check",
          prompt: "Choose for or since.\n<br>She has lived here ___ 2021.",
          answer: "<strong>since</strong><br>2021 is the starting point."
        },
        {
          type: "guided-check",
          prompt: "Choose for or since.\n<br>We have known each other ___ six years.",
          answer: "<strong>for</strong><br>Six years is a length of time."
        },
        {
          type: "guided-check",
          prompt: "Choose the correct sentence.\n<br>A. He hasn’t called yet.\n<br>B. He didn’t called yet.",
          answer: "<strong>A.</strong> Yet commonly appears with the present perfect in negative sentences."
        },
        {
          type: "guided-check",
          prompt: "What is the difference?\n<br>Maya has gone to the library.\n<br>Maya has been to the library.",
          answer: "<strong>Has gone</strong> means Maya is still there or has not returned. <strong>Has been</strong> means she visited and returned."
        },
        {
          type: "guided-check",
          prompt: "Choose the correct tense.\n<br>I ___ three emails today, and the day is not finished.",
          answer: "<strong>have written</strong><br>Today is an unfinished time period, so the present perfect is appropriate."
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
              title: "Past Simple",
              useForLabel: "Use the past simple for:",
              useFor: [
                "Finished past actions",
                "Specific finished times",
                "Sequences of completed past events",
                "Past situations that no longer continue"
              ],
              formsLabel: "Structure:",
              forms: [
                "subject + past verb",
                "subject + did not + base verb",
                "did + subject + base verb?"
              ]
            },
            {
              title: "Present Perfect",
              useForLabel: "Use the present perfect for:",
              useFor: [
                "Life experiences without a stated finished time",
                "Recent actions with a present result",
                "Actions during unfinished time periods",
                "Situations continuing from the past until now",
                "Just, already, and yet"
              ],
              formsLabel: "Structure:",
              forms: [
                "subject + have/has + past participle",
                "subject + haven’t/hasn’t + past participle",
                "have/has + subject + past participle?"
              ]
            }
          ]
        },
        {
          type: "note",
          content: "Final decision questions:<br>Is the past time stated and finished?<br>Is the exact time unimportant?<br>Is the time period still continuing?<br>Does the past action have a result now?<br>Did the situation continue until the present?"
        }
      ]
    }
  ]
};
