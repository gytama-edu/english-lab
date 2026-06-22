export const activityData = {
  id: "writing-everyday-messages-and-emails",
  title: "Writing Everyday Messages and Emails",
  description: "Complete guided communication checks, write short messages, and create one clear everyday email.",
  lessonId: "writing-everyday-messages-and-emails",
  
  instructions: [
    "Read each prompt carefully.",
    "Choose the best answers for the objective tasks.",
    "Write clear responses for the open tasks.",
    "Use the guidance and self-review checklists to improve your writing."
  ],
  
  sections: [
    {
      id: "choose-clear-language",
      title: "Choose Clear and Appropriate Language",
      introduction: "Check purpose, tone, subject lines, and polite requests.",
      tasks: [
        {
          id: "task-1",
          type: "single-choice",
          prompt: "Which is the best subject line for an email asking to change an appointment?",
          options: [
            "Hello",
            "Appointment",
            "Request to Change Tuesday’s Appointment",
            "Important Message"
          ],
          correctAnswer: "Request to Change Tuesday’s Appointment",
          explanation: "It clearly tells the reader what the email is about."
        },
        {
          id: "task-2",
          type: "single-choice",
          prompt: "Which request is the most polite?",
          options: [
            "Give me the class schedule.",
            "I want the schedule.",
            "Could you please send me the updated class schedule?",
            "Schedule now."
          ],
          correctAnswer: "Could you please send me the updated class schedule?",
          explanation: "It uses a clear and polite request form."
        },
        {
          id: "task-3",
          type: "single-choice",
          prompt: "Which greeting is most suitable for an email to a teacher?",
          options: [
            "Hey bro,",
            "Dear Ms Lewis,",
            "Yo,",
            "What’s up?"
          ],
          correctAnswer: "Dear Ms Lewis,",
          explanation: "It is polite and appropriate for a teacher."
        },
        {
          id: "task-4",
          type: "sentence-response",
          prompt: "Write one polite sentence asking a teacher to send you the homework details.",
          guidance: "Use a request form such as “Could you please…?” or “Would it be possible…?”",
          suggestedLength: "One complete sentence",
          selfReview: [
            "My request is clear.",
            "My tone is polite.",
            "I explained what information I need.",
            "My sentence has correct capitalisation and punctuation."
          ],
          sampleResponse: "Could you please send me the homework details from today’s class?"
        }
      ]
    },
    {
      id: "write-short-messages",
      title: "Write Short Everyday Messages",
      introduction: "Practise invitations, confirmations, apologies, and changes of plan.",
      tasks: [
        {
          id: "task-5",
          type: "single-choice",
          prompt: "Which message gives a complete invitation?",
          options: [
            "Do you want to come?",
            "I am doing something Saturday.",
            "Would you like to join us for dinner at my house this Saturday at seven?",
            "Saturday is good."
          ],
          correctAnswer: "Would you like to join us for dinner at my house this Saturday at seven?",
          explanation: "It includes the activity, place, day, and time."
        },
        {
          id: "task-6",
          type: "single-choice",
          prompt: "Which is the best response to decline an invitation politely?",
          options: [
            "No.",
            "I cannot.",
            "Thank you for inviting me. Unfortunately, I already have plans that evening.",
            "Why did you invite me?"
          ],
          correctAnswer: "Thank you for inviting me. Unfortunately, I already have plans that evening.",
          explanation: "It thanks the sender and declines politely."
        },
        {
          id: "task-7",
          type: "single-choice",
          prompt: "Which message clearly changes a plan?",
          options: [
            "Tomorrow is difficult.",
            "I am sorry, but I cannot meet at two. Could we meet at four instead?",
            "Maybe later.",
            "Something changed."
          ],
          correctAnswer: "I am sorry, but I cannot meet at two. Could we meet at four instead?",
          explanation: "It apologises, identifies the original time, and suggests a new time."
        },
        {
          id: "task-8",
          type: "sentence-response",
          prompt: "Write a short message confirming a meeting with a friend.",
          guidance: "Include the day, time, and place.",
          suggestedLength: "One or two complete sentences",
          selfReview: [
            "I clearly confirmed the plan.",
            "I included the day.",
            "I included the time.",
            "I included the place.",
            "My tone is natural and friendly."
          ],
          sampleResponse: "Hi Rafi, just confirming that we are meeting at the city library on Saturday at two o’clock. See you there!"
        }
      ]
    },
    {
      id: "plan-and-write-email",
      title: "Plan and Write a Clear Email",
      introduction: "Plan and write a polite email asking for information about a community course.",
      tasks: [
        {
          id: "task-9",
          type: "sentence-response",
          prompt: "Plan an email asking about a weekend cooking course.",
          guidance: "Write short notes for:\n- The reader\n- A clear subject line\n- The purpose\n- The course information you need\n- Two specific questions\n- A suitable closing",
          suggestedLength: "Short planning notes",
          selfReview: [
            "I identified the reader.",
            "My subject line is specific.",
            "My purpose is clear.",
            "I planned two useful questions.",
            "I chose a polite closing."
          ],
          sampleResponse: "Reader: Community Centre Course Team\nSubject: Questions About Weekend Cooking Course\nPurpose: Ask for course information\nQuestion 1: What time does the course begin?\nQuestion 2: Are ingredients included in the fee?\nClosing: Kind regards"
        },
        {
          id: "task-10",
          type: "paragraph-response",
          prompt: "Using your plan, write a polite email asking for information about the weekend cooking course.",
          guidance: "Include a subject line, greeting, clear purpose, two specific questions, a polite final sentence, and a suitable closing.",
          selfReview: [
            "My subject line is clear.",
            "I used an appropriate greeting.",
            "I stated the purpose near the beginning.",
            "I asked two specific questions.",
            "My tone is polite.",
            "I used clear paragraphs.",
            "I included a suitable closing.",
            "I checked names, capital letters, and punctuation.",
            "The reader can easily understand what response I need."
          ],
          sampleResponse: "Subject: Questions About Weekend Cooking Course\n\nDear Community Centre Course Team,\n\nI am writing to ask about the weekend cooking course advertised on your website. Could you please confirm what time the course begins? I would also like to know whether ingredients and cooking equipment are included in the course fee.\n\nThank you for your help. I look forward to your reply.\n\nKind regards,\nMaya"
        }
      ]
    }
  ],
  completion: {
    message: "Writing practice complete. Review whether each message has a clear purpose, suitable tone, and an easy-to-understand next step."
  }
};
