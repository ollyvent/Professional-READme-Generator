const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "Description",
    message: "Give a brief description of your project",
  },
  {
    type: "input",
    name: "Installation",
    message: "How is this program installed?",
  },
  {
    type: "input",
    name: "Usage",
    message: "How is this program used?",
  },
  {
    type: "input",
    name: "Contribution",
    message: "Github Repo for contribution",
  },
  {
    type: "list",
    name: "Questions",
    message: "how can you be reached for additional questions:",
    choices: ["Email", "Phone", "Linkedin", "Github"],
  },
  {
    type: "checkbox",
    name: "Licence",
    message: "what Licence does your application use:",
    choices: [
      "No Licence",
      "Apache Licence 2.0",
      "GNU General Public Licence v3.0",
      "MIT Licence",
      "BSD 2-Clause 'Simplified' Licence",
      "BSD 3-Clause 'New' or 'Revised' Licence",
      "Boost Software Licence 1.0",
      "Creative Commons Zero v1.0 Universal",
      "Eclipe Public Licence 2.0",
      "GNU Afero General Public Licence v2.0",
      "GNU Lesser General Public Licence v2.1",
      "MozillaPublic Licence 2.0",
      "The Unlicence",
    ],
  },
];



// accept user input and store
inquirer.prompt(questions).then((data) => {
  const fileName = `${data.title.toLowerCase().split(" ").join("")}.md`; // format file name

  // write README file
  fs.writeFile(fileName, JSON.stringify(data), (error) => {
    error ? console.error(error) : console.log("readme created");
  });
});
