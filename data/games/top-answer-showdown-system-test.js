window.GAME_DATA = window.GAME_DATA || {};
window.GAME_DATA["top-answer-showdown-system-test"] = {
  id: "top-answer-showdown-system-test",
  title: "System Test Showdown",
  gameTitle: "Top Answer Showdown",
  description: "Private test data for validating game logic. Manually check: Concealed topic, Successful steal, Failed steal, and Round Summary.",
  instructions: [
    "Test instructions 1",
    "Test instructions 2",
    "Concealed topic: Verify question isn't rendered before Play/Pass, toggles correctly, undo works, and Reset Round conceals it.",
    "Successful steal: Verify only chosen answer is revealed, bank awarded, and others remain hidden. Undo restores Steal Mode.",
    "Failed steal: Verify no new answers revealed, bank goes to original team. Undo returns to Steal Mode.",
    "Round Summary: Shows only officially revealed answers, numbered placeholders for unrevealed, Next Round hides next question."
  ],
  rounds: [
    {
      id: "round-1",
      question: "Test Question 1 (8 Answers for Hotkeys)",
      multiplier: 1,
      answers: [
        { id: "r1-a1", rank: 1, text: "Answer 1", points: 30 },
        { id: "r1-a2", rank: 2, text: "Answer 2", points: 25 },
        { id: "r1-a3", rank: 3, text: "Answer 3", points: 20 },
        { id: "r1-a4", rank: 4, text: "Answer 4", points: 15 },
        { id: "r1-a5", rank: 5, text: "Answer 5", points: 10 },
        { id: "r1-a6", rank: 6, text: "Answer 6", points: 5 },
        { id: "r1-a7", rank: 7, text: "Answer 7", points: 2 },
        { id: "r1-a8", rank: 8, text: "Answer 8", points: 1 }
      ]
    },
    {
      id: "round-2",
      question: "Test Question 2",
      multiplier: 2,
      answers: [
        { id: "r2-a1", rank: 1, text: "Answer A", points: 30 },
        { id: "r2-a2", rank: 2, text: "Answer B", points: 25 },
        { id: "r2-a3", rank: 3, text: "Answer C", points: 20 },
        { id: "r2-a4", rank: 4, text: "Answer D", points: 15 }
      ]
    },
    {
      id: "round-3",
      question: "Test Question 3",
      multiplier: 3,
      answers: [
        { id: "r3-a1", rank: 1, text: "Wait", points: 30 },
        { id: "r3-a2", rank: 2, text: "Stop", points: 25 },
        { id: "r3-a3", rank: 3, text: "Go", points: 20 },
        { id: "r3-a4", rank: 4, text: "Run", points: 15 }
      ]
    },
    {
      id: "round-4", question: "Q4", multiplier: 1, answers: [{id:"4-1", rank: 1, text:"A", points:10}, {id:"4-2", rank: 2, text:"B", points:10}, {id:"4-3", rank: 3, text:"C", points:10}, {id:"4-4", rank: 4, text:"D", points:10}]
    },
    {
      id: "round-5", question: "Q5", multiplier: 1, answers: [{id:"5-1", rank: 1, text:"A", points:10}, {id:"5-2", rank: 2, text:"B", points:10}, {id:"5-3", rank: 3, text:"C", points:10}, {id:"5-4", rank: 4, text:"D", points:10}]
    },
    {
      id: "round-6", question: "Q6", multiplier: 1, answers: [{id:"6-1", rank: 1, text:"A", points:10}, {id:"6-2", rank: 2, text:"B", points:10}, {id:"6-3", rank: 3, text:"C", points:10}, {id:"6-4", rank: 4, text:"D", points:10}]
    },
    {
      id: "round-7", question: "Q7", multiplier: 1, answers: [{id:"7-1", rank: 1, text:"A", points:10}, {id:"7-2", rank: 2, text:"B", points:10}, {id:"7-3", rank: 3, text:"C", points:10}, {id:"7-4", rank: 4, text:"D", points:10}]
    },
    {
      id: "round-8", question: "Q8", multiplier: 1, answers: [{id:"8-1", rank: 1, text:"A", points:10}, {id:"8-2", rank: 2, text:"B", points:10}, {id:"8-3", rank: 3, text:"C", points:10}, {id:"8-4", rank: 4, text:"D", points:10}]
    }
  ],
  completion: {
    title: "Test Finished",
    message: "System test complete."
  }
};
