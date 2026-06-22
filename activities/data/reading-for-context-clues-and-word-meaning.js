export const activityData = {
  id: "reading-for-context-clues-and-word-meaning",
  title: "Reading for Context Clues and Word Meaning",
  description: "Read three short texts and use surrounding information to understand unfamiliar words and expressions.",
  instructions: [
    "Read the passages to understand the general context.",
    "Use clues such as definitions, examples, opposites, or descriptions to work out the meaning of unfamiliar words.",
    "Do not stop reading when you see a difficult word—the answer is often in the following sentence."
  ],
  lessonId: "reading-for-context-clues-and-word-meaning",
  accent: "var(--gold)",
  sections: [
    {
      id: "section-1",
      title: "THE COMMUNITY TOOL LIBRARY",
      context: "Read about a service that lends tools to local residents.",
      passage: {
        heading: "The Community Tool Library",
        paragraphs: [
          "Many people need tools only occasionally. They may use a drill once to put up a shelf or borrow gardening equipment for a weekend project. Buying these items can be expensive, especially when they will be used infrequently.",
          "The Eastwood Tool Library offers a practical alternative. Members can borrow more than three hundred tools, including ladders, saws, drills, and gardening equipment. Most items may be kept for seven days. Members pay a small yearly fee and leave a refundable deposit when borrowing expensive equipment.",
          "The organisers choose durable tools because the same items are used by many different people. Volunteers inspect every tool when it is returned and repair minor damage before lending it again. The service has become especially popular with residents who live in small apartments and have limited storage space.",
          "Members describe the library as convenient because they can reserve tools online and collect them during evening or weekend opening hours."
        ]
      },
      questions: [
        {
          id: "q1",
          type: "single-choice",
          prompt: "What does “infrequently” most nearly mean in the first paragraph?",
          options: [
            "Very carefully",
            "Not often",
            "Without permission",
            "For a long time"
          ],
          correctAnswer: "Not often",
          explanation: "The tools may be needed only once or for occasional projects, so they are not used often."
        },
        {
          id: "q2",
          type: "short-answer",
          prompt: "What is a “refundable deposit”?",
          acceptedAnswers: [
            "Money that is returned later",
            "money returned later",
            "money that is returned",
            "a payment that can be returned",
            "money given temporarily",
            "a temporary payment",
            "money returned when the tool is returned"
          ],
          explanation: "“Refundable” means the money can be given back after the borrowing conditions are met."
        },
        {
          id: "q3",
          type: "single-choice",
          prompt: "What does “durable” mean in the third paragraph?",
          options: [
            "Easy to carry",
            "Able to last through repeated use",
            "Available at a low price",
            "Difficult to repair"
          ],
          correctAnswer: "Able to last through repeated use",
          explanation: "The tools are used by many people, so the organisers select items that can remain usable for a long time."
        },
        {
          id: "q4",
          type: "single-choice",
          prompt: "Why is the service described as “convenient”?",
          options: [
            "Members may keep tools permanently",
            "Every tool is completely free",
            "Tools can be reserved online and collected at useful times",
            "Volunteers deliver tools to every home"
          ],
          correctAnswer: "Tools can be reserved online and collected at useful times",
          explanation: "The final paragraph explains the practical features that make the service convenient."
        }
      ]
    },
    {
      id: "section-2",
      title: "A DIFFERENT KIND OF LUNCH BREAK",
      context: "Read about employees changing how they spend their lunch breaks.",
      passage: {
        heading: "A Different Kind of Lunch Break",
        paragraphs: [
          "At Brightwell Design, many employees used to eat lunch at their desks while continuing to answer messages. By the afternoon, they often felt tired and found it difficult to concentrate.",
          "The company introduced a “screen-free lunch” suggestion. Employees were encouraged to leave their desks, silence work notifications, and spend at least twenty minutes away from computers and phones. The rule was optional, and some workers were hesitant at first because they worried about missing important messages.",
          "Gradually, more employees joined colleagues in the garden, walked around the nearby streets, or ate together in the staff kitchen. Many described the break as restorative because they returned to work feeling calmer and more focused.",
          "The company has not banned phones or forced anyone to participate. Instead, managers hope the new habit will help employees recognise that a proper break can improve the rest of the working day."
        ]
      },
      questions: [
        {
          id: "q5",
          type: "single-choice",
          prompt: "What does “hesitant” mean in the second paragraph?",
          options: [
            "Immediately enthusiastic",
            "Unsure or unwilling at first",
            "Unable to use technology",
            "Angry with the managers"
          ],
          correctAnswer: "Unsure or unwilling at first",
          explanation: "Some employees worried about missing messages, so they were not immediately comfortable with the idea."
        },
        {
          id: "q6",
          type: "short-answer",
          prompt: "What does “gradually” mean in the third paragraph?",
          acceptedAnswers: [
            "Slowly over time",
            "slowly",
            "over time",
            "little by little",
            "step by step",
            "slowly over time"
          ],
          explanation: "The number of participating employees increased over a period rather than immediately."
        },
        {
          id: "q7",
          type: "single-choice",
          prompt: "What does “restorative” most likely mean?",
          options: [
            "Helping people recover energy and focus",
            "Making people work longer",
            "Creating more messages",
            "Requiring complete silence"
          ],
          correctAnswer: "Helping people recover energy and focus",
          explanation: "Employees returned from the break feeling calmer and more focused."
        }
      ]
    },
    {
      id: "section-3",
      title: "THE LATE-NIGHT BUS TRIAL",
      context: "Read about a temporary transport service in a small town.",
      passage: {
        heading: "The Late-Night Bus Trial",
        paragraphs: [
          "The town of Bellford has started a three-month late-night bus trial. On Fridays and Saturdays, buses now run until one o’clock in the morning instead of ending at ten thirty.",
          "The service is temporary while the transport department measures demand. Officials will study how many passengers use the buses, which stops are busiest, and whether the additional journeys are affordable to operate.",
          "Local restaurant and hospital workers have welcomed the trial. Many finish work after the normal buses stop running and previously depended on expensive taxis or lifts from relatives.",
          "Some residents remain cautious. They support better transport but want the service to be reliable. During the first weekend, one bus arrived twenty minutes late, and several passengers worried that delays might continue.",
          "The department will decide in September whether the late-night service should become permanent."
        ]
      },
      questions: [
        {
          id: "q8",
          type: "single-choice",
          prompt: "What does “temporary” mean in the second paragraph?",
          options: [
            "Available for a limited time",
            "Completely free",
            "Used only by workers",
            "Likely to be delayed"
          ],
          correctAnswer: "Available for a limited time",
          explanation: "The trial lasts three months and will later be reviewed."
        },
        {
          id: "q9",
          type: "short-answer",
          prompt: "What does “demand” mean in this passage?",
          acceptedAnswers: [
            "How many people want or use the service",
            "how many people use the buses",
            "how many people want the service",
            "passenger interest",
            "need for the service",
            "the number of passengers",
            "how much the service is needed"
          ],
          explanation: "Officials will measure passenger numbers to understand how much the service is wanted or needed."
        },
        {
          id: "q10",
          type: "single-choice",
          prompt: "What does “reliable” mean in the fourth paragraph?",
          options: [
            "Arriving and operating dependably",
            "Having very low ticket prices",
            "Travelling only on weekends",
            "Offering many different routes"
          ],
          correctAnswer: "Arriving and operating dependably",
          explanation: "Residents are concerned about delays, so “reliable” means the buses should arrive and operate as expected."
        }
      ]
    }
  ]
};
