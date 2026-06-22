export const activityData = {
    id: "present-simple-vs-continuous",
    type: "multiple-choice",
    lab: "grammar",
    title: "Present Simple vs Present Continuous",
    label: "GRAMMAR EXPERIMENT 01",
    level: "Elementary",
    description: "Choose the correct tense for everyday actions, routines, and situations happening now.",
    instructions: "Read each sentence and select the correct answer.",
    backUrl: "../labs/grammar.html",
    accent: "#4DA3FF",
    questions: [
        {
            id: "q1",
            prompt: "My brother usually ___ to work by bus.",
            options: [
                "go",
                "goes",
                "is going",
                "going"
            ],
            correctAnswer: 1,
            explanation: "“Usually” shows a routine, so we use the present simple. With “My brother,” the verb takes -s."
        },
        {
            id: "q2",
            prompt: "Shh! The baby ___ right now.",
            options: [
                "sleep",
                "sleeps",
                "is sleeping",
                "sleeping"
            ],
            correctAnswer: 2,
            explanation: "“Right now” tells us the action is happening at this exact moment, so we use the present continuous."
        },
        {
            id: "q3",
            prompt: "I ___ coffee. I prefer tea.",
            options: [
                "don't drink",
                "doesn't drink",
                "am not drinking",
                "not drink"
            ],
            correctAnswer: 0,
            explanation: "Stating a general preference is a fact, so we use the present simple. With “I”, we use “don't”."
        },
        {
            id: "q4",
            prompt: "What ___ at the moment?",
            options: [
                "do you do",
                "does you do",
                "are you doing",
                "you are doing"
            ],
            correctAnswer: 2,
            explanation: "“At the moment” indicates an action happening now. We use “are you doing” for present continuous questions."
        },
        {
            id: "q5",
            prompt: "She ___ the gym twice a week.",
            options: [
                "visit",
                "visits",
                "is visiting",
                "visiting"
            ],
            correctAnswer: 1,
            explanation: "“Twice a week” shows a regular habit. The present simple with “she” requires the -s ending."
        },
        {
            id: "q6",
            prompt: "We normally wear uniforms, but today we ___ casual clothes.",
            options: [
                "wear",
                "wears",
                "are wearing",
                "wearing"
            ],
            correctAnswer: 2,
            explanation: "“Normally” describes a routine, but “today” shows a temporary action happening around now. We use the present continuous."
        },
        {
            id: "q7",
            prompt: "Water ___ at 100 degrees Celsius.",
            options: [
                "boil",
                "boils",
                "is boiling",
                "boiling"
            ],
            correctAnswer: 1,
            explanation: "This is a general scientific truth, so we always use the present simple. The subject “water” takes the -s form."
        },
        {
            id: "q8",
            prompt: "I ___ with my friend until I find a new apartment.",
            options: [
                "stay",
                "stays",
                "am staying",
                "are staying"
            ],
            correctAnswer: 2,
            explanation: "“Until I find a new apartment” shows this is a temporary situation, not a permanent home. We use the present continuous."
        },
        {
            id: "q9",
            prompt: "The train to London ___ at 9:00 AM every morning.",
            options: [
                "leave",
                "leaves",
                "is leaving",
                "leaving"
            ],
            correctAnswer: 1,
            explanation: "We use the present simple for scheduled events like train or flight timetables, even if they happen in the future."
        },
        {
            id: "q10",
            prompt: "Look! The bus ___. Let's run!",
            options: [
                "come",
                "comes",
                "is coming",
                "coming"
            ],
            correctAnswer: 2,
            explanation: "“Look!” draws attention to an action happening right now in front of the speaker. We use the present continuous."
        }
    ]
};
