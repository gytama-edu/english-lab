export const activityData = {
    id: "talking-about-daily-routines-speaking",
    type: "speaking-practice",
    lab: "speaking",
    label: "SPEAKING MISSION 02",
    level: "Elementary",
    title: "Talking About Daily Routines and Habits",
    description: "Practise giving organised spoken responses about mornings, work or study, evenings, weekends, frequency, and everyday habits.",
    instructions: "Prepare briefly, speak for up to one minute, and review your response using the checklist.",
    accent: "#C58CFF",
    backUrl: "../labs/speaking.html",
    lessonUrl: "../lessons/lesson.html?id=talking-about-daily-routines",
    preparationSeconds: 30,
    speakingSeconds: 60,
    estimatedMinutes: 15,
    rounds: [
        {
            id: "morning-routine",
            category: "Morning Routine",
            prompt: "Describe your usual morning routine.",
            supportQuestions: [
                "What time do you wake up?",
                "What is the first thing you do?",
                "What do you do before breakfast?",
                "What time do you leave home or begin your day?"
            ],
            usefulLanguage: [
                "I usually wake up at…",
                "The first thing I do is…",
                "Then, I…",
                "After that, I…",
                "Before leaving home, I…",
                "My morning usually begins with…"
            ],
            selfCheck: [
                "I described at least three morning activities.",
                "I used time expressions.",
                "I connected my activities clearly.",
                "I added at least one detail.",
                "I spoke in complete sentences."
            ],
            sampleResponse: "I usually wake up at six thirty. The first thing I do is drink some water, and then I take a shower. After that, I get dressed and have breakfast. I normally leave home at around eight."
        },
        {
            id: "work-or-study-day",
            category: "Work or Study Day",
            prompt: "Describe a typical workday or study day.",
            supportQuestions: [
                "What time do you start?",
                "What activities or responsibilities do you have?",
                "When do you take breaks?",
                "What time do you finish?"
            ],
            usefulLanguage: [
                "I start work at…",
                "My classes begin at…",
                "I usually spend the morning…",
                "I take a break at…",
                "I normally finish at…",
                "Most of my day involves…"
            ],
            selfCheck: [
                "I explained whether I work or study.",
                "I described at least two activities or responsibilities.",
                "I included time information.",
                "I used sequencing or connecting language.",
                "I finished with a clear comment."
            ],
            sampleResponse: "I start work at nine and spend most of the morning answering emails and preparing reports. I usually take a break at around ten thirty and have lunch at one. In the afternoon, I attend meetings and finish work at five."
        },
        {
            id: "after-work-evening",
            category: "Afternoon and Evening",
            prompt: "Talk about what you normally do after work or school.",
            supportQuestions: [
                "How do you travel home?",
                "What do you do when you arrive?",
                "What do you do before and after dinner?",
                "What time do you normally go to bed?"
            ],
            usefulLanguage: [
                "After work, I…",
                "When I get home, I…",
                "Before dinner, I…",
                "In the evening, I…",
                "Before going to bed, I…",
                "I normally finish the day by…"
            ],
            selfCheck: [
                "I explained what happens after work or school.",
                "I described at least three activities.",
                "I used before, after, or when correctly.",
                "I included an evening time expression.",
                "My answer followed a clear order."
            ],
            sampleResponse: "After work, I take the train home and usually arrive at around six. When I get home, I rest for a while and then have dinner. In the evening, I watch a film or use my laptop. I normally go to bed at about eleven."
        },
        {
            id: "weekday-weekend-comparison",
            category: "Weekdays and Weekends",
            prompt: "Compare your weekday routine with your weekend routine.",
            supportQuestions: [
                "What time do you wake up on weekdays?",
                "What changes at weekends?",
                "Which activities do you only do at weekends?",
                "Which routine do you prefer?"
            ],
            usefulLanguage: [
                "On weekdays, I…",
                "At weekends, I…",
                "Unlike weekdays,…",
                "My weekends are more…",
                "I have more time to…",
                "I prefer… because…"
            ],
            selfCheck: [
                "I described both weekdays and weekends.",
                "I gave at least two differences.",
                "I used comparison language.",
                "I explained which routine I prefer.",
                "My ideas were connected."
            ],
            sampleResponse: "On weekdays, I wake up early and leave home before eight. At weekends, I usually sleep longer and have a slower breakfast. I also have more time to meet friends or watch films. I prefer weekends because my schedule is more flexible."
        },
        {
            id: "frequency-habits",
            category: "Frequency",
            prompt: "Describe three activities you do with different levels of frequency.",
            supportQuestions: [
                "What do you do every day?",
                "What do you do several times a week?",
                "What do you rarely do?",
                "Why are these activities different?"
            ],
            usefulLanguage: [
                "I always…",
                "I usually…",
                "I often…",
                "I sometimes…",
                "I rarely…",
                "I never…",
                "once a week",
                "twice a week"
            ],
            selfCheck: [
                "I described three different activities.",
                "I used at least three frequency expressions.",
                "My frequency expressions matched the activities.",
                "I added a reason or example.",
                "I avoided repeating the same expression unnecessarily."
            ],
            sampleResponse: "I always check my messages in the morning. I usually exercise twice a week, especially after work. I sometimes cook dinner, but I rarely bake because I do not have much time."
        },
        {
            id: "busy-day",
            category: "A Busy Day",
            prompt: "Describe your busiest day of the week.",
            supportQuestions: [
                "Which day is it?",
                "What time does it begin?",
                "What activities make it busy?",
                "How do you feel at the end of the day?"
            ],
            usefulLanguage: [
                "My busiest day is…",
                "I have to…",
                "I spend most of the day…",
                "Between… and…",
                "By the end of the day…",
                "It is busy because…"
            ],
            selfCheck: [
                "I clearly named the day.",
                "I explained why it is busy.",
                "I described the day in order.",
                "I included time or duration.",
                "I gave a closing opinion or feeling."
            ],
            sampleResponse: "Saturday is usually my busiest day. I start work in the morning and teach several classes throughout the day. I take short breaks between lessons, but I often finish late in the evening. By the end of the day, I feel tired but satisfied."
        },
        {
            id: "habit-to-change",
            category: "Changing a Habit",
            prompt: "Talk about one daily habit you would like to change.",
            supportQuestions: [
                "What is the habit?",
                "When does it normally happen?",
                "Why would you like to change it?",
                "What new habit would you like to develop?"
            ],
            usefulLanguage: [
                "One habit I have is…",
                "I tend to…",
                "This sometimes causes…",
                "I would like to…",
                "I am trying to…",
                "My plan is to…"
            ],
            selfCheck: [
                "I clearly identified the habit.",
                "I explained why I want to change it.",
                "I described the effect of the habit.",
                "I suggested a realistic new habit.",
                "I used neutral and non-judgemental language."
            ],
            sampleResponse: "One habit I would like to change is going to bed too late. I often use my laptop at night, so I sometimes feel tired the next morning. I would like to turn it off earlier and try to sleep before eleven."
        },
        {
            id: "complete-routine-response",
            category: "Complete Routine Response",
            prompt: "Give a complete one-minute description of your typical day, including your morning, main daytime activity, evening, and one habit you would like to improve.",
            supportQuestions: [
                "How does your day begin?",
                "What do you do during the day?",
                "What happens in the evening?",
                "Which habit would you like to change?",
                "How can you finish your answer clearly?"
            ],
            usefulLanguage: [
                "My day usually begins…",
                "After that, I…",
                "During the day, I…",
                "When I get home, I…",
                "One habit I would like to improve is…",
                "Overall, my routine is…"
            ],
            selfCheck: [
                "I described the morning.",
                "I explained my main daytime activities.",
                "I described my evening.",
                "I mentioned one habit I would like to improve.",
                "I used sequencing and frequency language.",
                "I finished with a clear summary."
            ],
            sampleResponse: "My day usually begins at six thirty. I take a shower, have breakfast, and leave home before eight. During the day, I work and take short breaks between tasks. When I get home, I have dinner and relax by watching something or using my laptop. One habit I would like to improve is sleeping earlier. Overall, my routine is busy but quite organised."
        }
    ]
};
