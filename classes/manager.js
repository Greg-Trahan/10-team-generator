const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./Employee");

class Manager extends Employee {
  constructor(officeNumber) {
    this.officeNumber = officeNumber;

    super(name, id, email);
  }

  getOfficeNumber() {
    return inquirer.prompt({
      type: "input",
      message: "What is their office number?",
      name: "officeNumber",
    });
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
// officeNumber

// getRole() // Overridden to return 'Manager'
