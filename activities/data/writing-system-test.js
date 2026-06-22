export const activityData = {
  id: "writing-system-test",
  title: "Writing Practice System Test",
  description: "Test activity for the Writing Practice engine.",
  lessonId: "writing-system-test",
  
  instructions: [
    "This is a system test for the Writing Practice engine."
  ],
  
  sections: [
    {
      id: "section-1",
      title: "Test Single Choice",
      introduction: "Testing single-choice task loading and validation.",
      tasks: [
        {
          id: "task-1",
          type: "single-choice",
          prompt: "Test question 1?",
          options: [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
          ],
          correctAnswer: "Option C",
          explanation: "Explanation for task 1."
        },
        {
          id: "task-2",
          type: "single-choice",
          prompt: "Test question 2?",
          options: [
            "True",
            "False"
          ],
          correctAnswer: "True",
          explanation: "Explanation for task 2."
        },
        {
          id: "task-3",
          type: "single-choice",
          prompt: "Test question 3?",
          options: [
            "1",
            "2",
            "3"
          ],
          correctAnswer: "2",
          explanation: "Explanation for task 3."
        },
        {
          id: "task-4",
          type: "single-choice",
          prompt: "Test question 4?",
          options: [
            "Yes",
            "No"
          ],
          correctAnswer: "No",
          explanation: "Explanation for task 4."
        },
        {
          id: "task-5",
          type: "single-choice",
          prompt: "Test question 5?",
          options: [
            "Up",
            "Down"
          ],
          correctAnswer: "Up",
          explanation: "Explanation for task 5."
        },
        {
          id: "task-6",
          type: "single-choice",
          prompt: "Test question 6?",
          options: [
            "Left",
            "Right"
          ],
          correctAnswer: "Right",
          explanation: "Explanation for task 6."
        }
      ]
    },
    {
      id: "section-2",
      title: "Test Sentence Response",
      introduction: "Testing sentence-response task loading and validation.",
      tasks: [
        {
          id: "task-7",
          type: "sentence-response",
          prompt: "Write a test sentence response.",
          guidance: "Guidance for test task 7.",
          suggestedLength: "One sentence",
          selfReview: [
            "Self-review 1",
            "Self-review 2"
          ],
          sampleResponse: "Sample sentence response 1."
        },
        {
          id: "task-8",
          type: "sentence-response",
          prompt: "Write another test sentence response.",
          guidance: "Guidance for test task 8.",
          suggestedLength: "One sentence",
          selfReview: [
            "Self-review 1",
            "Self-review 2"
          ],
          sampleResponse: "Sample sentence response 2."
        },
        {
          id: "task-9",
          type: "sentence-response",
          prompt: "Write a test planning response.",
          guidance: "Guidance for test task 9.",
          suggestedLength: "Short notes",
          selfReview: [
            "Self-review 1",
            "Self-review 2"
          ],
          sampleResponse: "Sample planning response."
        }
      ]
    },
    {
      id: "section-3",
      title: "Test Paragraph Response",
      introduction: "Testing paragraph-response task loading and validation.",
      tasks: [
        {
          id: "task-10",
          type: "paragraph-response",
          prompt: "Write a test paragraph response.",
          guidance: "Guidance for test task 10.",
          selfReview: [
            "Self-review 1",
            "Self-review 2",
            "Self-review 3"
          ],
          sampleResponse: "This is a sample paragraph response. It contains multiple sentences to test the rendering of a paragraph-style sample block. The layout should preserve normal spacing and formatting."
        }
      ]
    }
  ],
  completion: {
    message: "System test complete."
  }
};
