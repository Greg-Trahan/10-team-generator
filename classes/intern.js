const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    const response = inquirer.prompt({
      type: "input",
      message: "What is the name of thier school?",
      name: "school",
    });
    return response;
  }

  getRole() {
    return { Role: "Intern" };
  }
}

module.exports = Intern;
