window.GAME_DATA = window.GAME_DATA || {};
window.GAME_DATA["school-and-campus-showdown"] = {
  id: "school-and-campus-showdown",
  title: "School & Campus Showdown",
  gameTitle: "Top Answer Showdown",
  description: "Reveal familiar answers about lessons, exams, canteens, assignments, and student life.",
  rounds: [
    {
      id: "school-round-1",
      question: "Name something students commonly bring to class.",
      multiplier: 1,
      answers: [
        { id: "school-round-1-ans-1", rank: 1, text: "Phone", points: 24 },
        { id: "school-round-1-ans-2", rank: 2, text: "Notebook", points: 22 },
        { id: "school-round-1-ans-3", rank: 3, text: "Pen or pencil", points: 20 },
        { id: "school-round-1-ans-4", rank: 4, text: "Bag", points: 15 },
        { id: "school-round-1-ans-5", rank: 5, text: "Laptop", points: 11 },
        { id: "school-round-1-ans-6", rank: 6, text: "Water bottle", points: 8 }
      ]
    },
    {
      id: "school-round-2",
      question: "Name a common reason a student arrives late.",
      multiplier: 1,
      answers: [
        { id: "school-round-2-ans-1", rank: 1, text: "Traffic", points: 27 },
        { id: "school-round-2-ans-2", rank: 2, text: "They overslept", points: 23 },
        { id: "school-round-2-ans-3", rank: 3, text: "Public transport was delayed", points: 18 },
        { id: "school-round-2-ans-4", rank: 4, text: "Heavy rain", points: 14 },
        { id: "school-round-2-ans-5", rank: 5, text: "They forgot something", points: 10 },
        { id: "school-round-2-ans-6", rank: 6, text: "A long queue", points: 8 }
      ]
    },
    {
      id: "school-round-3",
      question: "Name something students often do before an exam.",
      multiplier: 1,
      answers: [
        { id: "school-round-3-ans-1", rank: 1, text: "Review their notes", points: 26 },
        { id: "school-round-3-ans-2", rank: 2, text: "Study with friends", points: 21 },
        { id: "school-round-3-ans-3", rank: 3, text: "Pray", points: 17 },
        { id: "school-round-3-ans-4", rank: 4, text: "Prepare stationery", points: 14 },
        { id: "school-round-3-ans-5", rank: 5, text: "Sleep early", points: 11 },
        { id: "school-round-3-ans-6", rank: 6, text: "Drink coffee", points: 8 }
      ]
    },
    {
      id: "school-round-4",
      question: "Name something commonly sold in a school or campus canteen.",
      multiplier: 1,
      answers: [
        { id: "school-round-4-ans-1", rank: 1, text: "Rice meals", points: 24 },
        { id: "school-round-4-ans-2", rank: 2, text: "Noodles", points: 21 },
        { id: "school-round-4-ans-3", rank: 3, text: "Fried snacks", points: 18 },
        { id: "school-round-4-ans-4", rank: 4, text: "Iced tea", points: 15 },
        { id: "school-round-4-ans-5", rank: 5, text: "Meatballs", points: 11 },
        { id: "school-round-4-ans-6", rank: 6, text: "Bottled water", points: 8 }
      ]
    },
    {
      id: "school-round-5",
      question: "Name a school subject students often find difficult.",
      multiplier: 2,
      answers: [
        { id: "school-round-5-ans-1", rank: 1, text: "Mathematics", points: 27 },
        { id: "school-round-5-ans-2", rank: 2, text: "English", points: 21 },
        { id: "school-round-5-ans-3", rank: 3, text: "Physics", points: 18 },
        { id: "school-round-5-ans-4", rank: 4, text: "Chemistry", points: 14 },
        { id: "school-round-5-ans-5", rank: 5, text: "Accounting", points: 11 },
        { id: "school-round-5-ans-6", rank: 6, text: "History", points: 8 }
      ]
    },
    {
      id: "school-round-6",
      question: "Name an excuse a student might give for not doing homework.",
      multiplier: 2,
      answers: [
        { id: "school-round-6-ans-1", rank: 1, text: "They forgot", points: 25 },
        { id: "school-round-6-ans-2", rank: 2, text: "They did not understand it", points: 21 },
        { id: "school-round-6-ans-3", rank: 3, text: "The internet did not work", points: 17 },
        { id: "school-round-6-ans-4", rank: 4, text: "They were too busy", points: 14 },
        { id: "school-round-6-ans-5", rank: 5, text: "They were sick", points: 11 },
        { id: "school-round-6-ans-6", rank: 6, text: "They left the book at school", points: 8 }
      ]
    },
    {
      id: "school-round-7",
      question: "Name a common problem in a group project.",
      multiplier: 3,
      answers: [
        { id: "school-round-7-ans-1", rank: 1, text: "Some members do not help", points: 27 },
        { id: "school-round-7-ans-2", rank: 2, text: "People reply late", points: 21 },
        { id: "school-round-7-ans-3", rank: 3, text: "Different schedules", points: 17 },
        { id: "school-round-7-ans-4", rank: 4, text: "The task is unclear", points: 14 },
        { id: "school-round-7-ans-5", rank: 5, text: "Work is done at the last minute", points: 10 },
        { id: "school-round-7-ans-6", rank: 6, text: "File or technology problems", points: 8 }
      ]
    },
    {
      id: "school-round-8",
      question: "Name an event commonly held at a school or university.",
      multiplier: 3,
      answers: [
        { id: "school-round-8-ans-1", rank: 1, text: "Graduation", points: 24 },
        { id: "school-round-8-ans-2", rank: 2, text: "Sports competition", points: 21 },
        { id: "school-round-8-ans-3", rank: 3, text: "Student orientation", points: 18 },
        { id: "school-round-8-ans-4", rank: 4, text: "Class meeting", points: 15 },
        { id: "school-round-8-ans-5", rank: 5, text: "Field trip", points: 11 },
        { id: "school-round-8-ans-6", rank: 6, text: "Art or music performance", points: 8 }
      ]
    }
  ],
  completion: {
    title: "Final Scores",
    message: "The School & Campus Showdown has concluded."
  }
};
