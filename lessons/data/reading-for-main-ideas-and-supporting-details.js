export const lessonData = {
  id: "reading-for-main-ideas-and-supporting-details",
  lab: "Reading Lab",
  label: "READING LESSON 01",
  level: "Elementary",
  title: "Reading for Main Ideas and Supporting Details",
  description: "Learn how to identify the central message of a text and recognise the details that explain, support, or develop it.",
  metaDescription: "Learn how to identify the central message of a text and recognise the details that explain, support, or develop it.",
  backUrl: "../labs/reading.html",
  practiceUrl: "../activities/reading-practice.html?id=reading-for-main-ideas-and-supporting-details",
  practiceLabel: "Start Practice",
  practiceText: "Practise identifying main ideas, distinguishing them from topics, and finding supporting details in short texts.",
  accent: "var(--gold)",
  tableOfContents: [
    { id: "what-is-the-main-idea", label: "What is the main idea?" },
    { id: "topic-versus-main-idea", label: "Topic versus main idea" },
    { id: "stated-main-ideas", label: "Stated main ideas" },
    { id: "implied-main-ideas", label: "Implied main ideas" },
    { id: "supporting-details", label: "Supporting details" },
    { id: "important-and-minor-details", label: "Important and minor details" },
    { id: "writer-purpose", label: "Writer purpose" },
    { id: "headings-and-first-sentences", label: "Headings and first sentences" },
    { id: "repeated-and-related-ideas", label: "Repeated and related ideas" },
    { id: "best-summaries", label: "Best summaries" },
    { id: "matching-word-distractors", label: "Matching-word distractors" },
    { id: "reading-questions-carefully", label: "Reading questions carefully" },
    { id: "practical-reading-method", label: "Practical reading method" },
    { id: "worked-example", label: "Worked example" },
    { id: "common-mistakes", label: "Common mistakes" },
    { id: "reading-checklist", label: "Reading checklist" },
    { id: "guided-checks", label: "Guided checks" }
  ],
  sections: [
    {
      id: "what-is-the-main-idea",
      title: "What is the main idea?",
      blocks: [
        {
          type: "text",
          content: "The <strong>main idea</strong> is the most important message in a text.<br><br>It answers:<br>• What is this text mainly about?<br>• What does the writer want the reader to understand?<br>• What central point connects the details?"
        },
        {
          type: "example-block",
          heading: "Example:",
          examples: [
            "<strong>Text:</strong> The local library has introduced several new services, including longer opening hours, free computer classes, and a home-delivery programme for older residents.<br><br><strong>Main idea:</strong> The library has introduced new services.<br><strong>Supporting details:</strong> Longer opening hours, free computer classes, home delivery.<br><br>The main idea is broad. Supporting details are specific."
          ]
        }
      ]
    },
    {
      id: "topic-versus-main-idea",
      title: "Topic versus main idea",
      blocks: [
        {
          type: "text",
          content: "The <strong>topic</strong> is the general subject.<br>The <strong>main idea</strong> tells the reader what the writer says about that subject."
        },
        {
          type: "example-block",
          heading: "Comparison",
          examples: [
            "<strong>Topic:</strong> Public transport <em>(This is too broad to be a complete main idea.)</em>",
            "<strong>Main idea:</strong> More residents are using public transport because bus services have improved. <em>(This tells the reader what the writer is saying about the topic.)</em>"
          ]
        }
      ]
    },
    {
      id: "stated-main-ideas",
      title: "Stated main ideas",
      blocks: [
        {
          type: "text",
          content: "Some paragraphs contain a topic sentence that states the main idea clearly. It may appear at the beginning, in the middle, or at the end."
        },
        {
          type: "example-block",
          heading: "Example:",
          examples: [
            "Small daily walks can improve both physical and mental health. Walking strengthens the heart, reduces stress, and gives people time away from screens.<br><br><strong>Main idea:</strong> Small daily walks can improve health."
          ]
        }
      ]
    },
    {
      id: "implied-main-ideas",
      title: "Implied main ideas",
      blocks: [
        {
          type: "text",
          content: "Sometimes readers must combine details to understand the implied main idea."
        },
        {
          type: "example-block",
          heading: "Example:",
          examples: [
            "The café has added larger tables, installed more power sockets, and created a quieter area near the back. More students have started studying there during the afternoon.<br><br><strong>Implied main idea:</strong> The café has become more suitable for studying."
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
          heading: "TYPES OF SUPPORTING DETAILS",
          items: [
            "Examples",
            "Reasons",
            "Facts",
            "Descriptions",
            "Results",
            "Explanations",
            "Dates, names, and numbers"
          ]
        },
        {
          type: "text",
          content: "Supporting details explain or prove the main idea."
        },
        {
          type: "example-block",
          heading: "Example:",
          examples: [
            "<strong>Main idea:</strong> The community centre has become more popular.<br><br><strong>Supporting details:</strong><br>• Membership has increased.<br>• New classes have been added.<br>• Weekend events are often full."
          ]
        }
      ]
    },
    {
      id: "important-and-minor-details",
      title: "Important and minor details",
      blocks: [
        {
          type: "text",
          content: "<strong>Important details</strong> directly support the main idea.<br><strong>Minor details</strong> may be interesting but are not central."
        },
        {
          type: "example-block",
          heading: "Example:",
          examples: [
            "The new park is popular because it has safe walking paths, a children’s play area, and shaded seating. It opened in April.<br><br><strong>Important details:</strong> Safe walking paths, play area, shaded seating.<br><strong>Minor detail:</strong> It opened in April.<br><br>The importance of a detail depends on the question."
          ]
        }
      ]
    },
    {
      id: "writer-purpose",
      title: "Writer purpose",
      blocks: [
        {
          type: "pill-list",
          heading: "COMMON PURPOSES",
          items: [
            "To inform",
            "To explain",
            "To describe",
            "To recommend",
            "To persuade",
            "To warn",
            "To invite",
            "To share an experience"
          ]
        },
        {
          type: "example-block",
          heading: "Examples:",
          examples: [
            "\"Remember to bring water and wear comfortable shoes.\"<br><strong>Purpose:</strong> To give advice or instructions.",
            "\"Our neighbourhood needs more recycling bins because the existing ones fill too quickly.\"<br><strong>Purpose:</strong> To explain a problem and suggest a need."
          ]
        }
      ]
    },
    {
      id: "headings-and-first-sentences",
      title: "Headings and first sentences",
      blocks: [
        {
          type: "text",
          content: "Headings and opening sentences can help readers predict the main idea. You should:<br>1. Read the heading.<br>2. Read the first sentence.<br>3. Look for repeated words or ideas.<br>4. Confirm the idea with the rest of the paragraph."
        },
        {
          type: "note",
          content: "<strong>Note:</strong> Do not teach yourself to choose an answer after reading only one sentence."
        }
      ]
    },
    {
      id: "repeated-and-related-ideas",
      title: "Repeated and related ideas",
      blocks: [
        {
          type: "text",
          content: "Writers often repeat important ideas using different words."
        },
        {
          type: "example-block",
          heading: "Example:",
          examples: [
            "cheap, affordable, low-cost, inexpensive<br><em>(These words may all support one main idea about price.)</em>"
          ]
        }
      ]
    },
    {
      id: "best-summaries",
      title: "Best summaries",
      blocks: [
        {
          type: "pill-list",
          heading: "A GOOD SUMMARY:",
          items: [
            "Includes the central message",
            "Covers the whole text",
            "Avoids unnecessary details",
            "Does not add new information",
            "Is not too broad",
            "Is not too narrow"
          ]
        },
        {
          type: "example-block",
          heading: "Example:",
          examples: [
            "A school started a small garden. Students grow vegetables, learn about plants, and use some of the food in cooking lessons.<br><br><strong>Best summary:</strong> A school garden helps students learn through practical activities.<br><strong>Too narrow:</strong> Students grow vegetables.<br><strong>Too broad:</strong> Schools provide education."
          ]
        }
      ]
    },
    {
      id: "matching-word-distractors",
      title: "Matching-word distractors",
      blocks: [
        {
          type: "text",
          content: "An incorrect option may repeat words from the passage but express the wrong meaning. Compare the complete idea."
        },
        {
          type: "example-block",
          heading: "Example:",
          examples: [
            "<strong>Passage:</strong> The shop is not closing permanently. It will close for two days while repairs are completed.<br><br><strong>Incorrect answer:</strong> The shop is closing permanently.<br><strong>Correct answer:</strong> The shop will close temporarily for repairs."
          ]
        }
      ]
    },
    {
      id: "reading-questions-carefully",
      title: "Reading questions carefully",
      blocks: [
        {
          type: "text",
          content: "Identify what the question asks (e.g., main idea, supporting detail, writer purpose, best summary, paragraph focus, reason, result)."
        },
        {
          type: "example-block",
          heading: "Example:",
          examples: [
            "\"Why did the organisers change the event location?\"<br>The answer must be a <strong>reason</strong>, not simply the new location."
          ]
        }
      ]
    },
    {
      id: "practical-reading-method",
      title: "Practical reading method",
      blocks: [
        {
          type: "text",
          content: "1. Preview the title.<br>2. Read the passage once for general meaning.<br>3. Identify the main idea.<br>4. Read the question.<br>5. Return to the relevant part.<br>6. Confirm the answer with evidence.<br>7. Eliminate answers that are too broad, too narrow, or unsupported."
        }
      ]
    },
    {
      id: "worked-example",
      title: "Worked example",
      blocks: [
        {
          type: "text",
          content: "<strong>Text:</strong> Many office workers remain seated for most of the day. To encourage more movement, one company introduced short walking meetings for small teams. Employees discuss simple topics while walking around a nearby park. Staff members say the meetings help them feel more energetic and often lead to more relaxed conversations. However, walking meetings are not used when documents or computers are required."
        },
        {
          type: "example-block",
          heading: "Questions & Answers:",
          examples: [
            "<strong>1. What is the text mainly about?</strong><br>A company’s use of walking meetings <em>(Explains the whole text)</em>",
            "<strong>2. Why did the company introduce walking meetings?</strong><br>To encourage workers to move more <em>(Clear reason given)</em>",
            "<strong>3. What are two reported benefits?</strong><br>Employees feel more energetic and conversations are more relaxed <em>(Direct supporting details)</em>",
            "<strong>4. When are walking meetings not suitable?</strong><br>When documents or computers are needed <em>(Clear limitation)</em>"
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
          heading: "MISTAKES TO AVOID",
          items: [
            "Choosing a detail instead of the main idea",
            "Selecting an answer that is too broad or too narrow",
            "Matching only one repeated word",
            "Ignoring the writer’s purpose",
            "Adding information not stated in the text",
            "Reading only the first sentence",
            "Treating every detail as equally important"
          ]
        }
      ]
    },
    {
      id: "reading-checklist",
      title: "Reading checklist",
      blocks: [
        {
          type: "text",
          content: "<strong>Before reading:</strong><br>• Look at the title<br>• Predict the topic<br>• Read the questions<br><br><strong>While reading:</strong><br>• Identify repeated ideas<br>• Notice topic sentences<br>• Separate main points from examples<br>• Look for reasons and results<br><br><strong>After reading:</strong><br>• Check that the answer covers the whole text<br>• Find evidence<br>• Eliminate unsupported options<br>• Review uncertain answers"
        }
      ]
    },
    {
      id: "guided-checks",
      title: "Guided checks",
      blocks: [
        {
          type: "guided-check",
          prompt: "The town has added more buses during the morning because many commuters were arriving late for work. What is the main idea?",
          answer: "The town has increased morning bus services. (Late commuters are the reason for the change, not the main idea itself.)"
        },
        {
          type: "guided-check",
          prompt: "The new study room has large desks, strong lighting, and several power sockets. Which sentence is the best summary?",
          answer: "The new study room has useful facilities for students."
        },
        {
          type: "guided-check",
          prompt: "The event moved indoors because heavy rain was expected. What detail explains the change?",
          answer: "Heavy rain was expected."
        },
        {
          type: "guided-check",
          prompt: "The writer describes three affordable ways to prepare healthy meals at home. What is the writer’s purpose?",
          answer: "To give practical advice."
        }
      ]
    }
  ]
};
