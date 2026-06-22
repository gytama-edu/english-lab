export const activityData = {
  id: "reading-system-test",
  title: "Reading System Test",
  description: "A private test activity for the Reading Practice engine.",
  lessonId: "reading-system-test",
  lab: "Reading Lab",
  accent: "var(--gold)",
  instructions: [
    "Private system test for the reading practice engine."
  ],
  sections: [
    {
      id: "section-1",
      title: "Test Section 1",
      context: "This is a test section context.",
      passage: {
        heading: "Test Passage 1",
        paragraphs: [
          "This is the first paragraph of the first test passage.",
          "This is the second paragraph."
        ]
      },
      questions: [
        {
          id: "q1",
          type: "single-choice",
          prompt: "What is the main idea of this test passage?",
          options: [
            "It is a test passage.",
            "It is not a test passage.",
            "It is a grammar test."
          ],
          correctAnswer: "It is a test passage.",
          explanation: "The passage literally says it is a test passage."
        },
        {
          id: "q2",
          type: "short-answer",
          prompt: "What type of passage is this?",
          correctAnswer: "A test passage",
          acceptedAnswers: [
            "test passage"
          ],
          explanation: "It is a test passage."
        }
      ]
    },
    {
      id: "section-2",
      title: "Test Section 2: Structured Blocks",
      context: "This is the second test section context.",
      passage: {
        heading: "Test Passage 2",
        blocks: [
          {
            type: "heading",
            level: 3,
            text: "A List Example"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Item one",
              "Item two"
            ]
          },
          {
            type: "heading",
            level: 3,
            text: "A Table Example"
          },
          {
            type: "table",
            caption: "Table Caption Test",
            headers: ["Col 1", "Col 2"],
            rows: [
              ["Cell 1", "Cell 2"],
              ["Cell 3", "Cell 4"]
            ]
          }
        ]
      },
      questions: [
        {
          id: "q3",
          type: "single-choice",
          prompt: "Does section navigation work?",
          options: [
            "Yes",
            "No"
          ],
          correctAnswer: "Yes",
          explanation: "If you are reading this, it works."
        }
      ]
    },
    {
      id: "section-3",
      title: "Test Section 3",
      context: "This is the third test section context.",
      passage: {
        heading: "Test Passage 3",
        paragraphs: [
          "Testing the exact ten questions limit."
        ]
      },
      questions: [
        {
          id: "q4",
          type: "single-choice",
          prompt: "Q4",
          options: ["A", "B"],
          correctAnswer: "A",
          explanation: "A"
        },
        {
          id: "q5",
          type: "single-choice",
          prompt: "Q5",
          options: ["A", "B"],
          correctAnswer: "A",
          explanation: "A"
        },
        {
          id: "q6",
          type: "single-choice",
          prompt: "Q6",
          options: ["A", "B"],
          correctAnswer: "A",
          explanation: "A"
        },
        {
          id: "q7",
          type: "single-choice",
          prompt: "Q7",
          options: ["A", "B"],
          correctAnswer: "A",
          explanation: "A"
        },
        {
          id: "q8",
          type: "single-choice",
          prompt: "Q8",
          options: ["A", "B"],
          correctAnswer: "A",
          explanation: "A"
        },
        {
          id: "q9",
          type: "single-choice",
          prompt: "Q9",
          options: ["A", "B"],
          correctAnswer: "A",
          explanation: "A"
        },
        {
          id: "q10",
          type: "single-choice",
          prompt: "Q10",
          options: ["A", "B"],
          correctAnswer: "A",
          explanation: "A"
        }
      ]
    }
  ],
  completion: {
    message: "System test complete."
  }
};
