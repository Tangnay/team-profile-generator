const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("./src/generateHTML");

const output = [];
const questions = [
  {
    type: "input",
    name: "name",
    message: "what is your name?",
  },
  {
    type: "input",
    name: "id",
    message: "what is your ID?",
  },
  {
    type: "input",
    name: "email",
    message: "what is your email?",
  },
  {
    type: "list",
    name: "role",
    message: "what is your role?",
    choices: ["Manager", "Enginner", "Intern"],
  },

  {
    type: "input",
    name: "officeNumber",
    message: "what is your office number?",
    when(answers) {
      return answers.role === "Manager";
    },
  },

  {
    type: "input",
    name: "github",
    message: "what is your github?",
    when(answers) {
      return answers.role === "Enginner";
    },
  },

  {
    type: "input",
    name: "school",
    message: "what is your school?",
    when(answers) {
      return answers.role === "Intern";
    },
  },

  {
    type: "comfirm",
    name: "askAgain",
    message: "do you want to add more members? (Hit enter for YES)",
    default: true,
  },
];

function ask() {
  inquirer.prompt(questions).then((answers) => {
    output.push(answers);
    if (answers.askAgain === true) {
      ask();
    } else {
      writeToFile(output);
    }
  });
}
function writeToFile(data) {
  const content = generateHTML(data);

  fs.writeFile("./dist/index.html", content, (err) => {
    if (err) {
      console.log(err);
    }
  });
}

ask();
