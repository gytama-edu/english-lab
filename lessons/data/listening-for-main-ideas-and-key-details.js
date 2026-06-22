export const lessonData = {
    id: "listening-for-main-ideas-and-key-details",
    title: "Listening for Main Ideas and Key Details",
    lab: "Listening Lab",
    level: "Intermediate",
    label: "Listening Lesson 02",
    description: "Learn how to understand the central message of a recording and recognise the details that explain or support it.",
    metaDescription: "Learn how to understand the central message of a recording and recognise the details that explain or support it.",
    accent: "var(--lab-accent)",
    backUrl: "../labs/listening.html",
    practiceUrl: "../activities/listening-practice.html?id=listening-for-main-ideas-and-key-details",
    practiceText: "Complete the activity to practise identifying the main idea and key details in different types of conversations.",
    practiceLabel: "Start Listening Practice",
    objectives: [
        "Identify what a speaker is mainly talking about.",
        "Recognise the details that support the main message."
    ],
    tableOfContents: [
        { id: "what-is-the-main-idea", label: "What is the main idea?" },
        { id: "main-ideas-and-supporting-details", label: "Main ideas and supporting details" },
        { id: "listen-to-the-opening", label: "Listen to the opening" },
        { id: "notice-repeated-ideas", label: "Notice repeated ideas" },
        { id: "identify-the-speakers-purpose", label: "Identify the speaker's purpose" },
        { id: "separate-important-and-minor-details", label: "Separate important and minor details" },
        { id: "use-the-questions-to-predict", label: "Use the questions to predict" },
        { id: "do-not-choose-an-answer-because-of-one-familiar-word", label: "Do not choose an answer because of one familiar word" },
        { id: "listen-for-topic-changes", label: "Listen for topic changes" },
        { id: "use-the-first-and-second-listening-differently", label: "Use the first and second listening differently" },
        { id: "worked-example", label: "Worked example" },
        { id: "common-mistakes", label: "Common mistakes" },
        { id: "listening-checklist", label: "Listening checklist" },
        { id: "guided-checks", label: "Guided checks" }
    ],
    sections: [
        {
            id: "what-is-the-main-idea",
            title: "What is the main idea?",
            blocks: [
                {
                    type: "text",
                    content: "The main idea is the most important message the speaker wants the listener to understand. It answers questions such as: What is the recording mainly about? Why is the speaker talking? What is the central message? What should the listener understand overall?"
                },
                {
                    type: "example-block",
                    heading: "Example",
                    examples: [
                        "Our community centre is introducing several new weekend activities, including art workshops, fitness classes, and family cooking sessions."
                    ]
                },
                {
                    type: "text",
                    content: "Main idea: The community centre is offering new weekend activities."
                },
                {
                    type: "pill-list",
                    heading: "Supporting details",
                    items: [
                        "Art workshops",
                        "Fitness classes",
                        "Family cooking sessions"
                    ]
                },
                {
                    type: "text",
                    content: "<strong>The main idea is broad. Supporting details are specific.</strong>"
                }
            ]
        },
        {
            id: "main-ideas-and-supporting-details",
            title: "Main ideas and supporting details",
            blocks: [
                {
                    type: "two-column-list",
                    columns: [
                        {
                            title: "Supporting details can:",
                            items: [
                                "Explain the main idea",
                                "Give examples",
                                "Provide reasons",
                                "Add dates, names, places, or numbers",
                                "Describe results or actions"
                            ]
                        }
                    ]
                },
                {
                    type: "example-block",
                    heading: "Example",
                    examples: [
                        "Main idea: The library is changing its weekend programme.",
                        "Supporting details: It will open earlier. A children's reading club will be added. Computer classes will move to Sunday."
                    ]
                }
            ]
        },
        {
            id: "listen-to-the-opening",
            title: "Listen to the opening",
            blocks: [
                {
                    type: "text",
                    content: "Speakers often introduce the topic near the beginning."
                },
                {
                    type: "example-block",
                    heading: "Useful phrases",
                    examples: [
                        "Today I want to talk about...",
                        "This announcement is about...",
                        "I am calling to explain...",
                        "We have made some changes to...",
                        "The purpose of this message is...",
                        "I wanted to tell you about..."
                    ]
                },
                {
                    type: "text",
                    content: "The main idea is not always stated in the first sentence. You must continue listening to confirm it."
                }
            ]
        },
        {
            id: "notice-repeated-ideas",
            title: "Notice repeated ideas",
            blocks: [
                {
                    type: "text",
                    content: "Important ideas may be repeated, paraphrased, explained with examples, or mentioned at the beginning and end."
                },
                {
                    type: "example-block",
                    heading: "Example",
                    examples: [
                        "The garden needs more volunteers. We especially need people to water plants during the week. Anyone who can give one or two hours would be very helpful."
                    ]
                },
                {
                    type: "text",
                    content: "Repeated idea: The garden needs volunteers."
                }
            ]
        },
        {
            id: "identify-the-speakers-purpose",
            title: "Identify the speaker's purpose",
            blocks: [
                {
                    type: "pill-list",
                    heading: "Common purposes",
                    items: [
                        "To inform",
                        "To explain",
                        "To invite",
                        "To warn",
                        "To request",
                        "To recommend",
                        "To describe a problem",
                        "To announce a change"
                    ]
                },
                {
                    type: "example-block",
                    heading: "Examples",
                    examples: [
                        "Please join us this Saturday to clean the park. (Purpose: To invite people to help.)",
                        "The road will be closed from eight until midday. (Purpose: To warn or inform people about a closure.)"
                    ]
                }
            ]
        },
        {
            id: "separate-important-and-minor-details",
            title: "Separate important and minor details",
            blocks: [
                {
                    type: "text",
                    content: "Not every detail has equal importance."
                },
                {
                    type: "two-column-list",
                    columns: [
                        {
                            title: "Important details often:",
                            items: [
                                "Explain the main message",
                                "Affect what someone should do",
                                "Give the reason for a change",
                                "Describe the main problem",
                                "Present the main solution"
                            ]
                        },
                        {
                            title: "Minor details may:",
                            items: [
                                "Give background information",
                                "Provide one small example",
                                "Describe something unrelated to the question",
                                "Repeat information you do not need"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "use-the-questions-to-predict",
            title: "Use the questions to predict",
            blocks: [
                {
                    type: "text",
                    content: "Before listening, read the question and predict what you need to understand."
                },
                {
                    type: "comparison-cards",
                    cards: [
                        {
                            title: "What is the talk mainly about?",
                            sentence: "Listen for the overall topic.",
                            meaning: ""
                        },
                        {
                            title: "Why is the speaker making the announcement?",
                            sentence: "Listen for the purpose.",
                            meaning: ""
                        },
                        {
                            title: "Which detail supports the speaker's main point?",
                            sentence: "Listen for a specific example or reason.",
                            meaning: ""
                        }
                    ]
                }
            ]
        },
        {
            id: "do-not-choose-an-answer-because-of-one-familiar-word",
            title: "Do not choose an answer because of one familiar word",
            blocks: [
                {
                    type: "text",
                    content: "Incorrect options may repeat words from the recording. Choose the answer that matches the complete meaning."
                },
                {
                    type: "mistake-list",
                    mistakes: [
                        {
                            incorrect: "Main idea: The library café is closing.",
                            correct: "Main idea: The main library will close early.",
                            explanation: "The recording says: 'The library café will remain open, but the main library will close early for staff training.'"
                        }
                    ]
                }
            ]
        },
        {
            id: "listen-for-topic-changes",
            title: "Listen for topic changes",
            blocks: [
                {
                    type: "text",
                    content: "Signposting expressions help you follow the organisation of a recording."
                },
                {
                    type: "pill-list",
                    heading: "Signposting expressions",
                    items: [
                        "First...",
                        "Another important point is...",
                        "However...",
                        "On the other hand...",
                        "The main problem is...",
                        "As a result...",
                        "Finally...",
                        "To sum up..."
                    ]
                }
            ]
        },
        {
            id: "use-the-first-and-second-listening-differently",
            title: "Use the first and second listening differently",
            blocks: [
                {
                    type: "two-column-list",
                    columns: [
                        {
                            title: "First listening:",
                            items: [
                                "Identify the situation",
                                "Understand the overall topic",
                                "Identify the speaker's purpose",
                                "Answer clear main-idea questions"
                            ]
                        },
                        {
                            title: "Second listening:",
                            items: [
                                "Check supporting details",
                                "Confirm reasons and examples",
                                "Review uncertain answers",
                                "Notice corrections or changes"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "worked-example",
            title: "Worked example",
            blocks: [
                {
                    type: "text",
                    content: "<strong>Text:</strong> Many people in our neighbourhood want to grow their own vegetables, but they do not have enough space at home. For this reason, the council is creating a shared garden beside the community hall. Local residents will be able to use small planting areas and attend free gardening workshops."
                },
                {
                    type: "example-block",
                    heading: "Questions and Answers",
                    examples: [
                        "1. What is the passage mainly about? A new shared neighbourhood garden. (The speaker introduces the topic and elaborates on it.)",
                        "2. Why is the shared garden being created? Many residents do not have enough space at home. (This reason is explicitly stated.)",
                        "3. What additional service will residents receive? Free gardening workshops. (This is a supporting detail explaining the benefits.)"
                    ]
                }
            ]
        },
        {
            id: "common-mistakes",
            title: "Common mistakes",
            blocks: [
                {
                    type: "example-block",
                    heading: "Be careful not to:",
                    examples: [
                        "Choose the first detail heard",
                        "Focus only on numbers",
                        "Select an answer because it repeats one word",
                        "Ignore the speaker's conclusion",
                        "Treat every detail as equally important",
                        "Change a correct answer without a clear reason"
                    ]
                }
            ]
        },
        {
            id: "listening-checklist",
            title: "Listening checklist",
            blocks: [
                {
                    type: "two-column-list",
                    columns: [
                        {
                            title: "Before listening",
                            items: [
                                "Read the question",
                                "Predict the type of information",
                                "Identify important keywords"
                            ]
                        },
                        {
                            title: "While listening",
                            items: [
                                "Identify the topic",
                                "Notice repeated ideas",
                                "Follow signposting language",
                                "Separate main points from examples"
                            ]
                        }
                    ]
                },
                {
                    type: "two-column-list",
                    columns: [
                        {
                            title: "After listening",
                            items: [
                                "Check that the answer matches the whole recording",
                                "Eliminate options that are too narrow",
                                "Eliminate options that mention only one minor detail",
                                "Review uncertain answers"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "guided-checks",
            title: "Guided checks",
            blocks: [
                {
                    type: "guided-check",
                    prompt: "Text: We are introducing evening fitness classes because many residents cannot attend during the day. Question: What is the main idea?",
                    answer: "Correct answer: The centre is adding evening fitness classes. Explanation: The reason is that many residents are unavailable during the day."
                },
                {
                    type: "guided-check",
                    prompt: "Text: Please bring gloves, a water bottle, and comfortable shoes. The most important thing is to arrive before nine. Question: Which detail is most important?",
                    answer: "Correct answer: Arrive before nine."
                },
                {
                    type: "guided-check",
                    prompt: "Text: The shop will remain open, but its delivery service will stop for one week while the vans are repaired. Question: What is the announcement mainly about?",
                    answer: "Correct answer: A temporary pause in the delivery service."
                },
                {
                    type: "guided-check",
                    prompt: "Text: First, we will discuss the problem. Then we will look at several possible solutions. Question: What does “Then” signal?",
                    answer: "Correct answer: A change to the next point."
                }
            ]
        }
    ]
};
