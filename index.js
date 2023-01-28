const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./classes/Manager");
const Engineer = require("./classes/Engineer");
const Intern = require("./classes/Intern");
let memberType = { role: "Intern" };
let finalString = "";

async function manager() {
  const manager = new Manager();
  const managerArray = [];
  managerName = await manager.getName();
  managerId = await manager.getId();
  managerEmail = await manager.getEmail();
  managerOffice = await manager.getOfficeNumber();
  managerRole = manager.getRole();
  managerArray.push(
    managerName,
    managerId,
    managerEmail,
    managerOffice,
    managerRole
  );
  return managerArray;
}

async function newEngineer() {
  const engineer = new Engineer();
  const engineerArray = [];
  engineerName = await engineer.getName();
  engineerId = await engineer.getId();
  engineerEmail = await engineer.getEmail();
  engineerGitHub = await engineer.getGitHub();
  engineerRole = engineer.getRole();
  engineerArray.push(
    engineerName,
    engineerId,
    engineerEmail,
    engineerGitHub,
    engineerRole
  );
  return engineerArray;
}

async function newIntern() {
  const intern = new Intern();
  const internArray = [];
  internName = await intern.getName();
  internId = await intern.getId();
  internEmail = await intern.getEmail();
  internSchool = await intern.getSchool();
  internRole = intern.getRole();
  internArray.push(internName, internId, internEmail, internSchool, internRole);
  return internArray;
}

async function newMember() {
  memberType = await inquirer.prompt({
    type: "list",
    message: "What kind of team member would you like to add?",
    choices: [
      "Engineer",
      "Intern",
      "I don't want to add any more team members",
    ],
    name: "role",
  });
  return memberType;
}

async function start() {
  managerArray = await manager();
  console.log(memberType.role);
  while (memberType.role === "Engineer" || memberType.role === "Intern") {
    memberType = await newMember();
    if (memberType.role === "Engineer") {
      engineerArray = [];
      engineerArray = await newEngineer();
    } else if (memberType.role === "Intern") {
      internArray = [];
      internArray = await newIntern();
    } else {
      //
    }
  }
}

start();
