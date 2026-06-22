export const lessonData = {
    id: "listening-for-opinions-feelings-and-attitudes",
    title: "Listening for Opinions, Feelings, and Attitudes",
    lab: "Listening Lab",
    level: "Intermediate",
    label: "Listening Lesson 03",
    description: "Learn how words, expressions, and speaking style reveal what people think and how they feel.",
    metaDescription: "Learn how words, expressions, and speaking style reveal what people think and how they feel.",
    accent: "var(--lab-accent)",
    backUrl: "../labs/listening.html",
    practiceUrl: "../activities/listening-practice.html?id=listening-for-opinions-feelings-and-attitudes",
    practiceText: "Complete the activity to practise identifying opinions and feelings in different types of conversations.",
    practiceLabel: "Start Listening Practice",
    objectives: [
        "Learn to recognise what speakers think.",
        "Learn to recognise how they feel, and whether they agree, disagree, hesitate, or show concern."
    ],
    tableOfContents: [
        { id: "facts-and-opinions", label: "Facts and opinions" },
        { id: "recognising-direct-opinions", label: "Recognising direct opinions" },
        { id: "recognising-feelings", label: "Recognising feelings" },
        { id: "positive-negative-and-mixed-attitudes", label: "Positive, negative, and mixed attitudes" },
        { id: "agreement", label: "Agreement" },
        { id: "disagreement", label: "Disagreement" },
        { id: "hesitation-and-uncertainty", label: "Hesitation and uncertainty" },
        { id: "listen-for-contrast-words", label: "Listen for contrast words" },
        { id: "words-can-be-more-reliable-than-one-emotional-sound", label: "Words can be more reliable than one emotional sound" },
        { id: "notice-reasons", label: "Notice reasons" },
        { id: "avoid-choosing-an-answer-from-one-word", label: "Avoid choosing an answer from one word" },
        { id: "listen-for-changes-in-attitude", label: "Listen for changes in attitude" },
        { id: "worked-example", label: "Worked example" },
        { id: "common-mistakes", label: "Common mistakes" },
        { id: "listening-checklist", label: "Listening checklist" },
        { id: "guided-checks", label: "Guided checks" }
    ],
    sections: [
        {
            id: "facts-and-opinions",
            title: "Facts and opinions",
            blocks: [
                {
                    type: "text",
                    content: "A fact can usually be checked."
                },
                {
                    type: "example-block",
                    heading: "Examples",
                    examples: [
                        "The café closes at seven.",
                        "The class has twelve students."
                    ]
                },
                {
                    type: "text",
                    content: "An opinion expresses what someone thinks."
                },
                {
                    type: "example-block",
                    heading: "Examples",
                    examples: [
                        "The café is too expensive.",
                        "I think the class is really useful."
                    ]
                },
                {
                    type: "text",
                    content: "<strong>Facts describe information. Opinions express personal views.</strong>"
                }
            ]
        },
        {
            id: "recognising-direct-opinions",
            title: "Recognising direct opinions",
            blocks: [
                {
                    type: "pill-list",
                    heading: "Common opinion expressions",
                    items: [
                        "I think...",
                        "I believe...",
                        "In my opinion...",
                        "For me...",
                        "I feel that...",
                        "I would say...",
                        "It seems to me...",
                        "I do not think..."
                    ]
                },
                {
                    type: "example-block",
                    heading: "Examples",
                    examples: [
                        "I think the new timetable is more convenient.",
                        "I do not think the room is large enough."
                    ]
                },
                {
                    type: "text",
                    content: "The words after these expressions normally contain the speaker's opinion."
                }
            ]
        },
        {
            id: "recognising-feelings",
            title: "Recognising feelings",
            blocks: [
                {
                    type: "two-column-list",
                    columns: [
                        {
                            title: "Positive emotions",
                            items: [
                                "pleased",
                                "excited",
                                "relieved",
                                "satisfied",
                                "impressed",
                                "comfortable",
                                "hopeful"
                            ]
                        },
                        {
                            title: "Negative emotions",
                            items: [
                                "disappointed",
                                "worried",
                                "frustrated",
                                "annoyed",
                                "uncomfortable",
                                "nervous",
                                "uncertain"
                            ]
                        }
                    ]
                },
                {
                    type: "example-block",
                    heading: "Examples",
                    examples: [
                        "I was relieved when they changed the date.",
                        "She sounds disappointed with the service."
                    ]
                },
                {
                    type: "text",
                    content: "Feelings may be stated directly or suggested through the speaker's words."
                }
            ]
        },
        {
            id: "positive-negative-and-mixed-attitudes",
            title: "Positive, negative, and mixed attitudes",
            blocks: [
                {
                    type: "text",
                    content: "A positive attitude shows approval, interest, or satisfaction. A negative attitude shows criticism, concern, or dissatisfaction. A mixed attitude contains both positive and negative ideas."
                },
                {
                    type: "example-block",
                    heading: "Example",
                    examples: [
                        "The course was useful, but the sessions were too short.",
                        "<strong>Overall attitude:</strong> Mixed"
                    ]
                },
                {
                    type: "text",
                    content: "The speaker appreciates the course but criticises its length."
                }
            ]
        },
        {
            id: "agreement",
            title: "Agreement",
            blocks: [
                {
                    type: "pill-list",
                    heading: "Expressions of agreement",
                    items: [
                        "I agree.",
                        "Exactly.",
                        "That is true.",
                        "You are right.",
                        "I feel the same way.",
                        "That makes sense.",
                        "Definitely.",
                        "I think so too."
                    ]
                },
                {
                    type: "text",
                    content: "Agreement may be strong or moderate."
                },
                {
                    type: "example-block",
                    heading: "Examples",
                    examples: [
                        "Strong: Absolutely. That is exactly what we need.",
                        "Moderate: Yes, I think that could work."
                    ]
                }
            ]
        },
        {
            id: "disagreement",
            title: "Disagreement",
            blocks: [
                {
                    type: "pill-list",
                    heading: "Direct disagreement",
                    items: [
                        "I disagree.",
                        "I do not think so.",
                        "I see it differently."
                    ]
                },
                {
                    type: "pill-list",
                    heading: "Polite or softened disagreement",
                    items: [
                        "I am not sure about that.",
                        "I see your point, but...",
                        "That may be true, however...",
                        "I understand what you mean, but...",
                        "Perhaps, although...",
                        "I am not completely convinced."
                    ]
                },
                {
                    type: "text",
                    content: "Speakers often soften disagreement to remain polite."
                }
            ]
        },
        {
            id: "hesitation-and-uncertainty",
            title: "Hesitation and uncertainty",
            blocks: [
                {
                    type: "pill-list",
                    heading: "Expressions of hesitation",
                    items: [
                        "I am not sure.",
                        "Maybe.",
                        "Perhaps.",
                        "I suppose.",
                        "I am still thinking about it.",
                        "I have not decided yet.",
                        "It might be useful.",
                        "I am not completely convinced."
                    ]
                },
                {
                    type: "text",
                    content: "Hesitation does not always mean disagreement. A speaker may need more information or time."
                }
            ]
        },
        {
            id: "listen-for-contrast-words",
            title: "Listen for contrast words",
            blocks: [
                {
                    type: "pill-list",
                    heading: "Contrast expressions",
                    items: [
                        "but",
                        "however",
                        "although",
                        "even though",
                        "still",
                        "on the other hand",
                        "actually",
                        "unfortunately"
                    ]
                },
                {
                    type: "text",
                    content: "The speaker's main opinion often appears after a contrast word."
                },
                {
                    type: "example-block",
                    heading: "Examples",
                    examples: [
                        "The location is convenient, but the room is too small. (Main criticism: The room is too small.)",
                        "The journey was long. However, the event was worth attending. (Overall attitude: Positive despite the long journey)"
                    ]
                }
            ]
        },
        {
            id: "words-can-be-more-reliable-than-one-emotional-sound",
            title: "Words can be more reliable than one emotional sound",
            blocks: [
                {
                    type: "text",
                    content: "Tone can help, but you should not depend on tone alone. You should combine words, context, contrast expressions, reasons, and speaking style."
                },
                {
                    type: "example-block",
                    heading: "Example",
                    examples: [
                        "That is an interesting idea, but I do not think it will solve the problem."
                    ]
                },
                {
                    type: "text",
                    content: "The word \"interesting\" sounds positive, but the complete opinion is negative or doubtful."
                }
            ]
        },
        {
            id: "notice-reasons",
            title: "Notice reasons",
            blocks: [
                {
                    type: "text",
                    content: "Opinions are often followed by reasons. This helps confirm the speaker's real attitude."
                },
                {
                    type: "pill-list",
                    heading: "Common patterns",
                    items: [
                        "I like it because...",
                        "I am worried because...",
                        "I do not agree because...",
                        "The main problem is...",
                        "What I appreciate most is..."
                    ]
                }
            ]
        },
        {
            id: "avoid-choosing-an-answer-from-one-word",
            title: "Avoid choosing an answer from one word",
            blocks: [
                {
                    type: "text",
                    content: "Incorrect answers may repeat one emotional word from the recording. Listen to the complete statement."
                },
                {
                    type: "mistake-list",
                    mistakes: [
                        {
                            incorrect: "The speaker is still worried.",
                            correct: "The speaker was worried before but is now satisfied or relieved.",
                            explanation: "The speaker says: 'I was worried at first, but everything worked perfectly in the end.'"
                        }
                    ]
                }
            ]
        },
        {
            id: "listen-for-changes-in-attitude",
            title: "Listen for changes in attitude",
            blocks: [
                {
                    type: "text",
                    content: "A speaker's attitude may change during a conversation."
                },
                {
                    type: "example-block",
                    heading: "Example",
                    examples: [
                        "At first, I thought the plan was unnecessary. After hearing the explanation, though, I think it could be helpful."
                    ]
                },
                {
                    type: "text",
                    content: "Initial opinion: Negative. Final opinion: Positive or supportive. The final opinion is usually more important when the question asks how the speaker feels now."
                }
            ]
        },
        {
            id: "worked-example",
            title: "Worked example",
            blocks: [
                {
                    type: "text",
                    content: "<strong>Text:</strong> I was excited about the new sports centre because it has modern equipment and a large swimming pool. The staff were friendly too. However, the changing rooms were crowded, and there were not enough lockers. Overall, I enjoyed my visit, but I hope they improve those facilities."
                },
                {
                    type: "example-block",
                    heading: "Questions and Answers",
                    examples: [
                        "1. How did the speaker feel before visiting? Excited.",
                        "2. What did the speaker like? The modern equipment, swimming pool, and friendly staff.",
                        "3. What disappointed the speaker? The crowded changing rooms and limited lockers.",
                        "4. What is the speaker's overall attitude? Mostly positive, with some criticism."
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
                        "Treat one positive word as the whole opinion",
                        "Ignore words such as \"but\" or \"however\"",
                        "Confuse hesitation with disagreement",
                        "Miss a change in attitude",
                        "Choose a feeling not supported by the speaker's words",
                        "Ignore the reason behind an opinion",
                        "Assume that polite language means agreement"
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
                                "Identify whether it asks about opinion, feeling, purpose, or agreement",
                                "Review the answer choices"
                            ]
                        },
                        {
                            title: "While listening",
                            items: [
                                "Notice opinion expressions",
                                "Listen for emotional words",
                                "Follow contrast language",
                                "Identify reasons",
                                "Notice changes in attitude"
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
                                "Consider the complete statement",
                                "Check whether the attitude is positive, negative, or mixed",
                                "Eliminate answers based on only one word",
                                "Confirm the final opinion"
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
                    prompt: "Text: The hotel room was small, but it was clean, comfortable, and very quiet. Question: What is the speaker's overall attitude?",
                    answer: "Correct answer: Mostly positive. Explanation: The speaker mentions one problem but gives several positive comments."
                },
                {
                    type: "guided-check",
                    prompt: "Text: I understand why they want to change the schedule, but I am not sure the new time will work for everyone. Question: Does the speaker fully agree?",
                    answer: "Correct answer: No. Explanation: The speaker understands the reason but expresses doubt about the solution."
                },
                {
                    type: "guided-check",
                    prompt: "Text: I was nervous before the presentation. Once I started speaking, I felt much more comfortable. Question: How did the speaker's feeling change?",
                    answer: "Correct answer: From nervous to comfortable."
                },
                {
                    type: "guided-check",
                    prompt: "Text: I suppose the plan could work, although I would like to see more information first. Question: What attitude does the speaker show?",
                    answer: "Correct answer: Cautious or uncertain. Explanation: The speaker does not reject the plan but is not fully convinced."
                }
            ]
        }
    ]
};
