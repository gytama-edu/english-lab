export const activityData = {
  id: "writing-clear-sentences-and-paragraphs",
  title: "Writing Clear Sentences and Paragraphs",
  description: "Complete guided sentence checks, write short responses, and build one clear paragraph.",
  lessonId: "writing-clear-sentences-and-paragraphs",
  
  instructions: [
    "Complete six guided sentence and paragraph checks, then write four short responses. Your open writing will not be automatically graded. You will review it using clear checklists and compare it with optional sample responses after completion."
  ],
  
  sections: [
    {
      id: "section-1",
      title: "Build Clear Sentences",
      introduction: "Check sentence completeness, word order, and connectors before writing your own sentence.",
      tasks: [
        {
          id: "task-1",
          type: "single-choice",
          prompt: "Which option is a complete sentence?",
          options: [
            "Because the bus was late.",
            "My class starts at nine o’clock.",
            "After finishing the lesson.",
            "While we waited outside."
          ],
          correctAnswer: "My class starts at nine o’clock.",
          explanation: "The sentence has a subject, a verb, and a complete meaning."
        },
        {
          id: "task-2",
          type: "single-choice",
          prompt: "Which sentence has the clearest word order?",
          options: [
            "In the park after work with my friend I walk.",
            "I walk in the park with my friend after work.",
            "With my friend after work in the park walking.",
            "After work my friend the park I walk."
          ],
          correctAnswer: "I walk in the park with my friend after work.",
          explanation: "The sentence follows a clear subject–verb pattern and places the additional information naturally."
        },
        {
          id: "task-3",
          type: "single-choice",
          prompt: "Choose the best connector:\nI brought an umbrella ___ the sky looked dark.",
          options: [
            "because",
            "but",
            "although",
            "then"
          ],
          correctAnswer: "because",
          explanation: "The dark sky is the reason for bringing the umbrella."
        },
        {
          id: "task-4",
          type: "sentence-response",
          prompt: "Combine these ideas into one clear sentence:\nThe café was crowded. We found a table near the window.",
          guidance: "Use a connector such as “but” or “although.”",
          suggestedLength: "One complete sentence",
          selfReview: [
            "My sentence contains both ideas.",
            "I used a suitable connector.",
            "My sentence has a capital letter and final punctuation.",
            "The meaning is clear."
          ],
          sampleResponse: "Although the café was crowded, we found a table near the window."
        }
      ]
    },
    {
      id: "section-2",
      title: "Build a Clear Paragraph",
      introduction: "Identify the sentences that introduce, support, and conclude one central idea.",
      tasks: [
        {
          id: "task-5",
          type: "single-choice",
          prompt: "Which is the best topic sentence for these details?\n- It saves travel time.\n- It allows me to work quietly.\n- It makes preparing lessons easier.",
          options: [
            "I have several lessons every week.",
            "Working from home has several advantages for me.",
            "My desk is beside the window.",
            "Travelling can sometimes be expensive."
          ],
          correctAnswer: "Working from home has several advantages for me.",
          explanation: "It introduces the central idea that all three details support."
        },
        {
          id: "task-6",
          type: "single-choice",
          prompt: "Which sentence best supports this topic sentence?\nThe community library is a useful place for students.",
          options: [
            "It offers free internet and quiet study areas.",
            "The library building is beside a bakery.",
            "My friend prefers studying at home.",
            "The librarian wore a green shirt yesterday."
          ],
          correctAnswer: "It offers free internet and quiet study areas.",
          explanation: "This detail directly explains why the library is useful for students."
        },
        {
          id: "task-7",
          type: "single-choice",
          prompt: "Which is the best concluding sentence for a paragraph about the benefits of planning the week?",
          options: [
            "My notebook is blue.",
            "Monday is the first working day.",
            "For these reasons, a weekly plan helps me stay organised and use my time well.",
            "Sometimes people forget things."
          ],
          correctAnswer: "For these reasons, a weekly plan helps me stay organised and use my time well.",
          explanation: "It returns to the main idea and closes the paragraph clearly."
        },
        {
          id: "task-8",
          type: "sentence-response",
          prompt: "Write one supporting sentence for this topic sentence:\nLearning English online can be convenient.",
          guidance: "Give one reason, example, or explanation.",
          suggestedLength: "One complete sentence",
          selfReview: [
            "My sentence supports the topic.",
            "I included a clear reason, example, or explanation.",
            "My sentence is complete.",
            "I checked capitalisation and punctuation."
          ],
          sampleResponse: "Students can study at a suitable time without travelling to a classroom."
        }
      ]
    },
    {
      id: "section-3",
      title: "Plan, Write, and Review",
      introduction: "Plan one short paragraph and then turn your ideas into a clear final response.",
      tasks: [
        {
          id: "task-9",
          type: "sentence-response",
          prompt: "Plan a paragraph about one useful daily habit.",
          guidance: "Write short notes for:\n- The habit\n- Why it is useful\n- One example\n- Another supporting detail\n- A possible concluding idea",
          suggestedLength: "Short planning notes rather than a full paragraph",
          selfReview: [
            "I chose one clear habit.",
            "My details connect to the same main idea.",
            "I included at least two supporting points.",
            "I have an idea for the conclusion."
          ],
          sampleResponse: "Habit: preparing my bag at night.\nUseful because mornings are less stressful.\nExample: I check my books and keys before sleeping.\nExtra detail: I leave earlier and forget fewer things.\nConclusion: preparation makes the next day easier."
        },
        {
          id: "task-10",
          type: "paragraph-response",
          prompt: "Using your plan, write a clear paragraph about one useful daily habit.",
          guidance: "Include a topic sentence, supporting details, and a concluding sentence. Aim for approximately five to seven sentences, but focus on clarity rather than reaching an exact number.",
          selfReview: [
            "My paragraph has one clear main idea.",
            "My topic sentence introduces the habit.",
            "I included at least two supporting details.",
            "My sentences are complete.",
            "I used connectors where useful.",
            "My paragraph has a concluding sentence.",
            "I checked capital letters and punctuation.",
            "I removed unrelated information."
          ],
          sampleResponse: "Preparing my bag at night is a useful daily habit. Before I go to bed, I check my schedule and put the books, keys, and other items I need into my bag. This saves time in the morning because I do not need to search for everything. It also helps me leave home earlier and feel less stressed. I forget important items less often when I prepare in advance. For these reasons, packing my bag at night makes the next day easier."
        }
      ]
    }
  ],
  completion: {
    message: "Writing practice complete. Review the objective checks, compare your writing with the optional samples, and decide which sentence or paragraph you would improve next."
  }
};
