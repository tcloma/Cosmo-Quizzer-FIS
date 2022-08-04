const questions = [
  {
    id: 1,
    content: [
      {
        id: 1,
        prompt:
          "What special prop should always be included for lists of elements?",
        answers: ["id", "name", "key", "prop"],
        correctIndex: 2,
      },
    ]
  },

  {
    id: 2,
    content: [

      {
        id: 1,
        prompt: "A React component is a function that returns ______.",
        answers: ["HTML", "JSX", "props", "state"],
        correctIndex: 1,
      },
      {
        id: 2,
        prompt:
          "Which event handler will run when a user is finished filling out a form?",
        answers: ["onSubmit", "onClick", "onChange", "onForm"],
        correctIndex: 0,
      },
    ]
  },

  {
    id: 3,
    content: [
      {
        id: 1,
        prompt: "______ is a tool that transpiles JSX into valid JavaScript.",
        answers: ["React", "Babel", "Webpack", "ES6"],
        correctIndex: 1,
      },
      {
        id: 2,
        prompt:
          "What syntax makes it possible to unpack values from arrays, or properties from objects, into distinct variables?",
        answers: ["spread", "key-value", "coalescing", "destructuring"],
        correctIndex: 3,
      },
      {
        id: 3,
        prompt:
          "Returning different elements from a component depending on the state of your application is known as _____ rendering.",
        answers: ["voodoo", "conditional", "reactive", "controlled"],
        correctIndex: 1,
      },
    ]
  },

  {
    id: 4,
    content: [
      {
        id: 1,
        prompt:
          "'const App = () => {}' is an example of a ______",
        answers: ["Class component", "HTML component", "Function component", "Arrow component"],
        correctIndex: 2
      },
      {
        id: 2,
        prompt:
          "Which of the following depicts a correct example of Pascal Case?",
        answers: ["pascalCase", "Pascal-Case", "PascalCase", "pascal_case"],
        correctIndex: 2
      },
      {
        id: 3,
        prompt:
          "A controlled form is a form that derives its input value from ______",
        answers: ["state", "forms", "text", "imports"],
        correctIndex: 0
      },
      {
        id: 4,
        prompt:
          "The _______ allows us to control when useEffect will run",
        answers: ["side effect", "callback function", "fetch request", "dependencies array"],
        correctIndex: 3
      },
    ]
  },

  {
    id: 5,
    content: [
      {
        id: 1,
        prompt:
          "What information can be leaked from an embedded image if the source does not support CORS?",
        answers: ["file name", "image binary", "height and width", "nothing"],
        correctIndex: 2
      },
      {
        id: 2,
        prompt:
          "Who does Michael main in smash?",
        answers: ["Inkling", "Roy", "Sheik", "Antonio"],
        correctIndex: 3
      },
      {
        id: 3,
        prompt:
          "Which of the following is the most important: ",
        answers: ["Health and Wellness", "Fashion", "Civil Engineering", "DrillsDrillsDrills"],
        correctIndex: 3
      },
      {
        id: 4,
        prompt:
          "What is the name of the new lecture room?",
        answers: ["Edith Windsor", "Edith Windrazor", "Edith Winsor", "Edeth Winsor"],
        correctIndex: 0
      },
      {
        id: 5,
        prompt:
          "Who is our Zoom lecturer for Phase 2?",
        answers: ["Louis Medina", "Dakota Martinez", "Tomer Harari", "Duncan Uruchima"],
        correctIndex: 1
      },
    ]
  }
]

export default questions;