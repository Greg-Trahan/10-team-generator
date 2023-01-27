const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./classes/Manager");
const Engineer = require("./classes/Engineer");
const Intern = require("./classes/Intern");
const Employee = require("./classes/employee");

async function start() {
  const employee = new Employee();
  infoArray = [];
  name = await employee.getName();

  console.log(infoArray);
}

start();

// async function manager() {
//   const response = await inquirer.prompt([
//     { type: "input", message: "What is the managers name?", name: "name" },
//     { type: "input", message: "What is thier id?", name: "id" },
//     { type: "input", message: "What is thier email?", name: "email" },
//     {
//       type: "input",
//       message: "What is thier office number?",
//       name: "officeNumber",
//     },
//   ]);
//   console.log(response);
//   return response;
// }
