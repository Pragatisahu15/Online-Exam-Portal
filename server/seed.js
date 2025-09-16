const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Exam = require("./src/models/Exam");

dotenv.config();

async function seedExams() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    // Clear existing exams
    await Exam.deleteMany({});

    // Insert sample exams
    const exams = [
      {
        title: "HTML Basics",
        description: "Test your knowledge of HTML fundamentals",
        duration: 25,
        questions: [
          {
            questionText: "What does HTML stand for?",
            options: [
              "Hyper Trainer Markup Language",
              "Hyper Text Markup Language",
              "Hyper Text Marketing Language",
              "None"
            ],
            correctAnswer: 1
          },
          {
            questionText: "Which HTML tag is used to define an unordered list?",
            options: ["<ol>", "<ul>", "<li>", "<list>"],
            correctAnswer: 1
          },
          {
            questionText: "Which attribute specifies a unique id for an HTML element?",
            options: ["class", "id", "name", "key"],
            correctAnswer: 1
          },
          {
            questionText: "Which HTML tag is used to display an image?",
            options: ["<image>", "<src>", "<img>", "<pic>"],
            correctAnswer: 2
          },
          {
            questionText: "Which tag is used for the largest heading?",
            options: ["<h1>", "<heading>", "<head>", "<h6>"],
            correctAnswer: 0
          },
          {
            questionText: "Which HTML element defines the title of a document?",
            options: ["<meta>", "<head>", "<title>", "<header>"],
            correctAnswer: 2
          },
          {
            questionText: "Which tag is used to create a hyperlink?",
            options: ["<link>", "<a>", "<href>", "<nav>"],
            correctAnswer: 1
          },
          {
            questionText: "Which input type is used for email?",
            options: ["text", "email", "mail", "input"],
            correctAnswer: 1
          },
          {
            questionText: "Which tag is used to insert a line break?",
            options: ["<break>", "<lb>", "<br>", "<line>"],
            correctAnswer: 2
          },
          {
            questionText: "Which attribute is used to provide alternative text for images?",
            options: ["alt", "title", "src", "name"],
            correctAnswer: 0
          },
          {
            questionText: "Which element is used for a table row?",
            options: ["<td>", "<tr>", "<table>", "<th>"],
            correctAnswer: 1
          },
          {
            questionText: "Which HTML element is used for bold text?",
            options: ["<i>", "<b>", "<strong>", "Both B and C"],
            correctAnswer: 3
          },
          {
            questionText: "Which attribute specifies the language of the document?",
            options: ["lang", "language", "xml:lang", "dir"],
            correctAnswer: 0
          },
          {
            questionText: "Which tag is used to embed a video?",
            options: ["<media>", "<movie>", "<video>", "<embed>"],
            correctAnswer: 2
          },
          {
            questionText: "Which tag creates a drop-down list?",
            options: ["<input>", "<select>", "<option>", "<dropdown>"],
            correctAnswer: 1
          },
          {
            questionText: "What is the default value of the 'target' attribute in <a>?",
            options: ["_blank", "_self", "_parent", "_top"],
            correctAnswer: 1
          },
          {
            questionText: "Which HTML tag is used to define a footer?",
            options: ["<footer>", "<bottom>", "<foot>", "<end>"],
            correctAnswer: 0
          },
          {
            questionText: "Which attribute is used to specify an inline CSS style?",
            options: ["class", "style", "css", "design"],
            correctAnswer: 1
          },
          {
            questionText: "Which element is used to define emphasized text?",
            options: ["<i>", "<em>", "<b>", "<mark>"],
            correctAnswer: 1
          },
          {
            questionText: "Which HTML element is used to define navigation links?",
            options: ["<nav>", "<links>", "<navigate>", "<a>"],
            correctAnswer: 0
          }
        ]
      },
      {
        title: "CSS Basics",
        description: "Test your knowledge of CSS fundamentals",
        duration: 25,
        questions: [
          {
            questionText: "What does CSS stand for?",
            options: [
              "Cascading Style Sheets",
              "Computer Style Sheets",
              "Creative Style System",
              "Colorful Style Sheets"
            ],
            correctAnswer: 0
          },
          {
            questionText: "Which property is used to change text color?",
            options: ["color", "font-color", "text-color", "background-color"],
            correctAnswer: 0
          },
          {
            questionText: "Which property is used to change background color?",
            options: ["bgcolor", "background", "background-color", "color"],
            correctAnswer: 2
          },
          {
            questionText: "Which CSS property controls text size?",
            options: ["font-style", "font-size", "text-size", "size"],
            correctAnswer: 1
          },
          {
            questionText: "How do you select all <p> elements in CSS?",
            options: ["p{}", ".p{}", "#p{}", "*p{}"],
            correctAnswer: 0
          },
          {
            questionText: "Which selector selects elements with a specific id?",
            options: ["#", ".", "*", ":"],
            correctAnswer: 0
          },
          {
            questionText: "Which selector selects elements with a specific class?",
            options: ["#", ".", "*", ":"],
            correctAnswer: 1
          },
          {
            questionText: "How do you make text bold in CSS?",
            options: [
              "font-weight: bold;",
              "text-style: bold;",
              "style: bold;",
              "weight: bold;"
            ],
            correctAnswer: 0
          },
          {
            questionText: "Which property is used to change the font family?",
            options: ["font", "font-family", "text-family", "type"],
            correctAnswer: 1
          },
          {
            questionText: "Which property changes the space between letters?",
            options: ["letter-spacing", "text-spacing", "spacing", "word-spacing"],
            correctAnswer: 0
          },
          {
            questionText: "Which property changes the space between lines?",
            options: ["line-height", "letter-spacing", "spacing", "height"],
            correctAnswer: 0
          },
          {
            questionText: "Which CSS property is used to underline text?",
            options: [
              "text-decoration: underline;",
              "font-decoration: underline;",
              "underline: yes;",
              "text-line: underline;"
            ],
            correctAnswer: 0
          },
          {
            questionText: "Which property is used to change element width?",
            options: ["size", "length", "width", "max-width"],
            correctAnswer: 2
          },
          {
            questionText: "Which property is used to change element height?",
            options: ["height", "max-height", "size", "length"],
            correctAnswer: 0
          },
          {
            questionText: "Which position value positions element relative to parent?",
            options: ["absolute", "fixed", "relative", "static"],
            correctAnswer: 2
          },
          {
            questionText: "Which CSS unit is relative to root element?",
            options: ["em", "px", "rem", "%"],
            correctAnswer: 2
          },
          {
            questionText: "Which property is used for rounded corners?",
            options: ["corner-radius", "border-radius", "radius", "border-style"],
            correctAnswer: 1
          },
          {
            questionText: "Which property sets shadow of text?",
            options: ["text-shadow", "shadow", "font-shadow", "color-shadow"],
            correctAnswer: 0
          },
          {
            questionText: "Which CSS property hides elements?",
            options: [
              "display: none;",
              "visibility: hidden;",
              "opacity: 0;",
              "All of these"
            ],
            correctAnswer: 3
          },
          {
            questionText: "Which property is used for grid layouts?",
            options: ["display: grid;", "grid: on;", "layout: grid;", "position: grid;"],
            correctAnswer: 0
          }
        ]
      },
      {
        title: "JavaScript Basics",
        description: "Test your knowledge of JS fundamentals",
        duration: 25,
        questions: [
          {
            questionText: "Which keyword declares a variable in JavaScript?",
            options: ["var", "let", "const", "All of the above"],
            correctAnswer: 3
          },
          {
            questionText: "What does === check in JS?",
            options: ["Value only", "Type only", "Value and Type", "None"],
            correctAnswer: 2
          },
          {
            questionText: "Which company developed JavaScript?",
            options: ["Microsoft", "Netscape", "Google", "Sun Microsystems"],
            correctAnswer: 1
          },
          {
            questionText: "Which symbol is used for comments in JS?",
            options: ["//", "<!--", "#", "/*"],
            correctAnswer: 0
          },
          {
            questionText: "Which method converts JSON to object?",
            options: ["JSON.stringify()", "JSON.parse()", "parseJSON()", "toJSON()"],
            correctAnswer: 1
          },
          {
            questionText: "Which function displays data in console?",
            options: ["console.log()", "log.console()", "print()", "echo()"],
            correctAnswer: 0
          },
          {
            questionText: "Which operator is used to assign a value?",
            options: ["=", "==", "===", ":"],
            correctAnswer: 0
          },
          {
            questionText: "Which function displays an alert box?",
            options: ["msg()", "popup()", "alert()", "console.log()"],
            correctAnswer: 2
          },
          {
            questionText: "Which method adds an element to array end?",
            options: ["push()", "pop()", "shift()", "unshift()"],
            correctAnswer: 0
          },
          {
            questionText: "Which method removes last element from array?",
            options: ["pop()", "push()", "shift()", "delete()"],
            correctAnswer: 0
          },
          {
            questionText: "Which keyword declares constant variable?",
            options: ["var", "let", "const", "constant"],
            correctAnswer: 2
          },
          {
            questionText: "Which type is NaN?",
            options: ["undefined", "object", "number", "string"],
            correctAnswer: 2
          },
          {
            questionText: "Which loop runs at least once?",
            options: ["for", "while", "do...while", "None"],
            correctAnswer: 2
          },
          {
            questionText: "Which symbol is used for strict equality?",
            options: ["==", "===", "!=", "!=="],
            correctAnswer: 1
          },
          {
            questionText: "Which keyword stops a loop?",
            options: ["exit", "stop", "break", "return"],
            correctAnswer: 2
          },
          {
            questionText: "Which event fires when button clicked?",
            options: ["onhover", "onchange", "onclick", "onpress"],
            correctAnswer: 2
          },
          {
            questionText: "Which function parses integer from string?",
            options: ["parseFloat()", "Number()", "parseInt()", "toString()"],
            correctAnswer: 2
          },
          {
            questionText: "Which method joins array elements into string?",
            options: ["join()", "concat()", "combine()", "attach()"],
            correctAnswer: 0
          },
          {
            questionText: "Which method sorts an array?",
            options: ["order()", "arrange()", "sort()", "sequence()"],
            correctAnswer: 2
          },
          {
            questionText: "Which statement handles exceptions?",
            options: ["catch", "try...catch", "throw", "error"],
            correctAnswer: 1
          }
        ]
      },
      {
        title: "React Basics",
        description: "Check your React.js fundamentals",
        duration: 25,
        questions: [
          {
            questionText: "What hook is used for state in React?",
            options: ["useState", "useEffect", "useContext", "useRef"],
            correctAnswer: 0
          },
          {
            questionText: "JSX stands for?",
            options: [
              "Java Syntax Extension",
              "JavaScript XML",
              "JSON XML",
              "None"
            ],
            correctAnswer: 1
          },
          {
            questionText: "Which company maintains React?",
            options: ["Google", "Facebook", "Microsoft", "Amazon"],
            correctAnswer: 1
          },
          {
            questionText: "Which hook is used for side effects?",
            options: ["useState", "useEffect", "useMemo", "useRef"],
            correctAnswer: 1
          },
          {
            questionText: "What does virtual DOM improve?",
            options: ["Speed", "Memory", "Security", "All of these"],
            correctAnswer: 0
          },
          {
            questionText: "What is default method to render UI in React?",
            options: ["display()", "render()", "view()", "show()"],
            correctAnswer: 1
          },
          {
            questionText: "Which file extension is common for React components?",
            options: [".js", ".jsx", ".ts", ".react"],
            correctAnswer: 1
          },
          {
            questionText: "Which hook is used for context?",
            options: ["useState", "useRef", "useContext", "useEffect"],
            correctAnswer: 2
          },
          {
            questionText: "React is mainly used for?",
            options: [
              "Building databases",
              "Building user interfaces",
              "Building servers",
              "Networking"
            ],
            correctAnswer: 1
          },
          {
            questionText: "Which method is used to update state in class component?",
            options: ["setState()", "updateState()", "changeState()", "this.state"],
            correctAnswer: 0
          },
          {
            questionText: "Which hook optimizes performance by memoizing values?",
            options: ["useMemo", "useEffect", "useRef", "useReducer"],
            correctAnswer: 0
          },
          {
            questionText: "Which lifecycle method runs after first render?",
            options: ["componentDidMount", "componentWillMount", "render", "constructor"],
            correctAnswer: 0
          },
          {
            questionText: "React components should return?",
            options: ["JSX", "HTML", "Objects", "Functions"],
            correctAnswer: 0
          },
          {
            questionText: "Which command creates new React app?",
            options: [
              "npm create react-app",
              "npx create-react-app",
              "react new app",
              "npm init react"
            ],
            correctAnswer: 1
          },
          {
            questionText: "Which hook is used for reducers?",
            options: ["useReducer", "useMemo", "useEffect", "useState"],
            correctAnswer: 0
          },
          {
            questionText: "Which library is used for routing in React?",
            options: [
              "React Router",
              "Next.js",
              "Express",
              "Route.js"
            ],
            correctAnswer: 0
          },
          {
            questionText: "Which hook stores mutable values?",
            options: ["useEffect", "useState", "useRef", "useMemo"],
            correctAnswer: 2
          },
          {
            questionText: "Which function is used to render React element into DOM?",
            options: ["ReactDOM.show()", "ReactDOM.render()", "render()", "DOM.render()"],
            correctAnswer: 1
          },
          {
            questionText: "What does lifting state up mean?",
            options: [
              "Moving state to common parent",
              "Moving state to child",
              "Deleting state",
              "Copying state"
            ],
            correctAnswer: 0
          },
          {
            questionText: "React follows which architecture?",
            options: ["MVC", "Flux", "MVVM", "None"],
            correctAnswer: 1
          }
        ]
      }
    ];

    await Exam.insertMany(exams);
    console.log("✅ Exams seeded successfully!");
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding exams", err);
    process.exit(1);
  }
}

seedExams();
