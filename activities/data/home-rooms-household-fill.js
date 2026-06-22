export const activityData = {
    id: "home-rooms-household-fill",
    type: "fill-in-the-blank",
    lab: "vocabulary",
    title: "Home and Household: Useful Words",
    label: "VOCABULARY EXPERIMENT 08",
    level: "Elementary",
    description: "Type practical vocabulary for rooms, furniture, household appliances, cleaning tools, and object locations.",
    instructions: "Complete each sentence with the correct word or phrase.",
    backUrl: "../labs/vocabulary.html",
    accent: "#4AD8C1",
    questions: [
        {
            id: "q1",
            prompt: "Complete the room name.",
            textBefore: "We sit on the sofa and watch television in the ",
            textAfter: ".",
            acceptedAnswers: ["living room", "lounge"],
            displayAnswer: "living room",
            inputLabel: "Room containing a sofa and television",
            explanation: "The living room is commonly used for relaxing and watching television. Lounge is also used in some varieties of English."
        },
        {
            id: "q2",
            prompt: "Complete the furniture word.",
            textBefore: "I hang my clothes in the ",
            textAfter: ".",
            acceptedAnswers: ["wardrobe", "closet"],
            displayAnswer: "wardrobe",
            inputLabel: "Storage place for clothes",
            explanation: "A wardrobe stores clothes. Closet is a common American-English alternative for a built-in storage space."
        },
        {
            id: "q3",
            prompt: "Complete the appliance word.",
            textBefore: "I wash my clothes in the ",
            textAfter: ".",
            acceptedAnswers: ["washing machine"],
            displayAnswer: "washing machine",
            inputLabel: "Appliance used for washing clothes",
            explanation: "A washing machine is used for washing clothes."
        },
        {
            id: "q4",
            prompt: "Complete the location phrase.",
            textBefore: "The remote control is ",
            textAfter: " the coffee table.",
            acceptedAnswers: ["on"],
            displayAnswer: "on",
            inputLabel: "Preposition for touching the upper surface",
            explanation: "Use on when something touches the upper surface of an object."
        },
        {
            id: "q5",
            prompt: "Complete the location phrase.",
            textBefore: "The shoes are ",
            textAfter: " the bed.",
            acceptedAnswers: ["under", "beneath"],
            displayAnswer: "under",
            inputLabel: "Preposition meaning lower than the bed",
            explanation: "Under means lower than something. Beneath is also correct but slightly less common in elementary everyday speech."
        },
        {
            id: "q6",
            prompt: "Complete the room-surface word.",
            textBefore: "The light hangs from the ",
            textAfter: ".",
            acceptedAnswers: ["ceiling"],
            displayAnswer: "ceiling",
            inputLabel: "Upper inside surface of a room",
            explanation: "The ceiling is the upper inside surface of a room."
        },
        {
            id: "q7",
            prompt: "Complete the cleaning-tool word.",
            textBefore: "I clean the carpet with a ",
            textAfter: ".",
            acceptedAnswers: ["vacuum cleaner", "vacuum"],
            displayAnswer: "vacuum cleaner",
            inputLabel: "Machine used for cleaning carpets",
            explanation: "A vacuum cleaner removes dust from carpets and floors."
        },
        {
            id: "q8",
            prompt: "Complete the sentence with the correct verb.",
            textBefore: "Please ",
            textAfter: " the light before leaving the room.",
            acceptedAnswers: ["turn off", "switch off"],
            displayAnswer: "turn off",
            inputLabel: "Phrase meaning stop the light",
            explanation: "Turn off and switch off both mean stop an appliance or light from operating."
        },
        {
            id: "q9",
            prompt: "Complete the sentence.",
            textBefore: "There ",
            textAfter: " two bedrooms upstairs.",
            acceptedAnswers: ["are"],
            displayAnswer: "are",
            inputLabel: "Verb used with two bedrooms",
            explanation: "Use there are with plural nouns."
        },
        {
            id: "q10",
            prompt: "Complete the uncountable household word.",
            textBefore: "We bought some new ",
            textAfter: " for the living room.",
            acceptedAnswers: ["furniture"],
            displayAnswer: "furniture",
            inputLabel: "Collective word for movable home objects",
            explanation: "Furniture is normally uncountable and does not take a plural -s."
        }
    ]
};
