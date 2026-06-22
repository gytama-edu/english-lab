export const activityData = {
    id: "listening-for-opinions-feelings-and-attitudes",
    title: "Listening for Opinions, Feelings, and Attitudes",
    description: "Listen to three everyday recordings and identify the speakers' opinions, feelings, agreement, hesitation, and overall attitudes.",
    instructions: "Listen to three everyday recordings and identify the speakers' opinions, feelings, agreement, hesitation, and overall attitudes.",
    lessonId: "listening-for-opinions-feelings-and-attitudes",
    completion: {
        message: "You have completed the opinions, feelings, and attitudes practice."
    },
    sections: [
        {
            id: "choosing-a-weekend-activity",
            title: "Choosing a Weekend Activity",
            context: "You will hear two friends deciding what to do at the weekend.",
            audio: {
                sources: [
                    {
                        src: "../assets/audio/listening/listening-for-opinions-feelings-and-attitudes/choosing-a-weekend-activity.wav",
                        type: "audio/wav"
                    }
                ]
            },
            transcript: "Nina: What do you think about the outdoor film in the park on Saturday?\nDaniel: It sounds fun, but the weather forecast is not very good. I do not really want to sit outside if it rains.\nNina: That is true. I was excited about it, although now I am not so sure. What about the new photography exhibition at the city museum?\nDaniel: I would prefer that. I have heard the exhibition is excellent, and the museum stays open late on Saturdays.\nNina: I am not usually very interested in photography, but the reviews are convincing. We could have dinner nearby afterwards.\nDaniel: Exactly. That sounds much more comfortable than spending the evening in a wet park.\nNina: All right. Let us go to the museum.",
            questions: [
                {
                    id: "q1",
                    type: "single-choice",
                    prompt: "How does Daniel feel about the outdoor film?",
                    options: [
                        "He is completely enthusiastic",
                        "He is concerned about the weather",
                        "He has already seen the film",
                        "He dislikes outdoor activities"
                    ],
                    correctAnswer: "He is concerned about the weather",
                    explanation: "Daniel says the film sounds fun, but he does not want to sit outside if it rains."
                },
                {
                    id: "q2",
                    type: "single-choice",
                    prompt: "How does Nina's attitude towards the outdoor film change?",
                    options: [
                        "From uncertain to excited",
                        "From excited to uncertain",
                        "From negative to completely positive",
                        "From uninterested to angry"
                    ],
                    correctAnswer: "From excited to uncertain",
                    explanation: "Nina says she was excited, but the weather forecast makes her less certain."
                },
                {
                    id: "q3",
                    type: "single-choice",
                    prompt: "Why does Daniel prefer the museum?",
                    options: [
                        "It is free",
                        "It is closer to his home",
                        "He has heard good things about the exhibition",
                        "He works there"
                    ],
                    correctAnswer: "He has heard good things about the exhibition",
                    explanation: "Daniel says he has heard that the exhibition is excellent."
                },
                {
                    id: "q4",
                    type: "short-answer",
                    prompt: "What do the speakers finally decide to do?",
                    primaryAnswer: "Go to the museum",
                    acceptedAlternatives: [
                        "go to the museum",
                        "visit the museum",
                        "go to the photography exhibition",
                        "visit the photography exhibition",
                        "see the photography exhibition"
                    ],
                    explanation: "They agree to visit the photography exhibition at the city museum."
                }
            ]
        },
        {
            id: "work-schedule-discussion",
            title: "Work Schedule Discussion",
            context: "You will hear two colleagues discussing a proposed change to their work schedule.",
            audio: {
                sources: [
                    {
                        src: "../assets/audio/listening/listening-for-opinions-feelings-and-attitudes/work-schedule-discussion.wav",
                        type: "audio/wav"
                    }
                ]
            },
            transcript: "Priya: Have you read the manager's proposal about starting work at eight instead of nine?\nLewis: Yes. I can understand the idea. Finishing earlier would be useful, especially for people with long journeys home.\nPriya: I agree with that part, but eight o'clock could be difficult for employees who take their children to school.\nLewis: That is a fair point. Public transport is also less frequent early in the morning.\nPriya: Exactly. I do not think we should reject the proposal completely, though. Perhaps we could try the new schedule for two weeks.\nLewis: A short trial sounds reasonable. Then everyone could give feedback before the company makes a final decision.\nPriya: Yes. I would feel more comfortable with that than making a permanent change immediately.",
            questions: [
                {
                    id: "q5",
                    type: "single-choice",
                    prompt: "What benefit does Lewis see in the proposed schedule?",
                    options: [
                        "Employees would receive more pay",
                        "Employees could finish work earlier",
                        "Public transport would improve",
                        "The office would close permanently"
                    ],
                    correctAnswer: "Employees could finish work earlier",
                    explanation: "Lewis says that finishing earlier could help people with long journeys home."
                },
                {
                    id: "q6",
                    type: "single-choice",
                    prompt: "What concern does Priya raise?",
                    options: [
                        "Some employees take their children to school",
                        "Employees do not want to travel home early",
                        "The manager has not written a proposal",
                        "The office is too crowded"
                    ],
                    correctAnswer: "Some employees take their children to school",
                    explanation: "Priya says that an eight o'clock start could be difficult for employees with school responsibilities."
                },
                {
                    id: "q7",
                    type: "single-choice",
                    prompt: "What is Priya's overall attitude towards the proposal?",
                    options: [
                        "Completely opposed",
                        "Completely enthusiastic",
                        "Cautiously open to it",
                        "Uninterested"
                    ],
                    correctAnswer: "Cautiously open to it",
                    explanation: "Priya sees difficulties but supports trying the schedule temporarily."
                },
                {
                    id: "q8",
                    type: "short-answer",
                    prompt: "What solution do they suggest?",
                    primaryAnswer: "A two-week trial",
                    acceptedAlternatives: [
                        "a two week trial",
                        "a two-week trial",
                        "try it for two weeks",
                        "trial the schedule for two weeks",
                        "a short trial",
                        "test the schedule for two weeks"
                    ],
                    explanation: "They suggest trying the new schedule for two weeks before making a permanent decision."
                }
            ]
        },
        {
            id: "community-garden-feedback",
            title: "Community Garden Feedback",
            context: "You will hear a resident giving feedback about a community garden.",
            audio: {
                sources: [
                    {
                        src: "../assets/audio/listening/listening-for-opinions-feelings-and-attitudes/community-garden-feedback.wav",
                        type: "audio/wav"
                    }
                ]
            },
            transcript: "I joined the community garden project three months ago, and overall, I am very pleased with it. The organisers are welcoming, and I have learned a lot from the gardening workshops. I especially enjoy meeting neighbours whom I did not know before. However, I am disappointed that the garden is only open on weekday evenings. Many residents work late and cannot attend during those hours. I understand that volunteers are needed to supervise the site, but I think opening for a few hours on Saturday would make the project more accessible. Despite this problem, I believe the garden has been a positive addition to the neighbourhood.",
            questions: [
                {
                    id: "q9",
                    type: "single-choice",
                    prompt: "What is the speaker's overall attitude towards the garden?",
                    options: [
                        "Mostly positive",
                        "Completely negative",
                        "Uninterested",
                        "Confused"
                    ],
                    correctAnswer: "Mostly positive",
                    explanation: "The speaker is pleased with the project but has one important criticism about opening times."
                },
                {
                    id: "q10",
                    type: "short-answer",
                    prompt: "What improvement does the speaker suggest?",
                    primaryAnswer: "Opening the garden on Saturday",
                    acceptedAlternatives: [
                        "open on Saturday",
                        "opening on Saturday",
                        "Saturday opening",
                        "open for a few hours on Saturday",
                        "opening for a few hours on Saturday",
                        "weekend opening",
                        "opening at weekends"
                    ],
                    explanation: "The speaker recommends opening the garden for a few hours on Saturday."
                }
            ]
        }
    ]
};
