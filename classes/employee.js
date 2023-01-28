const inquirer = require("inquirer");

class Employee {
  constructor(name, id, email, position) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.position = position;
  }

  async getName() {
    const response = inquirer.prompt({
      type: "input",
      message: `What is the ${this.position}s name?`,
      name: "name",
    });
    return response;
  }

  getId() {
    const response = inquirer.prompt({
      type: "input",
      message: `What is the ${this.position}s id?`,
      name: "id",
    });
    return response;
  }

  getEmail() {
    const response = inquirer.prompt({
      type: "input",
      message: `What is the ${this.position}s email?`,
      name: "email",
    });
    return response;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
