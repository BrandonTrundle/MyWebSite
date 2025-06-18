const projectData = {
  "include-checker": {
    title: "C/C++ Include Checker",
    description:
      "This project was developed during my time at BRC Solar in Ettlingen and served as my final project for the IHK certification exam. It was created to assist in analyzing C codebases by identifying unused `#include` statements, detecting circular dependencies, and generating include trees. The tool supports two entry points: one designed for manual use by developers, and another optimized for automated integration within the company’s CI/CD pipeline. Its goal is to enhance code maintainability and reduce build times in embedded systems development.",
    sections: [
      {
        image: "/images/IC1.png",
        what: "This screenshot shows the codebase layout and its structural organization.",
        why: "A clean file structure is essential for clarity and maintainability. It also demonstrates that each module in the application is unit tested.",
        challenges:
          "Developing a reliable parser for C code was complex both technically and organizationally. Staying well-organized was critical to delivering a complete and functional tool within the project scope.",
      },
      {
        image: "/images/IC2.png",
        what: "This is an image of the GUI, intended for developers who prefer manual analysis over automation.",
        why: "Although not initially a requirement, I wanted to give users the option to manually investigate code issues identified by automation — without needing to re-run the pipeline.",
        challenges:
          "I used Tkinter to build this interface — a toolkit I hadn’t worked with before. Learning it while under time constraints was a rewarding challenge.",
      },
      {
        image: "/images/IC3.png",
        what: "This screenshot shows one of the generated reports. It's an 'Include Tree' representing the structure of the scanned project.",
        why: "The development team wanted a visual overview of the file hierarchy to simplify code reviews and identify areas for optimization.",
        challenges:
          "Building the include tree involved a recursive approach that was initially hard to debug. After refining the logic, we achieved accurate and consistent results.",
      },
      {
        image: "/images/IC4.png",
        what: "This is the 'TypeDefs and Defines' report, listing each file’s methods, functions, typedefs, and defines.",
        why: "This report allows developers to understand the internal structure of files at a glance and determine why a file might appear unused — without having to manually inspect the source code.",
        challenges:
          "While creating the include tree, I simultaneously collected symbols into JSON. I had to learn how to efficiently extract and format that data into a readable text report.",
      },
      {
        image: "/images/IC5.png",
        what: "This final report shows which files are safe to remove, and where they're being redundantly included.",
        why: "It provides clear, actionable insights. For example, this report shows that `M800_PLC_Local.h` can safely be removed from `M800_ADC.c`.",
        challenges:
          "One major challenge was accounting for previously overlooked constructs like `typedefs`, which required reworking part of the parser. Time was tight — the entire project had to be completed in 80 hours — but I managed to hit the deadline and earned a great final grade.",
      },
    ],
  },

  "flashcard-app": {
    title: "Flashcard Application",
    description:
      "This is a private project I created while preparing for the AP2 examination. After searching extensively for a flashcard app that suited my needs — both in functionality and cost — I came up empty. Frustrated by the lack of options, I decided to build my own. The application allows users to create custom flashcard decks, track right and wrong answers per topic, and later revisit only the cards answered incorrectly. This feature proved especially helpful for focused revision in areas like business studies (BWL) and German vocabulary.",
    sections: [
      {
        image: "/images/Flash2.png",
        what: "This screenshot shows the project’s file structure and the comprehensive unit test coverage.",
        why: "Clean architecture and thorough testing are important values in my development process. This layout makes the codebase easy to maintain and extend.",
        challenges:
          "I needed to design a system that would let me study efficiently and retain information across a wide range of subjects. Structuring the codebase to support fast iteration and high reusability was key.",
      },
      {
        image: "/images/Flash3.png",
        what: "This is the main menu, offering users multiple configurable options for managing decks and sessions.",
        why: "My goal was to create a flexible, pen-and-paper-style experience in a digital format — something that mimicked how I would naturally study.",
        challenges:
          "Although I was familiar with Tkinter, I chose PyQt5 for its more advanced interface capabilities. Learning a new GUI framework and implementing multi-level menus took some time and experimentation.",
      },
      {
        image: "/images/Flash4.png",
        what: "This interface handles the creation of new flashcards, including topic selection, folder organization, and the input of questions and answers.",
        why: "Creating an intuitive and efficient workflow for adding new content was critical. I wanted it to feel smooth, so users could focus on learning rather than managing cards.",
        challenges:
          "Handling text formatting and field overflow took some trial and error. I needed to ensure that questions and answers displayed correctly within card boundaries — particularly for longer entries.",
      },
      {
        image: "/images/Flash5.png",
        what: "This is the flashcard in action, displaying a question with options to flip for the answer, mark right or wrong, or proceed to the next card.",
        why: "This core feature helped me track my progress, reinforce key concepts, and repeat problem areas — all within a clean and interactive UI.",
        challenges:
          "Instead of using a database, I stored cards and stats in JSON files. This lightweight solution was ideal for my needs, though it required some careful design to ensure flexibility and stability.",
      },
    ],
  },
  "math-game": {
    title: "Rainbow Friends Math Game",
    description:
      "This private project was built to help my 6-year-old practice basic math skills in a fun and engaging way. Inspired by characters from a game he enjoys, I created an educational tool that combines simple arithmetic with colorful visuals and interactive gameplay. It was a great exercise in making learning enjoyable through personalized game development. I also recorded custom voice-overs so that my son — who was still learning to read — could fully interact with the game on his own.",
    sections: [
      {
        image: "/images/RBF2.png",
        what: "This is the main menu of the game. With a little help, my son can load his last saved game, quit, or access the options menu.",
        why: "I love designing menu systems — they're often the first impression a user gets. For my son, the highlight was customizing the mouse cursor to look like his favorite character, which never fails to make him laugh.",
        challenges:
          "Balancing usability and simplicity was key. I tested the interface repeatedly with my son to make sure it felt intuitive, especially for young children.",
      },
      {
        image: "/images/RBF4.png",
        what: "This is the first gameplay scene, where my son practices spelling his name by finding the correct letters on the keyboard.",
        why: "The design encouraged keyboard familiarity and name recognition through repetition and reward — and made learning personal and fun.",
        challenges:
          "This is where I realized my son couldn’t yet read well, so I added voice-overs using my own recordings. It completely changed the way he interacted with the game.",
      },
      {
        image: "/images/RBF5.png",
        what: "In this scene, the game asks how old he is. He has to press the correct number key — reinforcing number recognition and keyboard skills.",
        why: "Adding age-based personalization gave him a sense of ownership and progress. It also provided a natural way to teach number-key associations.",
        challenges:
          "This was my first time integrating PyGame voice-over with dynamic game logic. It pushed me to develop a modular system for scene creation that I reused throughout the project.",
      },
      {
        image: "/images/RBF6.png",
        what: "This is Level 2 — a memory game inspired by Simon Says. The player must recall and repeat a sequence of numbers.",
        why: "This level was designed to improve short-term memory and reinforce basic math patterns through interactive repetition.",
        challenges:
          "Creating and animating randomized sequences, tracking player input, and balancing difficulty for a young learner was complex — but rewarding. I gained a solid understanding of state management within PyGame.",
      },
      {
        image: "/images/RBF7.png",
        what: "This reward screen appears after completing a level. Players earn collectible stickers based on their performance.",
        why: "The sticker system adds positive reinforcement and makes progress feel tangible. My son loved checking which new sticker he unlocked after each round.",
        challenges:
          "Building a save system to persist unlocked rewards across sessions required some planning. I used a simple JSON-based save model, which kept things light while still being effective.",
      },
    ],
  },
  arcanatable: {
    title: "ArcanaTable VTT",
    description:
      "ArcanaTable is a custom-built virtual tabletop (VTT) designed for running immersive TTRPG campaigns. Built from the ground up using the MERN stack and Socket.IO, it enables Game Masters and players to collaborate in real-time — with campaign management tools, battle maps, character sheets, and live chat. This project challenged me across the full development spectrum, from database design and real-time event handling to UI/UX and application architecture.",
    sections: [
      {
        image: "/images/Arcana1.png",
        what: "This is the campaign management dashboard, where GMs can create, view, and manage their active games.",
        why: "Campaigns are the core organizational unit of any TTRPG session. This screen helps keep track of story arcs, players, and key assets.",
        challenges:
          "Handling campaign ownership and player permissions across sessions required careful planning of the data schema and access control.",
      },
      {
        image: "/images/Arcana2.png",
        what: "This is the character management view, where players can create and edit their characters.",
        why: "Player engagement increases when they can actively shape and customize their characters. This tool supports stats, notes, images, and more.",
        challenges:
          "Creating a dynamic character sheet that could flexibly support various RPG systems required a modular data model and a lot of field validation.",
      },
      {
        image: "/images/Arcana3.png",
        what: "This is the interactive battle map, where GMs and players can move tokens, reveal fog-of-war, and draw terrain.",
        why: "Real-time map tools are essential for collaborative storytelling. They help players visualize the action and keep everyone synced.",
        challenges:
          "Building this with real-time updates using Socket.IO introduced a ton of edge cases — like resolving simultaneous token movements and desyncs.",
      },
      {
        image: "/images/Arcana4.png",
        what: "This panel showcases the real-time chat system and dice roller, integrated into the game session.",
        why: "Integrated chat and dice mechanics let players focus on the game without needing external tools.",
        challenges:
          "Synchronizing chat and dice results across all connected clients required a reliable pub-sub model using Socket.IO’s rooms and events.",
      },
      {
        image: "/images/Arcana5.png",
        what: "This is a backend snapshot showing MongoDB document structures used to store campaigns, maps, and character data.",
        why: "Robust data persistence ensures players and GMs can return to their campaigns exactly where they left off.",
        challenges:
          "Designing a nested document structure that supported real-time updates and was still queryable was a big balancing act.",
      },
      {
        image: "/images/Arcana6.png",
        what: "This snippet shows how Socket.IO integrates into the Node backend to manage real-time interactions.",
        why: "Real-time sync is one of ArcanaTable’s standout features. It brings the table to life and enables true collaboration.",
        challenges:
          "Handling connection drops, reconnections, and event ordering was a significant challenge — especially in multiplayer sessions.",
      },
      {
        image: "/images/Arcana7.png",
        what: "This is a look at what’s next: the early foundations of ArcanaTable v2.",
        why: "V2 is being built with scalability, performance, and mobile responsiveness in mind — incorporating everything I learned from v1.",
        challenges:
          "Starting from scratch while keeping backwards compatibility in mind is tough — but it’s a worthwhile challenge for long-term maintainability.",
      },
    ],
  },

  // Add more project entries...
};

export default projectData;
