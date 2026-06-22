export const activityData = {
    id: "will-vs-going-to",
    type: "multiple-choice",
    lab: "grammar",
    title: "Will vs Be Going To",
    label: "GRAMMAR EXPERIMENT 04",
    level: "Elementary",
    description: "Choose the correct future form for decisions, plans, offers, promises, and predictions.",
    instructions: "Read each situation and select the best answer.",
    backUrl: "../labs/grammar.html",
    accent: "#4DA3FF",
    questions: [
        {
            id: "q1",
            prompt: "The phone is ringing. “I ___ it.”",
            options: [
                "answer",
                "will answer",
                "am going answer",
                "am answer"
            ],
            correctAnswer: 1,
            explanation: "The speaker decides at the moment of speaking, so we use will + base verb."
        },
        {
            id: "q2",
            prompt: "Look at those dark clouds! It ___ soon.",
            options: [
                "will raining",
                "is going to rain",
                "goes to rain",
                "is rain"
            ],
            correctAnswer: 1,
            explanation: "The dark clouds are present evidence, so be going to is the best choice."
        },
        {
            id: "q3",
            prompt: "We bought the tickets yesterday. We ___ Bali next month.",
            options: [
                "will visiting",
                "are going to visit",
                "going visit",
                "visit will"
            ],
            correctAnswer: 1,
            explanation: "The tickets show that the plan was decided before speaking."
        },
        {
            id: "q4",
            prompt: "I think people ___ more electric cars in the future.",
            options: [
                "will use",
                "are use",
                "going to using",
                "will uses"
            ],
            correctAnswer: 0,
            explanation: "“I think” introduces a prediction based mainly on opinion, so will is natural."
        },
        {
            id: "q5",
            prompt: "Do not worry. I ___ you with those boxes.",
            options: [
                "am help",
                "will help",
                "going to helping",
                "will helping"
            ],
            correctAnswer: 1,
            explanation: "The speaker is making an offer, so we use will + base verb."
        },
        {
            id: "q6",
            prompt: "She has already decided. She ___ medicine at university next year.",
            options: [
                "will studies",
                "is going to study",
                "going study",
                "is study"
            ],
            correctAnswer: 1,
            explanation: "The decision already exists, so be going to expresses the prior plan."
        },
        {
            id: "q7",
            prompt: "___ they going to move to a new house?",
            options: [
                "Is",
                "Am",
                "Are",
                "Will be"
            ],
            correctAnswer: 2,
            explanation: "Use are with the plural subject they."
        },
        {
            id: "q8",
            prompt: "“I promise I ___ late again.”",
            options: [
                "am not going be",
                "will not be",
                "will not to be",
                "not will be"
            ],
            correctAnswer: 1,
            explanation: "Will is commonly used for promises. Use will not followed by the base verb be."
        },
        {
            id: "q9",
            prompt: "Choose the correct question.",
            options: [
                "What are you going to cook tonight?",
                "What you are going to cook tonight?",
                "What will you going to cook tonight?",
                "What are you going cook tonight?"
            ],
            correctAnswer: 0,
            explanation: "The correct structure is question word + are + subject + going to + base verb."
        },
        {
            id: "q10",
            prompt: "A: Why are you carrying a camera?\nB: I ___ some photos.",
            options: [
                "will to take",
                "am going to take",
                "am take",
                "will taking"
            ],
            correctAnswer: 1,
            explanation: "The camera shows an existing intention or plan, so be going to is appropriate."
        }
    ]
};
