export const activityData = {
    id: "present-perfect-vs-past-simple",
    type: "multiple-choice",
    lab: "grammar",
    title: "Present Perfect vs Past Simple",
    label: "GRAMMAR EXPERIMENT 06",
    level: "Pre-Intermediate",
    description: "Choose the correct tense for experiences, finished past actions, recent events, and unfinished time periods.",
    instructions: "Read each sentence and select the best answer.",
    backUrl: "../labs/grammar.html",
    accent: "#4DA3FF",
    questions: [
        {
            id: "q1",
            prompt: "I ___ that film last night.",
            options: [
                "have seen",
                "saw",
                "have saw",
                "see"
            ],
            correctAnswer: 1,
            explanation: "Last night is a specific finished past time, so use the past simple."
        },
        {
            id: "q2",
            prompt: "___ you ever visited another country?",
            options: [
                "Did",
                "Have",
                "Has",
                "Were"
            ],
            correctAnswer: 1,
            explanation: "Use the present perfect to ask about life experiences without a specific finished time."
        },
        {
            id: "q3",
            prompt: "She ___ her homework yet.",
            options: [
                "didn’t finish",
                "hasn’t finished",
                "hasn’t finish",
                "doesn’t finished"
            ],
            correctAnswer: 1,
            explanation: "Yet commonly appears with the present perfect in negative sentences. Use has not + past participle."
        },
        {
            id: "q4",
            prompt: "We ___ to Bali in 2023.",
            options: [
                "have gone",
                "went",
                "have went",
                "go"
            ],
            correctAnswer: 1,
            explanation: "In 2023 is a stated finished past time, so use the past simple."
        },
        {
            id: "q5",
            prompt: "My brother has just ___ home.",
            options: [
                "came",
                "come",
                "coming",
                "comes"
            ],
            correctAnswer: 1,
            explanation: "The present perfect requires the past participle. The past participle of come is come."
        },
        {
            id: "q6",
            prompt: "They ___ three meetings today, and it is only midday.",
            options: [
                "attended",
                "have attended",
                "has attended",
                "have attend"
            ],
            correctAnswer: 1,
            explanation: "Today is still continuing, so the present perfect is appropriate."
        },
        {
            id: "q7",
            prompt: "She ___ here for six years and still lives here now.",
            options: [
                "lived",
                "has lived",
                "has living",
                "did live"
            ],
            correctAnswer: 1,
            explanation: "The situation began in the past and continues now, so use the present perfect."
        },
        {
            id: "q8",
            prompt: "Choose the correct sentence.",
            options: [
                "I have finished the report yesterday.",
                "I finished the report yesterday.",
                "I have finish the report yesterday.",
                "I did finished the report yesterday."
            ],
            correctAnswer: 1,
            explanation: "Yesterday is a finished past time and requires the past simple."
        },
        {
            id: "q9",
            prompt: "He ___ to Singapore twice.",
            options: [
                "has been",
                "was",
                "has went",
                "did been"
            ],
            correctAnswer: 0,
            explanation: "Use has been to describe a life experience when the exact visit times are not stated."
        },
        {
            id: "q10",
            prompt: "A: Where is Ana?\nB: She ___ to the supermarket.",
            options: [
                "has gone",
                "has been",
                "went yesterday",
                "did go"
            ],
            correctAnswer: 0,
            explanation: "Has gone means Ana went there and has not returned yet."
        }
    ]
};
