window.JEOPARDY_DATA = window.JEOPARDY_DATA || {};
window.JEOPARDY_DATA["grammar-challenge"] = {
  id: "grammar-challenge",
  title: "Grammar Challenge",
  description: "Test your knowledge of tenses, modals, conditionals, passive voice, reported speech, and sentence correction.",
  categories: [
    {
      id: "tenses",
      title: "Tenses",
      clues: [
        {
          value: 100,
          question: "Complete the sentence: My brother ___ football every Saturday.",
          answer: "plays",
          acceptedAnswers: ["plays"],
          explanation: "The present simple is used for regular habits. Brother is third-person singular, so play becomes plays."
        },
        {
          value: 200,
          question: "Complete the sentence: We ___ dinner when the electricity went out.",
          answer: "were having",
          acceptedAnswers: ["were having", "were eating"],
          explanation: "The past continuous describes an action that was in progress when another past event happened."
        },
        {
          value: 300,
          question: "Complete the sentence: She ___ in Jakarta for five years before she moved to Bandung.",
          answer: "had lived",
          acceptedAnswers: ["had lived", "had been living"],
          explanation: "The past perfect shows that the period in Jakarta happened before the later move to Bandung."
        },
        {
          value: 400,
          question: "Complete the sentence: By the end of this month, they ___ the new school building.",
          answer: "will have completed",
          acceptedAnswers: ["will have completed", "will have finished"],
          explanation: "The future perfect describes an action that will be completed before a specific future time."
        }
      ]
    },
    {
      id: "modal-verbs",
      title: "Modal Verbs",
      clues: [
        {
          value: 100,
          question: "Complete the sentence: Students ___ be respectful to their teachers.",
          answer: "should",
          acceptedAnswers: ["should", "must"],
          explanation: "Should gives advice, while must expresses a strong obligation."
        },
        {
          value: 200,
          question: "Complete the sentence: You ___ use your phone during the exam.",
          answer: "must not",
          acceptedAnswers: ["must not", "mustn't", "cannot", "can't"],
          explanation: "Must not and cannot can express prohibition."
        },
        {
          value: 300,
          question: "Complete the sentence: The ground is wet. It ___ have rained last night.",
          answer: "must",
          acceptedAnswers: ["must"],
          explanation: "Must have followed by a past participle expresses a strong conclusion about a past event."
        },
        {
          value: 400,
          question: "Complete the sentence: You ___ have told me earlier; I could have helped you.",
          answer: "should",
          acceptedAnswers: ["should", "ought to"],
          explanation: "Should have and ought to have express criticism or regret about a past action."
        }
      ]
    },
    {
      id: "conditionals",
      title: "Conditionals",
      clues: [
        {
          value: 100,
          question: "Complete the first conditional: If it rains tomorrow, we ___ at home.",
          answer: "will stay",
          acceptedAnswers: ["will stay", "'ll stay"],
          explanation: "The first conditional uses present simple after if and will in the result clause."
        },
        {
          value: 200,
          question: "Complete the second conditional: If I were you, I ___ to the manager.",
          answer: "would speak",
          acceptedAnswers: ["would speak", "'d speak", "would talk"],
          explanation: "The second conditional describes an unreal or hypothetical present situation."
        },
        {
          value: 300,
          question: "Complete the third conditional: If they had left earlier, they ___ the train.",
          answer: "would have caught",
          acceptedAnswers: ["would have caught", "'d have caught"],
          explanation: "The third conditional describes an unreal past situation and its imagined result."
        },
        {
          value: 400,
          question: "Complete the mixed conditional: If she had taken that course, she ___ more confident now.",
          answer: "would be",
          acceptedAnswers: ["would be", "'d be", "would feel"],
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
          question: "Complete the sentence: Rice ___ in many Asian countries.",
          answer: "is grown",
          acceptedAnswers: ["is grown"],
          explanation: "The present simple passive uses am, is, or are followed by a past participle."
        },
        {
          value: 200,
          question: "Change into the passive voice: The chef prepared the meal.",
          answer: "The meal was prepared by the chef.",
          acceptedAnswers: ["The meal was prepared by the chef", "The meal was prepared", "The meal was prepared by the chef."],
          explanation: "The past simple passive uses was or were followed by a past participle."
        },
        {
          value: 300,
          question: "Change into the passive voice: They are repairing the road.",
          answer: "The road is being repaired.",
          acceptedAnswers: ["The road is being repaired", "The road is being repaired."],
          explanation: "The present continuous passive uses am, is, or are being followed by a past participle."
        },
        {
          value: 400,
          question: "Rewrite using a reporting passive: People say that the actor lives abroad.",
          answer: "The actor is said to live abroad.",
          acceptedAnswers: ["The actor is said to live abroad", "The actor is said to live abroad."],
          explanation: "A reporting passive can use subject plus is said plus an infinitive."
        }
      ]
    },
    {
      id: "reported-speech",
      title: "Reported Speech",
      clues: [
        {
          value: 100,
          question: "Report this statement: “I like this song,” he said.",
          answer: "He said that he liked that song.",
          acceptedAnswers: ["He said that he liked that song", "He said he liked that song", "He said that he liked the song"],
          explanation: "The present simple usually changes to the past simple, and this may change to that."
        },
        {
          value: 200,
          question: "Report this statement: “We are studying now,” they said.",
          answer: "They said that they were studying then.",
          acceptedAnswers: ["They said that they were studying then", "They said they were studying then", "They said that they were studying at that time"],
          explanation: "The present continuous changes to the past continuous, and now changes to then or at that time."
        },
        {
          value: 300,
          question: "Report this question: “Where do you live?” she asked me.",
          answer: "She asked me where I lived.",
          acceptedAnswers: ["She asked me where I lived", "She asked where I lived"],
          explanation: "Reported questions use statement word order and normally backshift the tense."
        },
        {
          value: 400,
          question: "Report this request: “Please help me with this box,” he said to Anna.",
          answer: "He asked Anna to help him with that box.",
          acceptedAnswers: ["He asked Anna to help him with that box", "He asked Anna to help him with the box"],
          explanation: "Reported requests commonly use asked plus object plus to-infinitive."
        }
      ]
    },
    {
      id: "sentence-repair",
      title: "Sentence Repair",
      clues: [
        {
          value: 100,
          question: "Correct the sentence: He go to school by bus.",
          answer: "He goes to school by bus.",
          acceptedAnswers: ["He goes to school by bus", "He goes to school by bus."],
          explanation: "The third-person singular form of go is goes."
        },
        {
          value: 200,
          question: "Correct the sentence: We didn't went to the party.",
          answer: "We didn't go to the party.",
          acceptedAnswers: ["We didn't go to the party", "We did not go to the party", "We didn't go to the party."],
          explanation: "After did not or didn't, use the base form of the verb."
        },
        {
          value: 300,
          question: "Correct the sentence: She has lived here since three years.",
          answer: "She has lived here for three years.",
          acceptedAnswers: ["She has lived here for three years", "She has been living here for three years"],
          explanation: "Use for with a period of time and since with a starting point."
        },
        {
          value: 400,
          question: "Correct the sentence: Not only he forgot the meeting, but he also turned off his phone.",
          answer: "Not only did he forget the meeting, but he also turned off his phone.",
          acceptedAnswers: ["Not only did he forget the meeting, but he also turned off his phone", "Not only did he forget the meeting, but he also turned off his phone."],
          explanation: "When not only begins a clause, subject-auxiliary inversion is required."
        }
      ]
    }
  ]
};
