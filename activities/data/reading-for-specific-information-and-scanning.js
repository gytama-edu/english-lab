export const activityData = {
  id: "reading-for-specific-information-and-scanning",
  title: "Reading for Specific Information and Scanning",
  description: "Scan three everyday texts to find times, dates, prices, places, instructions, and conditions.",
  instructions: [
    "Scan the text to find the specific information asked for in each question.",
    "Do not read every word slowly.",
    "Pay attention to numbers, conditions, and negative words."
  ],
  lessonId: "reading-for-specific-information-and-scanning",
  accent: "var(--gold)",
  sections: [
    {
      id: "section-1",
      title: "RIVERSIDE COMMUNITY CENTRE SCHEDULE",
      context: "Scan the weekly schedule to find activity times, prices, and instructions.",
      passage: {
        heading: "Riverside Community Centre",
        blocks: [
          {
            type: "heading",
            level: 4,
            text: "Monday"
          },
          {
            type: "table",
            headers: ["Time", "Activity", "Location", "Price", "Important information"],
            rows: [
              ["9:00–10:00 a.m.", "Gentle Yoga", "Studio A", "£6", "Mats are provided"],
              ["4:00–5:00 p.m.", "Homework Club", "Study Room", "Free", "Ages 10–14; booking required"]
            ]
          },
          {
            type: "heading",
            level: 4,
            text: "Tuesday"
          },
          {
            type: "table",
            headers: ["Time", "Activity", "Location", "Price", "Important information"],
            rows: [
              ["6:30–8:00 p.m.", "Beginner Cooking", "Kitchen Lab", "£12", "Bring a reusable container"]
            ]
          },
          {
            type: "heading",
            level: 4,
            text: "Wednesday"
          },
          {
            type: "table",
            headers: ["Time", "Activity", "Location", "Price", "Important information"],
            rows: [
              ["10:30–11:30 a.m.", "Parent and Toddler Music", "Studio B", "£5 per family", "No booking required"],
              ["7:00–8:00 p.m.", "Indoor Cycling", "Fitness Room", "£8", "Bring a water bottle"]
            ]
          },
          {
            type: "heading",
            level: 4,
            text: "Saturday"
          },
          {
            type: "table",
            headers: ["Time", "Activity", "Location", "Price", "Important information"],
            rows: [
              ["9:30–11:00 a.m.", "Community Gardening", "Courtyard", "Free", "Gloves provided; cancelled in heavy rain"]
            ]
          }
        ]
      },
      questions: [
        {
          id: "q1",
          type: "single-choice",
          prompt: "Which free activity requires booking?",
          options: [
            "Gentle Yoga",
            "Homework Club",
            "Parent and Toddler Music",
            "Community Gardening"
          ],
          correctAnswer: "Homework Club",
          explanation: "Homework Club is free, but participants must book a place."
        },
        {
          id: "q2",
          type: "short-answer",
          prompt: "What time does Beginner Cooking begin?",
          acceptedAnswers: [
            "6:30 p.m.",
            "6:30 pm",
            "6:30",
            "6.30",
            "6.30 p.m.",
            "6.30 pm",
            "six thirty",
            "half past six",
            "18:30"
          ],
          explanation: "The Tuesday schedule shows that Beginner Cooking starts at 6:30 p.m."
        },
        {
          id: "q3",
          type: "short-answer",
          prompt: "What should participants bring to Indoor Cycling?",
          acceptedAnswers: [
            "A water bottle",
            "water bottle",
            "a water bottle",
            "their water bottle"
          ],
          explanation: "The Indoor Cycling information tells participants to bring a water bottle."
        },
        {
          id: "q4",
          type: "single-choice",
          prompt: "Which activity may be cancelled because of the weather?",
          options: [
            "Gentle Yoga",
            "Beginner Cooking",
            "Indoor Cycling",
            "Community Gardening"
          ],
          correctAnswer: "Community Gardening",
          explanation: "Community Gardening is cancelled in heavy rain."
        }
      ]
    },
    {
      id: "section-2",
      title: "CITY MUSEUM VISITOR INFORMATION",
      context: "Scan the visitor information for opening times, ticket prices, facilities, and rules.",
      passage: {
        heading: "City Museum Visitor Information",
        blocks: [
          {
            type: "heading",
            level: 3,
            text: "Opening Times"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Tuesday–Thursday: 10:00 a.m.–5:30 p.m.",
              "Friday: 10:00 a.m.–8:00 p.m.",
              "Saturday and Sunday: 10:00 a.m.–5:30 p.m.",
              "Closed on Monday",
              "Last entry is 45 minutes before closing"
            ]
          },
          {
            type: "heading",
            level: 3,
            text: "Tickets"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Adults: £11",
              "Students and visitors aged 65 or over: £7",
              "Visitors under 16: Free when accompanied by an adult",
              "Special exhibition: Additional £4"
            ]
          },
          {
            type: "heading",
            level: 3,
            text: "Bags and Lockers"
          },
          {
            type: "paragraph",
            text: "Bags larger than 40 × 30 centimetres must be placed in the lockers on the ground floor. A refundable £1 coin is required."
          },
          {
            type: "heading",
            level: 3,
            text: "Photography"
          },
          {
            type: "paragraph",
            text: "Photography without flash is allowed in most areas. Photography is not allowed inside the Modern Worlds Gallery."
          },
          {
            type: "heading",
            level: 3,
            text: "Facilities and Tours"
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Museum café: 10:30 a.m.–4:30 p.m.",
              "Roof terrace: Closed during strong winds",
              "Guided tours: Wednesday and Friday at 2:00 p.m.",
              "Guided tours last approximately 45 minutes",
              "Book tours at the information desk"
            ]
          }
        ]
      },
      questions: [
        {
          id: "q5",
          type: "short-answer",
          prompt: "How much does an adult pay to visit the museum and the special exhibition?",
          acceptedAnswers: [
            "£15",
            "15",
            "15 pounds",
            "fifteen pounds"
          ],
          explanation: "An adult ticket costs £11, and the special exhibition costs an additional £4."
        },
        {
          id: "q6",
          type: "single-choice",
          prompt: "Where must visitors leave large bags?",
          options: [
            "At the information desk",
            "In the café",
            "In ground-floor lockers",
            "On the roof terrace"
          ],
          correctAnswer: "In ground-floor lockers",
          explanation: "Large bags must be placed in the lockers on the ground floor."
        },
        {
          id: "q7",
          type: "short-answer",
          prompt: "Where is photography not allowed?",
          acceptedAnswers: [
            "The Modern Worlds Gallery",
            "Modern Worlds Gallery",
            "the Modern Worlds Gallery",
            "inside the Modern Worlds Gallery",
            "Modern Worlds"
          ],
          explanation: "Photography is allowed in most areas but not inside the Modern Worlds Gallery."
        }
      ]
    },
    {
      id: "section-3",
      title: "BUILDING C MAINTENANCE NOTICE",
      context: "Scan the notice for dates, times, affected facilities, and resident instructions.",
      passage: {
        heading: "Building C Maintenance Notice",
        blocks: [
          {
            type: "paragraph",
            text: "Important notice for residents of Building C"
          },
          {
            type: "paragraph",
            text: "Water will be unavailable on Thursday, 18 July, from 9:00 a.m. until 2:00 p.m. while contractors replace a damaged pipe. Apartments C1 to C24 will be affected."
          },
          {
            type: "paragraph",
            text: "Residents should fill containers with enough water for essential use before the work begins. The laundry room will remain closed for the entire day. The lifts will continue to operate normally."
          },
          {
            type: "paragraph",
            text: "Contractors will work in shared corridors and service areas. They will not need to enter individual apartments unless a separate appointment has already been arranged."
          },
          {
            type: "paragraph",
            text: "Residents with medical or mobility needs should contact the building office before Tuesday, 16 July, at 4:00 p.m."
          },
          {
            type: "paragraph",
            text: "Some drilling noise is also expected on Wednesday, 17 July, between 10:00 a.m. and midday. If severe weather prevents the work, the water shutdown will move to Friday, 19 July."
          }
        ]
      },
      questions: [
        {
          id: "q8",
          type: "short-answer",
          prompt: "How long will the water be unavailable?",
          acceptedAnswers: [
            "Five hours",
            "five hours",
            "5 hours",
            "for five hours",
            "from 9:00 a.m. to 2:00 p.m.",
            "9:00 a.m. to 2:00 p.m.",
            "9:00 am to 2:00 pm",
            "9am to 2pm"
          ],
          explanation: "The shutdown lasts from 9:00 a.m. until 2:00 p.m., which is five hours."
        },
        {
          id: "q9",
          type: "single-choice",
          prompt: "Which facility will be closed for the entire day?",
          options: [
            "The lifts",
            "The building office",
            "The laundry room",
            "The shared corridors"
          ],
          correctAnswer: "The laundry room",
          explanation: "The notice states that the laundry room will remain closed for the entire day."
        },
        {
          id: "q10",
          type: "short-answer",
          prompt: "What is the deadline for residents with medical or mobility needs to contact the office?",
          acceptedAnswers: [
            "Tuesday, 16 July, at 4:00 p.m.",
            "Tuesday 16 July at 4:00 p.m.",
            "Tuesday 16 July at 4 pm",
            "16 July at 4:00 p.m.",
            "16 July at 4 pm",
            "Tuesday at 4:00 p.m.",
            "Tuesday at 4 pm"
          ],
          explanation: "Affected residents must contact the building office before Tuesday, 16 July, at 4:00 p.m."
        }
      ]
    }
  ]
};
