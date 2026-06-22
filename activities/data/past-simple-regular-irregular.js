export const activityData = {
    id: "past-simple-regular-irregular",
    type: "multiple-choice",
    lab: "grammar",
    title: "Past Simple: Regular and Irregular Verbs",
    label: "GRAMMAR EXPERIMENT 02",
    level: "Elementary",
    description: "Practise regular verbs, irregular verbs, negative sentences, and questions in the past simple.",
    instructions: "Read each sentence and select the correct answer.",
    backUrl: "../labs/grammar.html",
    accent: "#4DA3FF",
    questions: [
        {
            id: "q1",
            prompt: "I ___ my grandmother yesterday afternoon.",
            options: [
                "visit",
                "visited",
                "visiting",
                "visits"
            ],
            correctAnswer: 1,
            explanation: "“Yesterday” shows that the action finished in the past. Visit is a regular verb, so we add -ed."
        },
        {
            id: "q2",
            prompt: "We ___ to the beach last weekend.",
            options: [
                "go",
                "goed",
                "went",
                "going"
            ],
            correctAnswer: 2,
            explanation: "“Go” is irregular. Its past form is “went”."
        },
        {
            id: "q3",
            prompt: "The children ___ very tired after the long trip.",
            options: [
                "was",
                "were",
                "is",
                "be"
            ],
            correctAnswer: 1,
            explanation: "With plural subjects like “the children” (they), use the past form “were”."
        },
        {
            id: "q4",
            prompt: "I ___ the match on television last night.",
            options: [
                "not watched",
                "didn't watch",
                "don't watch",
                "didn't watched"
            ],
            correctAnswer: 1,
            explanation: "To make a negative sentence in the past simple, use “didn’t” plus the base verb."
        },
        {
            id: "q5",
            prompt: "___ you about the new project?",
            options: [
                "She called",
                "Did she called",
                "Did she call",
                "Was she call"
            ],
            correctAnswer: 2,
            explanation: "To form a question in the past simple, use “Did” followed by the subject and the base verb."
        },
        {
            id: "q6",
            prompt: "He was not hungry, so he ___ breakfast.",
            options: [
                "didn't ate",
                "doesn't eat",
                "didn't eat",
                "not ate"
            ],
            correctAnswer: 2,
            explanation: "After “didn’t,” use the base verb. The correct form is “didn’t eat,” not “didn’t ate.”"
        },
        {
            id: "q7",
            prompt: "She ___ hard for her English exam last week.",
            options: [
                "studied",
                "studyed",
                "studys",
                "studying"
            ],
            correctAnswer: 0,
            explanation: "“Study” ends in a consonant + y. Change the y to i and add -ed to get “studied”."
        },
        {
            id: "q8",
            prompt: "I lost my old phone, so I ___ a new one.",
            options: [
                "buys",
                "buyed",
                "bought",
                "buy"
            ],
            correctAnswer: 2,
            explanation: "“Buy” is an irregular verb. Its past form is “bought”."
        },
        {
            id: "q9",
            prompt: "___ happy with the results of the test?",
            options: [
                "Was they",
                "Did they be",
                "Were they",
                "Are they"
            ],
            correctAnswer: 2,
            explanation: "Use “were” directly to make a question with the verb be and the subject “they”. Do not use “did”."
        },
        {
            id: "q10",
            prompt: "I woke up early, ___ a shower, and left the house.",
            options: [
                "take",
                "taked",
                "took",
                "taking"
            ],
            correctAnswer: 2,
            explanation: "This is a sequence of past actions. “Take” is an irregular verb with the past form “took”."
        }
    ]
};
