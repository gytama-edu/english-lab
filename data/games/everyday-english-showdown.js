window.GAME_DATA = window.GAME_DATA || {};
window.GAME_DATA["everyday-english-showdown"] = {
  id: "everyday-english-showdown",
  title: "Everyday English Showdown",
  gameTitle: "Top Answer Showdown",
  description: "Compete to reveal hidden answers about routines, classrooms, travel, food, places, and everyday life.",
  instructions: [
    "Divide the class into two teams.",
    "The teacher listens to your answers and checks the board.",
    "Avoid getting three strikes!"
  ],
  rounds: [
    {
      id: "round-1",
      question: "Name something people often do before leaving for work.",
      multiplier: 1,
      answers: [
        {
          id: "r1-a1", rank: 1, text: "Eat breakfast", points: 30,
          acceptedAnswers: ["eat breakfast", "have breakfast", "breakfast"]
        },
        {
          id: "r1-a2", rank: 2, text: "Get dressed", points: 25,
          acceptedAnswers: ["get dressed", "dress", "put on clothes", "change clothes"]
        },
        {
          id: "r1-a3", rank: 3, text: "Brush their teeth", points: 20,
          acceptedAnswers: ["brush teeth", "brush their teeth", "clean teeth", "clean their teeth"]
        },
        {
          id: "r1-a4", rank: 4, text: "Take a shower", points: 18,
          acceptedAnswers: ["take a shower", "have a shower", "shower", "bathe", "take a bath"]
        },
        {
          id: "r1-a5", rank: 5, text: "Check their phone", points: 12,
          acceptedAnswers: ["check phone", "check their phone", "read messages", "check messages", "check notifications"]
        },
        {
          id: "r1-a6", rank: 6, text: "Drink coffee", points: 10,
          acceptedAnswers: ["drink coffee", "have coffee", "make coffee", "coffee"]
        }
      ]
    },
    {
      id: "round-2",
      question: "Name a common reason someone might be late.",
      multiplier: 1,
      answers: [
        {
          id: "r2-a1", rank: 1, text: "Traffic", points: 30,
          acceptedAnswers: ["traffic", "traffic jam", "heavy traffic", "stuck in traffic"]
        },
        {
          id: "r2-a2", rank: 2, text: "They overslept", points: 25,
          acceptedAnswers: ["overslept", "slept late", "woke up late", "missed alarm", "alarm did not ring"]
        },
        {
          id: "r2-a3", rank: 3, text: "Public transport was delayed", points: 20,
          acceptedAnswers: ["bus was late", "train was late", "transport delay", "public transport delay", "delayed bus", "delayed train"]
        },
        {
          id: "r2-a4", rank: 4, text: "Bad weather", points: 15,
          acceptedAnswers: ["bad weather", "rain", "heavy rain", "storm", "snow", "flooding"]
        },
        {
          id: "r2-a5", rank: 5, text: "They forgot something", points: 12,
          acceptedAnswers: ["forgot something", "went back home", "left something at home", "forgot their keys", "forgot phone"]
        },
        {
          id: "r2-a6", rank: 6, text: "Car or motorcycle trouble", points: 10,
          acceptedAnswers: ["car trouble", "motorcycle trouble", "vehicle problem", "flat tire", "engine problem", "car broke down"]
        }
      ]
    },
    {
      id: "round-3",
      question: "Name something commonly found in a classroom.",
      multiplier: 1,
      answers: [
        {
          id: "r3-a1", rank: 1, text: "Chairs", points: 25,
          acceptedAnswers: ["chair", "chairs", "seats"]
        },
        {
          id: "r3-a2", rank: 2, text: "Desks or tables", points: 23,
          acceptedAnswers: ["desk", "desks", "table", "tables", "student desk"]
        },
        {
          id: "r3-a3", rank: 3, text: "Whiteboard", points: 20,
          acceptedAnswers: ["whiteboard", "board", "blackboard", "chalkboard"]
        },
        {
          id: "r3-a4", rank: 4, text: "Books", points: 18,
          acceptedAnswers: ["book", "books", "textbook", "textbooks"]
        },
        {
          id: "r3-a5", rank: 5, text: "Markers or pens", points: 15,
          acceptedAnswers: ["marker", "markers", "pen", "pens", "whiteboard marker", "chalk"]
        },
        {
          id: "r3-a6", rank: 6, text: "Projector", points: 12,
          acceptedAnswers: ["projector", "screen", "presentation screen"]
        }
      ]
    },
    {
      id: "round-4",
      question: "Name something people often pack for a holiday.",
      multiplier: 1,
      answers: [
        {
          id: "r4-a1", rank: 1, text: "Clothes", points: 25,
          acceptedAnswers: ["clothes", "clothing", "shirts", "trousers", "pants", "jacket"]
        },
        {
          id: "r4-a2", rank: 2, text: "Passport", points: 22,
          acceptedAnswers: ["passport", "travel document", "identification", "id"]
        },
        {
          id: "r4-a3", rank: 3, text: "Phone and charger", points: 20,
          acceptedAnswers: ["phone", "mobile phone", "smartphone", "charger", "phone charger", "phone and charger"]
        },
        {
          id: "r4-a4", rank: 4, text: "Toiletries", points: 18,
          acceptedAnswers: ["toiletries", "toothbrush", "toothpaste", "soap", "shampoo", "bathroom items"]
        },
        {
          id: "r4-a5", rank: 5, text: "Money or bank cards", points: 15,
          acceptedAnswers: ["money", "cash", "bank card", "credit card", "debit card", "wallet"]
        },
        {
          id: "r4-a6", rank: 6, text: "Medicine", points: 10,
          acceptedAnswers: ["medicine", "medication", "pills", "first aid kit", "medical supplies"]
        }
      ]
    },
    {
      id: "round-5",
      question: "Name a food people commonly eat for breakfast.",
      multiplier: 2,
      answers: [
        {
          id: "r5-a1", rank: 1, text: "Eggs", points: 25,
          acceptedAnswers: ["egg", "eggs", "fried eggs", "boiled eggs", "omelette", "omelet"]
        },
        {
          id: "r5-a2", rank: 2, text: "Bread or toast", points: 22,
          acceptedAnswers: ["bread", "toast", "sandwich", "bread and butter"]
        },
        {
          id: "r5-a3", rank: 3, text: "Cereal", points: 20,
          acceptedAnswers: ["cereal", "cornflakes", "oats", "oatmeal"]
        },
        {
          id: "r5-a4", rank: 4, text: "Rice", points: 18,
          acceptedAnswers: ["rice", "fried rice", "nasi goreng", "rice meal"]
        },
        {
          id: "r5-a5", rank: 5, text: "Fruit", points: 15,
          acceptedAnswers: ["fruit", "banana", "apple", "orange", "berries"]
        },
        {
          id: "r5-a6", rank: 6, text: "Noodles", points: 12,
          acceptedAnswers: ["noodles", "noodle soup", "instant noodles", "mie", "ramen"]
        }
      ]
    },
    {
      id: "round-6",
      question: "Name a place where people are usually expected to speak quietly.",
      multiplier: 2,
      answers: [
        {
          id: "r6-a1", rank: 1, text: "Library", points: 30,
          acceptedAnswers: ["library", "reading room"]
        },
        {
          id: "r6-a2", rank: 2, text: "Hospital", points: 22,
          acceptedAnswers: ["hospital", "clinic", "medical centre", "medical center"]
        },
        {
          id: "r6-a3", rank: 3, text: "Cinema or theatre", points: 18,
          acceptedAnswers: ["cinema", "movie theatre", "movie theater", "theatre", "theater"]
        },
        {
          id: "r6-a4", rank: 4, text: "Classroom during a test", points: 15,
          acceptedAnswers: ["classroom", "exam room", "test room", "during a test", "during an exam"]
        },
        {
          id: "r6-a5", rank: 5, text: "Place of worship", points: 12,
          acceptedAnswers: ["mosque", "church", "temle", "temple", "place of worship", "prayer room"]
        },
        {
          id: "r6-a6", rank: 6, text: "Office or meeting room", points: 10,
          acceptedAnswers: ["office", "meeting room", "workplace", "conference room"]
        }
      ]
    },
    {
      id: "round-7",
      question: "Name a common reason people learn English.",
      multiplier: 3,
      answers: [
        {
          id: "r7-a1", rank: 1, text: "For work", points: 30,
          acceptedAnswers: ["work", "for work", "job", "career", "business", "promotion"]
        },
        {
          id: "r7-a2", rank: 2, text: "For travel", points: 25,
          acceptedAnswers: ["travel", "travelling", "traveling", "holiday", "vacation", "tourism"]
        },
        {
          id: "r7-a3", rank: 3, text: "For education", points: 22,
          acceptedAnswers: ["education", "study", "school", "university", "college", "study abroad"]
        },
        {
          id: "r7-a4", rank: 4, text: "To communicate with people", points: 18,
          acceptedAnswers: ["communicate", "communication", "speak with foreigners", "talk to people", "make friends", "meet people"]
        },
        {
          id: "r7-a5", rank: 5, text: "For films, music, or entertainment", points: 14,
          acceptedAnswers: ["movies", "films", "music", "entertainment", "games", "video games", "television", "tv"]
        },
        {
          id: "r7-a6", rank: 6, text: "To live abroad", points: 10,
          acceptedAnswers: ["live abroad", "move abroad", "immigration", "migrate", "live in another country"]
        }
      ]
    },
    {
      id: "round-8",
      question: "Name something people often do at the weekend.",
      multiplier: 3,
      answers: [
        {
          id: "r8-a1", rank: 1, text: "Relax or rest", points: 25,
          acceptedAnswers: ["relax", "rest", "sleep", "sleep late", "stay at home"]
        },
        {
          id: "r8-a2", rank: 2, text: "Meet friends or family", points: 22,
          acceptedAnswers: ["meet friends", "see friends", "visit family", "meet family", "spend time with family", "hang out"]
        },
        {
          id: "r8-a3", rank: 3, text: "Watch films or television", points: 20,
          acceptedAnswers: ["watch movies", "watch films", "watch tv", "television", "netflix", "streaming"]
        },
        {
          id: "r8-a4", rank: 4, text: "Go shopping", points: 18,
          acceptedAnswers: ["shopping", "go shopping", "visit a mall", "mall"]
        },
        {
          id: "r8-a5", rank: 5, text: "Exercise or play sports", points: 15,
          acceptedAnswers: ["exercise", "workout", "gym", "play sports", "football", "cycling", "jogging"]
        },
        {
          id: "r8-a6", rank: 6, text: "Clean the house", points: 12,
          acceptedAnswers: ["clean", "clean house", "cleaning", "housework", "do chores", "laundry"]
        }
      ]
    }
  ],
  completion: {
    title: "Final Scores",
    message: "The everyday showdown is complete!"
  }
};
