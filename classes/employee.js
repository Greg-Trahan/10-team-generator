const inquirer = require("inquirer");

class Employee {
  constructor(name, id, email, position) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.position = position;
  }

  async getName() {
    const response = await inquirer.prompt({
      type: "input",
      message: `What is the ${this.position}s name?`,
      name: "name",
    });
    this.name = response.name;
    return response;
  }

  async getId() {
    const response = await inquirer.prompt({
      type: "input",
      message: `What is the ${this.position}s id?`,
      name: "id",
    });
    this.id = response.id;
    return response;
  }

  async getEmail() {
    const response = await inquirer.prompt({
      type: "input",
      message: `What is the ${this.position}s email?`,
      name: "email",
    });
    this.email = response.email;
    return response;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
