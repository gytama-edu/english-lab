window.JEOPARDY_DATA = window.JEOPARDY_DATA || {};
window.JEOPARDY_DATA["grammar-challenge"] = {
  id: "grammar-challenge",
  title: "Grammar Challenge",
  description: "Test your grammar across six categories and four difficulty levels.",
  categories: [
    {
      id: "tenses",
      title: "Tenses",
      clues: [
        {
          value: 100,
          question: "Complete the sentence: She ___ to school every day.",
          answer: "goes",
          acceptedAnswers: ["goes"],
          explanation: "The present simple is used for regular habits. The third-person singular form of go is goes."
        },
        {
          value: 200,
          question: "Complete the sentence: At 8 p.m. last night, they ___ dinner.",
          answer: "were eating",
          acceptedAnswers: ["were eating"],
          explanation: "The past continuous describes an action in progress at a specific time in the past."
        },
        {
          value: 300,
          question: "Complete the sentence: By the time we arrived, the film ___.",
          answer: "had started",
          acceptedAnswers: ["had started", "had already started"],
          explanation: "The past perfect shows that the film started before another past event."
        },
        {
          value: 400,
          question: "Complete the sentence: This time next year, I ___ at university.",
          answer: "will be studying",
          acceptedAnswers: ["will be studying"],
          explanation: "The future continuous describes an action that will be in progress at a specific future time."
        }
      ]
    },
    {
      id: "modal-verbs",
      title: "Modal Verbs",
      clues: [
        {
          value: 100,
          question: "Complete the sentence: You ___ wear a seat belt while driving.",
          answer: "must",
          acceptedAnswers: ["must", "have to"],
          explanation: "Must and have to can express a strong obligation."
        },
        {
          value: 200,
          question: "Complete the sentence: You ___ bring any food because everything will be provided.",
          answer: "do not have to",
          acceptedAnswers: ["do not have to", "don't have to", "need not", "needn't"],
          explanation: "Do not have to and need not express a lack of necessity."
        },
        {
          value: 300,
          question: "Complete the sentence: He ___ be at home. The lights are off and his car is gone.",
          answer: "cannot",
          acceptedAnswers: ["cannot", "can't"],
          explanation: "Cannot can express a strong logical conclusion that something is impossible."
        },
        {
          value: 400,
          question: "Complete the sentence: They arrived two hours late. They ___ have missed the train.",
          answer: "might have",
          acceptedAnswers: ["might have", "may have", "could have"],
          explanation: "A modal followed by have and a past participle can express possibility about a past event."
        }
      ]
    },
    {
      id: "conditionals",
      title: "Conditionals",
      clues: [
        {
          value: 100,
          question: "Complete the zero conditional: If you heat ice, it ___.",
          answer: "melts",
          acceptedAnswers: ["melts"],
          explanation: "The zero conditional uses the present simple for general truths."
        },
        {
          value: 200,
          question: "Complete the second conditional: If I had more money, I ___ a new laptop.",
          answer: "would buy",
          acceptedAnswers: ["would buy", "'d buy"],
          explanation: "The second conditional describes an unreal or unlikely present situation."
        },
        {
          value: 300,
          question: "Complete the third conditional: If she had studied harder, she ___ the test.",
          answer: "would have passed",
          acceptedAnswers: ["would have passed", "'d have passed"],
          explanation: "The third conditional describes an unreal past condition and its imagined result."
        },
        {
          value: 400,
          question: "Complete the mixed conditional: If I had accepted that job, I ___ in Singapore now.",
          answer: "would be living",
          acceptedAnswers: ["would be living", "would live"],
          explanation: "This mixed conditional connects an unreal past decision with a present result."
        }
      ]
    },
    {
      id: "passive-voice",
      title: "Passive Voice",
      clues: [
        {
          value: 100,
          question: "Complete the sentence: English ___ in many countries.",
          answer: "is spoken",
          acceptedAnswers: ["is spoken"],
          explanation: "The present simple passive uses am, is, or are followed by a past participle."
        },
        {
          value: 200,
          question: "Change this sentence into the passive voice: They built the bridge last year.",
          answer: "The bridge was built last year.",
          acceptedAnswers: ["The bridge was built last year", "The bridge was built last year."],
          explanation: "The past simple passive uses was or were followed by a past participle."
        },
        {
          value: 300,
          question: "Change this sentence into the passive voice: Someone will check the documents before the meeting.",
          answer: "The documents will be checked before the meeting.",
          acceptedAnswers: ["The documents will be checked before the meeting", "The documents will be checked before the meeting."],
          explanation: "The future passive uses will be followed by a past participle."
        },
        {
          value: 400,
          question: "Rewrite using a reporting passive: People believe that the painting was stolen.",
          answer: "The painting is believed to have been stolen.",
          acceptedAnswers: ["The painting is believed to have been stolen", "The painting is believed to have been stolen."],
          explanation: "A reporting passive can use subject plus is believed plus a perfect infinitive for an earlier event."
        }
      ]
    },
    {
      id: "reported-speech",
      title: "Reported Speech",
      clues: [
        {
          value: 100,
          question: "Report this statement: \"I am tired,\" she said.",
          answer: "She said that she was tired.",
          acceptedAnswers: ["She said that she was tired", "She said she was tired", "She said that she was tired."],
          explanation: "The present form am normally changes to was when reporting a past statement."
        },
        {
          value: 200,
          question: "Report this statement: \"We will call Anna tomorrow,\" they said.",
          answer: "They said that they would call Anna the next day.",
          acceptedAnswers: ["They said that they would call Anna the next day", "They said they would call Anna the next day", "They said that they would call Anna the following day", "They said they would call Anna the following day"],
          explanation: "Will changes to would, and tomorrow normally changes to the next day or the following day."
        },
        {
          value: 300,
          question: "Report this question: \"Do you like coffee?\" he asked me.",
          answer: "He asked me if I liked coffee.",
          acceptedAnswers: ["He asked me if I liked coffee", "He asked me whether I liked coffee", "He asked if I liked coffee", "He asked whether I liked coffee"],
          explanation: "Reported yes-or-no questions use if or whether and statement word order."
        },
        {
          value: 400,
          question: "Report this command: \"Do not open the door,\" the teacher said to us.",
          answer: "The teacher told us not to open the door.",
          acceptedAnswers: ["The teacher told us not to open the door", "The teacher told us not to open the door."],
          explanation: "A negative reported command uses told plus object plus not to plus the base verb."
        }
      ]
    },
    {
      id: "sentence-repair",
      title: "Sentence Repair",
      clues: [
        {
          value: 100,
          question: "Correct the sentence: She don't like pizza.",
          answer: "She doesn't like pizza.",
          acceptedAnswers: ["She doesn't like pizza", "She does not like pizza", "She doesn't like pizza."],
          explanation: "The third-person singular present simple negative uses does not or doesn't."
        },
        {
          value: 200,
          question: "Correct the sentence: I have seen him yesterday.",
          answer: "I saw him yesterday.",
          acceptedAnswers: ["I saw him yesterday", "I saw him yesterday."],
          explanation: "A finished past-time expression such as yesterday requires the past simple."
        },
        {
          value: 300,
          question: "Correct the sentence: Neither of the answers are correct.",
          answer: "Neither of the answers is correct.",
          acceptedAnswers: ["Neither of the answers is correct", "Neither of the answers is correct."],
          explanation: "In formal standard English, neither is treated as singular."
        },
        {
          value: 400,
          question: "Correct the sentence: Hardly I had arrived when the meeting started.",
          answer: "Hardly had I arrived when the meeting started.",
          acceptedAnswers: ["Hardly had I arrived when the meeting started", "Hardly had I arrived when the meeting started."],
          explanation: "When hardly begins the sentence, subject-auxiliary inversion is required."
        }
      ]
    }
  ]
};
