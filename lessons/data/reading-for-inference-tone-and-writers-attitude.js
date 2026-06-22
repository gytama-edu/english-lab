export const lessonData = {
  id: "reading-for-inference-tone-and-writers-attitude",
  lab: "Reading Lab",
  label: "READING LESSON 04",
  level: "Elementary",
  title: "Reading for Inference, Tone, and Writer’s Attitude",
  description: "Learn how to combine clues from a text to understand unstated ideas, tone, and the writer’s point of view.",
  metaDescription: "Learn to understand ideas that are suggested rather than directly stated and recognise how a writer feels about a topic.",
  backUrl: "../labs/reading.html",
  practiceUrl: "../activities/reading-practice.html?id=reading-for-inference-tone-and-writers-attitude",
  practiceLabel: "Start Practice",
  practiceText: "Practise using evidence to understand unstated ideas, feelings, purpose, and attitude.",
  accent: "var(--gold)",
  tableOfContents: [
    { id: "what-is-an-inference", label: "What is an inference?" },
    { id: "stated-information-and-inferred-information", label: "Stated information and inferred information" },
    { id: "use-evidence", label: "Use evidence" },
    { id: "avoid-unsupported-guesses", label: "Avoid unsupported guesses" },
    { id: "what-is-tone", label: "What is tone?" },
    { id: "positive-tone", label: "Positive tone" },
    { id: "negative-or-critical-tone", label: "Negative or critical tone" },
    { id: "neutral-tone", label: "Neutral tone" },
    { id: "mixed-attitude", label: "Mixed attitude" },
    { id: "contrast-words-reveal-attitude", label: "Contrast words reveal attitude" },
    { id: "strong-and-cautious-language", label: "Strong and cautious language" },
    { id: "writer-purpose-and-attitude", label: "Writer purpose and attitude" },
    { id: "infer-feelings-from-actions", label: "Infer feelings from actions" },
    { id: "infer-relationships-and-situations", label: "Infer relationships and situations" },
    { id: "use-the-whole-paragraph", label: "Use the whole paragraph" },
    { id: "a-practical-inference-method", label: "A practical inference method" },
    { id: "a-practical-tone-method", label: "A practical tone method" },
    { id: "worked-example", label: "Worked example" },
    { id: "common-mistakes", label: "Common mistakes" },
    { id: "reading-checklist", label: "Reading checklist" },
    { id: "guided-checks", label: "Guided checks" }
  ],
  sections: [
    {
      id: "what-is-an-inference",
      title: "What is an inference?",
      blocks: [
        {
          type: "text",
          content: "An inference is a reasonable idea that the reader understands from clues in the text, even when the writer does not state it directly."
        },
        {
          type: "example-block",
          heading: "Example:",
          examples: [
            "<strong>Text:</strong> When Arif reached the bus stop, he saw several people closing their umbrellas and shaking water from their coats.<br><br><strong>Reasonable inference:</strong> It has recently been raining."
          ]
        },
        {
          type: "text",
          content: "The text does not say “It was raining,” but the details support that conclusion.<br><br>An inference must come from evidence in the text, not from imagination alone."
        }
      ]
    },
    {
      id: "stated-information-and-inferred-information",
      title: "Stated information and inferred information",
      blocks: [
        {
          type: "text",
          content: "<strong>Stated information</strong> appears directly.<br><strong>Inferred information</strong> is concluded from one or more details."
        },
        {
          type: "example-block",
          heading: "Example:",
          examples: [
            "<strong>Stated information:</strong> The café closes at six.<br><strong>Inferred information:</strong> The café will not be available for an evening meeting at seven."
          ]
        }
      ]
    },
    {
      id: "use-evidence",
      title: "Use evidence",
      blocks: [
        {
          type: "pill-list",
          heading: "ASK YOURSELF:",
          items: [
            "Which words support this idea?",
            "Is there more than one clue?",
            "Does the inference fit the whole text?",
            "Am I adding information the writer never suggested?"
          ]
        },
        {
          type: "example-block",
          heading: "Example:",
          examples: [
            "<strong>Text:</strong> Lina checked the clock three times, packed her bag before the lesson ended, and left immediately after the teacher finished speaking.<br><br><strong>Inference:</strong> Lina was probably in a hurry.<br><strong>Evidence:</strong> She repeatedly checked the time. She packed early. She left immediately."
          ]
        }
      ]
    },
    {
      id: "avoid-unsupported-guesses",
      title: "Avoid unsupported guesses",
      blocks: [
        {
          type: "text",
          content: "A possible idea is not always a valid inference. Choose the conclusion best supported by the available details."
        },
        {
          type: "example-block",
          heading: "Example:",
          examples: [
            "<strong>Text:</strong> Ben carried a large bag into the station.<br><br><strong>Unsupported guess:</strong> Ben is going on holiday. <em>(The bag may suggest travel, but the text does not provide enough evidence to confirm a holiday.)</em><br><br><strong>A safer inference:</strong> Ben may be travelling somewhere."
          ]
        }
      ]
    },
    {
      id: "what-is-tone",
      title: "What is tone?",
      blocks: [
        {
          type: "text",
          content: "Tone is the feeling or attitude communicated through the writer’s choice of words."
        },
        {
          type: "pill-list",
          heading: "COMMON TONES:",
          items: [
            "Positive",
            "Negative",
            "Neutral",
            "Enthusiastic",
            "Concerned",
            "Critical",
            "Hopeful",
            "Disappointed",
            "Humorous",
            "Formal",
            "Friendly",
            "Cautious"
          ]
        },
        {
          type: "text",
          content: "Tone does not mean the topic itself. Two writers can discuss the same topic with different tones."
        }
      ]
    },
    {
      id: "positive-tone",
      title: "Positive tone",
      blocks: [
        {
          type: "pill-list",
          heading: "POSITIVE SIGNALS:",
          items: [
            "useful",
            "successful",
            "enjoyable",
            "encouraging",
            "impressive",
            "welcome",
            "valuable",
            "pleased",
            "effective",
            "hopeful"
          ]
        },
        {
          type: "example-block",
          heading: "Example:",
          examples: [
            "The new community programme has already helped dozens of residents and created a welcoming place for neighbours to meet.<br><br><strong>Tone:</strong> Positive and approving."
          ]
        }
      ]
    },
    {
      id: "negative-or-critical-tone",
      title: "Negative or critical tone",
      blocks: [
        {
          type: "pill-list",
          heading: "NEGATIVE SIGNALS:",
          items: [
            "disappointing",
            "inadequate",
            "frustrating",
            "unnecessary",
            "unreliable",
            "wasteful",
            "concerning",
            "poorly organised",
            "limited",
            "unfair"
          ]
        },
        {
          type: "example-block",
          heading: "Example:",
          examples: [
            "The new booking system was intended to save time, but it has created longer queues and repeated errors.<br><br><strong>Tone:</strong> Critical or dissatisfied."
          ]
        }
      ]
    },
    {
      id: "neutral-tone",
      title: "Neutral tone",
      blocks: [
        {
          type: "text",
          content: "A neutral writer presents information without strong approval or criticism. A topic can be important without the tone being emotional."
        },
        {
          type: "example-block",
          heading: "Example:",
          examples: [
            "The centre opens at eight on weekdays and ten at weekends. Membership costs £20 per month.<br><br><strong>Tone:</strong> Neutral and factual."
          ]
        }
      ]
    },
    {
      id: "mixed-attitude",
      title: "Mixed attitude",
      blocks: [
        {
          type: "text",
          content: "Writers may express both positive and negative views."
        },
        {
          type: "example-block",
          heading: "Example:",
          examples: [
            "The new park is attractive and has excellent walking paths. However, there is very little shade, and the seating areas are often crowded.<br><br><strong>Overall attitude:</strong> Mixed. <em>(The writer approves of some features but criticises others.)</em>"
          ]
        }
      ]
    },
    {
      id: "contrast-words-reveal-attitude",
      title: "Contrast words reveal attitude",
      blocks: [
        {
          type: "pill-list",
          heading: "NOTICE:",
          items: [
            "but",
            "however",
            "although",
            "even though",
            "despite",
            "still",
            "unfortunately",
            "on the other hand"
          ]
        },
        {
          type: "text",
          content: "The writer’s main criticism or final opinion often appears after a contrast word."
        },
        {
          type: "example-block",
          heading: "Example:",
          examples: [
            "The room was modern and clean, but the noise from the road made it difficult to sleep.<br><br><strong>Overall attitude:</strong> More negative than positive because the final problem strongly affected the experience."
          ]
        }
      ]
    },
    {
      id: "strong-and-cautious-language",
      title: "Strong and cautious language",
      blocks: [
        {
          type: "pill-list",
          heading: "STRONG LANGUAGE:",
          items: ["clearly", "definitely", "extremely", "completely", "must", "unacceptable"]
        },
        {
          type: "pill-list",
          heading: "CAUTIOUS LANGUAGE:",
          items: ["may", "might", "appears", "seems", "perhaps", "possibly", "could"]
        },
        {
          type: "example-block",
          heading: "Example:",
          examples: [
            "The change <strong>may</strong> improve travel times.<br><strong>Tone:</strong> Cautiously hopeful.<br><br>The change will <strong>definitely</strong> solve the problem.<br><strong>Tone:</strong> Confident."
          ]
        }
      ]
    },
    {
      id: "writer-purpose-and-attitude",
      title: "Writer purpose and attitude",
      blocks: [
        {
          type: "text",
          content: "Writer purpose can help reveal attitude."
        },
        {
          type: "pill-list",
          heading: "COMMON PURPOSES:",
          items: [
            "To inform",
            "To recommend",
            "To criticise",
            "To warn",
            "To persuade",
            "To praise",
            "To complain",
            "To express concern",
            "To explain a balanced view"
          ]
        },
        {
          type: "example-block",
          heading: "Example:",
          examples: [
            "Residents should support the new recycling programme because it will reduce waste and keep local streets cleaner.<br><br><strong>Purpose:</strong> To persuade.<br><strong>Attitude:</strong> Supportive."
          ]
        }
      ]
    },
    {
      id: "infer-feelings-from-actions",
      title: "Infer feelings from actions",
      blocks: [
        {
          type: "text",
          content: "Writers may describe actions instead of directly naming emotions."
        },
        {
          type: "example-block",
          heading: "Examples:",
          examples: [
            "Mara smiled as she read the message, then immediately called her sister to share the news.<br><strong>Inference:</strong> Mara was pleased or excited.",
            "After waiting forty minutes, Daniel looked at the empty reception desk and sighed.<br><strong>Inference:</strong> Daniel was frustrated or disappointed."
          ]
        }
      ]
    },
    {
      id: "infer-relationships-and-situations",
      title: "Infer relationships and situations",
      blocks: [
        {
          type: "pill-list",
          heading: "DETAILS MAY SUGGEST:",
          items: ["Familiarity", "Responsibility", "Concern", "Conflict", "Urgency", "Satisfaction", "Disappointment"]
        },
        {
          type: "example-block",
          heading: "Example:",
          examples: [
            "“Remember your umbrella,” Sita said as she handed her son his school bag.<br><br><strong>Inference:</strong> Sita is caring for a child and expects rain."
          ]
        },
        {
          type: "note",
          content: "Do not encourage yourself to infer sensitive personal information without clear evidence."
        }
      ]
    },
    {
      id: "use-the-whole-paragraph",
      title: "Use the whole paragraph",
      blocks: [
        {
          type: "text",
          content: "Tone should not be decided from one word alone."
        },
        {
          type: "example-block",
          heading: "Example:",
          examples: [
            "The hotel entrance looked <strong>impressive</strong>, and the staff greeted us warmly. Unfortunately, our room was not ready, the lift was broken, and the heating did not work.<br><br><strong>One positive word:</strong> Impressive.<br><strong>Overall tone:</strong> Disappointed or critical.<br><em>The whole paragraph matters more than one positive detail.</em>"
          ]
        }
      ]
    },
    {
      id: "a-practical-inference-method",
      title: "A practical inference method",
      blocks: [
        {
          type: "text",
          content: "1. Read the question.<br>2. Identify what must be inferred.<br>3. Find relevant clues.<br>4. Combine the clues.<br>5. Eliminate answers that add unsupported information.<br>6. Check whether the answer fits the whole passage.<br>7. Choose the most strongly supported conclusion."
        }
      ]
    },
    {
      id: "a-practical-tone-method",
      title: "A practical tone method",
      blocks: [
        {
          type: "text",
          content: "1. Identify positive and negative words.<br>2. Notice contrast expressions.<br>3. Check strong or cautious language.<br>4. Consider the ending.<br>5. Ask what the writer wants the reader to think or feel.<br>6. Select the tone that fits the entire text."
        }
      ]
    },
    {
      id: "worked-example",
      title: "Worked example",
      blocks: [
        {
          type: "text",
          content: "<strong>Text:</strong> The new neighbourhood market has attracted more visitors than expected. Local farmers appreciate having a place to sell directly to customers, and many residents enjoy buying fresh food close to home. The market area becomes crowded on Saturday mornings, and parking remains difficult. Even so, most visitors say the benefits are greater than the inconvenience."
        },
        {
          type: "example-block",
          heading: "Questions & Answers:",
          examples: [
            "<strong>1. What can be inferred about the market’s popularity?</strong><br>It is very popular.",
            "<strong>2. What problem does the market create?</strong><br>Crowding and parking difficulties.",
            "<strong>3. What is the writer’s overall tone?</strong><br>Mostly positive.",
            "<strong>4. Which words show the writer’s final attitude?</strong><br>“The benefits are greater than the inconvenience.”"
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
            "Guessing without evidence",
            "Using personal experience instead of the text",
            "Choosing an answer that is possible but weakly supported",
            "Deciding tone from one word",
            "Ignoring contrast language",
            "Confusing topic with tone",
            "Missing the writer’s final opinion",
            "Treating cautious language as certainty",
            "Selecting an answer that is too extreme"
          ]
        }
      ]
    },
    {
      id: "reading-checklist",
      title: "Reading checklist",
      blocks: [
        {
          type: "text",
          content: "<strong>For inference:</strong><br>• Find the relevant details<br>• Combine clues<br>• Avoid unsupported assumptions<br>• Choose the strongest evidence-based answer<br><br><strong>For tone:</strong><br>• Notice positive and negative language<br>• Identify contrast words<br>• Check strong or cautious wording<br>• Consider the whole passage<br>• Read the conclusion carefully"
        }
      ]
    },
    {
      id: "guided-checks",
      title: "Guided checks",
      blocks: [
        {
          type: "guided-check",
          prompt: "Ali entered the classroom carrying a wet umbrella and left muddy footprints near the door. What can be inferred?",
          answer: "It is probably raining outside. (The wet umbrella and muddy footprints provide evidence.)"
        },
        {
          type: "guided-check",
          prompt: "The new app has several useful features, but it frequently crashes and loses saved information. What is the writer’s overall attitude?",
          answer: "Mostly negative or critical. (The serious technical problems outweigh the positive feature comment.)"
        },
        {
          type: "guided-check",
          prompt: "The proposal could improve the area, although more research is needed before a final decision is made. What tone does the writer use?",
          answer: "Cautious. (The writer sees possible benefits but does not express certainty.)"
        },
        {
          type: "guided-check",
          prompt: "Rosa reread the acceptance email twice and immediately began planning her journey. How does Rosa probably feel?",
          answer: "Excited or pleased. (Her repeated reading and immediate planning suggest a positive reaction.)"
        }
      ]
    }
  ]
};
