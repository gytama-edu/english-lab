export const activityData = {
    id: "past-simple-verb-forms",
    type: "fill-in-the-blank",
    lab: "grammar",
    title: "Past Simple Verb Forms",
    label: "GRAMMAR EXPERIMENT 03",
    level: "Elementary",
    description: "Type the correct past-simple forms in sentences about completed actions and past situations.",
    instructions: "Complete each sentence with the correct past-simple word or phrase.",
    backUrl: "../labs/grammar.html",
    accent: "#4DA3FF",
    questions: [
        {
            id: "q1",
            prompt: "Complete the sentence with the past form of “visit.”",
            textBefore: "I ",
            textAfter: " my aunt yesterday.",
            acceptedAnswers: ["visited"],
            displayAnswer: "visited",
            inputLabel: "Past form of visit",
            explanation: "“Yesterday” shows that the action finished in the past. Visit is a regular verb, so we add -ed."
        },
        {
            id: "q2",
            prompt: "Complete the sentence with the past form of “go.”",
            textBefore: "We ",
            textAfter: " to the market last night.",
            acceptedAnswers: ["went"],
            displayAnswer: "went",
            inputLabel: "Past form of go",
            explanation: "Go is an irregular verb. Its past form is went."
        },
        {
            id: "q3",
            prompt: "Complete the sentence with “was” or “were.”",
            textBefore: "They ",
            textAfter: " very tired after the journey.",
            acceptedAnswers: ["were"],
            displayAnswer: "were",
            inputLabel: "Correct past form of be",
            explanation: "Use were with plural subjects such as they."
        },
        {
            id: "q4",
            prompt: "Complete the negative sentence.",
            textBefore: "He ",
            textAfter: " television last night.",
            acceptedAnswers: ["didn't watch", "did not watch"],
            displayAnswer: "didn't watch",
            inputLabel: "Negative past-simple verb phrase",
            explanation: "Use did not or didn't followed by the base verb. The correct phrase is didn't watch."
        },
        {
            id: "q5",
            prompt: "Complete the question.",
            textBefore: "",
            textAfter: " you after work?",
            acceptedAnswers: ["did she call"],
            displayAnswer: "Did she call",
            inputLabel: "Beginning of the past-simple question",
            explanation: "Past-simple questions use did + subject + base verb. The correct phrase is “Did she call.”"
        },
        {
            id: "q6",
            prompt: "Complete the sentence with the correct negative form.",
            textBefore: "I ",
            textAfter: " breakfast because I was late.",
            acceptedAnswers: ["didn't eat", "did not eat"],
            displayAnswer: "didn't eat",
            inputLabel: "Negative form of eat",
            explanation: "After didn’t, use the base verb eat, not the past form ate."
        },
        {
            id: "q7",
            prompt: "Complete the sentence with the past form of “study.”",
            textBefore: "She ",
            textAfter: " English for three hours last night.",
            acceptedAnswers: ["studied"],
            displayAnswer: "studied",
            inputLabel: "Past form of study",
            explanation: "Study ends in consonant + y, so change y to i and add -ed: studied."
        },
        {
            id: "q8",
            prompt: "Complete the sentence with the past form of “buy.”",
            textBefore: "My brother ",
            textAfter: " a new laptop last week.",
            acceptedAnswers: ["bought"],
            displayAnswer: "bought",
            inputLabel: "Past form of buy",
            explanation: "Buy is irregular. Its past form is bought."
        },
        {
            id: "q9",
            prompt: "Complete the question using the past form of “be.”",
            textBefore: "",
            textAfter: " at school yesterday?",
            acceptedAnswers: ["were they"],
            displayAnswer: "Were they",
            inputLabel: "Beginning of the question using were",
            explanation: "Use were directly with they. Questions with was or were do not use did."
        },
        {
            id: "q10",
            prompt: "Complete the sentence with the past form of “take.”",
            textBefore: "We woke up early, ",
            textAfter: " the bus, and had breakfast in town.",
            acceptedAnswers: ["took"],
            displayAnswer: "took",
            inputLabel: "Past form of take",
            explanation: "Take is irregular. Its past form is took. The sentence describes a sequence of completed past actions."
        }
    ]
};
