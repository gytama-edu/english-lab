export const activityData = {
  id: "listening-system-test",
  title: "Listening System Test",
  description: "Private test for checking listening activities logic.",
  lessonId: "listening-for-everyday-information",
  instructions: "Test the system.",
  sections: [
    {
      id: "s1",
      title: "Audio Check",
      context: "Just testing an error.",
      audio: {
        sources: [
          {
            src: "fake.mp3",
            type: "audio/mpeg"
          }
        ]
      },
      transcript: "This is fake.",
      questions: [
        {
          id: "t1",
          type: "short-answer",
          prompt: "Test short?",
          primaryAnswer: "yes",
          acceptedAlternatives: ["yes"],
          explanation: "Testing"
        },
        {
          id: "t2",
          type: "single-choice",
          prompt: "Test single?",
          options: ["yes", "no"],
          correctAnswer: "yes",
          explanation: "Testing"
        }
      ]
    }
  ],
  completion: {
    message: "Test completed."
  }
};
