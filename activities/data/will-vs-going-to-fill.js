export const activityData = {
    id: "will-vs-going-to-fill",
    type: "fill-in-the-blank",
    lab: "grammar",
    title: "Will vs Be Going To: Future Forms",
    label: "GRAMMAR EXPERIMENT 05",
    level: "Elementary",
    description: "Type the correct future forms for decisions, plans, offers, promises, and predictions.",
    instructions: "Complete each sentence with the correct word or phrase.",
    backUrl: "../labs/grammar.html",
    accent: "#4DA3FF",
    questions: [
        {
            id: "q1",
            prompt: "Complete the promise.",
            textBefore: "I ",
            textAfter: " you tonight.",
            acceptedAnswers: ["will call", "'ll call", "’ll call"],
            displayAnswer: "will call",
            inputLabel: "Future promise using call",
            explanation: "Will is commonly used for promises. Use will + base verb."
        },
        {
            id: "q2",
            prompt: "Complete the prediction based on visible evidence.",
            textBefore: "Look at the glass! It ",
            textAfter: ".",
            acceptedAnswers: ["is going to fall", "'s going to fall", "’s going to fall"],
            displayAnswer: "is going to fall",
            inputLabel: "Prediction about the glass",
            explanation: "The glass is already in danger of falling, so there is present evidence."
        },
        {
            id: "q3",
            prompt: "Complete the planned action.",
            textBefore: "We ",
            textAfter: " the kitchen this weekend. We bought the paint yesterday.",
            acceptedAnswers: ["are going to paint", "'re going to paint", "’re going to paint"],
            displayAnswer: "are going to paint",
            inputLabel: "Planned action using paint",
            explanation: "Buying the paint shows that the plan existed before the conversation."
        },
        {
            id: "q4",
            prompt: "Complete the opinion-based prediction.",
            textBefore: "I think our team ",
            textAfter: ".",
            acceptedAnswers: ["will win", "'ll win", "’ll win"],
            displayAnswer: "will win",
            inputLabel: "Prediction about the team",
            explanation: "“I think” introduces a prediction based mainly on opinion."
        },
        {
            id: "q5",
            prompt: "Complete the negative promise.",
            textBefore: "She ",
            textAfter: " the meeting.",
            acceptedAnswers: ["will not forget", "won't forget", "won’t forget"],
            displayAnswer: "won’t forget",
            inputLabel: "Negative promise using forget",
            explanation: "Use will not or won’t followed by the base verb forget."
        },
        {
            id: "q6",
            prompt: "Complete the question.",
            textBefore: "",
            textAfter: " for the test tonight?",
            acceptedAnswers: ["are you going to study"],
            displayAnswer: "Are you going to study",
            inputLabel: "Question about a study plan",
            explanation: "Use are + subject + going to + base verb with you."
        },
        {
            id: "q7",
            prompt: "Complete the negative plan.",
            textBefore: "He ",
            textAfter: " a new phone this month.",
            acceptedAnswers: ["is not going to buy", "isn't going to buy", "isn’t going to buy"],
            displayAnswer: "isn’t going to buy",
            inputLabel: "Negative plan using buy",
            explanation: "Use is not going to with he, followed by the base verb buy."
        },
        {
            id: "q8",
            prompt: "Complete the offer.",
            textBefore: "I ",
            textAfter: " that bag for you.",
            acceptedAnswers: ["will carry", "'ll carry", "’ll carry"],
            displayAnswer: "will carry",
            inputLabel: "Offer using carry",
            explanation: "The speaker is offering help at the moment of speaking."
        },
        {
            id: "q9",
            prompt: "Complete the future plan.",
            textBefore: "They ",
            textAfter: " to Japan next year. They have already started saving money.",
            acceptedAnswers: ["are going to travel", "'re going to travel", "’re going to travel"],
            displayAnswer: "are going to travel",
            inputLabel: "Travel plan",
            explanation: "They already have the intention and are preparing for it."
        },
        {
            id: "q10",
            prompt: "Complete the question about a plan.",
            textBefore: "What ",
            textAfter: " after class?",
            acceptedAnswers: ["are you going to do"],
            displayAnswer: "are you going to do",
            inputLabel: "Question about a future plan",
            explanation: "The correct structure is question word + are + subject + going to + base verb."
        }
    ]
};
