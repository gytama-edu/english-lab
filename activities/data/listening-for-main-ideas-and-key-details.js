export const activityData = {
    id: "listening-for-main-ideas-and-key-details",
    title: "Listening for Main Ideas and Key Details",
    description: "Listen to three short recordings and identify their main messages, purposes, and supporting details.",
    instructions: "Listen to three short recordings and identify their main messages, purposes, and supporting details.",
    lessonId: "listening-for-main-ideas-and-key-details",
    completion: {
        message: "You have completed the main ideas and key details practice."
    },
    sections: [
        {
            id: "library-weekend-program",
            title: "Library Weekend Programme",
            context: "You will hear an announcement about changes at a local library.",
            audio: {
                sources: [
                    {
                        src: "../assets/audio/listening/listening-for-main-ideas-and-key-details/library-weekend-program.wav",
                        type: "audio/wav"
                    }
                ]
            },
            transcript: "Good afternoon. We would like to tell visitors about several changes to the library's weekend programme. Beginning next month, the library will open at nine o'clock on Saturdays instead of ten. This earlier opening time will allow us to introduce a children's reading club from nine thirty until ten thirty. Our usual computer classes will no longer take place on Saturday afternoons. They will move to Sunday mornings because the computer room is less crowded then. The library café and study areas will keep their normal weekend hours. Full details are available at the information desk.",
            questions: [
                {
                    id: "q1",
                    type: "single-choice",
                    prompt: "What is the announcement mainly about?",
                    options: [
                        "The library is closing at weekends",
                        "Changes to the library's weekend programme",
                        "A new library café",
                        "Problems with the computer room"
                    ],
                    correctAnswer: "Changes to the library's weekend programme",
                    explanation: "The speaker describes several weekend changes, including opening time, a reading club, and computer classes."
                },
                {
                    id: "q2",
                    type: "single-choice",
                    prompt: "Why will the library open earlier on Saturdays?",
                    options: [
                        "To provide more study space",
                        "To prepare the café",
                        "To hold a children's reading club",
                        "To repair the computer room"
                    ],
                    correctAnswer: "To hold a children's reading club",
                    explanation: "The earlier opening time allows the library to introduce the children's reading club."
                },
                {
                    id: "q3",
                    type: "short-answer",
                    prompt: "When will the computer classes take place?",
                    primaryAnswer: "Sunday mornings",
                    acceptedAlternatives: [
                        "Sunday morning",
                        "Sunday mornings",
                        "on Sunday mornings",
                        "on Sunday morning"
                    ],
                    explanation: "The computer classes are moving from Saturday afternoons to Sunday mornings."
                },
                {
                    id: "q4",
                    type: "single-choice",
                    prompt: "Which part of the library will keep its normal weekend hours?",
                    options: [
                        "The children's reading room only",
                        "The computer room only",
                        "The café and study areas",
                        "The information desk only"
                    ],
                    correctAnswer: "The café and study areas",
                    explanation: "The speaker says that the café and study areas will keep their normal hours."
                }
            ]
        },
        {
            id: "neighbourhood-garden-conversation",
            title: "Neighbourhood Garden Conversation",
            context: "You will hear two neighbours discussing a community garden.",
            audio: {
                sources: [
                    {
                        src: "../assets/audio/listening/listening-for-main-ideas-and-key-details/neighbourhood-garden-conversation.wav",
                        type: "audio/wav"
                    }
                ]
            },
            transcript: "Woman: Have you seen the empty land beside the community hall?\nMan: Yes. I heard the council plans to turn it into a shared garden.\nWoman: That is right. Many people in the area live in flats, so they do not have gardens of their own.\nMan: Will residents be able to grow vegetables there?\nWoman: Yes. There will be small planting areas for local families. The organisers will also hold free workshops about growing food and caring for plants.\nMan: That sounds useful. When will it open?\nWoman: They hope to open it in May, but they need volunteers to prepare the land first. There is a volunteer meeting at the community hall this Thursday evening.\nMan: I might go. I have some gardening experience.",
            questions: [
                {
                    id: "q5",
                    type: "single-choice",
                    prompt: "What are the speakers mainly discussing?",
                    options: [
                        "A new community garden",
                        "Repairs to the community hall",
                        "A private gardening business",
                        "A competition for local families"
                    ],
                    correctAnswer: "A new community garden",
                    explanation: "The entire conversation focuses on plans to create a shared garden beside the community hall."
                },
                {
                    id: "q6",
                    type: "single-choice",
                    prompt: "Why is the garden being created?",
                    options: [
                        "The council wants to sell vegetables",
                        "Many residents do not have gardens at home",
                        "The community hall needs more visitors",
                        "Local families requested a new car park"
                    ],
                    correctAnswer: "Many residents do not have gardens at home",
                    explanation: "Many people live in flats and do not have their own outdoor space."
                },
                {
                    id: "q7",
                    type: "short-answer",
                    prompt: "What do the organisers need before the garden can open?",
                    primaryAnswer: "Volunteers",
                    acceptedAlternatives: [
                        "volunteers",
                        "volunteer help",
                        "people to prepare the land",
                        "volunteers to prepare the land"
                    ],
                    explanation: "The organisers need volunteers to help prepare the land."
                }
            ]
        },
        {
            id: "reducing-food-waste-talk",
            title: "Reducing Food Waste",
            context: "You will hear a short talk about reducing food waste at home.",
            audio: {
                sources: [
                    {
                        src: "../assets/audio/listening/listening-for-main-ideas-and-key-details/reducing-food-waste-talk.wav",
                        type: "audio/wav"
                    }
                ]
            },
            transcript: "Today I would like to share three simple ways to reduce food waste at home. First, check your kitchen before shopping. Many people buy food they already have because they do not look inside their cupboards or refrigerator. Second, plan a few meals before going to the shop. A simple plan helps you buy only what you need. Finally, learn how to store food correctly. Fruit, vegetables, bread, and cooked meals often last longer when they are stored in the right place. These small habits can save money and reduce the amount of food that is thrown away.",
            questions: [
                {
                    id: "q8",
                    type: "single-choice",
                    prompt: "What is the main purpose of the talk?",
                    options: [
                        "To explain how supermarkets store food",
                        "To recommend ways to reduce food waste",
                        "To describe different kinds of food",
                        "To advertise kitchen equipment"
                    ],
                    correctAnswer: "To recommend ways to reduce food waste",
                    explanation: "The speaker gives three practical suggestions for wasting less food at home."
                },
                {
                    id: "q9",
                    type: "single-choice",
                    prompt: "Which action does the speaker recommend before shopping?",
                    options: [
                        "Cook every meal",
                        "Clean the refrigerator",
                        "Check what food is already at home",
                        "Throw away old containers"
                    ],
                    correctAnswer: "Check what food is already at home",
                    explanation: "The first recommendation is to check cupboards and the refrigerator before shopping."
                },
                {
                    id: "q10",
                    type: "short-answer",
                    prompt: "What are two benefits of these habits?",
                    primaryAnswer: "Saving money and reducing food waste",
                    acceptedAlternatives: [
                        "save money and reduce food waste",
                        "saving money and reducing waste",
                        "save money and throw away less food",
                        "saving money and throwing away less food",
                        "reduce waste and save money",
                        "reducing food waste and saving money"
                    ],
                    explanation: "The speaker concludes that these habits can save money and reduce the amount of food thrown away."
                }
            ]
        }
    ]
};
