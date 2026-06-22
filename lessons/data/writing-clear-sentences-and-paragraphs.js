export const lessonData = {
  id: "writing-clear-sentences-and-paragraphs",
  title: "Writing Clear Sentences and Paragraphs",
  description: "Learn how to build complete sentences and organise them into a clear paragraph with one central idea.",
  lab: "Writing Lab",
  backUrl: "../labs/writing.html",
  practiceUrl: "../activities/writing-practice.html?id=writing-clear-sentences-and-paragraphs",
  practiceLabel: "Start Writing Practice",
  accent: "var(--pink)",
  level: "Beginner",
  label: "Writing Fundamentals",
  metaDescription: "Learn how to write complete sentences, use connectors, and structure a basic paragraph in English.",
  
  tableOfContents: [
    { id: "complete-sentence", label: "What makes a complete sentence?" },
    { id: "subjects-verbs", label: "Subjects and verbs" },
    { id: "avoid-fragments", label: "Avoid sentence fragments" },
    { id: "avoid-run-ons", label: "Avoid run-on sentences" },
    { id: "clear-word-order", label: "Use clear word order" },
    { id: "one-main-idea", label: "Keep one clear main idea" },
    { id: "connectors", label: "Connect related ideas" },
    { id: "punctuation", label: "Punctuation and capitals" },
    { id: "what-is-paragraph", label: "What is a paragraph?" },
    { id: "topic-sentences", label: "Topic sentences" },
    { id: "supporting-details", label: "Supporting details" },
    { id: "unified-paragraph", label: "Keep the paragraph unified" },
    { id: "organise-details", label: "Organise details logically" },
    { id: "concluding-sentences", label: "Concluding sentences" },
    { id: "revise", label: "Revise before finishing" },
    { id: "worked-paragraph", label: "Worked paragraph" },
    { id: "common-mistakes", label: "Common mistakes" },
    { id: "writing-checklist", label: "Writing checklist" },
    { id: "guided-checks", label: "Guided Checks" }
  ],

  sections: [
    {
      id: "complete-sentence",
      title: "What makes a complete sentence?",
      blocks: [
        {
          type: "text",
          content: "A complete sentence communicates a complete idea."
        },
        {
          type: "text",
          content: "It normally needs:"
        },
        {
          type: "pill-list",
          items: [
            "A subject",
            "A verb",
            "A complete meaning"
          ]
        },
        {
          type: "text",
          heading: "Example:",
          content: "The students arrived."
        },
        {
          type: "text",
          content: "<strong>Subject:</strong> The students<br><strong>Verb:</strong> arrived"
        },
        {
          type: "text",
          heading: "Incomplete:",
          content: "Because the students arrived."
        },
        {
          type: "text",
          content: "Explain that “because” makes the reader expect more information."
        },
        {
          type: "text",
          heading: "Complete:",
          content: "We started the lesson because the students arrived."
        }
      ]
    },
    {
      id: "subjects-verbs",
      title: "Subjects and verbs",
      blocks: [
        {
          type: "text",
          content: "The subject tells us who or what the sentence is about.<br>The verb tells us what happens or describes a state."
        },
        {
          type: "text",
          heading: "Examples:",
          content: "<strong>Maya teaches English.</strong><br>Subject: Maya<br>Verb: teaches"
        },
        {
          type: "text",
          content: "<strong>The classroom is quiet.</strong><br>Subject: The classroom<br>Verb: is"
        }
      ]
    },
    {
      id: "avoid-fragments",
      title: "Avoid sentence fragments",
      blocks: [
        {
          type: "text",
          content: "A fragment looks like a sentence but does not express a complete idea."
        },
        {
          type: "example-block",
          heading: "Fragments:",
          examples: [
            "After the meeting.",
            "Because I was tired.",
            "The new café near the station."
          ]
        },
        {
          type: "example-block",
          heading: "Possible corrections:",
          examples: [
            "We spoke after the meeting.",
            "I went home because I was tired.",
            "The new café near the station serves breakfast."
          ]
        }
      ]
    },
    {
      id: "avoid-run-ons",
      title: "Avoid run-on sentences",
      blocks: [
        {
          type: "text",
          content: "A run-on joins complete ideas without correct punctuation or a connector."
        },
        {
          type: "text",
          heading: "Run-on:",
          content: "I finished work I went home."
        },
        {
          type: "example-block",
          heading: "Corrections:",
          examples: [
            "I finished work, and I went home.",
            "I finished work. Then I went home.",
            "After I finished work, I went home."
          ]
        }
      ]
    },
    {
      id: "clear-word-order",
      title: "Use clear word order",
      blocks: [
        {
          type: "text",
          content: "The common pattern is: <strong>Subject → Verb → Object or additional information</strong>"
        },
        {
          type: "text",
          heading: "Example:",
          content: "My brother plays football every Saturday."
        },
        {
          type: "text",
          heading: "Less clear:",
          content: "Every Saturday football my brother plays."
        },
        {
          type: "text",
          content: "Time expressions can often appear at the beginning or end:"
        },
        {
          type: "example-block",
          examples: [
            "Every Saturday, my brother plays football.",
            "My brother plays football every Saturday."
          ]
        }
      ]
    },
    {
      id: "one-main-idea",
      title: "Keep one clear main idea",
      blocks: [
        {
          type: "text",
          content: "A sentence becomes difficult when too many unrelated ideas are joined."
        },
        {
          type: "text",
          heading: "Unclear:",
          content: "I went to the market and my sister likes music and the bus was late."
        },
        {
          type: "text",
          heading: "Clearer:",
          content: "I went to the market, but the bus was late.<br><br><strong>Separate idea:</strong> My sister likes music."
        }
      ]
    },
    {
      id: "connectors",
      title: "Connect related ideas",
      blocks: [
        {
          type: "two-column-list",
          columns: [
            {
              title: "Connector",
              items: [
                "and — adds information",
                "but — shows contrast",
                "so — shows a result"
              ]
            },
            {
              title: "Connector",
              items: [
                "because — gives a reason",
                "although — introduces contrast",
                "then — shows sequence"
              ]
            }
          ]
        },
        {
          type: "example-block",
          heading: "Examples:",
          examples: [
            "I brought an umbrella because the sky looked dark.",
            "The café was crowded, but we found a table.",
            "The lesson ended, so the students packed their bags."
          ]
        }
      ]
    },
    {
      id: "punctuation",
      title: "Use punctuation and capital letters",
      blocks: [
        {
          type: "pill-list",
          items: [
            "Begin a sentence with a capital letter.",
            "End a statement with a full stop.",
            "Use a question mark for a direct question.",
            "Use commas where needed after an opening phrase.",
            "Use apostrophes carefully in common contractions."
          ]
        },
        {
          type: "example-block",
          heading: "Examples:",
          examples: [
            "After lunch, we returned to class.",
            "Where does the bus stop?",
            "I don’t usually work on Sunday."
          ]
        }
      ]
    },
    {
      id: "what-is-paragraph",
      title: "What is a paragraph?",
      blocks: [
        {
          type: "text",
          content: "A paragraph is a group of sentences about one main idea.<br><br>A clear paragraph often contains:<br>1. A topic sentence<br>2. Supporting details<br>3. A concluding sentence"
        },
        {
          type: "text",
          heading: "Example structure:",
          content: "Main idea → Explanation → Example → Additional detail → Conclusion"
        }
      ]
    },
    {
      id: "topic-sentences",
      title: "Topic sentences",
      blocks: [
        {
          type: "text",
          content: "A topic sentence introduces the paragraph’s main idea."
        },
        {
          type: "text",
          heading: "Weak topic sentence:",
          content: "There are many things."
        },
        {
          type: "text",
          heading: "Clear topic sentence:",
          content: "Walking to work has several benefits."
        },
        {
          type: "pill-list",
          heading: "A good topic sentence should be:",
          items: [
            "Clear",
            "Specific enough",
            "Connected to all supporting sentences"
          ]
        }
      ]
    },
    {
      id: "supporting-details",
      title: "Supporting details",
      blocks: [
        {
          type: "pill-list",
          heading: "Supporting sentences may provide:",
          items: [
            "Reasons",
            "Examples",
            "Explanations",
            "Facts",
            "Personal experiences",
            "Results"
          ]
        },
        {
          type: "text",
          heading: "Topic sentence:",
          content: "The community library is useful for students."
        },
        {
          type: "example-block",
          heading: "Supporting details:",
          examples: [
            "It provides free internet.",
            "It has quiet study rooms.",
            "Students can borrow books without paying."
          ]
        }
      ]
    },
    {
      id: "unified-paragraph",
      title: "Keep the paragraph unified",
      blocks: [
        {
          type: "text",
          content: "Every sentence should connect to the main idea.<br><br>Remove sentences that do not support the paragraph’s focus."
        },
        {
          type: "text",
          heading: "Topic:",
          content: "Benefits of cycling to work"
        },
        {
          type: "text",
          heading: "Relevant:",
          content: "Cycling can reduce transport costs."
        },
        {
          type: "text",
          heading: "Not relevant:",
          content: "My brother prefers action movies."
        }
      ]
    },
    {
      id: "organise-details",
      title: "Organise details logically",
      blocks: [
        {
          type: "pill-list",
          heading: "Simple organisation patterns:",
          items: [
            "First → next → finally",
            "General idea → example",
            "Reason → result",
            "Problem → solution",
            "Most important → less important"
          ]
        },
        {
          type: "text",
          heading: "Example:",
          content: "First, I check my schedule. Next, I prepare my materials. Finally, I review the lesson plan."
        }
      ]
    },
    {
      id: "concluding-sentences",
      title: "Concluding sentences",
      blocks: [
        {
          type: "text",
          content: "A concluding sentence closes the paragraph and returns to the main idea.<br><br>A conclusion should not introduce a completely new topic."
        },
        {
          type: "text",
          heading: "Topic sentence:",
          content: "Preparing meals at home can make daily life easier."
        },
        {
          type: "text",
          heading: "Possible conclusion:",
          content: "For these reasons, home cooking is a practical habit for busy people."
        }
      ]
    },
    {
      id: "revise",
      title: "Revise before finishing",
      blocks: [
        {
          type: "text",
          content: "A simple revision method:<br>1. Check the main idea.<br>2. Check each sentence is complete.<br>3. Remove unrelated information.<br>4. Improve connectors.<br>5. Check capitals and punctuation.<br>6. Read the paragraph aloud quietly or in your head.<br>7. Make the meaning clearer."
        }
      ]
    },
    {
      id: "worked-paragraph",
      title: "Worked paragraph",
      blocks: [
        {
          type: "text",
          heading: "Paragraph:",
          content: "Taking a short walk after work helps me relax. First, it gives me time away from screens and messages. I usually walk through a small park near my house, where the air is quieter than the main road. Walking also helps me think about the day and prepare for the evening. For these reasons, an evening walk has become an important part of my routine."
        },
        {
          type: "text",
          content: "<strong>Topic sentence:</strong> Taking a short walk after work helps me relax."
        },
        {
          type: "example-block",
          heading: "Supporting details:",
          examples: [
            "Time away from screens",
            "Quiet park",
            "Time to think"
          ]
        },
        {
          type: "text",
          content: "<strong>Concluding sentence:</strong> For these reasons, an evening walk has become an important part of my routine."
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
            "Writing fragments",
            "Joining too many ideas",
            "Using unclear word order",
            "Forgetting punctuation",
            "Writing a topic sentence that is too broad",
            "Adding unrelated details",
            "Repeating the same point",
            "Ending without a conclusion",
            "Introducing a new idea in the conclusion"
          ]
        }
      ]
    },
    {
      id: "writing-checklist",
      title: "Writing checklist",
      blocks: [
        {
          type: "example-block",
          heading: "For sentences:",
          examples: [
            "Is there a subject?",
            "Is there a verb?",
            "Is the idea complete?",
            "Is the word order clear?",
            "Does the sentence need a connector?",
            "Are capital letters and punctuation correct?"
          ]
        },
        {
          type: "example-block",
          heading: "For paragraphs:",
          examples: [
            "Is there one clear main idea?",
            "Is the topic sentence clear?",
            "Do the details support it?",
            "Are the sentences organised?",
            "Are connectors useful?",
            "Is there a concluding sentence?"
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
          prompt: "Which is a complete sentence?<br><br>A) Because the class ended.<br>B) The class ended at five.<br>C) After the long class.<br>D) While everyone waited.",
          answer: "B) The class ended at five.<br><br>It has a subject, a verb, and a complete meaning."
        },
        {
          type: "guided-check",
          prompt: "Choose the clearest word order.<br><br>A) In the morning coffee I drink.<br>B) I drink coffee in the morning.<br>C) Coffee in the morning drinking I.<br>D) Drink I coffee morning.",
          answer: "B) I drink coffee in the morning."
        },
        {
          type: "guided-check",
          prompt: "Choose the best connector: “The road was busy, ___ we arrived on time.”<br><br>A) because<br>B) but<br>C) so<br>D) and",
          answer: "B) but<br><br>The second idea contrasts with the first."
        },
        {
          type: "guided-check",
          prompt: "Which sentence best supports the topic “The library is useful for students”?<br><br>A) The walls are painted blue.<br>B) It offers quiet study rooms and free internet.<br>C) My cousin visited yesterday.<br>D) The bus stop is across the road.",
          answer: "B) It offers quiet study rooms and free internet."
        }
      ]
    }
  ]
};
