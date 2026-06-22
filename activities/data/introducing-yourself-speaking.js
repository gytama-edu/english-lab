export const activityData = {
    id: "introducing-yourself-speaking",
    type: "speaking-practice",
    lab: "speaking",
    label: "SPEAKING MISSION 01",
    level: "Elementary",
    title: "Introducing Yourself and Starting Conversations",
    description: "Practise giving short spoken responses about your background, work, interests, English goals, and everyday conversations.",
    instructions: "Prepare briefly, speak for up to one minute, and then review your response using the checklist.",
    accent: "#C58CFF",
    backUrl: "../labs/speaking.html",
    lessonUrl: "../lessons/lesson.html?id=introducing-yourself",
    preparationSeconds: 30,
    speakingSeconds: 60,
    estimatedMinutes: 15,
    rounds: [
        {
            id: "basic-introduction",
            category: "Introduce Yourself",
            prompt: "Introduce yourself to someone you are meeting for the first time.",
            supportQuestions: [
                "What is your name?",
                "Where are you from?",
                "Where do you currently live?",
                "What do you do?"
            ],
            usefulLanguage: [
                "Hi, my name is…",
                "You can call me…",
                "I’m from…",
                "I currently live in…",
                "I work as…",
                "I’m currently studying…"
            ],
            selfCheck: [
                "I gave a clear greeting and name.",
                "I mentioned where I am from or where I live.",
                "I said what I do or study.",
                "I spoke in complete sentences.",
                "I added at least one extra detail."
            ],
            sampleResponse: "Hi, my name is Rafi, and you can call me Rafi. I’m from Surabaya, but I currently live in Jakarta. I work as a customer-service representative for a technology company. It’s nice to meet you."
        },
        {
            id: "hometown",
            category: "Your Hometown",
            prompt: "Talk about where you come from and what the place is like.",
            supportQuestions: [
                "Is it a city, town, or village?",
                "Is it busy or quiet?",
                "What is it known for?",
                "What do you like about it?"
            ],
            usefulLanguage: [
                "I’m from…",
                "It is located…",
                "It is known for…",
                "What I like most is…",
                "I grew up there.",
                "It is quite…"
            ],
            selfCheck: [
                "I clearly named the place.",
                "I described the place.",
                "I gave at least one specific detail.",
                "I explained what I like or dislike.",
                "My ideas were connected."
            ],
            sampleResponse: "I’m from Bandung, a large city in West Java. It is known for its cool weather, food, and creative culture. I grew up there, and what I like most is that there are many interesting places to visit."
        },
        {
            id: "work-or-study",
            category: "Work or Study",
            prompt: "Talk about your current work or studies.",
            supportQuestions: [
                "What do you do?",
                "Where do you work or study?",
                "What do you usually do there?",
                "What do you enjoy about it?"
            ],
            usefulLanguage: [
                "I work as…",
                "I work in…",
                "I work at…",
                "I study…",
                "I’m currently studying…",
                "My main responsibilities are…",
                "What I enjoy most is…"
            ],
            selfCheck: [
                "I explained what I do or study.",
                "I used work or study expressions correctly.",
                "I described at least one responsibility or activity.",
                "I added a reason or opinion.",
                "I avoided a one-word answer."
            ],
            sampleResponse: "I work as an English teacher at a language centre. I teach teenagers and adults, and I prepare lessons and speaking activities. What I enjoy most is helping students become more confident when they communicate."
        },
        {
            id: "free-time",
            category: "Free Time",
            prompt: "Describe what you enjoy doing in your free time.",
            supportQuestions: [
                "What activities do you enjoy?",
                "How often do you do them?",
                "Who do you do them with?",
                "Why do you enjoy them?"
            ],
            usefulLanguage: [
                "In my free time, I…",
                "I enjoy…",
                "I’m really into…",
                "I usually…",
                "I especially like…",
                "because…",
                "at weekends",
                "whenever I have time"
            ],
            selfCheck: [
                "I named at least one activity.",
                "I said how often or when I do it.",
                "I gave a reason or example.",
                "I used enjoy plus an -ing form correctly.",
                "I spoke for more than one sentence."
            ],
            sampleResponse: "In my free time, I enjoy watching films and playing badminton. I usually play badminton with my friends at weekends. I like it because it helps me stay active and gives me time to relax after work."
        },
        {
            id: "english-goals",
            category: "Learning English",
            prompt: "Explain why you are learning English and what you want to improve.",
            supportQuestions: [
                "Why is English important to you?",
                "Which skill do you want to improve?",
                "How do you practise?",
                "What is your long-term goal?"
            ],
            usefulLanguage: [
                "I’m learning English because…",
                "I need English for…",
                "I want to improve…",
                "My main goal is…",
                "I would like to become more confident…",
                "I practise by…"
            ],
            selfCheck: [
                "I explained why I am learning English.",
                "I named one skill I want to improve.",
                "I described how I practise.",
                "I mentioned a goal.",
                "I gave a connected response."
            ],
            sampleResponse: "I’m learning English because I need it for my work and future travel. I especially want to improve my speaking because I sometimes understand English but hesitate when I respond. I practise by listening to podcasts and speaking in class."
        },
        {
            id: "follow-up-question",
            category: "Follow-Up Questions",
            prompt: "Respond to this statement and ask two natural follow-up questions: “I recently moved to a new city for work.”",
            supportQuestions: [
                "How can you show interest?",
                "What could you ask about the city?",
                "What could you ask about the job?",
                "Which questions are friendly but not too private?"
            ],
            usefulLanguage: [
                "Really?",
                "That sounds…",
                "How are you finding…?",
                "What do you like about…?",
                "How long have you…?",
                "What made you decide to…?"
            ],
            selfCheck: [
                "I reacted to the statement.",
                "I asked two relevant questions.",
                "My questions were grammatically clear.",
                "I avoided intrusive personal questions.",
                "I sounded interested rather than interrogating."
            ],
            sampleResponse: "Really? That sounds like a big change. How are you finding the new city so far? And what do you enjoy most about your new job?"
        },
        {
            id: "start-conversation",
            category: "Start a Conversation",
            prompt: "Imagine you are attending an English class for the first time. Start a short conversation with another student.",
            supportQuestions: [
                "How will you greet the person?",
                "What question fits the situation?",
                "How will you introduce yourself?",
                "How can you invite the other person to speak?"
            ],
            usefulLanguage: [
                "Hi, is this seat available?",
                "Is this your first class here?",
                "I’m…",
                "What brings you to this class?",
                "What would you like to improve?",
                "How about you?"
            ],
            selfCheck: [
                "I used a suitable greeting.",
                "I introduced myself.",
                "I asked a situation-based question.",
                "I gave the other person an opportunity to speak.",
                "My opening sounded friendly and natural."
            ],
            sampleResponse: "Hi, is this seat available? Thanks. I’m Dinda, by the way. Is this your first class here? I joined because I want to improve my speaking confidence. How about you?"
        },
        {
            id: "complete-conversation",
            category: "Complete Conversation",
            prompt: "Give a short introduction, ask one follow-up question, and end the conversation politely.",
            supportQuestions: [
                "What personal information will you share?",
                "What detail can the other person respond to?",
                "What question will you ask?",
                "How will you end positively?"
            ],
            usefulLanguage: [
                "Hi, I’m…",
                "I currently…",
                "In my free time…",
                "What about you?",
                "That’s interesting.",
                "It was nice talking to you.",
                "I hope we can talk again soon."
            ],
            selfCheck: [
                "I introduced myself clearly.",
                "I included at least three relevant details.",
                "I asked a natural follow-up question.",
                "I showed interest.",
                "I ended the conversation politely.",
                "I spoke without reading the sample response."
            ],
            sampleResponse: "Hi, I’m Kevin. I’m from Medan, and I currently study business in Jakarta. In my free time, I enjoy playing football and exploring new places. What do you usually do at weekends? That sounds interesting. It was nice talking to you, and I hope we can speak again after class."
        }
    ]
};
