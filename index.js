// Packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");
const { reject } = require("lodash");
const { resolve } = require("path/posix");

// Array of questions for user input
const questions = [ {
    type: "input",
    name: "title",
    message: "What is your project title?"
},
{
    type: "input",
    name: "description",
    message: "Enter a description of your project:"
},
{
    type: "input",
    name: "installation",
    message: "Enter installation instructions:"
},
{
    type: "input",
    name: "usage",
    message: "Enter usage information:",
},
{
    type: "input",
    name: "contribution",
    message: "Enter contribution guidelines:",
},
{
    type: "input",
    name: "test",
    message: "Enter test instructions:",
},
{
    type: "list",
    name: "licenses",
    message: "Choose a license:",
    choices: [
        "MIT",
        "Mozilla",
        "Eclipse",
        "Apache"
    ]
},
{
    type: "input",
    name: "name",
    message: "Enter your GitHub username:"
},
{
    type: "input",
    name: "email",
    message: "Enter your email address:"
}
];

// function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }
    
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
    
};

// Creates a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
    .then((answers) => {
        return writeToFile('./dist/README.md', generateMarkdown(answers));
    }).then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    });