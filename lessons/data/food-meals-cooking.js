export const lessonData = {
  id: "food-meals-cooking",
  lab: "vocabulary",
  label: "VOCABULARY LESSON 02",
  level: "Elementary",
  title: "Food, Meals, and Cooking",
  description: "Learn practical vocabulary for meals, ingredients, cooking methods, tastes, textures, kitchen tools, and restaurant situations.",
  metaDescription: "Learn practical English vocabulary for food, meals, ingredients, cooking methods, tastes, textures, kitchen tools, quantities, and restaurant situations.",
  backUrl: "../labs/vocabulary.html",
  practiceUrl: "../activities/multiple-choice.html?id=food-meals-cooking",
  practiceLabel: "Multiple-Choice Practice",
  fillPracticeUrl: "../activities/fill-in-the-blank.html?id=food-meals-cooking-fill",
  fillPracticeLabel: "Fill-in-the-Blank Practice",
  practiceText: "Practise recognising and producing useful vocabulary for meals, ingredients, cooking, tastes, textures, and restaurants.",
  accent: "#4AD8C1",
  objectives: [
    "Learn vocabulary for daily meals and food groups.",
    "Describe cooking methods and preparation actions.",
    "Talk about tastes, textures, and kitchen tools.",
    "Order food and use restaurant language."
  ],
  tableOfContents: [
    { id: "daily-meals", label: "Daily Meals" },
    { id: "food-groups", label: "Food Groups" },
    { id: "ingredients", label: "Ingredients" },
    { id: "cooking-methods", label: "Cooking Methods" },
    { id: "preparation-verbs", label: "Preparation Verbs" },
    { id: "kitchen-tools", label: "Kitchen Tools" },
    { id: "tastes-and-flavours", label: "Tastes and Flavours" },
    { id: "food-textures", label: "Food Textures" },
    { id: "portions-and-containers", label: "Portions and Containers" },
    { id: "restaurant-language", label: "Restaurant Language" },
    { id: "important-collocations", label: "Important Collocations" },
    { id: "confusing-words", label: "Confusing Words" },
    { id: "sentence-patterns", label: "Useful Sentence Patterns" },
    { id: "common-mistakes", label: "Common Mistakes" },
    { id: "guided-checks", label: "Check Your Understanding" },
    { id: "summary", label: "Lesson Summary" }
  ],
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      blocks: [
        {
          type: "text",
          content: "Food vocabulary is more useful when we learn complete phrases."
        },
        {
          type: "pill-list",
          heading: "Examples:",
          items: [
            "have breakfast",
            "cook dinner",
            "boil water",
            "fry an egg",
            "slice the bread",
            "order a meal",
            "set the table",
            "wash the dishes"
          ]
        },
        {
          type: "note",
          content: "<strong>Key Idea:</strong> Learn the action together with the food or object.<br><br>For example:<br>Do not learn only “slice.”<br>Learn:<br>• slice the bread<br>• slice an onion<br>• slice the tomatoes"
        },
        {
          type: "text",
          heading: "Model",
          content: "For breakfast, I usually have eggs, toast, and coffee.<br>For lunch, I often eat rice with chicken and vegetables.<br>In the evening, I cook dinner or order food."
        }
      ]
    },
    {
      id: "daily-meals",
      title: "Daily Meals",
      blocks: [
        {
          type: "usage-group",
          title: "BREAKFAST",
          explanation: "The first meal of the day.",
          examples: ["I have breakfast at seven.", "She usually eats eggs for breakfast."]
        },
        {
          type: "usage-group",
          title: "LUNCH",
          explanation: "A meal eaten around the middle of the day.",
          examples: ["We have lunch at noon.", "I brought my lunch from home."]
        },
        {
          type: "usage-group",
          title: "DINNER",
          explanation: "The main evening meal.",
          examples: ["My family has dinner together.", "He cooks dinner after work."]
        },
        {
          type: "usage-group",
          title: "SNACK",
          explanation: "A small amount of food eaten between meals.",
          examples: ["I have fruit as a snack.", "She bought a snack after class."]
        },
        {
          type: "usage-group",
          title: "BRUNCH",
          explanation: "A meal that combines breakfast and lunch.",
          examples: ["We had brunch at ten thirty on Sunday."]
        },
        {
          type: "usage-group",
          title: "DESSERT",
          explanation: "Sweet food eaten after the main meal.",
          examples: ["We had ice cream for dessert.", "The restaurant serves chocolate cake for dessert."]
        },
        {
          type: "note",
          content: "<strong>Natural phrases:</strong><br>• have breakfast<br>• have lunch<br>• have dinner<br>• eat breakfast<br>• eat lunch<br>• eat dinner<br>• have a snack<br>• order dessert<br><br>Clarification:<br><strong>Have breakfast</strong> is a common routine expression.<br><strong>Eat breakfast</strong> is also correct when emphasising the act of eating."
        }
      ]
    },
    {
      id: "food-groups",
      title: "Common Food Groups",
      blocks: [
        {
          type: "usage-group",
          title: "FRUIT",
          explanation: "Examples: apple, banana, orange, mango, grapes, watermelon",
          examples: ["I eat fruit every morning."]
        },
        {
          type: "usage-group",
          title: "VEGETABLES",
          explanation: "Examples: carrot, potato, tomato, onion, spinach, cabbage",
          examples: ["We need more vegetables for the soup."]
        },
        {
          type: "usage-group",
          title: "MEAT",
          explanation: "Examples: chicken, beef, lamb, pork",
          examples: ["He does not eat meat."]
        },
        {
          type: "usage-group",
          title: "FISH AND SEAFOOD",
          explanation: "Examples: fish, shrimp, crab, squid",
          examples: ["The restaurant serves grilled fish."]
        },
        {
          type: "usage-group",
          title: "DAIRY PRODUCTS",
          explanation: "Examples: milk, cheese, butter, yoghurt",
          examples: ["She adds milk to her coffee."]
        },
        {
          type: "usage-group",
          title: "GRAINS AND STARCHES",
          explanation: "Examples: rice, bread, pasta, noodles, cereal, flour",
          examples: ["Rice is a common staple food."]
        },
        {
          type: "note",
          content: "A <strong>staple food</strong> is a food people eat regularly and in large amounts."
        },
        {
          type: "usage-group",
          title: "PROTEIN-RICH FOODS",
          explanation: "Examples: eggs, beans, tofu, meat, fish",
          examples: ["Eggs and beans are good sources of protein."]
        }
      ]
    },
    {
      id: "ingredients",
      title: "Ingredients",
      blocks: [
        {
          type: "text",
          content: "An <strong>ingredient</strong> is one of the foods or substances used to make a dish.<br><br>Examples:<br>flour, sugar, salt, pepper, oil, butter, garlic, onion, eggs, milk<br><br>Sentence: The main ingredients are flour, eggs, milk, and sugar."
        },
        {
          type: "usage-group",
          title: "FRESH INGREDIENTS",
          explanation: "Ingredients that are new and have not been stored for a long time.",
          examples: ["This restaurant uses fresh vegetables."]
        },
        {
          type: "usage-group",
          title: "MAIN INGREDIENT",
          explanation: "The most important ingredient in a dish.",
          examples: ["Chicken is the main ingredient in this soup."]
        },
        {
          type: "usage-group",
          title: "ADD AN INGREDIENT",
          examples: ["Add the salt after the water boils."]
        },
        {
          type: "usage-group",
          title: "MIX THE INGREDIENTS",
          examples: ["Mix the ingredients in a large bowl."]
        },
        {
          type: "usage-group",
          title: "RECIPE",
          explanation: "Instructions that explain how to prepare a dish.",
          examples: ["I followed a recipe for banana bread."]
        },
        {
          type: "usage-group",
          title: "DISH",
          explanation: "A particular type of prepared food.",
          examples: ["Fried rice is a popular dish.", "This dish contains seafood."]
        },
        {
          type: "note",
          content: "<strong>Food:</strong> A general word for things people eat.<br><strong>Dish:</strong> A particular prepared item or recipe.<br><strong>Meal:</strong> Food eaten at a particular time, such as breakfast or dinner."
        }
      ]
    },
    {
      id: "cooking-methods",
      title: "Cooking Methods",
      blocks: [
        {
          type: "usage-group",
          title: "BOIL",
          explanation: "Cook food in very hot water. Examples: boil an egg, boil the potatoes, boil water.",
          examples: ["Boil the pasta for ten minutes."]
        },
        {
          type: "usage-group",
          title: "FRY",
          explanation: "Cook food in hot oil. Examples: fry an egg, fry the chicken, fried rice.",
          examples: ["She fries the onions in a little oil."]
        },
        {
          type: "usage-group",
          title: "BAKE",
          explanation: "Cook food in an oven using dry heat. Examples: bake bread, bake a cake, bake potatoes.",
          examples: ["We baked a cake yesterday."]
        },
        {
          type: "usage-group",
          title: "ROAST",
          explanation: "Cook meat or vegetables in an oven or over heat. Examples: roast chicken, roast potatoes, roasted vegetables.",
          examples: []
        },
        {
          type: "usage-group",
          title: "GRILL",
          explanation: "Cook food using strong direct heat. Examples: grill fish, grilled chicken, grilled vegetables.",
          examples: []
        },
        {
          type: "usage-group",
          title: "STEAM",
          explanation: "Cook food using hot steam. Examples: steam vegetables, steamed rice, steamed fish.",
          examples: []
        },
        {
          type: "usage-group",
          title: "MICROWAVE",
          explanation: "Heat or cook food in a microwave oven.",
          examples: ["I microwaved the leftovers."]
        },
        {
          type: "usage-group",
          title: "TOAST",
          explanation: "Make bread brown and crisp using heat. Examples: toast bread, toasted bread, two pieces of toast.",
          examples: []
        },
        {
          type: "note",
          content: "<strong>Boil:</strong> Uses hot water.<br><strong>Fry:</strong> Uses hot oil.<br><strong>Bake:</strong> Uses an oven.<br><strong>Grill:</strong> Uses strong direct heat.<br><strong>Steam:</strong> Uses hot steam."
        }
      ]
    },
    {
      id: "preparation-verbs",
      title: "Preparing Food",
      blocks: [
        {
          type: "usage-group",
          title: "WASH",
          examples: ["Wash the vegetables before cooking them."]
        },
        {
          type: "usage-group",
          title: "PEEL",
          explanation: "Remove the outer skin. Examples: peel a potato, peel an orange, peel a carrot.",
          examples: []
        },
        {
          type: "usage-group",
          title: "CHOP",
          explanation: "Cut food into pieces, usually with a knife. Examples: chop the onions, chop the vegetables.",
          examples: []
        },
        {
          type: "usage-group",
          title: "SLICE",
          explanation: "Cut food into thin, flat pieces. Examples: slice the bread, slice the tomatoes.",
          examples: []
        },
        {
          type: "usage-group",
          title: "DICE",
          explanation: "Cut food into small cubes.",
          examples: ["Dice the carrots."]
        },
        {
          type: "usage-group",
          title: "GRATE",
          explanation: "Cut food into very small pieces using a grater. Examples: grate the cheese, grated carrot.",
          examples: []
        },
        {
          type: "usage-group",
          title: "MIX",
          explanation: "Combine ingredients.",
          examples: ["Mix the eggs and milk."]
        },
        {
          type: "usage-group",
          title: "STIR",
          explanation: "Move food or liquid around using a spoon.",
          examples: ["Stir the soup slowly."]
        },
        {
          type: "usage-group",
          title: "POUR",
          explanation: "Make liquid flow from one container into another.",
          examples: ["Pour the milk into the glass."]
        },
        {
          type: "usage-group",
          title: "ADD",
          explanation: "Put another ingredient into the food.",
          examples: ["Add some salt."]
        },
        {
          type: "usage-group",
          title: "SERVE",
          explanation: "Put food onto plates or give it to people.",
          examples: ["Serve the soup while it is hot."]
        }
      ]
    },
    {
      id: "kitchen-tools",
      title: "Kitchen Tools",
      blocks: [
        {
          type: "text",
          content: "<strong>KNIFE:</strong> Used for cutting food.<br>Example: Use a sharp knife to chop the onions.<br><br><strong>CUTTING BOARD:</strong> A flat surface used for cutting food.<br><br><strong>PAN:</strong> A shallow metal container used for frying.<br><br><strong>POT:</strong> A deeper container used for boiling food.<br><br><strong>BOWL:</strong> A round container used for holding or mixing food.<br><br><strong>PLATE:</strong> A flat dish used for serving food.<br><br><strong>SPOON:</strong> Used for eating, stirring, or measuring.<br><br><strong>FORK:</strong> Used for eating or holding food.<br><br><strong>SPATULA:</strong> A flat tool used for turning or moving food while cooking.<br><br><strong>WHISK:</strong> A tool used for beating or mixing ingredients.<br><br><strong>GRATER:</strong> A tool used for cutting food into very small pieces.<br><br><strong>OVEN:</strong> A large enclosed appliance used for baking or roasting.<br><br><strong>STOVE:</strong> The appliance or surface used for cooking with heat.<br><br><strong>MICROWAVE:</strong> An appliance used for heating food quickly."
        },
        {
          type: "structure-table",
          headers: ["Tool", "Action"],
          rows: [
            ["Knife", "chop or slice"],
            ["Pot", "boil"],
            ["Pan", "fry"],
            ["Oven", "bake or roast"],
            ["Grater", "grate"],
            ["Bowl", "mix"],
            ["Whisk", "beat or mix"]
          ]
        }
      ]
    },
    {
      id: "tastes-and-flavours",
      title: "Tastes and Flavours",
      blocks: [
        {
          type: "usage-group",
          title: "SWEET",
          explanation: "Examples: cake, chocolate, ripe fruit.",
          examples: ["The mango is very sweet."]
        },
        {
          type: "usage-group",
          title: "SALTY",
          examples: ["The soup is too salty."]
        },
        {
          type: "usage-group",
          title: "SOUR",
          explanation: "Examples: lemon, vinegar, unripe fruit.",
          examples: ["The lemon tastes sour."]
        },
        {
          type: "usage-group",
          title: "BITTER",
          explanation: "Examples: black coffee, some medicines.",
          examples: ["The coffee is too bitter for me."]
        },
        {
          type: "usage-group",
          title: "SPICY",
          explanation: "Containing strong spices that create a hot feeling.",
          examples: ["This curry is very spicy."]
        },
        {
          type: "text",
          heading: "HOT",
          content: "Hot can mean high temperature. Example: The soup is hot.<br><br>Hot can also informally describe spicy food. However, <strong>spicy</strong> is clearer when discussing flavour."
        },
        {
          type: "usage-group",
          title: "MILD",
          explanation: "Not strongly spicy.",
          examples: ["I prefer mild curry."]
        },
        {
          type: "usage-group",
          title: "SAVOURY",
          explanation: "Salty or spicy rather than sweet. Examples: soup, fried rice, sandwiches.",
          examples: ["I prefer savoury snacks."]
        },
        {
          type: "usage-group",
          title: "RICH",
          explanation: "Having a strong, full flavour, often with butter, cream, or chocolate.",
          examples: ["The chocolate cake is rich."]
        },
        {
          type: "usage-group",
          title: "BLAND",
          explanation: "Having very little flavour.",
          examples: ["The soup tastes bland. It needs more seasoning."]
        },
        {
          type: "usage-group",
          title: "DELICIOUS",
          explanation: "Having a very pleasant taste.",
          examples: ["The meal was delicious."]
        },
        {
          type: "note",
          content: "<strong>Taste:</strong> One specific quality, such as sweet, sour, or bitter.<br><strong>Flavour:</strong> The complete experience of how food tastes and smells."
        }
      ]
    },
    {
      id: "food-textures",
      title: "Food Textures",
      blocks: [
        {
          type: "usage-group",
          title: "CRISPY",
          explanation: "Firm and making a light cracking sound when bitten. Examples: crispy chicken, crispy chips.",
          examples: []
        },
        {
          type: "usage-group",
          title: "CRUNCHY",
          explanation: "Firm and making a louder sound when bitten. Examples: crunchy carrots, crunchy biscuits.",
          examples: []
        },
        {
          type: "usage-group",
          title: "SOFT",
          explanation: "Examples: soft bread, soft cheese.",
          examples: []
        },
        {
          type: "usage-group",
          title: "HARD",
          explanation: "Examples: hard candy, hard bread.",
          examples: []
        },
        {
          type: "usage-group",
          title: "CHEWY",
          explanation: "Needing a lot of chewing.",
          examples: ["The meat is too chewy."]
        },
        {
          type: "usage-group",
          title: "CREAMY",
          explanation: "Smooth and containing or resembling cream. Examples: creamy soup, creamy sauce.",
          examples: []
        },
        {
          type: "usage-group",
          title: "SMOOTH",
          explanation: "Even and without lumps.",
          examples: ["Blend the soup until it is smooth."]
        },
        {
          type: "usage-group",
          title: "JUICY",
          explanation: "Containing a lot of juice. Examples: juicy orange, juicy chicken.",
          examples: []
        },
        {
          type: "usage-group",
          title: "DRY",
          explanation: "Having little moisture.",
          examples: ["The cake is too dry."]
        },
        {
          type: "usage-group",
          title: "TENDER",
          explanation: "Soft and easy to cut or chew.",
          examples: ["The beef is tender."]
        },
        {
          type: "note",
          content: "Crispy and crunchy are similar.<br><strong>Crispy</strong> is often lighter and thinner.<br><strong>Crunchy</strong> often describes a firmer, louder texture."
        }
      ]
    },
    {
      id: "portions-and-containers",
      title: "Portions and Containers",
      blocks: [
        {
          type: "text",
          content: "These expressions help us talk about amounts of food and drink."
        },
        {
          type: "pill-list",
          heading: "Phrases:",
          items: [
            "a glass of water",
            "a cup of tea",
            "a bottle of milk",
            "a can of soda",
            "a carton of juice",
            "a bowl of soup",
            "a plate of rice",
            "a slice of bread",
            "a piece of cake",
            "a bar of chocolate",
            "a packet of biscuits",
            "a bag of rice",
            "a kilo of potatoes",
            "a spoonful of sugar"
          ]
        },
        {
          type: "example-block",
          examples: [
            "I drank a glass of water.",
            "She bought a bottle of milk.",
            "He ate two slices of bread.",
            "We ordered a bowl of soup."
          ]
        },
        {
          type: "usage-group",
          title: "PORTION",
          explanation: "The amount of food served to one person.",
          examples: ["The restaurant serves large portions."]
        },
        {
          type: "usage-group",
          title: "SERVING",
          explanation: "An amount of food intended for one person.",
          examples: ["This recipe makes four servings."]
        },
        {
          type: "usage-group",
          title: "LEFTOVERS",
          explanation: "Food remaining after a meal.",
          examples: ["We reheated the leftovers for lunch."]
        }
      ]
    },
    {
      id: "restaurant-language",
      title: "At a Restaurant",
      blocks: [
        {
          type: "usage-group",
          title: "BOOK A TABLE",
          examples: ["I booked a table for four people."]
        },
        {
          type: "usage-group",
          title: "MENU",
          explanation: "A list of food and drinks available.",
          examples: ["Could I see the menu, please?"]
        },
        {
          type: "usage-group",
          title: "ORDER",
          explanation: "Ask for food or drink in a restaurant.",
          examples: ["I would like to order the grilled chicken."]
        },
        {
          type: "usage-group",
          title: "STARTER",
          explanation: "A small dish eaten before the main course.",
          examples: ["We ordered soup as a starter."]
        },
        {
          type: "usage-group",
          title: "MAIN COURSE",
          explanation: "The largest or most important part of a meal.",
          examples: ["I had fish for my main course."]
        },
        {
          type: "usage-group",
          title: "SIDE DISH",
          explanation: "A smaller dish served with the main course. Examples: salad, fries, vegetables.",
          examples: []
        },
        {
          type: "usage-group",
          title: "DESSERT",
          explanation: "A sweet dish eaten after the main course.",
          examples: []
        },
        {
          type: "usage-group",
          title: "BILL",
          explanation: "The document showing how much you must pay.",
          examples: ["Could we have the bill, please?"]
        },
        {
          type: "usage-group",
          title: "TIP",
          explanation: "Extra money given for service.",
          examples: ["They left a tip for the waiter."]
        },
        {
          type: "usage-group",
          title: "TAKEAWAY / TAKEOUT",
          explanation: "Food prepared by a restaurant and eaten somewhere else.<br>Takeaway is common in British English. Takeout is common in American English.",
          examples: []
        },
        {
          type: "pill-list",
          heading: "Useful restaurant expressions:",
          items: [
            "Could I see the menu, please?",
            "I would like to order…",
            "Could I have…?",
            "What do you recommend?",
            "Is this dish spicy?",
            "Does this contain nuts?",
            "Could we have the bill, please?"
          ]
        }
      ]
    },
    {
      id: "important-collocations",
      title: "Important Food Collocations",
      blocks: [
        {
          type: "pill-list",
          heading: "HAVE",
          items: ["have breakfast", "have lunch", "have dinner", "have a snack"]
        },
        {
          type: "pill-list",
          heading: "COOK",
          items: ["cook dinner", "cook rice", "cook a meal", "cook at home"]
        },
        {
          type: "pill-list",
          heading: "MAKE",
          items: ["make breakfast", "make a sandwich", "make soup", "make a cake"]
        },
        {
          type: "pill-list",
          heading: "PREPARE",
          items: ["prepare a meal", "prepare the ingredients", "prepare dinner"]
        },
        {
          type: "pill-list",
          heading: "ORDER",
          items: ["order food", "order a meal", "order dessert", "order takeaway"]
        },
        {
          type: "pill-list",
          heading: "SET",
          items: ["set the table"]
        },
        {
          type: "pill-list",
          heading: "CLEAR",
          items: ["clear the table"]
        },
        {
          type: "pill-list",
          heading: "WASH",
          items: ["wash the vegetables", "wash the dishes"]
        },
        {
          type: "pill-list",
          heading: "SERVE",
          items: ["serve food", "serve dinner", "serve the soup"]
        },
        {
          type: "note",
          content: "<strong>Cook</strong> describes the action of preparing food with heat.<br><strong>Make</strong> is broader and can include preparing food without heat.<br><br>Examples:<br>• cook rice<br>• make a sandwich<br>• make a salad"
        }
      ]
    },
    {
      id: "confusing-words",
      title: "Commonly Confused Words",
      blocks: [
        {
          type: "text",
          heading: "Food vs Meal vs Dish",
          content: "<strong>Food:</strong> Anything people eat.<br><strong>Meal:</strong> Food eaten at a particular time.<br><strong>Dish:</strong> One prepared type of food.<br><br>Examples:<br>• Food is necessary for life.<br>• Breakfast is my favourite meal.<br>• Fried rice is a popular dish."
        },
        {
          type: "text",
          heading: "Cook vs Chef",
          content: "<strong>Cook:</strong> A person who prepares food, especially as a job or at home.<br><strong>Chef:</strong> A professionally trained cook, often working in a restaurant kitchen.<br><br><strong>Cook</strong> is also a verb.<br>Example: I cook dinner every evening."
        },
        {
          type: "text",
          heading: "Cooker vs Cook",
          content: "<strong>Cooker:</strong> An appliance used for cooking.<br><strong>Cook:</strong> A person or the action of preparing food.<br><br>Do not call a person a cooker."
        },
        {
          type: "text",
          heading: "Recipe vs Menu",
          content: "<strong>Recipe:</strong> Instructions for preparing a dish.<br><strong>Menu:</strong> A list of available food and drinks."
        },
        {
          type: "text",
          heading: "Dessert vs Desert",
          content: "<strong>Dessert:</strong> Sweet food after a meal.<br><strong>Desert:</strong> A very dry area of land.<br><br>Memory note: Dessert has two <i>s</i> letters because people may want a second serving."
        },
        {
          type: "text",
          heading: "Taste vs Tasty",
          content: "<strong>Taste:</strong> Can be a noun or verb.<br>Examples:<br>• The soup has a strong taste.<br>• Taste the soup.<br><br><strong>Tasty:</strong> An adjective meaning pleasant to eat.<br>Example: The soup is tasty."
        },
        {
          type: "text",
          heading: "Hungry vs Starving",
          content: "<strong>Hungry:</strong> Needing or wanting food.<br><strong>Starving:</strong> Extremely hungry in informal everyday speech.<br><br>Clarification: Starving can also have a serious literal meaning, so use it carefully."
        },
        {
          type: "text",
          heading: "Spicy vs Hot",
          content: "<strong>Spicy:</strong> Contains strong spices.<br><strong>Hot:</strong> Can mean high temperature or informally spicy.<br><br>Use <strong>spicy</strong> when the meaning needs to be clear."
        }
      ]
    },
    {
      id: "sentence-patterns",
      title: "Useful Sentence Patterns",
      blocks: [
        {
          type: "text",
          heading: "PATTERN 1",
          content: "For breakfast, I have…<br><br>Example: For breakfast, I have eggs and toast."
        },
        {
          type: "text",
          heading: "PATTERN 2",
          content: "My favourite dish is…<br><br>Example: My favourite dish is fried rice."
        },
        {
          type: "text",
          heading: "PATTERN 3",
          content: "It tastes…<br><br>Examples:<br>• It tastes sweet.<br>• It tastes spicy.<br>• It tastes delicious."
        },
        {
          type: "text",
          heading: "PATTERN 4",
          content: "It is…<br><br>Examples:<br>• It is crispy.<br>• It is creamy.<br>• It is too salty."
        },
        {
          type: "text",
          heading: "PATTERN 5",
          content: "First, then, after that, finally.<br><br>Example: First, wash the vegetables. Then, chop them. After that, fry them in a little oil. Finally, serve the dish."
        },
        {
          type: "text",
          heading: "PATTERN 6",
          content: "To make this dish, you need…<br><br>Example: To make this dish, you need rice, chicken, vegetables, and oil."
        },
        {
          type: "text",
          heading: "PATTERN 7",
          content: "I would like to order…<br><br>Example: I would like to order the grilled fish."
        },
        {
          type: "text",
          heading: "PATTERN 8",
          content: "Could I have…?<br><br>Example: Could I have a glass of water?"
        },
        {
          type: "note",
          content: "<strong>Model Description</strong><br><br>My favourite dish is chicken soup. It contains chicken, carrots, potatoes, onions, and garlic. First, the ingredients are washed and chopped. Then, they are boiled in water. The soup tastes savoury and mild, and the vegetables are soft."
        }
      ]
    },
    {
      id: "common-mistakes",
      title: "Common Mistakes",
      blocks: [
        {
          type: "mistake-list",
          mistakes: [
            {
              incorrect: "I eat a breakfast at seven.",
              correct: "I have breakfast at seven.",
              explanation: "Breakfast normally does not need an article when referring to the routine meal."
            },
            {
              incorrect: "She cooks a sandwich.",
              correct: "She makes a sandwich.",
              explanation: "A sandwich is normally prepared rather than cooked with heat."
            },
            {
              incorrect: "Boil the chicken in oil.",
              correct: "Fry the chicken in oil.",
              explanation: "Boil means cook in hot water. Fry means cook in hot oil."
            },
            {
              incorrect: "I cut the cheese with a grater.",
              correct: "I grate the cheese with a grater.",
              explanation: "Use grate for cutting food into very small pieces with a grater."
            },
            {
              incorrect: "The soup is very spice.",
              correct: "The soup is very spicy.",
              explanation: "Spice is a noun. Spicy is the adjective."
            },
            {
              incorrect: "This cake is very deliciously.",
              correct: "This cake is very delicious.",
              explanation: "After is, use the adjective delicious."
            },
            {
              incorrect: "The meat is too much chewy.",
              correct: "The meat is too chewy.",
              explanation: "Use too directly before an adjective."
            },
            {
              incorrect: "I drank a water.",
              correct: "I drank some water. (Or: I drank a glass of water.)",
              explanation: "Water is normally uncountable. Use some or a container phrase."
            },
            {
              incorrect: "I ate two breads.",
              correct: "I ate two slices of bread.",
              explanation: "Bread is normally uncountable. Use a slice of bread."
            },
            {
              incorrect: "The cooker prepared our meal.",
              correct: "The cook prepared our meal.",
              explanation: "A cook is a person. A cooker is an appliance."
            },
            {
              incorrect: "I followed the menu to make the cake.",
              correct: "I followed the recipe to make the cake.",
              explanation: "A recipe gives cooking instructions. A menu lists available food."
            },
            {
              incorrect: "We had ice cream in the desert.",
              correct: "We had ice cream for dessert.",
              explanation: "Dessert is sweet food after a meal. Desert is dry land."
            }
          ]
        }
      ]
    },
    {
      id: "guided-checks",
      title: "Check Your Understanding",
      blocks: [
        {
          type: "guided-check",
          prompt: "What is the difference between food, a meal, and a dish?",
          answer: "<strong>Food</strong> is anything people eat. <strong>A meal</strong> is food eaten at a particular time. <strong>A dish</strong> is one prepared type of food."
        },
        {
          type: "guided-check",
          prompt: "Choose the correct cooking method.\n<br>Cook pasta in hot water.",
          answer: "<strong>boil</strong>"
        },
        {
          type: "guided-check",
          prompt: "Choose the correct verb.\n<br>___ the onion into small pieces.",
          answer: "<strong>chop</strong>"
        },
        {
          type: "guided-check",
          prompt: "What tool do you normally use to fry an egg?",
          answer: "<strong>a pan</strong>"
        },
        {
          type: "guided-check",
          prompt: "Choose the correct word.\n<br>The lemon tastes ___.",
          answer: "<strong>sour</strong>"
        },
        {
          type: "guided-check",
          prompt: "Complete the container phrase.\n<br>A ___ of bread.",
          answer: "<strong>slice</strong>"
        },
        {
          type: "guided-check",
          prompt: "Choose the correct sentence.\n<br>A. I make rice in hot water.\n<br>B. I cook rice in hot water.",
          answer: "<strong>B.</strong> Cook is natural for preparing rice with heat."
        },
        {
          type: "guided-check",
          prompt: "What is the difference between a recipe and a menu?",
          answer: "<strong>A recipe</strong> gives instructions for making a dish. <strong>A menu</strong> lists food and drinks available to order."
        },
        {
          type: "guided-check",
          prompt: "Complete the restaurant request.\n<br>Could I see the ___, please?",
          answer: "<strong>menu</strong>"
        },
        {
          type: "guided-check",
          prompt: "Choose the correct texture.\n<br>Fresh carrots are often ___.",
          answer: "<strong>crunchy</strong>"
        },
        {
          type: "guided-check",
          prompt: "Complete the cooking sequence.\n<br>First, wash the tomatoes. Then, ___ them into thin pieces.",
          answer: "<strong>slice</strong>"
        },
        {
          type: "guided-check",
          prompt: "Choose dessert or desert.\n<br>We had fruit for ___.",
          answer: "<strong>dessert</strong><br>Dessert is sweet food eaten after a meal."
        }
      ]
    },
    {
      id: "summary",
      title: "Lesson Summary",
      blocks: [
        {
          type: "summary-cards",
          cards: [
            {
              title: "Meals",
              useForLabel: "Vocabulary:",
              useFor: ["breakfast", "lunch", "dinner", "snack", "brunch", "dessert"]
            },
            {
              title: "Cooking Methods",
              useForLabel: "Methods:",
              useFor: ["boil", "fry", "bake", "roast", "grill", "steam", "microwave", "toast"]
            },
            {
              title: "Preparation Verbs",
              useForLabel: "Verbs:",
              useFor: ["wash", "peel", "chop", "slice", "dice", "grate", "mix", "stir", "pour", "add", "serve"]
            },
            {
              title: "Tastes",
              useForLabel: "Flavours:",
              useFor: ["sweet", "salty", "sour", "bitter", "spicy", "mild", "savoury", "bland", "delicious"]
            },
            {
              title: "Textures",
              useForLabel: "Textures:",
              useFor: ["crispy", "crunchy", "soft", "chewy", "creamy", "smooth", "juicy", "dry", "tender"]
            },
            {
              title: "Useful Phrases",
              useForLabel: "Phrases:",
              useFor: ["have breakfast", "cook dinner", "make a sandwich", "prepare a meal", "order food", "set the table", "wash the dishes", "a slice of bread", "a bowl of soup", "a glass of water"]
            }
          ]
        },
        {
          type: "note",
          content: "Final reminder:<br>Learn complete phrases and use them to describe real meals, recipes, and restaurant situations."
        }
      ]
    }
  ]
};
