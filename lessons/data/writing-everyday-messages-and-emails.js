export const lessonData = {
  id: "writing-everyday-messages-and-emails",
  title: "Writing Everyday Messages and Emails",
  description: "Learn how to write clear, friendly, and polite messages for common situations at school, work, and daily life.",
  lab: "Writing Lab",
  backUrl: "../labs/writing.html",
  practiceUrl: "../activities/writing-practice.html?id=writing-everyday-messages-and-emails",
  practiceLabel: "Start Writing Practice",
  accent: "var(--pink)",
  level: "Beginner",
  label: "Everyday Writing",
  metaDescription: "Learn to write clear messages and emails for invitations, requests, apologies, confirm plans, and everyday communication in English.",
  
  tableOfContents: [
    { id: "start-purpose", label: "Start with the purpose" },
    { id: "know-reader", label: "Know the reader" },
    { id: "informal-messages", label: "Informal messages" },
    { id: "polite-emails", label: "Polite emails" },
    { id: "subject-lines", label: "Subject lines" },
    { id: "greetings", label: "Greetings" },
    { id: "state-purpose", label: "State the purpose clearly" },
    { id: "making-requests", label: "Making requests" },
    { id: "asking-information", label: "Asking for information" },
    { id: "invitations", label: "Invitations" },
    { id: "accept-decline", label: "Accepting and declining invitations" },
    { id: "confirm-plans", label: "Confirming plans" },
    { id: "change-cancel", label: "Changing or cancelling plans" },
    { id: "apologies", label: "Apologies" },
    { id: "updates", label: "Giving updates" },
    { id: "report-problem", label: "Reporting a problem" },
    { id: "tone", label: "Tone" },
    { id: "keep-concise", label: "Keep messages concise" },
    { id: "use-paragraphs", label: "Use paragraphs" },
    { id: "closings", label: "Closings" },
    { id: "check-sending", label: "Check before sending" },
    { id: "worked-informal", label: "Worked informal message" },
    { id: "worked-polite", label: "Worked polite email" },
    { id: "common-mistakes", label: "Common mistakes" },
    { id: "writing-checklist", label: "Writing checklist" },
    { id: "guided-checks", label: "Guided Checks" }
  ],

  sections: [
    {
      id: "start-purpose",
      title: "Start with the purpose",
      blocks: [
        {
          type: "text",
          content: "A good message makes its purpose clear quickly."
        },
        {
          type: "pill-list",
          heading: "Common purposes:",
          items: [
            "Asking for information",
            "Making a request",
            "Inviting someone",
            "Confirming a plan",
            "Changing a plan",
            "Apologising",
            "Thanking someone",
            "Giving an update",
            "Reporting a problem"
          ]
        },
        {
          type: "text",
          heading: "Unclear:",
          content: "Hello. I wanted to say something about tomorrow."
        },
        {
          type: "text",
          heading: "Clearer:",
          content: "Hello. I am writing to confirm our meeting tomorrow at three o’clock."
        },
        {
          type: "text",
          heading: "Main message:",
          content: "<strong>The reader should understand why you are writing within the first few lines.</strong>"
        }
      ]
    },
    {
      id: "know-reader",
      title: "Know the reader",
      blocks: [
        {
          type: "text",
          content: "Style depends on the relationship."
        },
        {
          type: "two-column-list",
          columns: [
            {
              title: "Informal readers",
              items: [
                "Friends",
                "Close classmates",
                "Family members",
                "Familiar colleagues"
              ]
            },
            {
              title: "Polite or semi-formal readers",
              items: [
                "Teachers",
                "Managers",
                "New colleagues",
                "Service staff",
                "Community organisations",
                "People the writer does not know well"
              ]
            }
          ]
        },
        {
          type: "pill-list",
          heading: "Teach students to ask:",
          items: [
            "How well do I know this person?",
            "Is the situation personal or professional?",
            "Does the message need to sound friendly, polite, or both?"
          ]
        }
      ]
    },
    {
      id: "informal-messages",
      title: "Informal messages",
      blocks: [
        {
          type: "pill-list",
          heading: "Informal messages may use:",
          items: [
            "Hi",
            "Hello",
            "Thanks",
            "Sorry",
            "Can you…?",
            "Are you free…?",
            "See you soon",
            "Talk later"
          ]
        },
        {
          type: "text",
          heading: "Example:",
          content: "Hi Rina, are you free to study together on Saturday afternoon? We could meet at the library around two. Let me know if that works for you."
        },
        {
          type: "text",
          content: "Explain that informal does not mean unclear or careless."
        }
      ]
    },
    {
      id: "polite-emails",
      title: "Polite emails",
      blocks: [
        {
          type: "pill-list",
          heading: "Polite emails often use:",
          items: [
            "Dear…",
            "Hello…",
            "I am writing to…",
            "Could you please…?",
            "Would it be possible to…?",
            "Thank you for…",
            "Please let me know…",
            "Kind regards",
            "Best regards"
          ]
        },
        {
          type: "text",
          heading: "Example:",
          content: "Dear Ms Patel,<br><br>I am writing to ask whether the Thursday workshop still has available places. Could you please send me the registration details?<br><br>Kind regards,<br>Daniel"
        }
      ]
    },
    {
      id: "subject-lines",
      title: "Subject lines",
      blocks: [
        {
          type: "text",
          content: "A subject line should help the reader understand the topic before opening the email."
        },
        {
          type: "example-block",
          heading: "Weak:",
          examples: [
            "Hello",
            "Question",
            "Important"
          ]
        },
        {
          type: "example-block",
          heading: "Clearer:",
          examples: [
            "Question About Saturday’s Workshop",
            "Request to Change Meeting Time",
            "Confirmation of Library Visit",
            "Problem With Course Registration"
          ]
        },
        {
          type: "pill-list",
          heading: "A good subject line is:",
          items: [
            "Short",
            "Specific",
            "Connected to the message purpose"
          ]
        }
      ]
    },
    {
      id: "greetings",
      title: "Greetings",
      blocks: [
        {
          type: "two-column-list",
          columns: [
            {
              title: "Informal",
              items: [
                "Hi Maya,",
                "Hello Daniel,"
              ]
            },
            {
              title: "Polite",
              items: [
                "Dear Mr Ahmed,",
                "Dear Ms Lewis,",
                "Hello Dr Chen,"
              ]
            }
          ]
        },
        {
          type: "example-block",
          heading: "When the name is unknown:",
          examples: [
            "Hello,",
            "Dear Customer Service Team,",
            "Dear Course Coordinator,"
          ]
        },
        {
          type: "text",
          content: "Do not teach outdated or overly formal phrases unless necessary."
        }
      ]
    },
    {
      id: "state-purpose",
      title: "State the purpose clearly",
      blocks: [
        {
          type: "two-column-list",
          heading: "Useful openings:",
          columns: [
            {
              items: [
                "I am writing to ask about…",
                "I am writing to confirm…",
                "I wanted to let you know that…",
                "I am contacting you because…"
              ]
            },
            {
              items: [
                "Could you please tell me…?",
                "Thank you for your message.",
                "I am sorry, but…",
                "I would like to invite you to…"
              ]
            }
          ]
        },
        {
          type: "text",
          heading: "Example:",
          content: "I am writing to ask whether the evening class begins this week or next week."
        }
      ]
    },
    {
      id: "making-requests",
      title: "Making requests",
      blocks: [
        {
          type: "text",
          heading: "Informal:",
          content: "Can you send me the notes?"
        },
        {
          type: "text",
          heading: "Polite:",
          content: "Could you please send me the notes?"
        },
        {
          type: "text",
          heading: "More careful:",
          content: "Would it be possible for you to send me the notes from yesterday’s class?"
        },
        {
          type: "text",
          content: "Explain that adding “please” helps, but word order and tone also matter."
        },
        {
          type: "text",
          heading: "Too direct:",
          content: "Send me the schedule."
        },
        {
          type: "text",
          heading: "Clear and polite:",
          content: "Could you please send me the updated schedule?"
        }
      ]
    },
    {
      id: "asking-information",
      title: "Asking for information",
      blocks: [
        {
          type: "pill-list",
          heading: "Useful expressions:",
          items: [
            "Could you tell me…?",
            "Could you confirm…?",
            "I would like to know…",
            "Do you know whether…?",
            "Please let me know…",
            "Is it possible to…?"
          ]
        },
        {
          type: "text",
          heading: "Example:",
          content: "Could you confirm whether lunch is included in the course fee?"
        },
        {
          type: "text",
          content: "Teach students to ask specific questions."
        },
        {
          type: "text",
          heading: "Vague:",
          content: "Can you tell me more?"
        },
        {
          type: "text",
          heading: "Specific:",
          content: "Could you tell me what time the event finishes and whether parking is available?"
        }
      ]
    },
    {
      id: "invitations",
      title: "Invitations",
      blocks: [
        {
          type: "pill-list",
          heading: "A clear invitation should include:",
          items: [
            "The event",
            "The date",
            "The time",
            "The place",
            "Any useful instructions",
            "A request for a response"
          ]
        },
        {
          type: "text",
          heading: "Example:",
          content: "Hi Fajar, I am having a small dinner at my house this Saturday at seven. A few friends from work are coming. Would you like to join us? Please let me know by Thursday."
        }
      ]
    },
    {
      id: "accept-decline",
      title: "Accepting and declining invitations",
      blocks: [
        {
          type: "example-block",
          heading: "Accepting:",
          examples: [
            "Thanks for inviting me. I would be happy to come.",
            "That sounds great. See you on Saturday."
          ]
        },
        {
          type: "example-block",
          heading: "Declining politely:",
          examples: [
            "Thank you for the invitation. Unfortunately, I already have plans that evening.",
            "I am sorry I cannot join you, but I hope you have a great time."
          ]
        },
        {
          type: "text",
          content: "Explain that a long explanation is not always necessary."
        }
      ]
    },
    {
      id: "confirm-plans",
      title: "Confirming plans",
      blocks: [
        {
          type: "text",
          content: "A confirmation should repeat the important details."
        },
        {
          type: "text",
          heading: "Example:",
          content: "Just confirming that we are meeting at the city library on Wednesday at four o’clock."
        },
        {
          type: "pill-list",
          heading: "Useful expressions:",
          items: [
            "Just confirming…",
            "I would like to confirm…",
            "As agreed…",
            "See you at…",
            "Please let me know if anything changes."
          ]
        }
      ]
    },
    {
      id: "change-cancel",
      title: "Changing or cancelling plans",
      blocks: [
        {
          type: "pill-list",
          heading: "A useful change message should include:",
          items: [
            "1. The original plan",
            "2. The change",
            "3. The reason, if appropriate",
            "4. A new suggestion",
            "5. A polite apology"
          ]
        },
        {
          type: "text",
          heading: "Example:",
          content: "Hi Aisha, I am sorry, but I cannot meet at two tomorrow because my class finishes late. Could we meet at four instead?"
        },
        {
          type: "text",
          content: "Do not encourage unnecessary personal detail."
        }
      ]
    },
    {
      id: "apologies",
      title: "Apologies",
      blocks: [
        {
          type: "pill-list",
          heading: "A clear apology may include:",
          items: [
            "What happened",
            "A direct apology",
            "A brief explanation",
            "A solution or next step"
          ]
        },
        {
          type: "text",
          heading: "Example:",
          content: "I am sorry that I missed yesterday’s meeting. My train was delayed, and I was unable to contact you in time. Could we arrange another time this week?"
        },
        {
          type: "text",
          heading: "Avoid apologies that shift blame:",
          content: "Sorry you were upset."
        },
        {
          type: "text",
          heading: "Clearer:",
          content: "I am sorry that I did not inform you earlier."
        }
      ]
    },
    {
      id: "updates",
      title: "Giving updates",
      blocks: [
        {
          type: "pill-list",
          heading: "Useful expressions:",
          items: [
            "I wanted to update you about…",
            "The latest information is…",
            "There has been a change to…",
            "Everything is ready for…",
            "We are still waiting for…",
            "I will send another update when…"
          ]
        },
        {
          type: "text",
          heading: "Example:",
          content: "I wanted to update you about the classroom booking. Room 4 is unavailable, so the lesson will take place in Room 7 instead."
        }
      ]
    },
    {
      id: "report-problem",
      title: "Reporting a problem",
      blocks: [
        {
          type: "pill-list",
          heading: "A useful problem report should include:",
          items: [
            "What the problem is",
            "When it started",
            "What has already been tried",
            "What help is needed"
          ]
        },
        {
          type: "text",
          heading: "Example:",
          content: "Hello, I am unable to open the course materials on the website. The problem started this morning, and I have already tried refreshing the page and using another browser. Could you please check whether the files are available?"
        },
        {
          type: "text",
          content: "Do not encourage emotional or aggressive language."
        }
      ]
    },
    {
      id: "tone",
      title: "Tone",
      blocks: [
        {
          type: "text",
          heading: "Too direct:",
          content: "Change my appointment."
        },
        {
          type: "text",
          heading: "Polite:",
          content: "Could I change my appointment to another day?"
        },
        {
          type: "text",
          heading: "Too informal for a manager:",
          content: "Hey, can’t come tomorrow."
        },
        {
          type: "text",
          heading: "Clear and appropriate:",
          content: "Hello Mr Lewis, I am sorry, but I will not be able to attend tomorrow’s meeting."
        },
        {
          type: "text",
          content: "Teach students to choose language that matches the reader and situation."
        }
      ]
    },
    {
      id: "keep-concise",
      title: "Keep messages concise",
      blocks: [
        {
          type: "text",
          content: "A good everyday message usually includes enough detail, but not unnecessary information."
        },
        {
          type: "text",
          heading: "Too long:",
          content: "I was thinking about the meeting and then I remembered many different things that happened this week, and because of all of that I wanted to ask something."
        },
        {
          type: "text",
          heading: "Clearer:",
          content: "Could we move Friday’s meeting from ten o’clock to eleven?"
        },
        {
          type: "pill-list",
          heading: "Teach students to:",
          items: [
            "Remove repetition",
            "Use short paragraphs",
            "Keep related information together",
            "Put the main request near the beginning"
          ]
        }
      ]
    },
    {
      id: "use-paragraphs",
      title: "Use paragraphs",
      blocks: [
        {
          type: "text",
          content: "Even short emails may need separate paragraphs."
        },
        {
          type: "pill-list",
          heading: "Recommended structure:",
          items: [
            "Paragraph 1: Purpose",
            "Paragraph 2: Details or explanation",
            "Paragraph 3: Request, next step, or closing"
          ]
        },
        {
          type: "text",
          heading: "Example:",
          content: "Dear Ms Khan,<br><br>I am writing to ask about the beginner photography course.<br><br>Could you please confirm the starting date and whether students need to bring their own camera?<br><br>Thank you for your help.<br><br>Kind regards,<br>Leo"
        }
      ]
    },
    {
      id: "closings",
      title: "Closings",
      blocks: [
        {
          type: "two-column-list",
          columns: [
            {
              title: "Informal",
              items: [
                "Thanks",
                "See you",
                "Talk soon",
                "Best"
              ]
            },
            {
              title: "Polite",
              items: [
                "Thank you",
                "Kind regards",
                "Best regards",
                "Best wishes"
              ]
            }
          ]
        },
        {
          type: "text",
          content: "Explain that closings should match the tone of the greeting."
        }
      ]
    },
    {
      id: "check-sending",
      title: "Check before sending",
      blocks: [
        {
          type: "pill-list",
          heading: "Teach students to check:",
          items: [
            "Is the purpose clear?",
            "Is the reader’s name correct?",
            "Are the date and time correct?",
            "Is the request specific?",
            "Is the tone appropriate?",
            "Are important attachments mentioned?",
            "Is the message divided into clear paragraphs?",
            "Are capital letters and punctuation correct?",
            "Did I include my name where needed?"
          ]
        }
      ]
    },
    {
      id: "worked-informal",
      title: "Worked informal message",
      blocks: [
        {
          type: "text",
          content: "<strong>Situation:</strong> Invite a friend to a study session."
        },
        {
          type: "text",
          heading: "Message:",
          content: "Hi Nabila,<br>Are you free to study together on Sunday afternoon? I need to review the vocabulary from this week, and I thought we could meet at the library around two. Please let me know if that works for you.<br>See you,<br>Hana"
        },
        {
          type: "pill-list",
          heading: "Identify:",
          items: [
            "Greeting",
            "Purpose",
            "Date and time",
            "Place",
            "Request for a response",
            "Informal closing"
          ]
        }
      ]
    },
    {
      id: "worked-polite",
      title: "Worked polite email",
      blocks: [
        {
          type: "text",
          content: "<strong>Situation:</strong> Ask a course coordinator about a schedule."
        },
        {
          type: "text",
          heading: "Email:",
          content: "Subject: Question About Evening Class Schedule<br><br>Dear Course Coordinator,<br><br>I am writing to ask about the evening English class. Could you please confirm whether the class begins on Monday, 12 August, or the following week? I would also like to know what time the lesson finishes.<br><br>Thank you for your help.<br><br>Kind regards,<br>Maya Patel"
        },
        {
          type: "pill-list",
          heading: "Identify:",
          items: [
            "Specific subject line",
            "Polite greeting",
            "Clear purpose",
            "Two specific questions",
            "Polite closing"
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
          items: [
            "Writing without a clear purpose",
            "Using an unclear subject line",
            "Choosing an inappropriate greeting",
            "Making requests too directly",
            "Forgetting important dates or times",
            "Giving too much unnecessary detail",
            "Using one long paragraph",
            "Forgetting to ask for a response",
            "Mixing very formal and very casual language",
            "Ending without a closing",
            "Sending before checking names and details"
          ]
        }
      ]
    },
    {
      id: "writing-checklist",
      title: "Writing checklist",
      blocks: [
        {
          type: "pill-list",
          heading: "Before writing:",
          items: [
            "Who is the reader?",
            "What is the purpose?",
            "What details are necessary?",
            "What tone is appropriate?"
          ]
        },
        {
          type: "pill-list",
          heading: "While writing:",
          items: [
            "Use a clear greeting.",
            "State the purpose early.",
            "Organise details logically.",
            "Make requests specific.",
            "Use short paragraphs.",
            "Add a suitable closing."
          ]
        },
        {
          type: "pill-list",
          heading: "Before sending:",
          items: [
            "Check names, dates, and times.",
            "Check tone.",
            "Check punctuation.",
            "Confirm the request or next step is clear."
          ]
        }
      ]
    },
    {
      id: "guided-checks",
      title: "Guided Checks",
      blocks: [
        {
          type: "guided-check",
          prompt: "Which is the clearest email subject line?<br><br>A) Hello<br>B) Important<br>C) Request to Change Friday’s Meeting Time<br>D) Message",
          answer: "C) Request to Change Friday’s Meeting Time<br><br>It clearly states the purpose of the email."
        },
        {
          type: "guided-check",
          prompt: "Which request is the most polite?<br><br>A) Send the document.<br>B) I need the document.<br>C) Could you please send me the document?<br>D) Where is the document?",
          answer: "C) Could you please send me the document?"
        },
        {
          type: "guided-check",
          prompt: "Which message clearly confirms a plan?<br><br>A) Maybe we are doing something tomorrow.<br>B) Just confirming that we are meeting outside the library at three tomorrow.<br>C) Tomorrow is a day.<br>D) I remember the library.",
          answer: "B) Just confirming that we are meeting outside the library at three tomorrow."
        },
        {
          type: "guided-check",
          prompt: "Which is the best closing for a polite email to a course coordinator?<br><br>A) Bye<br>B) Later<br>C) Kind regards<br>D) See ya",
          answer: "C) Kind regards"
        }
      ]
    }
  ]
};
