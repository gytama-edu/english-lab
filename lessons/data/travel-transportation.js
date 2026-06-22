export const lessonData = {
  id: "travel-transportation",
  lab: "vocabulary",
  label: "VOCABULARY LESSON 03",
  level: "Elementary",
  title: "Travel and Transportation",
  description: "Learn practical vocabulary for journeys, public transport, tickets, stations, airports, luggage, and travel information.",
  metaDescription: "Learn practical English vocabulary for travel, transportation, journeys, public transport, stations, airports, tickets, schedules, and luggage.",
  backUrl: "../labs/vocabulary.html",
  practiceUrl: "../activities/multiple-choice.html?id=travel-transportation",
  practiceLabel: "Multiple-Choice Practice",
  fillPracticeUrl: "../activities/fill-in-the-blank.html?id=travel-transportation-fill",
  fillPracticeLabel: "Fill-in-the-Blank Practice",
  practiceText: "Practise recognising and producing useful vocabulary for journeys, public transport, stations, tickets, airports, and luggage.",
  accent: "#4AD8C1",
  objectives: [
    "Learn vocabulary for ways of travelling and public transportation.",
    "Describe getting into and out of vehicles correctly.",
    "Talk about stations, terminals, tickets, and schedules.",
    "Use practical airport and luggage vocabulary.",
    "Ask for travel information naturally."
  ],
  tableOfContents: [
    { id: "ways-to-travel", label: "Ways to Travel" },
    { id: "public-transportation", label: "Public Transportation" },
    { id: "travel-verbs", label: "Travel Verbs" },
    { id: "getting-on-and-off", label: "Getting On and Off" },
    { id: "stations-and-terminals", label: "Stations and Terminals" },
    { id: "tickets-and-schedules", label: "Tickets and Schedules" },
    { id: "airport-vocabulary", label: "Airport Vocabulary" },
    { id: "luggage-and-documents", label: "Luggage and Documents" },
    { id: "trip-journey-travel", label: "Trip, Journey, and Travel" },
    { id: "asking-for-information", label: "Asking for Information" },
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
          content: "Travel vocabulary is easier to remember when we learn complete phrases."
        },
        {
          type: "pill-list",
          heading: "Examples:",
          items: [
            "take the bus",
            "catch a train",
            "miss a flight",
            "buy a ticket",
            "get on the plane",
            "get off the train",
            "arrive at the station",
            "travel by car"
          ]
        },
        {
          type: "note",
          content: "<strong>Key Idea:</strong> Different types of transportation use different verbs and prepositions.<br><br>Examples:<br>• drive a car<br>• ride a bicycle<br>• take a taxi<br>• travel by train<br>• walk to school<br>• fly to another country"
        },
        {
          type: "text",
          heading: "Model",
          content: "I usually take the bus to work. I get on near my house and get off in the city centre. The journey takes about forty minutes."
        }
      ]
    },
    {
      id: "ways-to-travel",
      title: "Ways to Travel",
      blocks: [
        {
          type: "usage-group",
          title: "WALK",
          explanation: "Travel on foot.",
          examples: ["I walk to school because it is near my house."]
        },
        {
          type: "usage-group",
          title: "RIDE A BICYCLE",
          examples: ["She rides her bicycle to the market."]
        },
        {
          type: "usage-group",
          title: "RIDE A MOTORCYCLE",
          examples: ["He rides a motorcycle to work."]
        },
        {
          type: "usage-group",
          title: "DRIVE A CAR",
          examples: ["My father drives a car."]
        },
        {
          type: "usage-group",
          title: "TAKE A BUS",
          examples: ["We take the bus to the city centre."]
        },
        {
          type: "usage-group",
          title: "TAKE A TRAIN",
          examples: ["I take the train to Jakarta."]
        },
        {
          type: "usage-group",
          title: "TAKE A TAXI",
          examples: ["They took a taxi to the airport."]
        },
        {
          type: "usage-group",
          title: "TRAVEL BY PLANE",
          examples: ["We travelled by plane."]
        },
        {
          type: "usage-group",
          title: "FLY",
          examples: ["She is flying to Singapore tomorrow."]
        },
        {
          type: "usage-group",
          title: "TRAVEL BY SHIP",
          examples: ["They travelled between the islands by ship."]
        },
        {
          type: "structure-table",
          headers: ["Transportation", "Natural phrase"],
          rows: [
            ["car", "drive a car"],
            ["bicycle", "ride a bicycle"],
            ["motorcycle", "ride a motorcycle"],
            ["bus", "take a bus"],
            ["train", "take a train"],
            ["taxi", "take a taxi"],
            ["plane", "fly or travel by plane"],
            ["ship", "travel by ship"]
          ]
        },
        {
          type: "note",
          content: "Use <strong>by</strong> without an article when describing the general method.<br><br><strong>Correct:</strong> I travel by train.<br><strong>Incorrect:</strong> I travel by <span style=\"text-decoration: line-through;\">the</span> train.<br><br>But when discussing a specific vehicle, use the article:<br>I took the train at eight."
        }
      ]
    },
    {
      id: "public-transportation",
      title: "Public Transportation",
      blocks: [
        {
          type: "text",
          content: "<strong>Public transportation</strong> is transportation shared by many passengers."
        },
        {
          type: "text",
          content: "<strong>BUS:</strong> A large road vehicle carrying passengers.<br><strong>TRAIN:</strong> A series of connected vehicles travelling on railway tracks.<br><strong>TAXI:</strong> A car with a driver that passengers pay to use.<br><strong>UNDERGROUND / SUBWAY:</strong> A train system that travels mainly below a city.<br><strong>TRAM:</strong> A passenger vehicle travelling on rails through city streets.<br><strong>FERRY:</strong> A boat that carries passengers or vehicles across water.<br><strong>MINIBUS:</strong> A small bus carrying fewer passengers."
        },
        {
          type: "text",
          heading: "British vs American English",
          content: "<strong>Underground</strong> is common in British English.<br><strong>Subway</strong> is common in American English.<br><br><strong>Public transport</strong>: Common British expression.<br><strong>Public transportation</strong>: Common American expression.<br><br>Examples:<br>• Public transport is convenient in this city.<br>• The subway is crowded in the morning.<br>• We took a ferry to the island."
        },
        {
          type: "usage-group",
          title: "FARE",
          explanation: "The money paid for a journey.",
          examples: ["The bus fare is inexpensive."]
        },
        {
          type: "usage-group",
          title: "ROUTE",
          explanation: "The path followed by a bus, train, or other vehicle.",
          examples: ["This bus route goes through the city centre."]
        },
        {
          type: "usage-group",
          title: "PASSENGER",
          explanation: "A person travelling in a vehicle but not driving it.",
          examples: ["The bus can carry fifty passengers."]
        },
        {
          type: "text",
          content: "<strong>DRIVER:</strong> A person who controls a road vehicle."
        }
      ]
    },
    {
      id: "travel-verbs",
      title: "Important Travel Verbs",
      blocks: [
        {
          type: "usage-group",
          title: "TRAVEL",
          explanation: "Go from one place to another.",
          examples: ["I love travelling by train."]
        },
        {
          type: "usage-group",
          title: "LEAVE",
          explanation: "Go away from a place.",
          examples: ["The train leaves at eight."]
        },
        {
          type: "usage-group",
          title: "DEPART",
          explanation: "Leave, especially in formal travel language.",
          examples: ["The flight departs at 9:30."]
        },
        {
          type: "usage-group",
          title: "ARRIVE",
          explanation: "Reach a place.",
          examples: ["We arrived at the station.", "She arrived in Bali yesterday."]
        },
        {
          type: "usage-group",
          title: "CATCH",
          explanation: "Get onto a bus, train, or plane before it leaves.",
          examples: ["catch the bus", "catch a train", "catch a flight", "We need to leave now to catch the train."]
        },
        {
          type: "usage-group",
          title: "MISS",
          explanation: "Fail to catch transportation because it has already left.",
          examples: ["miss the bus", "miss the train", "miss a flight", "He woke up late and missed the bus."]
        },
        {
          type: "usage-group",
          title: "BOARD",
          explanation: "Get onto a plane, ship, bus, or train.",
          examples: ["Passengers are boarding the plane."]
        },
        {
          type: "usage-group",
          title: "BOOK",
          explanation: "Arrange and pay for travel in advance.",
          examples: ["We booked our flight online."]
        },
        {
          type: "usage-group",
          title: "CANCEL",
          explanation: "Decide that a journey or service will not happen.",
          examples: ["The airline cancelled the flight."]
        },
        {
          type: "usage-group",
          title: "DELAY",
          explanation: "Make something happen later than planned.",
          examples: ["Bad weather delayed the flight."]
        },
        {
          type: "usage-group",
          title: "TRANSFER",
          explanation: "Change from one vehicle or route to another.",
          examples: ["We need to transfer to another train."]
        }
      ]
    },
    {
      id: "getting-on-and-off",
      title: "Getting On and Off Vehicles",
      blocks: [
        {
          type: "text",
          heading: "GET ON",
          content: "Use for: buses, trains, planes, ships, bicycles, motorcycles.<br><br>Examples:<br>• get on the bus<br>• get on the train<br>• get on the plane<br><br>Sentence: We got on the bus near the station."
        },
        {
          type: "text",
          heading: "GET OFF",
          content: "Use for leaving: buses, trains, planes, ships, bicycles, motorcycles.<br><br>Example: Get off the train at Central Station."
        },
        {
          type: "text",
          heading: "GET IN",
          content: "Use for entering: cars, taxis.<br><br>Example: She got in the taxi."
        },
        {
          type: "text",
          heading: "GET OUT OF",
          content: "Use for leaving: cars, taxis.<br><br>Example: He got out of the car."
        },
        {
          type: "note",
          content: "<strong>Large or shared transport:</strong> get on, get off<br><strong>Cars and taxis:</strong> get in, get out of"
        },
        {
          type: "text",
          content: "<strong>Correct:</strong> Get on the bus.<br><strong>Incorrect:</strong> Get <span style=\"text-decoration: line-through;\">in</span> the bus.<br><br><strong>Correct:</strong> Get in the car.<br><strong>Incorrect:</strong> Get <span style=\"text-decoration: line-through;\">on</span> the car."
        }
      ]
    },
    {
      id: "stations-and-terminals",
      title: "Stations and Terminals",
      blocks: [
        {
          type: "text",
          content: "<strong>BUS STOP:</strong> A place beside a road where buses stop.<br>Example: The bus stop is across the street.<br><br><strong>BUS STATION:</strong> A larger place where many bus routes begin or end.<br><br><strong>TRAIN STATION:</strong> A place where passengers catch trains.<br><br><strong>PLATFORM:</strong> The area beside the train where passengers wait.<br>Example: The train leaves from Platform 4.<br><br><strong>TERMINAL:</strong> A large station or building used by buses, planes, or ships.<br>Example: Our bus leaves from Terminal 2.<br><br><strong>AIRPORT:</strong> A place where planes arrive and depart.<br><br><strong>GATE:</strong> The area where passengers wait to board a plane.<br>Example: Our flight is boarding at Gate 12.<br><br><strong>TICKET OFFICE:</strong> A place where passengers buy tickets.<br><br><strong>WAITING AREA:</strong> A place where passengers sit before travelling.<br><br><strong>INFORMATION DESK:</strong> A place where travellers ask for help.<br><br><strong>DEPARTURES BOARD:</strong> A screen showing vehicles that are leaving.<br><br><strong>ARRIVALS BOARD:</strong> A screen showing vehicles that are arriving."
        }
      ]
    },
    {
      id: "tickets-and-schedules",
      title: "Tickets and Schedules",
      blocks: [
        {
          type: "text",
          content: "<strong>TICKET:</strong> A document showing permission to travel.<br><br><strong>ONE-WAY TICKET:</strong> A ticket for travelling to a destination without returning.<br>British equivalent: single ticket.<br><br><strong>RETURN TICKET:</strong> A ticket for travelling to a destination and returning.<br>American equivalent: round-trip ticket.<br><br>Examples:<br>• I would like a return ticket to Bandung.<br>• She bought a one-way ticket.<br><br><strong>SCHEDULE / TIMETABLE:</strong> A list showing when transport arrives and leaves.<br><i>Schedule</i> is widely used. <i>Timetable</i> is especially common in British English.<br><br><strong>DEPARTURE TIME:</strong> The time transportation leaves.<br><br><strong>ARRIVAL TIME:</strong> The time transportation reaches its destination.<br><br><strong>DELAY:</strong> A situation where transportation arrives or leaves later than planned.<br>Example: The train has a twenty-minute delay.<br><br><strong>ON TIME:</strong> At the planned time.<br>Example: The bus arrived on time.<br><br><strong>LATE:</strong> After the planned time.<br>Example: The flight was late.<br><br><strong>CANCELLED:</strong> Not operating or happening.<br>Example: Our train was cancelled.<br><br><strong>SEAT:</strong> The place where a passenger sits.<br><br><strong>SEAT NUMBER:</strong> The number identifying a passenger’s seat.<br><br><strong>AISLE SEAT:</strong> A seat beside the passage.<br><br><strong>WINDOW SEAT:</strong> A seat beside the window."
        }
      ]
    },
    {
      id: "airport-vocabulary",
      title: "At the Airport",
      blocks: [
        {
          type: "usage-group",
          title: "CHECK IN",
          explanation: "Register for a flight and receive a boarding pass.",
          examples: ["We checked in online."]
        },
        {
          type: "text",
          content: "<strong>CHECK-IN DESK:</strong> The place where airline staff check passengers and luggage.<br><br><strong>BOARDING PASS:</strong> A document allowing a passenger to board a plane.<br><br><strong>SECURITY:</strong> The area where passengers and bags are checked.<br><br><strong>PASSPORT CONTROL:</strong> The area where travel documents are checked.<br><br><strong>DEPARTURE LOUNGE:</strong> An area where passengers wait before boarding."
        },
        {
          type: "usage-group",
          title: "BOARD",
          explanation: "Get onto the plane.",
          examples: []
        },
        {
          type: "usage-group",
          title: "TAKE OFF",
          explanation: "When a plane leaves the ground.",
          examples: ["The plane took off at ten."]
        },
        {
          type: "usage-group",
          title: "LAND",
          explanation: "When a plane returns to the ground.",
          examples: ["The plane landed safely."]
        },
        {
          type: "text",
          content: "<strong>BAGGAGE CLAIM:</strong> The area where passengers collect checked luggage.<br><br><strong>CUSTOMS:</strong> The area where officials may check goods entering a country."
        },
        {
          type: "text",
          heading: "Airport Sequence",
          content: "Arrive at the airport → Check in → Go through security → Find the gate → Board the plane → Take off → Land → Collect luggage"
        }
      ]
    },
    {
      id: "luggage-and-documents",
      title: "Luggage and Travel Documents",
      blocks: [
        {
          type: "text",
          content: "<strong>LUGGAGE</strong> and <strong>BAGGAGE</strong> both mean bags and suitcases used for travelling.<br><br>Luggage is common in British English.<br>Baggage is common in American English and aviation contexts."
        },
        {
          type: "note",
          isWarning: true,
          content: "Luggage and baggage are normally uncountable.<br><br><strong>Correct:</strong> two pieces of luggage<br><strong>Incorrect:</strong> two <span style=\"text-decoration: line-through;\">luggages</span>"
        },
        {
          type: "text",
          content: "<strong>SUITCASE:</strong> A large travel case for clothes and personal items.<br><br><strong>BACKPACK:</strong> A bag carried on the back.<br><br><strong>HAND LUGGAGE / CARRY-ON BAG:</strong> A small bag taken onto a plane.<br><br><strong>CHECKED LUGGAGE:</strong> Luggage stored in the plane’s luggage area.<br><br><strong>PASSPORT:</strong> An official document used for international travel.<br><br><strong>VISA:</strong> Official permission to enter or stay in some countries.<br><br><strong>BOARDING PASS:</strong> A document showing flight and boarding information.<br><br><strong>ID CARD:</strong> A card proving someone’s identity.<br><br><strong>TRAVEL DOCUMENTS:</strong> A general phrase including passports, visas, tickets, and boarding passes."
        },
        {
          type: "usage-group",
          title: "PACK",
          explanation: "Put clothes and other items into a bag.",
          examples: ["I packed my suitcase last night."]
        },
        {
          type: "usage-group",
          title: "UNPACK",
          explanation: "Remove items from a bag after travelling.",
          examples: ["She unpacked when she arrived home."]
        }
      ]
    },
    {
      id: "trip-journey-travel",
      title: "Trip, Journey, and Travel",
      blocks: [
        {
          type: "usage-group",
          title: "TRIP",
          explanation: "A visit or journey to a place and usually back again.",
          examples: ["a business trip", "a school trip", "a day trip", "We took a trip to Bandung."]
        },
        {
          type: "usage-group",
          title: "JOURNEY",
          explanation: "The process of travelling from one place to another.",
          examples: ["The journey took three hours."]
        },
        {
          type: "usage-group",
          title: "TRAVEL",
          explanation: "The general activity of going from place to place. As a verb: I travel for work.",
          examples: ["Travel is easier with a small bag.", "I travel for work."]
        },
        {
          type: "note",
          content: "<strong>Trip:</strong> The complete visit or experience.<br><strong>Journey:</strong> The movement between places.<br><strong>Travel:</strong> The general activity.<br><br>Examples:<br>• We went on a two-day trip.<br>• The train journey was comfortable.<br>• Air travel can be expensive."
        },
        {
          type: "usage-group",
          title: "TOUR",
          explanation: "A journey visiting several places, often for pleasure.",
          examples: ["We joined a city tour."]
        },
        {
          type: "usage-group",
          title: "HOLIDAY / VACATION",
          explanation: "A period when someone does not work or study and may travel.<br>Holiday is common in British English.<br>Vacation is common in American English.",
          examples: []
        }
      ]
    },
    {
      id: "asking-for-information",
      title: "Asking for Travel Information",
      blocks: [
        {
          type: "pill-list",
          heading: "Useful questions:",
          items: [
            "Where is the nearest bus stop?",
            "Which bus goes to the city centre?",
            "What time does the train leave?",
            "What time does it arrive?",
            "Which platform do I need?",
            "How much is the fare?",
            "Is this seat available?",
            "Does this bus stop at the station?",
            "Where can I buy a ticket?",
            "Is the flight on time?",
            "Has the train been delayed?",
            "Where is Gate 10?",
            "Where is the baggage claim area?"
          ]
        },
        {
          type: "pill-list",
          heading: "Useful responses:",
          items: [
            "It leaves at eight thirty.",
            "It arrives at ten.",
            "Go to Platform 3.",
            "The fare is twenty thousand rupiah.",
            "You need to change trains.",
            "The flight is delayed.",
            "The bus stop is outside the station."
          ]
        },
        {
          type: "pill-list",
          heading: "Polite request forms:",
          items: [
            "Could you help me, please?",
            "Could you tell me which platform I need?",
            "Could I have a return ticket, please?",
            "Excuse me, where is the ticket office?"
          ]
        }
      ]
    },
    {
      id: "important-collocations",
      title: "Important Travel Collocations",
      blocks: [
        {
          type: "pill-list",
          heading: "TAKE",
          items: ["take a bus", "take a train", "take a taxi", "take a flight", "take a trip"]
        },
        {
          type: "pill-list",
          heading: "CATCH",
          items: ["catch a bus", "catch a train", "catch a flight"]
        },
        {
          type: "pill-list",
          heading: "MISS",
          items: ["miss the bus", "miss the train", "miss a flight"]
        },
        {
          type: "pill-list",
          heading: "BOOK",
          items: ["book a ticket", "book a flight", "book a seat", "book online"]
        },
        {
          type: "pill-list",
          heading: "BUY",
          items: ["buy a ticket", "buy a return ticket", "buy a travel card"]
        },
        {
          type: "pill-list",
          heading: "BOARD",
          items: ["board a plane", "board a train", "board a ship"]
        },
        {
          type: "pill-list",
          heading: "PACK",
          items: ["pack a suitcase", "pack light", "pack your bags"]
        },
        {
          type: "pill-list",
          heading: "ARRIVE",
          items: ["arrive at the station", "arrive at the airport", "arrive in Jakarta", "arrive home"]
        },
        {
          type: "pill-list",
          heading: "LEAVE",
          items: ["leave home", "leave the station", "leave for Bali"]
        },
        {
          type: "note",
          content: "Learn the complete phrase, including the correct preposition."
        }
      ]
    },
    {
      id: "confusing-words",
      title: "Commonly Confused Travel Words",
      blocks: [
        {
          type: "text",
          heading: "Take vs Catch",
          content: "<strong>Take:</strong> Use transportation as your method of travel.<br>Example: I take the bus every day.<br><br><strong>Catch:</strong> Get onto transportation before it leaves.<br>Example: I ran to catch the bus."
        },
        {
          type: "text",
          heading: "Miss",
          content: "Fail to catch transportation.<br>Example: I missed the bus."
        },
        {
          type: "text",
          heading: "Arrive at vs Arrive in",
          content: "<strong>Arrive at:</strong> Use with smaller or specific places.<br>Examples: arrive at the station, arrive at the airport, arrive at school.<br><br><strong>Arrive in:</strong> Use with cities, countries, and larger areas.<br>Examples: arrive in Jakarta, arrive in Indonesia, arrive in Europe.<br><br><strong>Note:</strong> Arrive home does not use at or in.<br>Correct: I arrived home at six."
        },
        {
          type: "text",
          heading: "Trip vs Journey",
          content: "<strong>Trip:</strong> The complete visit.<br><strong>Journey:</strong> The travel from one place to another."
        },
        {
          type: "text",
          heading: "Drive vs Ride",
          content: "<strong>Drive:</strong> Control a car, bus, or similar vehicle.<br><strong>Ride:</strong> Travel on a bicycle, motorcycle, horse, or as a passenger in some contexts.<br><br>Examples: drive a car, ride a bicycle, ride a motorcycle."
        },
        {
          type: "text",
          heading: "Fly vs Flight",
          content: "<strong>Fly:</strong> A verb.<br>Example: We fly to Bali tomorrow.<br><br><strong>Flight:</strong> A noun.<br>Example: Our flight leaves at nine."
        },
        {
          type: "text",
          heading: "Station vs Stop",
          content: "A <strong>stop</strong> is normally a smaller place where a bus or tram briefly stops.<br>A <strong>station</strong> is usually a larger transport facility."
        },
        {
          type: "text",
          heading: "Luggage vs Suitcase",
          content: "<strong>Luggage:</strong> All travel bags collectively.<br><strong>Suitcase:</strong> One specific type of travel bag."
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
          content: "I usually travel by…<br>Examples:<br>• I usually travel by train.<br>• I usually travel by motorcycle."
        },
        {
          type: "text",
          heading: "PATTERN 2",
          content: "I take the… to…<br>Example: I take the bus to work."
        },
        {
          type: "text",
          heading: "PATTERN 3",
          content: "The journey takes…<br>Example: The journey takes forty minutes."
        },
        {
          type: "text",
          heading: "PATTERN 4",
          content: "The train leaves at… and arrives at…<br>Example: The train leaves at eight and arrives at ten."
        },
        {
          type: "text",
          heading: "PATTERN 5",
          content: "I need to change…<br>Example: I need to change trains at Central Station."
        },
        {
          type: "text",
          heading: "PATTERN 6",
          content: "I would like a… ticket to…<br>Example: I would like a return ticket to Bandung."
        },
        {
          type: "text",
          heading: "PATTERN 7",
          content: "Which platform does… leave from?<br>Example: Which platform does the train leave from?"
        },
        {
          type: "text",
          heading: "PATTERN 8",
          content: "My flight has been…<br>Examples:<br>• My flight has been delayed.<br>• My flight has been cancelled."
        },
        {
          type: "note",
          content: "<strong>Model travel description</strong><br><br>I usually travel to work by train. I leave home at seven and walk to the station. I catch the 7:30 train from Platform 2. The journey takes about forty minutes, and I arrive at work before nine."
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
              incorrect: "I go to work with bus.",
              correct: "I go to work by bus. (Or: I take the bus to work.)",
              explanation: "Use by + transportation method or take + specific transport."
            },
            {
              incorrect: "She drives a bicycle.",
              correct: "She rides a bicycle.",
              explanation: "Use ride with bicycles and motorcycles."
            },
            {
              incorrect: "We got in the bus.",
              correct: "We got on the bus.",
              explanation: "Use get on with buses, trains, planes, and ships."
            },
            {
              incorrect: "He got off the taxi.",
              correct: "He got out of the taxi.",
              explanation: "Use get out of with cars and taxis."
            },
            {
              incorrect: "I arrived to the airport at six.",
              correct: "I arrived at the airport at six.",
              explanation: "Use arrive at with specific places."
            },
            {
              incorrect: "They arrived at Indonesia yesterday.",
              correct: "They arrived in Indonesia yesterday.",
              explanation: "Use arrive in with countries, cities, and larger areas."
            },
            {
              incorrect: "The train will depart in Platform 4.",
              correct: "The train will depart from Platform 4.",
              explanation: "Use from for the starting point."
            },
            {
              incorrect: "I missed to the bus.",
              correct: "I missed the bus.",
              explanation: "Miss takes a direct object without to."
            },
            {
              incorrect: "I have two luggages.",
              correct: "I have two pieces of luggage.",
              explanation: "Luggage is normally uncountable."
            },
            {
              incorrect: "The journey was three days trip.",
              correct: "The trip lasted three days. (Or: The journey took three days.)",
              explanation: "Trip and journey are used differently."
            },
            {
              incorrect: "Where I can buy a ticket?",
              correct: "Where can I buy a ticket?",
              explanation: "In a direct question, place the modal verb before the subject."
            },
            {
              incorrect: "My fly leaves at nine.",
              correct: "My flight leaves at nine.",
              explanation: "Fly is a verb. Flight is a noun."
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
          prompt: "Choose the natural phrase.\n<br>A. drive a bicycle\n<br>B. ride a bicycle",
          answer: "<strong>B.</strong> Use ride with a bicycle."
        },
        {
          type: "guided-check",
          prompt: "Complete the phrase.\n<br>I ___ the bus to work every morning.",
          answer: "<strong>take</strong><br>Use take a bus for the regular method of travel."
        },
        {
          type: "guided-check",
          prompt: "What is the difference between catch and miss?",
          answer: "<strong>Catch</strong> means get onto transportation before it leaves. <strong>Miss</strong> means fail to catch it."
        },
        {
          type: "guided-check",
          prompt: "Choose the correct preposition.\n<br>We arrived ___ the airport at seven.",
          answer: "<strong>at</strong><br>Use arrive at with a specific place."
        },
        {
          type: "guided-check",
          prompt: "Choose the correct preposition.\n<br>She arrived ___ Singapore yesterday.",
          answer: "<strong>in</strong><br>Use arrive in with cities and countries."
        },
        {
          type: "guided-check",
          prompt: "Complete the sentence.\n<br>The train leaves from ___ 5.",
          answer: "<strong>Platform</strong><br>Passengers wait on a platform beside the train."
        },
        {
          type: "guided-check",
          prompt: "What document allows a passenger to board a plane?",
          answer: "<strong>a boarding pass</strong>"
        },
        {
          type: "guided-check",
          prompt: "Choose the correct expression.\n<br>A. get in the train\n<br>B. get on the train",
          answer: "<strong>B.</strong> Use get on with trains."
        },
        {
          type: "guided-check",
          prompt: "Choose the correct expression.\n<br>A. get out of the taxi\n<br>B. get off the taxi",
          answer: "<strong>A.</strong> Use get out of with cars and taxis."
        },
        {
          type: "guided-check",
          prompt: "What is the difference between a trip and a journey?",
          answer: "<strong>A trip</strong> is the complete visit or experience. <strong>A journey</strong> is the process of travelling between places."
        },
        {
          type: "guided-check",
          prompt: "Complete the ticket request.\n<br>I would like a ___ ticket to Bandung and back.",
          answer: "<strong>return</strong><br>A return ticket includes the journey to the destination and back.<br>Note: Accept round-trip as the American equivalent when appropriate in activity data."
        },
        {
          type: "guided-check",
          prompt: "Correct the sentence.\n<br>I have three luggages.",
          answer: "<strong>I have three pieces of luggage.</strong><br>Luggage is normally uncountable."
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
              title: "Ways to Travel",
              useForLabel: "Vocabulary:",
              useFor: ["walk", "ride a bicycle", "ride a motorcycle", "drive a car", "take a bus", "take a train", "take a taxi", "travel by plane", "travel by ship"]
            },
            {
              title: "Important Verbs",
              useForLabel: "Verbs:",
              useFor: ["travel", "leave", "depart", "arrive", "catch", "miss", "board", "book", "cancel", "delay", "transfer"]
            },
            {
              title: "Vehicle Movement",
              useForLabel: "Phrases:",
              useFor: ["get on", "get off", "get in", "get out of"]
            },
            {
              title: "Places",
              useForLabel: "Vocabulary:",
              useFor: ["bus stop", "station", "platform", "terminal", "airport", "gate", "ticket office", "information desk", "baggage claim"]
            },
            {
              title: "Tickets and Documents",
              useForLabel: "Vocabulary:",
              useFor: ["one-way ticket", "return ticket", "boarding pass", "passport", "visa", "timetable", "seat number"]
            },
            {
              title: "Useful Phrases",
              useForLabel: "Phrases:",
              useFor: ["take the bus", "catch a train", "miss a flight", "arrive at the airport", "arrive in Jakarta", "buy a ticket", "check in", "board the plane", "collect your luggage"]
            }
          ]
        },
        {
          type: "note",
          content: "Final reminder:<br>Learn transportation vocabulary as complete phrases with the correct verb and preposition."
        }
      ]
    }
  ]
};
