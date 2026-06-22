export const activityData = {
    id: "system-test",
    type: "multiple-choice",
    lab: "grammar",
    title: "Multiple-Choice System Test",
    label: "ENGINE TEST",
    description: "A private test used to verify the activity engine.",
    instructions: "Select one answer and check your response.",
    backUrl: "../labs/grammar.html",
    accent: "#4DA3FF",
    questions: [
        {
            id: "q1",
            prompt: "Select Option B.",
            options: [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
            ],
            correctAnswer: 1,
            explanation: "Option B is the required system-test answer."
        },
        {
            id: "q2",
            prompt: "Select the third item.",
            options: [
                "First Item",
                "Second Item",
                "Third Item",
                "Fourth Item"
            ],
            correctAnswer: 2,
            explanation: "The third item is correct for this test."
        },
        {
            id: "q3",
            prompt: "Choose the word “Complete.”",
            options: [
                "Begin",
                "Progress",
                "Complete",
                "Review"
            ],
            correctAnswer: 2,
            explanation: "You selected 'Complete'."
        }
    ]
};
