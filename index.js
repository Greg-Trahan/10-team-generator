const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./classes/Manager");
const Engineer = require("./classes/Engineer");
const Intern = require("./classes/Intern");
let memberType = { role: "Intern" };
let ipString = "";

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

async function newEngineer(engineerArray) {
  const engineer = new Engineer();
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

async function newIntern(internArray) {
  const intern = new Intern();
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

function buildHTML(arr, finalString) {
  let key = Object.keys(arr[3]);
  let value = Object.values(arr[3]);
  let keyString = "";
  if (key[0] === "office") {
    keyString = "Office Number";
  } else if (key[0] === "gitHub") {
    keyString = "GitHub Username";
  } else {
    keyString = "School";
  }

  const employeeString = `
<div class="box">
  <div class="title">
    <p>Name: ${arr[0].name}</p>
    <p>Role: ${arr[4].Role}</p>
  </div>
  <div class="details">
    <p>ID: ${arr[1].id}</p>
    <p>Email: ${arr[2].email}</p>
    <p>${keyString}: ${value}</p>
  </div>
</div>

`;
  console.log(employeeString);
  ipString = ipString.concat(employeeString);
  console.log(ipString);
  return ipString;
}

function writeHTML(ipString) {
  const finalString = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Generator</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <header>
      <p>My Team</p>
    </header>
    <div id="displayArea">${ipString}</div>
  </body>
</html>
  `;
  fs.writeFile("index.html", finalString, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

async function start() {
  managerArray = await manager();
  ipString = buildHTML(managerArray, ipString);
  while (memberType.role === "Engineer" || memberType.role === "Intern") {
    memberType = await newMember();
    if (memberType.role === "Engineer") {
      engineerArray = [];
      engineerArray = await newEngineer(engineerArray);
      ipString = buildHTML(engineerArray, ipString);
    } else if (memberType.role === "Intern") {
      internArray = [];
      internArray = await newIntern(internArray);
      ipString = buildHTML(internArray, ipString);
    } else {
      writeHTML(ipString);
    }
  }
}

start();
