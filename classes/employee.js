const inquirer = require("inquirer");
const fs = require("fs");

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  async getName() {
    const response = inquirer.prompt({
      type: "input",
      message: "What is the employees name?",
      name: "name",
    });
    return response;
  }

  getId() {
    const response = inquirer.prompt({
      type: "input",
      message: "What is the employees id?",
      name: "id",
    });
    return response;
  }

  getEmail() {
    const response = inquirer.prompt({
      type: "input",
      message: "What is the employees email?",
      name: "email",
    });
    return response;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;

// The other three classes will extend Employee.
