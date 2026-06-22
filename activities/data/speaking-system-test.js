export const activityData = {
    id: "speaking-system-test",
    type: "speaking-practice",
    lab: "speaking",
    label: "SYSTEM TEST",
    level: "Internal",
    title: "Speaking Engine System Test",
    description: "Internal validation content for the reusable speaking-practice engine.",
    instructions: "Test all preparation, speaking, pause, review, and completion states.",
    accent: "#C58CFF",
    backUrl: "../labs/speaking.html",
    lessonUrl: "../labs/speaking.html",
    preparationSeconds: 5,
    speakingSeconds: 8,
    estimatedMinutes: 2,
    rounds: [
        {
            id: "test-round-1",
            category: "Standard Prompt Test",
            prompt: "Describe an interesting experience you had recently.",
            supportQuestions: [
                "When did it happen?",
                "Who was there?",
                "What made it interesting?"
            ],
            usefulLanguage: [
                "Recently, I...",
                "It happened when...",
                "The most interesting part was..."
            ],
            selfCheck: [
                "I described the experience clearly.",
                "I included details about when and who.",
                "I spoke fluently without long pauses."
            ],
            sampleResponse: "Recently, I visited a local museum that had a new exhibition. It happened last weekend when I went with my family. The most interesting part was seeing the historical artifacts up close."
        },
        {
            id: "test-round-2",
            category: "Minimal Content Test",
            prompt: "What is your favorite color?",
            supportQuestions: [],
            usefulLanguage: [
                "My favorite color is..."
            ],
            selfCheck: [
                "I stated my favorite color.",
                "I gave a reason.",
                "I spoke clearly.",
                "I used complete sentences."
            ],
            sampleResponse: ""
        },
        {
            id: "test-round-3",
            category: "Long Content Verification Test",
            prompt: "Explain in detail the plot of a movie or a book you have enjoyed and why you would recommend it to others. Please try to include as many specific details as possible to verify the responsive wrapping of the text inside the prompt area.",
            supportQuestions: [
                "What is the main storyline?",
                "Who are the key characters?",
                "Why exactly do you like it?",
                "Who do you think would enjoy it?"
            ],
            usefulLanguage: [
                "The story revolves around a character who...",
                "One of the main reasons I enjoyed it was because...",
                "I would highly recommend this to anyone who likes...",
                "Another interesting aspect of the plot is..."
            ],
            selfCheck: [
                "I provided a detailed summary.",
                "I recommended it convincingly.",
                "I included character names."
            ],
            sampleResponse: "The story revolves around a young protagonist who discovers a hidden world within their own. One of the main reasons I enjoyed it was because the world-building is incredibly detailed and immersive. I would highly recommend this to anyone who likes fantasy adventures with complex character development. Another interesting aspect of the plot is how the author subverts traditional narrative tropes."
        }
    ]
};
