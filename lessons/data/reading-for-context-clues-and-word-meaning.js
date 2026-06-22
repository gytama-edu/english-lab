export const lessonData = {
  id: "reading-for-context-clues-and-word-meaning",
  lab: "Reading Lab",
  label: "READING LESSON 03",
  level: "Elementary",
  title: "Reading for Context Clues and Word Meaning",
  description: "Learn how surrounding words and ideas can help you understand unfamiliar vocabulary while reading.",
  metaDescription: "Learn how to use context clues such as definitions, examples, and contrasts to understand unfamiliar vocabulary while reading.",
  backUrl: "../labs/reading.html",
  practiceUrl: "../activities/reading-practice.html?id=reading-for-context-clues-and-word-meaning",
  practiceLabel: "Start Practice",
  practiceText: "Practise using surrounding sentence clues to understand new words.",
  accent: "var(--gold)",
  tableOfContents: [
    { id: "what-are-context-clues", label: "What are context clues?" },
    { id: "do-not-stop-at-every-unfamiliar-word", label: "Do not stop at every unfamiliar word" },
    { id: "definition-clues", label: "Definition clues" },
    { id: "example-clues", label: "Example clues" },
    { id: "synonym-and-restatement-clues", label: "Synonym and restatement clues" },
    { id: "contrast-clues", label: "Contrast clues" },
    { id: "cause-and-effect-clues", label: "Cause-and-effect clues" },
    { id: "description-clues", label: "Description clues" },
    { id: "use-the-whole-sentence", label: "Use the whole sentence" },
    { id: "identify-the-word-type", label: "Identify the word type" },
    { id: "look-at-familiar-word-parts", label: "Look at familiar word parts" },
    { id: "check-whether-the-meaning-fits", label: "Check whether the meaning fits" },
    { id: "avoid-common-distractors", label: "Avoid common distractors" },
    { id: "a-practical-context-clue-method", label: "A practical context-clue method" },
    { id: "worked-example", label: "Worked example" },
    { id: "common-mistakes", label: "Common mistakes" },
    { id: "context-clue-checklist", label: "Context-clue checklist" },
    { id: "guided-checks", label: "Guided checks" }
  ],
  sections: [
    {
      id: "what-are-context-clues",
      title: "What are context clues?",
      blocks: [
        {
          type: "text",
          content: "Context clues are words, examples, or ideas around an unfamiliar word that help the reader understand its meaning."
        },
        {
          type: "example-block",
          heading: "Example:",
          examples: [
            "The path was <strong>slippery</strong> because heavy rain had made the ground wet and difficult to walk on."
          ]
        },
        {
          type: "text",
          content: "The words after “because” explain that “slippery” means difficult to walk on safely because the surface is wet.<br><br>You may not know every word, but the surrounding sentence can often give you enough information to understand it."
        }
      ]
    },
    {
      id: "do-not-stop-at-every-unfamiliar-word",
      title: "Do not stop at every unfamiliar word",
      blocks: [
        {
          type: "text",
          content: "Readers do not always need a dictionary immediately. Continue reading before deciding."
        },
        {
          type: "pill-list",
          heading: "ASK YOURSELF:",
          items: [
            "Is the word important?",
            "Can I understand the general sentence without it?",
            "Is there an explanation nearby?",
            "Is there an example?",
            "Is there a contrasting idea?",
            "What type of word is it?"
          ]
        }
      ]
    },
    {
      id: "definition-clues",
      title: "Definition clues",
      blocks: [
        {
          type: "text",
          content: "Sometimes writers define a word directly in the sentence."
        },
        {
          type: "pill-list",
          heading: "COMMON SIGNALS:",
          items: [
            "means",
            "is",
            "refers to",
            "is called",
            "in other words",
            "which is",
            "that is"
          ]
        },
        {
          type: "example-block",
          heading: "Example:",
          examples: [
            "A <strong>reusable</strong> container is a box or bottle that can be used many times.<br><br><em>Meaning of “reusable”:</em> Able to be used again."
          ]
        }
      ]
    },
    {
      id: "example-clues",
      title: "Example clues",
      blocks: [
        {
          type: "text",
          content: "Examples can show what a word includes."
        },
        {
          type: "pill-list",
          heading: "COMMON SIGNALS:",
          items: [
            "for example",
            "such as",
            "including",
            "like",
            "especially"
          ]
        },
        {
          type: "example-block",
          heading: "Example:",
          examples: [
            "The shop sells <strong>fragile</strong> items, such as glass cups, mirrors, and thin decorations.<br><br><em>Meaning of “fragile”:</em> Easily broken."
          ]
        }
      ]
    },
    {
      id: "synonym-and-restatement-clues",
      title: "Synonym and restatement clues",
      blocks: [
        {
          type: "text",
          content: "A nearby word or phrase may repeat the same idea to help explain it."
        },
        {
          type: "pill-list",
          heading: "COMMON SIGNALS:",
          items: [
            "or",
            "in other words",
            "that is",
            "also called",
            "meaning"
          ]
        },
        {
          type: "example-block",
          heading: "Example:",
          examples: [
            "The room was <strong>enormous</strong>. It was much larger than we expected.<br><br><em>Meaning of “enormous”:</em> Very large."
          ]
        }
      ]
    },
    {
      id: "contrast-clues",
      title: "Contrast clues",
      blocks: [
        {
          type: "text",
          content: "An opposite idea may reveal meaning."
        },
        {
          type: "pill-list",
          heading: "COMMON SIGNALS:",
          items: [
            "but",
            "however",
            "although",
            "unlike",
            "instead",
            "while",
            "on the other hand"
          ]
        },
        {
          type: "example-block",
          heading: "Example:",
          examples: [
            "The first task was simple, but the second was <strong>complicated</strong>.<br><br><em>Meaning of “complicated”:</em> Difficult or containing many parts."
          ]
        }
      ]
    },
    {
      id: "cause-and-effect-clues",
      title: "Cause-and-effect clues",
      blocks: [
        {
          type: "text",
          content: "Causes and results can help reveal meaning."
        },
        {
          type: "pill-list",
          heading: "COMMON SIGNALS:",
          items: [
            "because",
            "so",
            "therefore",
            "as a result",
            "since",
            "due to"
          ]
        },
        {
          type: "example-block",
          heading: "Example:",
          examples: [
            "Mia was <strong>exhausted</strong> after working for twelve hours, so she went directly to bed.<br><br><em>Meaning of “exhausted”:</em> Extremely tired."
          ]
        }
      ]
    },
    {
      id: "description-clues",
      title: "Description clues",
      blocks: [
        {
          type: "text",
          content: "The writer may describe behaviour, appearance, or results to help you guess the word."
        },
        {
          type: "example-block",
          heading: "Example:",
          examples: [
            "The dog was <strong>timid</strong>. It stayed behind its owner and moved away whenever someone approached.<br><br><em>Meaning of “timid”:</em> Shy or easily frightened."
          ]
        }
      ]
    },
    {
      id: "use-the-whole-sentence",
      title: "Use the whole sentence",
      blocks: [
        {
          type: "text",
          content: "Do not depend on only one nearby word. You should consider the whole sentence, the sentences before and after, the paragraph topic, and the writer’s attitude."
        },
        {
          type: "example-block",
          heading: "Example:",
          examples: [
            "The restaurant was <strong>modest</strong>. It had simple furniture and only six tables, but the food was excellent.<br><br><em>Meaning of “modest”:</em> Simple and not large or luxurious."
          ]
        }
      ]
    },
    {
      id: "identify-the-word-type",
      title: "Identify the word type",
      blocks: [
        {
          type: "text",
          content: "Ask whether the unfamiliar word is a noun, verb, adjective, or adverb. This helps eliminate impossible meanings."
        },
        {
          type: "example-block",
          heading: "Example:",
          examples: [
            "The driver responded <strong>calmly</strong>.<br><br>“Calmly” describes how the driver responded, so it is an adverb.<br><br><em>Possible meaning:</em> In a relaxed and controlled way."
          ]
        }
      ]
    },
    {
      id: "look-at-familiar-word-parts",
      title: "Look at familiar word parts",
      blocks: [
        {
          type: "text",
          content: "Words are often built from smaller, familiar pieces. Word parts are clues, but you must still check the sentence context."
        },
        {
          type: "pill-list",
          heading: "USEFUL PREFIXES:",
          items: [
            "un- = not",
            "re- = again",
            "dis- = opposite or not",
            "mis- = wrongly",
            "pre- = before"
          ]
        },
        {
          type: "pill-list",
          heading: "USEFUL SUFFIXES:",
          items: [
            "-ful = full of",
            "-less = without",
            "-er = a person or thing that does something",
            "-able = can be",
            "-ment = result or process"
          ]
        },
        {
          type: "example-block",
          heading: "Examples:",
          examples: [
            "<strong>reusable</strong> → able to be used again",
            "<strong>careless</strong> → without enough care",
            "<strong>preview</strong> → view before",
            "<strong>disagreement</strong> → the state of not agreeing"
          ]
        }
      ]
    },
    {
      id: "check-whether-the-meaning-fits",
      title: "Check whether the meaning fits",
      blocks: [
        {
          type: "text",
          content: "After predicting a meaning:<br>1. Replace the unfamiliar word with the predicted meaning.<br>2. Read the sentence again.<br>3. Check whether the sentence still makes sense.<br>4. Confirm that the word type still fits."
        },
        {
          type: "example-block",
          heading: "Example:",
          examples: [
            "The service was <strong>prompt</strong>, so we received our food only a few minutes after ordering.<br><br><em>Predicted meaning:</em> Quick<br><br><em>Replacement:</em> The service was quick.<br>The meaning fits."
          ]
        }
      ]
    },
    {
      id: "avoid-common-distractors",
      title: "Avoid common distractors",
      blocks: [
        {
          type: "text",
          content: "An incorrect meaning may be related to the topic but not the word, match one small detail only, have the wrong word type, express the opposite meaning, or be too broad or specific."
        },
        {
          type: "example-block",
          heading: "Example:",
          examples: [
            "The garden was <strong>neglected</strong>. Weeds covered the paths, and many plants had died.<br><br>“Neglected” does not mean “large” or “natural.”<br>It means: Not cared for properly."
          ]
        }
      ]
    },
    {
      id: "a-practical-context-clue-method",
      title: "A practical context-clue method",
      blocks: [
        {
          type: "text",
          content: "1. Read the complete sentence.<br>2. Read the sentence before and after.<br>3. Identify the word type.<br>4. Look for definitions, examples, contrasts, or results.<br>5. Predict a simple meaning.<br>6. Replace the word with that meaning.<br>7. Check whether the sentence still makes sense."
        }
      ]
    },
    {
      id: "worked-example",
      title: "Worked example",
      blocks: [
        {
          type: "text",
          content: "<strong>Text:</strong> The neighbourhood café was usually crowded, but Monday morning was unusually <strong>tranquil</strong>. Only two customers were inside, the music was quiet, and no one was waiting to order."
        },
        {
          type: "example-block",
          heading: "Questions & Answers:",
          examples: [
            "<strong>1. What type of word is “tranquil”?</strong><br>An adjective.",
            "<strong>2. Which details help explain it?</strong><br>Only two customers, quiet music, and no queue.",
            "<strong>3. What does “tranquil” probably mean?</strong><br>Calm and peaceful.",
            "<strong>4. Which clue type is used?</strong><br>Description and contrast."
          ]
        }
      ]
    },
    {
      id: "common-mistakes",
      title: "Common mistakes",
      blocks: [
        {
          type: "pill-list",
          heading: "MISTAKES TO AVOID",
          items: [
            "Looking at only the unfamiliar word",
            "Choosing a meaning from the topic alone",
            "Ignoring contrast words",
            "Missing examples",
            "Choosing the wrong word type",
            "Assuming a familiar-looking word has the same meaning",
            "Using a definition that does not fit the sentence",
            "Stopping before reading the next sentence"
          ]
        }
      ]
    },
    {
      id: "context-clue-checklist",
      title: "Context-clue checklist",
      blocks: [
        {
          type: "text",
          content: "<strong>Before guessing:</strong><br>• Read the whole sentence<br>• Identify the word type<br>• Read nearby sentences<br><br><strong>Look for:</strong><br>• Definitions, Examples, Synonyms, Contrasts<br>• Causes, Results, Descriptions, Familiar word parts<br><br><strong>After guessing:</strong><br>• Replace the word<br>• Check the meaning and grammar<br>• Confirm the sentence still makes sense"
        }
      ]
    },
    {
      id: "guided-checks",
      title: "Guided checks",
      blocks: [
        {
          type: "guided-check",
          prompt: "The box contains perishable food, including fresh milk, fish, and soft fruit. What does “perishable” probably mean?",
          answer: "Likely to spoil quickly. (Explanation: Milk, fish, and soft fruit do not stay fresh for long.)"
        },
        {
          type: "guided-check",
          prompt: "Leo was reluctant to speak. He wanted to remain silent and avoided answering questions. What does “reluctant” probably mean?",
          answer: "Unwilling or hesitant. (Explanation: The following sentence explains that Leo did not want to speak.)"
        },
        {
          type: "guided-check",
          prompt: "Unlike the crowded main beach, the northern beach was deserted. What does “deserted” probably mean?",
          answer: "Empty. (Explanation: “Unlike” introduces a contrast with “crowded.”)"
        },
        {
          type: "guided-check",
          prompt: "The instructions were unclear, so several people completed the task incorrectly. What does “unclear” mean?",
          answer: "Not easy to understand. (Explanation: The prefix “un-” means “not,” and the result confirms the meaning.)"
        }
      ]
    }
  ]
};
