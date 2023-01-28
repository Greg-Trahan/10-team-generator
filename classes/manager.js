const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    const response = inquirer.prompt({
      type: "input",
      message: "What is their office number?",
      name: "officeNumber",
    });
    return response;
  }

  getRole() {
    return { Role: "Manager" };
  }
}

module.exports = Manager;
