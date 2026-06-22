export const activityData = {
  id: "reading-for-inference-tone-and-writers-attitude",
  title: "Reading for Inference, Tone, and Writer’s Attitude",
  description: "Read three short texts and use evidence to understand unstated ideas, feelings, purpose, and attitude.",
  instructions: [
    "Read the text carefully and consider the writer’s tone and point of view.",
    "Look for evidence to support your inferences.",
    "Pay attention to contrast words and descriptions of actions."
  ],
  lessonId: "reading-for-inference-tone-and-writers-attitude",
  accent: "var(--gold)",
  sections: [
    {
      id: "section-1",
      title: "THE EARLY MORNING CAFÉ",
      context: "Read about a café that recently changed its opening hours.",
      passage: {
        heading: "The Early Morning Café",
        paragraphs: [
          "For years, Oak Lane Café opened at eight o’clock, mainly serving shoppers and office workers. Last month, the owner decided to open at six thirty after noticing that construction workers, hospital staff, and early commuters had few places to buy breakfast.",
          "During the first week, the café was unusually quiet. Only a few customers arrived before seven, and the owner began to wonder whether the change had been a mistake. By the third week, however, the situation was different. Regular early customers had started recommending the café to colleagues, and queues sometimes formed before seven thirty.",
          "The owner now prepares more breakfast food in advance and has hired an additional employee for the morning shift. Although opening earlier means longer working hours, she says the change has brought new customers and made the business feel more connected to the neighbourhood."
        ]
      },
      questions: [
        {
          id: "q1",
          type: "single-choice",
          prompt: "Why did the owner first decide to open earlier?",
          options: [
            "She wanted to close earlier in the afternoon",
            "She noticed that early workers had few breakfast options",
            "Customers complained about the café’s prices",
            "Another café opened nearby"
          ],
          correctAnswer: "She noticed that early workers had few breakfast options",
          explanation: "The first paragraph explains that workers and commuters had limited places to buy breakfast."
        },
        {
          id: "q2",
          type: "single-choice",
          prompt: "What can be inferred about the owner during the first week?",
          options: [
            "She was completely confident",
            "She was worried that the new hours might fail",
            "She wanted to hire more staff immediately",
            "She planned to sell the café"
          ],
          correctAnswer: "She was worried that the new hours might fail",
          explanation: "The café was quiet, and she wondered whether the change had been a mistake."
        },
        {
          id: "q3",
          type: "short-answer",
          prompt: "What evidence shows that the new opening time became successful?",
          acceptedAnswers: [
            "Queues formed before 7:30.",
            "queues formed before 7:30",
            "queues sometimes formed",
            "regular customers recommended the café",
            "more early customers arrived",
            "the owner hired another employee",
            "she prepared more breakfast food",
            "new customers started coming"
          ],
          explanation: "Several details show growing demand, including recommendations, queues, extra food preparation, and another employee."
        },
        {
          id: "q4",
          type: "single-choice",
          prompt: "What is the writer’s overall attitude towards the change?",
          options: [
            "Mostly positive",
            "Completely negative",
            "Neutral and uninterested",
            "Angry"
          ],
          correctAnswer: "Mostly positive",
          explanation: "The passage acknowledges longer hours but emphasises new customers and stronger community connection."
        }
      ]
    },
    {
      id: "section-2",
      title: "A NEW SHARED WORKSPACE",
      context: "Read a review of a shared workspace for students and remote workers.",
      passage: {
        heading: "A New Shared Workspace",
        paragraphs: [
          "The new Harbour Workspace occupies the second floor of an old warehouse near the station. The building’s large windows and open design create a bright, attractive environment. There are quiet desks, meeting rooms, comfortable seating areas, and a small café.",
          "The location is convenient, and the staff are helpful. Unfortunately, the workspace is often noisier than expected, especially during lunchtime. Some visitors hold online meetings at their desks instead of using the meeting rooms, which can make concentration difficult.",
          "Membership is not cheap, but the price includes fast internet, free hot drinks, and access from seven in the morning until ten at night. The workspace is useful for people who need flexible hours and professional facilities. However, anyone who requires complete silence may find it frustrating.",
          "Overall, Harbour Workspace offers good facilities and long opening hours, but better noise management would significantly improve the experience."
        ]
      },
      questions: [
        {
          id: "q5",
          type: "single-choice",
          prompt: "What is the writer’s overall attitude towards Harbour Workspace?",
          options: [
            "Completely enthusiastic",
            "Mostly positive with criticism",
            "Completely negative",
            "Confused"
          ],
          correctAnswer: "Mostly positive with criticism",
          explanation: "The writer values the facilities and hours but criticises the noise."
        },
        {
          id: "q6",
          type: "short-answer",
          prompt: "What can be inferred about some visitors?",
          acceptedAnswers: [
            "They do not always use the meeting rooms for online calls.",
            "they take online meetings at their desks",
            "some visitors make calls at their desks",
            "they do not use the meeting rooms",
            "they create noise during online meetings",
            "some people ignore the purpose of the meeting rooms"
          ],
          explanation: "The passage states that some visitors hold online meetings at their desks instead of using the available meeting rooms."
        },
        {
          id: "q7",
          type: "single-choice",
          prompt: "Who would probably be least satisfied with this workspace?",
          options: [
            "Someone who needs flexible opening hours",
            "Someone who wants fast internet",
            "Someone who needs complete silence",
            "Someone who likes free hot drinks"
          ],
          correctAnswer: "Someone who needs complete silence",
          explanation: "The writer directly warns that people requiring silence may find the workspace frustrating."
        }
      ]
    },
    {
      id: "section-3",
      title: "THE RIVERSIDE FOOTPATH PROPOSAL",
      context: "Read a community newsletter article about a proposed riverside footpath.",
      passage: {
        heading: "The Riverside Footpath Proposal",
        paragraphs: [
          "The local council is considering building a new footpath beside the River Dene. Supporters say the path would give residents a safer place to walk and cycle while connecting two neighbourhoods that currently have no direct route between them.",
          "The proposal has received strong support from families and cycling groups. They believe the path would encourage exercise and reduce short car journeys. Several local cafés also expect more visitors if the route is built.",
          "Not everyone is convinced. Some residents are concerned that construction could damage trees and disturb wildlife near the river. Others worry that the path may become crowded during weekends.",
          "The council has promised to complete an environmental study before making a final decision. It is also considering a narrower route that would avoid the most sensitive areas. If these concerns are addressed carefully, the project could provide valuable benefits without causing unnecessary environmental damage."
        ]
      },
      questions: [
        {
          id: "q8",
          type: "single-choice",
          prompt: "What is the writer’s attitude towards the proposal?",
          options: [
            "Completely opposed",
            "Cautiously supportive",
            "Uninterested",
            "Completely certain that it will succeed"
          ],
          correctAnswer: "Cautiously supportive",
          explanation: "The writer recognises possible benefits but stresses that environmental concerns must be handled carefully."
        },
        {
          id: "q9",
          type: "short-answer",
          prompt: "What can be inferred about the narrower route?",
          acceptedAnswers: [
            "It may reduce environmental damage.",
            "it could protect sensitive areas",
            "it may avoid damaging trees and wildlife",
            "it may reduce harm to the environment",
            "it would avoid sensitive areas",
            "it could address environmental concerns"
          ],
          explanation: "The narrower route is being considered to avoid environmentally sensitive areas."
        },
        {
          id: "q10",
          type: "single-choice",
          prompt: "Why does the writer mention the environmental study?",
          options: [
            "To show that the project has already been cancelled",
            "To show that the council is considering possible harm before deciding",
            "To prove that the path will definitely be built",
            "To explain why cafés oppose the project"
          ],
          correctAnswer: "To show that the council is considering possible harm before deciding",
          explanation: "The study will help the council assess environmental risks before making a final decision."
        }
      ]
    }
  ]
};
