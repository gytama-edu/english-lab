window.JEOPARDY_DATA = window.JEOPARDY_DATA || {};
window.JEOPARDY_DATA["vocabulary-challenge"] = {
  id: "vocabulary-challenge",
  title: "Vocabulary Challenge",
  description: "Test synonyms, antonyms, collocations, phrasal verbs, word formation, and vocabulary in context.",
  categories: [
    {
      id: "synonyms",
      title: "Synonyms",
      clues: [
        {
          value: 100,
          question: 'Give a synonym for "happy."',
          answer: "glad",
          acceptedAnswers: ["glad", "pleased", "cheerful", "joyful"],
          explanation: "Glad, pleased, cheerful, and joyful can all describe someone who feels happy."
        },
        {
          value: 200,
          question: 'Give a synonym for "difficult."',
          answer: "challenging",
          acceptedAnswers: ["challenging", "hard", "tough", "demanding"],
          explanation: "These words can describe something that requires significant effort or skill."
        },
        {
          value: 300,
          question: 'Give a synonym for "brief" when describing a short explanation.',
          answer: "concise",
          acceptedAnswers: ["concise", "short", "compact", "succinct"],
          explanation: "Concise and succinct describe language that expresses information clearly using few words."
        },
        {
          value: 400,
          question: 'Give a synonym for "meticulous."',
          answer: "careful",
          acceptedAnswers: ["careful", "thorough", "precise", "detail-oriented"],
          explanation: "Meticulous describes someone who pays very close attention to details."
        }
      ]
    },
    {
      id: "antonyms",
      title: "Antonyms",
      clues: [
        {
          value: 100,
          question: 'What is the opposite of "early"?',
          answer: "late",
          acceptedAnswers: ["late"],
          explanation: "Early and late are opposites related to time."
        },
        {
          value: 200,
          question: 'What is the opposite of "generous"?',
          answer: "selfish",
          acceptedAnswers: ["selfish", "stingy", "ungenerous"],
          explanation: "A generous person willingly gives, while a selfish or stingy person is unwilling to share."
        },
        {
          value: 300,
          question: 'What is the opposite of "temporary"?',
          answer: "permanent",
          acceptedAnswers: ["permanent", "lasting"],
          explanation: "Temporary means existing for a limited time, while permanent means continuing indefinitely."
        },
        {
          value: 400,
          question: 'What is the opposite of "ambiguous"?',
          answer: "clear",
          acceptedAnswers: ["clear", "unambiguous", "definite", "explicit"],
          explanation: "Ambiguous language has more than one possible meaning, while clear or explicit language is easy to understand."
        }
      ]
    },
    {
      id: "collocations",
      title: "Collocations",
      clues: [
        {
          value: 100,
          question: "Complete the collocation: ___ a mistake.",
          answer: "make",
          acceptedAnswers: ["make", "made"],
          explanation: "English uses the collocation make a mistake, not do a mistake."
        },
        {
          value: 200,
          question: "Complete the collocation: ___ attention.",
          answer: "pay",
          acceptedAnswers: ["pay", "paid"],
          explanation: "The correct collocation is pay attention."
        },
        {
          value: 300,
          question: "Complete the sentence: The company decided to ___ responsibility for the accident.",
          answer: "take",
          acceptedAnswers: ["take", "accept"],
          explanation: "Take responsibility and accept responsibility are common English collocations."
        },
        {
          value: 400,
          question: "Complete the sentence: The new policy could ___ a serious threat to small businesses.",
          answer: "pose",
          acceptedAnswers: ["pose", "present"],
          explanation: "Pose a threat and present a threat are standard formal collocations."
        }
      ]
    },
    {
      id: "phrasal-verbs",
      title: "Phrasal Verbs",
      clues: [
        {
          value: 100,
          question: 'What does "wake up" mean?',
          answer: "to stop sleeping",
          acceptedAnswers: ["to stop sleeping", "stop sleeping", "become awake", "to become awake"],
          explanation: "Wake up means to stop sleeping and become conscious."
        },
        {
          value: 200,
          question: "Complete the sentence: Please ___ the lights before leaving the room.",
          answer: "turn off",
          acceptedAnswers: ["turn off", "switch off"],
          explanation: "Turn off and switch off mean to stop a light or device from operating."
        },
        {
          value: 300,
          question: 'What does "put off" mean in this sentence: "They put off the meeting until Friday"?',
          answer: "postpone",
          acceptedAnswers: ["postpone", "delay", "reschedule for later", "move to a later time"],
          explanation: "Put off means to delay or postpone an event or action."
        },
        {
          value: 400,
          question: 'What does "come up with" mean in this sentence: "She came up with an excellent solution"?',
          answer: "produce an idea",
          acceptedAnswers: ["produce an idea", "think of", "create", "invent", "develop an idea"],
          explanation: "Come up with means to think of, create, or produce an idea, answer, or plan."
        }
      ]
    },
    {
      id: "word-formation",
      title: "Word Formation",
      clues: [
        {
          value: 100,
          question: 'Change "teach" into a noun for a person who teaches.',
          answer: "teacher",
          acceptedAnswers: ["teacher"],
          explanation: "The suffix -er is added to teach to form the noun teacher."
        },
        {
          value: 200,
          question: 'Complete the sentence using a noun form of "decide": It was a difficult ___.',
          answer: "decision",
          acceptedAnswers: ["decision"],
          explanation: "The noun form of decide is decision."
        },
        {
          value: 300,
          question: 'Complete the sentence using an adjective form of "rely": She is a very ___ employee.',
          answer: "reliable",
          acceptedAnswers: ["reliable"],
          explanation: "Reliable describes someone or something that can be trusted or depended on."
        },
        {
          value: 400,
          question: 'Complete the sentence using the correct form of "interpret": His explanation was based on a serious ___ of the data.',
          answer: "misinterpretation",
          acceptedAnswers: ["misinterpretation"],
          explanation: "Misinterpretation means an incorrect understanding or explanation of something."
        }
      ]
    },
    {
      id: "context-clues",
      title: "Context Clues",
      clues: [
        {
          value: 100,
          question: 'In the sentence "The glass was fragile, so we carried it carefully," what does "fragile" mean?',
          answer: "easy to break",
          acceptedAnswers: ["easy to break", "easily broken", "delicate"],
          explanation: "The context shows that the glass required careful handling because it could break easily."
        },
        {
          value: 200,
          question: 'In the sentence "The room was enormous; it could hold more than 500 people," what does "enormous" mean?',
          answer: "very large",
          acceptedAnswers: ["very large", "huge", "extremely big"],
          explanation: "The ability to hold more than 500 people indicates that the room was very large."
        },
        {
          value: 300,
          question: 'In the sentence "Although Maya was reluctant to speak, she finally agreed to give the presentation," what does "reluctant" mean?',
          answer: "unwilling",
          acceptedAnswers: ["unwilling", "hesitant", "not eager", "uncertain about doing something"],
          explanation: "The contrast between reluctance and finally agreeing shows that Maya was hesitant or unwilling at first."
        },
        {
          value: 400,
          question: 'In the sentence "His explanation was plausible because it matched all the available evidence," what does "plausible" mean?',
          answer: "believable",
          acceptedAnswers: ["believable", "reasonable", "credible", "likely to be true"],
          explanation: "Plausible describes something that appears reasonable or believable based on the evidence."
        }
      ]
    }
  ]
};
