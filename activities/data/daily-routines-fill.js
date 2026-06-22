export const activityData = {
    id: "daily-routines-fill",
    type: "fill-in-the-blank",
    lab: "vocabulary",
    title: "Daily Routines: Useful Phrases",
    label: "VOCABULARY EXPERIMENT 02",
    level: "Elementary",
    description: "Type useful words and phrases for daily routines and everyday activities.",
    instructions: "Complete each sentence with the correct word or phrase.",
    backUrl: "../labs/vocabulary.html",
    accent: "#4AD8C1",
    questions: [
        {
            id: "q1",
            prompt: "Complete the morning routine.",
            textBefore: "I ",
            textAfter: " at six when my alarm rings.",
            acceptedAnswers: ["wake up"],
            displayAnswer: "wake up",
            inputLabel: "Phrase meaning stop sleeping",
            explanation: "Wake up means stop sleeping and become awake."
        },
        {
            id: "q2",
            prompt: "Complete the sentence.",
            textBefore: "I wake up at six, but I ",
            textAfter: " at six fifteen.",
            acceptedAnswers: ["get up"],
            displayAnswer: "get up",
            inputLabel: "Phrase meaning leave the bed",
            explanation: "Get up means leave the bed after waking up."
        },
        {
            id: "q3",
            prompt: "Complete the collocation.",
            textBefore: "She ",
            textAfter: " before leaving her bedroom.",
            acceptedAnswers: ["makes the bed", "makes her bed"],
            displayAnswer: "makes the bed",
            inputLabel: "Routine for arranging the bed",
            explanation: "Use make the bed or make your bed."
        },
        {
            id: "q4",
            prompt: "Complete the morning phrase.",
            textBefore: "We ",
            textAfter: " at seven before going to work.",
            acceptedAnswers: ["have breakfast", "eat breakfast"],
            displayAnswer: "have breakfast",
            inputLabel: "Morning meal phrase",
            explanation: "Have breakfast is the most common routine expression. Eat breakfast is also acceptable."
        },
        {
            id: "q5",
            prompt: "Complete the work routine.",
            textBefore: "I ",
            textAfter: " to work by train every day.",
            acceptedAnswers: ["commute"],
            displayAnswer: "commute",
            inputLabel: "Verb for regular travel to work",
            explanation: "Commute means travel regularly between home and work or school."
        },
        {
            id: "q6",
            prompt: "Complete the sentence.",
            textBefore: "The students ",
            textAfter: " after studying for two hours.",
            acceptedAnswers: ["take a break", "have a break"],
            displayAnswer: "take a break",
            inputLabel: "Phrase for stopping work briefly",
            explanation: "Take a break and have a break both mean stop working or studying for a short time."
        },
        {
            id: "q7",
            prompt: "Complete the school routine.",
            textBefore: "My brother ",
            textAfter: " after school.",
            acceptedAnswers: ["does homework", "does his homework"],
            displayAnswer: "does his homework",
            inputLabel: "Phrase for completing schoolwork",
            explanation: "Use do homework, not make homework."
        },
        {
            id: "q8",
            prompt: "Complete the household task.",
            textBefore: "After dinner, I ",
            textAfter: ".",
            acceptedAnswers: ["wash the dishes", "do the dishes"],
            displayAnswer: "wash the dishes",
            inputLabel: "Phrase for cleaning plates and cups",
            explanation: "Wash the dishes is the common expression. Do the dishes is also widely used."
        },
        {
            id: "q9",
            prompt: "Complete the sentence.",
            textBefore: "I finish work at five and ",
            textAfter: ".",
            acceptedAnswers: ["go home"],
            displayAnswer: "go home",
            inputLabel: "Phrase for travelling back home",
            explanation: "Say go home without to."
        },
        {
            id: "q10",
            prompt: "Complete the evening routine.",
            textBefore: "I usually ",
            textAfter: " at eleven.",
            acceptedAnswers: ["go to bed"],
            displayAnswer: "go to bed",
            inputLabel: "Phrase for entering bed to sleep",
            explanation: "Go to bed means enter bed because you plan to sleep."
        }
    ]
};
