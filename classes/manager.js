const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email, "Manager");
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    const response = inquirer.prompt({
      type: "input",
      message: "What is the Managers office number?",
      name: "office",
    });
    return response;
  }

  getRole() {
    return { Role: "Manager" };
  }
}

module.exports = Manager;
