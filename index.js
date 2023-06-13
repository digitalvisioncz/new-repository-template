#!/usr/bin/env node

const fs = require('fs');
const fsPromises = require('fs/promises');
const path = require('path');
const inquirer = require('inquirer');
const successConsole = require('./helpers/successConsole');
const gitInit = require('./helpers/gitInit');
const questions = require('./configs/promptQuestions');

const currentDir = process.cwd();
const templateDir = path.resolve(__dirname, './templates');

inquirer.prompt(questions)
    .then(async (answers) => {
        try {
            const projectName = answers.projectName;
            const templateName = answers.template;

            const projectDir = path.resolve(currentDir, projectName);
            fs.mkdirSync(projectDir, { recursive: true });
          
            const chosenTemplateDir = path.resolve(templateDir, templateName);
            fs.cpSync(chosenTemplateDir, projectDir, { recursive: true });

            fs.renameSync(
              path.join(projectDir, 'gitignore'),
              path.join(projectDir, '.gitignore')
            );

            const data = await fsPromises.readFile(path.join(projectDir, 'package.json'), 'utf8');

            const result = data.replace(/"name": ".*"/g, '\"name\": \"' + projectName + '\"');

            await fsPromises.writeFile(path.join(projectDir, 'package.json'), result, 'utf8');

            await gitInit(projectDir);
            
            successConsole(projectName);
        } catch (error) {
            console.error("An error occurred while creating the project:", error);
        }
})
.catch((error) => {
    console.error("An error occurred while answering the questions:", error);
});
