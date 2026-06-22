export const activityData = {
  id: "listening-for-everyday-information",
  title: "Listening for Everyday Information",
  description: "Practise catching key details in announcements, phone messages, and travel updates.",
  lessonId: "listening-for-everyday-information",
  instructions: "Listen to three short everyday recordings and answer ten questions. Focus on key details such as times, dates, places, prices, and instructions. The recordings will not start automatically, and you may replay them whenever necessary.",
  sections: [
    {
      id: "section-1",
      title: "Community Centre Announcement",
      context: "You will hear an announcement about a weekend cooking class.",
      audio: {
        sources: [
          {
                        src: "../assets/audio/listening/listening-for-everyday-information/community-centre-announcement.wav",
                        type: "audio/wav"
          }
        ]
      },
      transcript: "Good morning. Here is a reminder about Saturday’s beginner cooking class at Riverside Community Centre. The class starts at ten thirty in the morning, not ten o’clock as shown on the old poster. Please use the side entrance on King Street because the main doors are being repaired. The class costs twelve pounds, and all equipment is included. Bring a notebook and a reusable container for any food you make. To reserve a place, call 01632 960418 before Thursday evening.",
      questions: [
        {
          id: "q1",
          type: "single-choice",
          prompt: "What time does the cooking class begin?",
          options: [
            "10:00 a.m.",
            "10:30 a.m.",
            "11:00 a.m.",
            "11:30 a.m."
          ],
          correctAnswer: "10:30 a.m.",
          explanation: "The speaker first mentions ten o’clock because it appeared on the old poster, but then gives the correct start time: ten thirty."
        },
        {
          id: "q2",
          type: "short-answer",
          prompt: "Which entrance should participants use?",
          primaryAnswer: "The side entrance",
          acceptedAlternatives: [
            "side entrance",
            "the side entrance",
            "King Street entrance",
            "the King Street entrance",
            "side entrance on King Street",
            "the side entrance on King Street"
          ],
          explanation: "The main doors are being repaired, so participants must use the side entrance on King Street."
        },
        {
          id: "q3",
          type: "short-answer",
          prompt: "How much does the class cost?",
          primaryAnswer: "£12",
          acceptedAlternatives: [
            "12",
            "£12",
            "12 pounds",
            "twelve pounds"
          ],
          explanation: "The announcement states that the class costs twelve pounds and that equipment is included."
        },
        {
          id: "q4",
          type: "single-choice",
          prompt: "What should participants bring in addition to a notebook?",
          options: [
            "Cooking equipment",
            "A reusable container",
            "An apron",
            "Their own ingredients"
          ],
          correctAnswer: "A reusable container",
          explanation: "Participants should bring a notebook and a reusable container. The equipment is already provided."
        }
      ]
    },
    {
      id: "section-2",
      title: "Dental Appointment Message",
      context: "You will hear a phone message from a dental clinic.",
      audio: {
        sources: [
          {
                        src: "../assets/audio/listening/listening-for-everyday-information/dental-appointment-message.wav",
                        type: "audio/wav"
          }
        ]
      },
      transcript: "Hello, this is Greenway Dental Clinic calling for Maya Patel. Your appointment with Doctor Lewis was booked for Tuesday the fourteenth at three fifteen in the afternoon. Unfortunately, the dentist will be away that afternoon. We can offer you Wednesday the fifteenth at eleven forty in the morning instead. The appointment will still be at our Market Road branch, on the second floor above the pharmacy. Please arrive ten minutes early and bring your patient card. Call us on 020 7946 2831 if the new time is not suitable.",
      questions: [
        {
          id: "q5",
          type: "short-answer",
          prompt: "What is the new appointment date?",
          primaryAnswer: "Wednesday the 15th",
          acceptedAlternatives: [
            "Wednesday 15th",
            "Wednesday the 15th",
            "the 15th",
            "15th",
            "Wednesday the fifteenth",
            "Wednesday fifteenth"
          ],
          explanation: "Tuesday the fourteenth was the original appointment. The new appointment is Wednesday the fifteenth."
        },
        {
          id: "q6",
          type: "short-answer",
          prompt: "What is the new appointment time?",
          primaryAnswer: "11:40 a.m.",
          acceptedAlternatives: [
            "11:40",
            "11.40",
            "11:40 am",
            "11.40 am",
            "eleven forty",
            "eleven forty in the morning"
          ],
          explanation: "The clinic offers a new appointment at eleven forty in the morning."
        },
        {
          id: "q7",
          type: "single-choice",
          prompt: "Where will the appointment take place?",
          options: [
            "The King Street branch",
            "The Market Road branch",
            "The pharmacy",
            "Doctor Lewis’s private office"
          ],
          correctAnswer: "The Market Road branch",
          explanation: "The message says that the appointment will still be at the Market Road branch. The pharmacy is below the clinic, not the appointment location itself."
        },
        {
          id: "q8",
          type: "short-answer",
          prompt: "What should Maya bring?",
          primaryAnswer: "Her patient card",
          acceptedAlternatives: [
            "patient card",
            "her patient card",
            "the patient card",
            "a patient card"
          ],
          explanation: "The caller asks Maya to arrive early and bring her patient card."
        }
      ]
    },
    {
      id: "section-3",
      title: "Station Announcement",
      context: "You will hear a station announcement about a delayed train.",
      audio: {
        sources: [
          {
                        src: "../assets/audio/listening/listening-for-everyday-information/station-announcement.wav",
                        type: "audio/wav"
          }
        ]
      },
      transcript: "Attention please. The six twenty-five service to Brookfield is delayed by approximately twenty minutes because of a signalling problem. It will now leave from platform seven, not platform four. Passengers travelling to Northgate should remain on this train and change at Brookfield. The café beside platform seven closes at six thirty, but the ticket office will stay open until seven o’clock. We apologise for the delay.",
      questions: [
        {
          id: "q9",
          type: "short-answer",
          prompt: "Which platform will the train leave from?",
          primaryAnswer: "Platform 7",
          acceptedAlternatives: [
            "platform 7",
            "7",
            "seven",
            "platform seven"
          ],
          explanation: "Platform four is mentioned as the old information. The train will now leave from platform seven."
        },
        {
          id: "q10",
          type: "single-choice",
          prompt: "What should passengers travelling to Northgate do?",
          options: [
            "Leave the station and take a bus",
            "Wait for a different train",
            "Remain on the train and change at Brookfield",
            "Change trains at platform four"
          ],
          correctAnswer: "Remain on the train and change at Brookfield",
          explanation: "The announcement directly instructs Northgate passengers to remain on the train and change at Brookfield."
        }
      ]
    }
  ],
  completion: {
    message: "Activity complete. Review the details you missed, read the transcripts, and try the recordings again when you are ready."
  }
};
