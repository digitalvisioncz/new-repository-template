const fs = require('fs');
const path = require('path');

const templateDir = path.resolve(__dirname, '../templates');
const templates = fs.readdirSync(templateDir);

const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of the project?',
        validate: function (value) {
            if ( value.length > 0 ){
                return true;
            }
            
            return 'Project name must be present';
        }
    },
    {
        type: 'list',
        name: 'template',
        message: 'Please choose a template',
        choices: templates
    }
];

module.exports = questions;
