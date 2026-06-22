export const activityData = {
    id: "fill-system-test",
    type: "fill-in-the-blank",
    lab: "grammar",
    title: "Fill-in-the-Blank System Test",
    label: "ENGINE TEST",
    description: "A private test used to verify the fill-in-the-blank engine.",
    instructions: "Type the missing answer, then check your response.",
    backUrl: "../labs/grammar.html",
    accent: "#4DA3FF",
    questions: [
        {
            id: "q1",
            prompt: "Type the word “Complete.”",
            textBefore: "Status: ",
            textAfter: "",
            acceptedAnswers: ["complete"],
            displayAnswer: "Complete",
            explanation: "The required system-test answer is “complete”."
        },
        {
            id: "q2",
            prompt: "Type the number word “three.”",
            textBefore: "The test number is ",
            textAfter: ".",
            acceptedAnswers: ["three"],
            displayAnswer: "three",
            explanation: "The required system-test answer is “three”."
        },
        {
            id: "q3",
            prompt: "Type the phrase “system ready.”",
            textBefore: "Current status: ",
            textAfter: ".",
            acceptedAnswers: ["system ready"],
            displayAnswer: "system ready",
            explanation: "The required system-test answer is “system ready”."
        }
    ]
};
