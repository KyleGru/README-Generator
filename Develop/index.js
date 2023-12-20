// Packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        validate: titleInput => titleInput ? true : 'Title is required!',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'githubUsername',
        validate: githubInput => githubInput ? true : 'Username is required!',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: emailInput => emailInput ? true : 'Email is required!',
    },
    {
        type: 'input',
        message: 'What problem will your project solve?',
        name: 'what',
        validate: whatInput => whatInput ? true : 'Description of what your project will solve is required!',
    },
    {
        type: 'input',
        message: 'Why did you build this project?',
        name: 'why',
        validate: whyInput => whyInput ? true : 'A reason for building this project is required!',
    },
    {
        type: 'input',
        message: 'What did you learn in building this project?',
        name: 'learn',
        validate: learnInput => learnInput ? true : 'What you learned is required!',
    },
    {
        type: 'input',
        message: 'How will someone use this project?',
        name: 'how',
        validate: howInput => howInput ? true : 'How this project is used is required!',
    },
    {
        type: 'input',
        message: 'Provide installation instructions for this project.',
        name: 'installation',
        validate: installInput => installInput ? true : 'Installation instructions are required!',
    },
    {
        type: 'list',
        message: 'What license would you like to use for your project?',
        name: 'license',
        choices: ['agpl', 'apache', 'MIT', 'no license']
    },
    {
        type: 'confirm',
        message: 'Would you like to let other developers contribute to you project?',
        name: 'confirmContributers',
        default: true
    },
    {
        type: 'input',
        message: 'Provide information on how to contribute.',
        name: 'contribute',
        when: ({confirmContributers}) => confirmContributers,
        validate: contributerInput => contributerInput ? true : 'Information on contributing is required!'
    },
    {
        type: 'input',
        message: 'How can this app be tested?',
        name: 'test',
        validate: testInput => testInput ? true : 'Test instructions are required!',
    }
];

// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./generated-README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok:true,
                message: 'File successfully created!'
            })
        })
    })
}

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions)
    .then(readmeData => {
        return readmeData;
    })
}

// Function call to initialize app
init()

.then(readmeData => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
})
.then(pageMD => {
    return writeFile(pageMD);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
.catch(err => {
    console.log(err);
})
