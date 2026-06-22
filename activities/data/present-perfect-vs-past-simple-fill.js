export const activityData = {
    id: "present-perfect-vs-past-simple-fill",
    type: "fill-in-the-blank",
    lab: "grammar",
    title: "Present Perfect vs Past Simple: Verb Forms",
    label: "GRAMMAR EXPERIMENT 07",
    level: "Pre-Intermediate",
    description: "Type the correct verb forms for experiences, completed actions, recent events, and continuing situations.",
    instructions: "Complete each sentence with the correct word or phrase.",
    backUrl: "../labs/grammar.html",
    accent: "#4DA3FF",
    questions: [
        {
            id: "q1",
            prompt: "Complete the finished past action.",
            textBefore: "I ",
            textAfter: " that film last night.",
            acceptedAnswers: ["saw"],
            displayAnswer: "saw",
            inputLabel: "Past form of see",
            explanation: "Last night is a finished past time, so use the past simple saw."
        },
        {
            id: "q2",
            prompt: "Complete the life-experience question.",
            textBefore: "",
            textAfter: " you ever visited Thailand?",
            acceptedAnswers: ["have", "Have"],
            displayAnswer: "Have",
            inputLabel: "Auxiliary for the experience question",
            explanation: "Use have you ever + past participle to ask about a life experience."
        },
        {
            id: "q3",
            prompt: "Complete the recent event.",
            textBefore: "She ",
            textAfter: " arrived.",
            acceptedAnswers: ["has just", "'s just", "’s just"],
            displayAnswer: "has just",
            inputLabel: "Present-perfect phrase with just",
            explanation: "Use has just before the past participle for a very recent event."
        },
        {
            id: "q4",
            prompt: "Complete the negative sentence.",
            textBefore: "We ",
            textAfter: " the project yet.",
            acceptedAnswers: ["have not finished", "haven't finished", "haven’t finished"],
            displayAnswer: "haven’t finished",
            inputLabel: "Negative present-perfect phrase",
            explanation: "Yet commonly appears in negative present-perfect sentences."
        },
        {
            id: "q5",
            prompt: "Complete the sentence with the correct past participle.",
            textBefore: "He has ",
            textAfter: " three emails.",
            acceptedAnswers: ["written"],
            displayAnswer: "written",
            inputLabel: "Past participle of write",
            explanation: "The past participle of write is written."
        },
        {
            id: "q6",
            prompt: "Complete the finished past action.",
            textBefore: "They ",
            textAfter: " to Japan in 2022.",
            acceptedAnswers: ["travelled", "traveled"],
            displayAnswer: "travelled",
            inputLabel: "Past form of travel",
            explanation: "In 2022 is a finished past time, so use the past simple."
        },
        {
            id: "q7",
            prompt: "Complete the continuing situation.",
            textBefore: "I ",
            textAfter: " here for five years.",
            acceptedAnswers: ["have lived", "'ve lived", "’ve lived"],
            displayAnswer: "have lived",
            inputLabel: "Present-perfect form of live",
            explanation: "The situation began in the past and continues now, so use the present perfect."
        },
        {
            id: "q8",
            prompt: "Complete the sentence with for or since.",
            textBefore: "She has worked here ",
            textAfter: " January.",
            acceptedAnswers: ["since"],
            displayAnswer: "since",
            inputLabel: "For or since before January",
            explanation: "January is a starting point, so use since."
        },
        {
            id: "q9",
            prompt: "Complete the sentence with for or since.",
            textBefore: "We have known each other ",
            textAfter: " ten years.",
            acceptedAnswers: ["for"],
            displayAnswer: "for",
            inputLabel: "For or since before ten years",
            explanation: "Ten years is a length of time, so use for."
        },
        {
            id: "q10",
            prompt: "Complete the sentence.",
            textBefore: "Maya ",
            textAfter: " to the library, so she is not here now.",
            acceptedAnswers: ["has gone", "'s gone", "’s gone"],
            displayAnswer: "has gone",
            inputLabel: "Present-perfect phrase showing Maya has not returned",
            explanation: "Has gone means Maya went to the library and has not returned yet."
        }
    ]
};
