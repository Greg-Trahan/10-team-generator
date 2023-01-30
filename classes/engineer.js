const inquirer = require("inquirer");

const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email, "Engineer");
    this.gitHub = gitHub;
  }

  getGitHub() {
    const response = inquirer.prompt({
      type: "input",
      message: "What is Engineers GitHub username?",
      name: "gitHub",
    });
    return response;
  }

  getRole() {
    return { Role: "Engineer" };
  }
}

module.exports = Engineer;
