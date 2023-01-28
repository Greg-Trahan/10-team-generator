const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.gitHub = gitHub;
  }

  getGitHub() {
    const response = inquirer.prompt({
      type: "input",
      message: "What is their GitHub username?",
      name: "gitHub",
    });
    return response;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
