import inquirer from "inquirer";
import fs from 'fs'

const prompt = inquirer.createPromptModule();

const checkEmpty = function(str) {
  if (str === '') return false;
  return true;
}

const questions = [
  {
    type: 'input',
    name: 'title',
    message: '[required] The title of your project: ',
    validate: checkEmpty
  },
  {
    type: 'input',
    name: 'description',
    message: '[required] Description: ',
    validate: checkEmpty
  },
  {
    type: 'input',
    name: 'install_desc',
    message: 'Installation instructions: ',
    default: 'None'
  },
  {
    type: 'input',
    name: 'usage_desc',
    message: 'Usage instructions: ',
    default: 'None'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Installation instructions: ',
    choices: ['None', 'MIT', 'ELUA'],
    default: 'None'
  },
  {
    type: 'input',
    name: 'contributing_rules',
    message: 'Contributing rules',
    default: 'None'
  },
  {
    type: 'input',
    name: 'test_inst',
    message: 'Test instructions: ',
    default: 'None'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Email address for further questions: ',
    default: 'not provided'
  },
  {
    type: 'input',
    name: 'username',
    message: '[required] Github username for further questions: ',
    validate: checkEmpty
  },
];

