export const activityData = {
  id: "reading-for-main-ideas-and-supporting-details",
  title: "Reading for Main Ideas and Supporting Details",
  description: "Read three short texts and identify their main ideas, purposes, supporting details, and best summaries.",
  lessonId: "reading-for-main-ideas-and-supporting-details",
  lab: "Reading Lab",
  accent: "var(--gold)",
  instructions: [
    "Read three short texts and answer ten questions about their main ideas, purposes, and supporting details. You may move between questions and return to each passage whenever necessary."
  ],
  sections: [
    {
      id: "section-1",
      title: "Activity 1",
      context: "Read about a new service at a local library.",
      passage: {
        heading: "A Quieter Time at the Library",
        paragraphs: [
          "Maple Street Library has introduced a weekly Quiet Hour to make the building more comfortable for visitors who are sensitive to noise and bright light. Every Wednesday from ten until eleven in the morning, the library lowers its lights, turns off unnecessary electronic sounds, and asks visitors to keep conversations brief and quiet.",
          "The idea was first suggested by several parents whose children found the library too busy during normal opening hours. Older visitors and people who experience anxiety have also welcomed the change. Library staff received special training so they can offer help without creating extra noise or pressure.",
          "The library remains open to everyone during Quiet Hour. Visitors do not need to book, and all regular services remain available. The only major difference is the calmer environment. After a successful two-month trial, the library has decided to make Quiet Hour a permanent part of its weekly schedule."
        ]
      },
      questions: [
        {
          id: "q1",
          type: "single-choice",
          prompt: "What is the passage mainly about?",
          options: [
            "A library is reducing its normal opening hours",
            "A library has introduced a quieter weekly period",
            "Parents are asking for a new children’s library",
            "Library staff are refusing to help visitors"
          ],
          correctAnswer: "A library has introduced a quieter weekly period",
          explanation: "The whole passage explains the new weekly Quiet Hour and how it works."
        },
        {
          id: "q2",
          type: "single-choice",
          prompt: "Why was Quiet Hour first suggested?",
          options: [
            "The library wanted to save electricity",
            "Staff needed time for training",
            "Some children found the library too busy",
            "Older visitors wanted the library to close"
          ],
          correctAnswer: "Some children found the library too busy",
          explanation: "Parents suggested the idea because their children were uncomfortable during normal busy hours."
        },
        {
          id: "q3",
          type: "short-answer",
          prompt: "Name one change the library makes during Quiet Hour.",
          correctAnswer: "It lowers the lights.",
          acceptedAnswers: [
            "lowers the lights",
            "lower lighting",
            "turns off unnecessary electronic sounds",
            "switches off unnecessary electronic sounds",
            "asks visitors to keep conversations quiet",
            "keeps conversations brief and quiet",
            "creates a calmer environment"
          ],
          explanation: "The library reduces light and noise to create a calmer environment."
        },
        {
          id: "q4",
          type: "single-choice",
          prompt: "Which sentence is the best summary of the final paragraph?",
          options: [
            "Quiet Hour failed after two months",
            "Visitors must now book library services",
            "Quiet Hour will continue permanently",
            "The library will only open on Wednesdays"
          ],
          correctAnswer: "Quiet Hour will continue permanently",
          explanation: "The successful trial led the library to make the service permanent."
        }
      ]
    },
    {
      id: "section-2",
      title: "Activity 2",
      context: "Read about a different way of holding workplace meetings.",
      passage: {
        heading: "Why Some Teams Use Walking Meetings",
        paragraphs: [
          "Many office workers spend most of their day sitting at desks or looking at screens. To encourage more movement, some companies have started using walking meetings for small groups. Instead of sitting in a meeting room, colleagues discuss simple topics while walking outside or through a large indoor space.",
          "Walking meetings are usually used for informal discussions, planning, or sharing ideas. Employees often say that walking helps them feel more energetic and makes conversation less formal. Some managers also believe that people think more creatively when they are moving.",
          "However, walking meetings are not suitable for every situation. They are difficult when participants need to read documents, take detailed notes, use presentation screens, or include colleagues online. For this reason, most companies use walking meetings as an occasional option rather than a complete replacement for traditional meetings."
        ]
      },
      questions: [
        {
          id: "q5",
          type: "single-choice",
          prompt: "What is the main idea of the passage?",
          options: [
            "Traditional meetings should be completely removed",
            "Walking meetings can be useful in certain situations",
            "Office workers should never sit during the day",
            "Online meetings are more creative than outdoor meetings"
          ],
          correctAnswer: "Walking meetings can be useful in certain situations",
          explanation: "The passage describes their benefits but also explains their limitations."
        },
        {
          id: "q6",
          type: "short-answer",
          prompt: "Give one benefit employees report from walking meetings.",
          correctAnswer: "They feel more energetic.",
          acceptedAnswers: [
            "feel more energetic",
            "more energy",
            "conversation feels less formal",
            "less formal conversations",
            "they may think more creatively",
            "more creative thinking"
          ],
          explanation: "The passage mentions increased energy, less formal conversation, and possible creative benefits."
        },
        {
          id: "q7",
          type: "single-choice",
          prompt: "Why are walking meetings unsuitable for some discussions?",
          options: [
            "Walking is never allowed indoors",
            "Employees dislike speaking while moving",
            "Some tasks require documents, screens, or detailed notes",
            "Managers do not attend informal meetings"
          ],
          correctAnswer: "Some tasks require documents, screens, or detailed notes",
          explanation: "The final paragraph explains the practical limits of walking meetings."
        }
      ]
    },
    {
      id: "section-3",
      title: "Activity 3",
      context: "Read about a neighbourhood event that helps people repair household items.",
      passage: {
        heading: "The Community Repair Café",
        paragraphs: [
          "Once a month, residents of Greenhill bring broken household items to the community hall for a Repair Café. Volunteers with practical skills help visitors repair lamps, small pieces of furniture, clothing, bicycles, and simple electronic devices.",
          "The event was created to reduce waste. Many objects are thrown away even when they only need a small repair. By fixing these items, residents save money and keep useful materials out of rubbish sites. Visitors also learn basic repair skills by watching and helping the volunteers.",
          "The service is free, although visitors may need to pay for replacement parts. Repairs are not guaranteed because some objects are too damaged or require specialist equipment. Even so, the organisers say the event has become increasingly popular. It now attracts around sixty visitors each month and has inspired a neighbouring town to start a similar programme."
        ]
      },
      questions: [
        {
          id: "q8",
          type: "single-choice",
          prompt: "What is the main purpose of the Repair Café?",
          options: [
            "To sell new household products",
            "To train professional engineers",
            "To help people repair items and reduce waste",
            "To collect money for the community hall"
          ],
          correctAnswer: "To help people repair items and reduce waste",
          explanation: "The event helps residents fix broken objects instead of throwing them away."
        },
        {
          id: "q9",
          type: "short-answer",
          prompt: "What may visitors need to pay for?",
          correctAnswer: "Replacement parts.",
          acceptedAnswers: [
            "replacement parts",
            "new parts",
            "parts needed for repairs",
            "repair parts"
          ],
          explanation: "The service is free, but visitors may need to pay for replacement parts."
        },
        {
          id: "q10",
          type: "single-choice",
          prompt: "Which detail best shows that the event is successful?",
          options: [
            "Some objects cannot be repaired",
            "The community hall opens once a month",
            "It attracts around sixty visitors and inspired another town",
            "Volunteers repair lamps and bicycles"
          ],
          correctAnswer: "It attracts around sixty visitors and inspired another town",
          explanation: "The number of visitors and the creation of a similar programme show the event’s success."
        }
      ]
    }
  ],
  completion: {
    message: "Activity complete. Review the questions you missed and return to the passages to see which details support the correct answers."
  }
};
