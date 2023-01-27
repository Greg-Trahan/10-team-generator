const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./Employee");

class Intern extends Employee {
  constructor(school) {
    this.school = school;

    super(name, id, email);
  }

  getSchool() {
    return inquirer.prompt({
      type: "input",
      message: "What is the name of thier school?",
      name: "school",
    });
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;

// school

// getSchool()

// getRole() // Overridden to return 'Intern'
