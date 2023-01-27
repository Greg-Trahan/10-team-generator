const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(gitHub) {
    this.gitHub = gitHub;

    super(name, id, email);
  }

  getGitHub() {
    return inquirer.prompt({
      type: "input",
      message: "What is their GitHub username?",
      name: "gitHub",
    });
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;

// github // GitHub username

// getGithub()

// getRole() // Overridden to return 'Engineer'
