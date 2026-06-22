export const lessonData = {
  id: "reading-for-specific-information-and-scanning",
  lab: "Reading Lab",
  label: "READING LESSON 02",
  level: "Elementary",
  title: "Reading for Specific Information and Scanning",
  description: "Learn how to find exact facts, numbers, and details quickly without reading every word of a text.",
  metaDescription: "Learn how to scan texts to find exact facts, numbers, and details quickly without reading every word.",
  backUrl: "../labs/reading.html",
  practiceUrl: "../activities/reading-practice.html?id=reading-for-specific-information-and-scanning",
  practiceLabel: "Start Practice",
  practiceText: "Practise scanning short texts to find exact facts, numbers, and information quickly.",
  accent: "var(--gold)",
  tableOfContents: [
    { id: "what-is-scanning", label: "What is scanning?" },
    { id: "general-reading-versus-scanning", label: "General reading versus scanning" },
    { id: "reading-the-question-first", label: "Reading the question first" },
    { id: "keywords", label: "Keywords" },
    { id: "synonyms-and-related-words", label: "Synonyms and related words" },
    { id: "layout-clues", label: "Layout clues" },
    { id: "numbers", label: "Numbers" },
    { id: "conditions", label: "Conditions" },
    { id: "negative-information", label: "Negative information" },
    { id: "nearby-context", label: "Nearby context" },
    { id: "structured-texts", label: "Structured texts" },
    { id: "two-step-scanning-method", label: "Two-step scanning method" },
    { id: "worked-example", label: "Worked example" },
    { id: "common-mistakes", label: "Common mistakes" },
    { id: "scanning-checklist", label: "Scanning checklist" },
    { id: "guided-checks", label: "Guided checks" }
  ],
  sections: [
    {
      id: "what-is-scanning",
      title: "What is scanning?",
      blocks: [
        {
          type: "text",
          content: "Scanning is a fast reading technique used to find specific information quickly, such as a name, a date, a price, or a key fact.<br><br>When you scan, you do not read every word. Your eyes move quickly over the text looking for specific visual clues."
        }
      ]
    },
    {
      id: "general-reading-versus-scanning",
      title: "General reading versus scanning",
      blocks: [
        {
          type: "text",
          content: "<strong>General reading</strong> is used to understand the main idea, follow a story, or learn a concept. You read from the beginning to the end.<br><br><strong>Scanning</strong> is used when you already know what you are looking for. You ignore information that does not match your goal."
        }
      ]
    },
    {
      id: "reading-the-question-first",
      title: "Reading the question first",
      blocks: [
        {
          type: "text",
          content: "You cannot scan successfully if you do not know what you are looking for. Always read the question before you begin scanning."
        },
        {
          type: "example-block",
          heading: "Question Types:",
          examples: [
            "<strong>When</strong> asks for a time, date, or period.",
            "<strong>Where</strong> asks for a place or location.",
            "<strong>Who</strong> asks for a person, group, or organisation.",
            "<strong>How much</strong> asks for a price or quantity."
          ]
        }
      ]
    },
    {
      id: "keywords",
      title: "Keywords",
      blocks: [
        {
          type: "text",
          content: "Identify the unique words in the question that will help you find the correct section of the text."
        },
        {
          type: "example-block",
          heading: "Example:",
          examples: [
            "<strong>Question:</strong> How much does the student discount card cost?<br><strong>Keywords to scan for:</strong> student discount, cost, £, $, price"
          ]
        }
      ]
    },
    {
      id: "synonyms-and-related-words",
      title: "Synonyms and related words",
      blocks: [
        {
          type: "text",
          content: "Writers often use synonyms instead of repeating the exact words from the question."
        },
        {
          type: "example-block",
          heading: "Examples:",
          examples: [
            "start → begin",
            "required → mandatory, must have",
            "inexpensive → cheap, low-cost",
            "children → kids, under 12s"
          ]
        }
      ]
    },
    {
      id: "layout-clues",
      title: "Layout clues",
      blocks: [
        {
          type: "text",
          content: "Use the structure of the text to guide your eyes."
        },
        {
          type: "pill-list",
          heading: "LOOK FOR:",
          items: [
            "Headings and subheadings",
            "Bullet points",
            "Bold or italic text",
            "Capital letters (for names or places)",
            "Tables and charts"
          ]
        }
      ]
    },
    {
      id: "numbers",
      title: "Numbers",
      blocks: [
        {
          type: "text",
          content: "Numbers are often very easy to spot when scanning. However, be careful if the question uses the digit format but the text uses the word format."
        },
        {
          type: "example-block",
          heading: "Examples:",
          examples: [
            "Dates: 1999, 20th May",
            "Times: 14:00, 2 PM",
            "Prices: €50, $20",
            "Word forms: fifty, two hundred"
          ]
        }
      ]
    },
    {
      id: "conditions",
      title: "Conditions",
      blocks: [
        {
          type: "text",
          content: "Watch for words that create rules or exceptions. They can change the correct answer."
        },
        {
          type: "pill-list",
          heading: "CONDITION WORDS",
          items: [
            "if",
            "unless",
            "except",
            "only",
            "must"
          ]
        },
        {
          type: "example-block",
          heading: "Example:",
          examples: [
            "<strong>Text:</strong> All staff must attend the meeting, except part-time workers.<br><strong>Question:</strong> Do part-time workers need to attend?<br><strong>Answer:</strong> No (because of the word 'except')."
          ]
        }
      ]
    },
    {
      id: "negative-information",
      title: "Negative information",
      blocks: [
        {
          type: "text",
          content: "Pay attention to negative words which completely reverse the meaning of a sentence."
        },
        {
          type: "pill-list",
          heading: "NEGATIVE WORDS",
          items: [
            "not",
            "never",
            "no longer",
            "without",
            "unable"
          ]
        }
      ]
    },
    {
      id: "nearby-context",
      title: "Nearby context",
      blocks: [
        {
          type: "text",
          content: "Once you find the keyword, you must stop scanning and read the nearby sentences carefully to confirm the answer."
        },
        {
          type: "note",
          content: "Finding the keyword is only the first step. You must understand the sentence to answer the question correctly."
        }
      ]
    },
    {
      id: "structured-texts",
      title: "Structured texts",
      blocks: [
        {
          type: "text",
          content: "Texts like timetables, menus, and forms require scanning in rows and columns rather than reading left-to-right sentences. Follow the column headers to ensure you are looking at the correct category."
        }
      ]
    },
    {
      id: "two-step-scanning-method",
      title: "Two-step scanning method",
      blocks: [
        {
          type: "text",
          content: "<strong>Step 1:</strong> Identify the keywords in the question and visualize what they look like. Also think of 1-2 synonyms.<br><strong>Step 2:</strong> Sweep your eyes over the text to locate the keyword, then stop and read that specific sentence carefully to answer the question."
        }
      ]
    },
    {
      id: "worked-example",
      title: "Worked example",
      blocks: [
        {
          type: "text",
          content: "<strong>Text:</strong> The fitness centre offers three types of membership. The Basic plan costs £30 a month and allows access to the gym before 4 PM. The Plus plan is £45 and includes evening access. The Premium plan costs £60 and allows entry at any time, plus free guest passes on weekends. Members can cancel their plan at any time without a fee, but they must provide two weeks' notice."
        },
        {
          type: "example-block",
          heading: "Questions & Scanning Process:",
          examples: [
            "<strong>1. How much is the Plus plan?</strong><br><em>Keywords:</em> Plus plan, £<br><em>Scanning result:</em> Locate 'Plus plan'. Read the sentence. Costs £45.",
            "<strong>2. Which plan includes guest passes?</strong><br><em>Keywords:</em> guest passes<br><em>Scanning result:</em> Locate 'guest passes'. Read the sentence. Premium plan.",
            "<strong>3. Is there a fee to cancel?</strong><br><em>Keywords:</em> cancel, fee<br><em>Scanning result:</em> Locate 'cancel'. Read the sentence. 'without a fee' (No).",
            "<strong>4. What condition is required to cancel?</strong><br><em>Keywords:</em> condition, cancel, must<br><em>Scanning result:</em> Locate 'must'. Read the sentence. 'provide two weeks' notice'."
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
            "Reading every word slowly instead of scanning",
            "Stopping at the first matching keyword without reading the sentence context",
            "Ignoring negative words (e.g., matching the word 'open' but missing 'not')",
            "Forgetting to look for synonyms",
            "Answering based on personal knowledge instead of the text"
          ]
        }
      ]
    },
    {
      id: "scanning-checklist",
      title: "Scanning checklist",
      blocks: [
        {
          type: "text",
          content: "• Read the question first.<br>• Identify keywords.<br>• Think of possible synonyms.<br>• Move eyes quickly over the text.<br>• Stop and read carefully when a keyword is found.<br>• Double-check for conditions or negative words."
        }
      ]
    },
    {
      id: "guided-checks",
      title: "Guided checks",
      blocks: [
        {
          type: "guided-check",
          prompt: "The library is closed on Mondays and public holidays. It opens at 9 AM from Tuesday to Friday, and at 10 AM on weekends. Question: What time does the library open on a Sunday?",
          answer: "10 AM. (Sunday is a weekend day)."
        },
        {
          type: "guided-check",
          prompt: "Passengers must show their boarding pass and passport at the gate. A driver's licence is not accepted for international flights. Question: Can a passenger use a driver's licence to board an international flight?",
          answer: "No. (The text explicitly states it is not accepted)."
        },
        {
          type: "guided-check",
          prompt: "The exhibition runs from September 15th to October 30th. Tickets are $15 for adults and $10 for seniors. Children under 5 enter free. Question: How much does a ticket cost for a 4-year-old child?",
          answer: "Free. (The child is under 5)."
        }
      ]
    }
  ]
};
