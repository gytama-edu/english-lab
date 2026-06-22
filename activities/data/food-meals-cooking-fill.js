export const activityData = {
    id: "food-meals-cooking-fill",
    type: "fill-in-the-blank",
    lab: "vocabulary",
    title: "Food and Cooking: Useful Words",
    label: "VOCABULARY EXPERIMENT 04",
    level: "Elementary",
    description: "Type practical vocabulary for meals, cooking methods, preparation, tastes, textures, and restaurant situations.",
    instructions: "Complete each sentence with the correct word or phrase.",
    backUrl: "../labs/vocabulary.html",
    accent: "#4AD8C1",
    questions: [
        {
            id: "q1",
            prompt: "Complete the meal phrase.",
            textBefore: "I usually ",
            textAfter: " at seven in the morning.",
            acceptedAnswers: ["have breakfast", "eat breakfast"],
            displayAnswer: "have breakfast",
            inputLabel: "Phrase for eating the first meal",
            explanation: "Have breakfast is the most common routine expression. Eat breakfast is also correct."
        },
        {
            id: "q2",
            prompt: "Complete the cooking method.",
            textBefore: "",
            textAfter: " the potatoes in hot water.",
            acceptedAnswers: ["boil", "Boil"],
            displayAnswer: "Boil",
            inputLabel: "Cooking method using hot water",
            explanation: "Boil means cook food in very hot water."
        },
        {
            id: "q3",
            prompt: "Complete the preparation instruction.",
            textBefore: "",
            textAfter: " the onion into small pieces.",
            acceptedAnswers: ["chop", "Chop"],
            displayAnswer: "Chop",
            inputLabel: "Verb for cutting an onion into pieces",
            explanation: "Chop means cut food into pieces with a knife."
        },
        {
            id: "q4",
            prompt: "Complete the sentence.",
            textBefore: "Please ",
            textAfter: " the soup with a spoon.",
            acceptedAnswers: ["stir"],
            displayAnswer: "stir",
            inputLabel: "Verb for moving soup with a spoon",
            explanation: "Stir means move food or liquid around using a spoon."
        },
        {
            id: "q5",
            prompt: "Complete the taste description.",
            textBefore: "The lemon tastes ",
            textAfter: ".",
            acceptedAnswers: ["sour"],
            displayAnswer: "sour",
            inputLabel: "Taste of a lemon",
            explanation: "Lemons normally taste sour."
        },
        {
            id: "q6",
            prompt: "Complete the container phrase.",
            textBefore: "I ate two ",
            textAfter: " of bread.",
            acceptedAnswers: ["slices"],
            displayAnswer: "slices",
            inputLabel: "Portion word for bread",
            explanation: "Use slices to count pieces of bread."
        },
        {
            id: "q7",
            prompt: "Complete the texture description.",
            textBefore: "The fresh carrots are very ",
            textAfter: ".",
            acceptedAnswers: ["crunchy"],
            displayAnswer: "crunchy",
            inputLabel: "Texture of fresh carrots",
            explanation: "Crunchy describes firm food that makes a sound when bitten."
        },
        {
            id: "q8",
            prompt: "Complete the kitchen-tool sentence.",
            textBefore: "Use a ",
            textAfter: " to fry the egg.",
            acceptedAnswers: ["pan", "frying pan"],
            displayAnswer: "pan",
            inputLabel: "Tool used for frying an egg",
            explanation: "A pan or frying pan is used for frying food."
        },
        {
            id: "q9",
            prompt: "Complete the restaurant request.",
            textBefore: "Could we have the ",
            textAfter: ", please?",
            acceptedAnswers: ["bill", "check"],
            displayAnswer: "bill",
            inputLabel: "Restaurant document showing the price",
            explanation: "Bill is common in British English. Check is common in American English."
        },
        {
            id: "q10",
            prompt: "Complete the food instruction word.",
            textBefore: "Follow the ",
            textAfter: " to make the cake.",
            acceptedAnswers: ["recipe"],
            displayAnswer: "recipe",
            inputLabel: "Instructions for making a cake",
            explanation: "A recipe gives the ingredients and steps for preparing a dish."
        }
    ]
};
