const Employee = require("../classes/Employee");

describe("Employee", () => {
  it("should display employee name", () => {
    const result = new Employee("Greg", 111, "greg@gmail", "Manager").name;
    expect(result).toEqual("Greg");
  });

  it("should display employee id", () => {
    const result = new Employee("Greg", 111, "greg@gmail", "Manager").id;

    expect(result).toEqual(111);
  });

  it("should display employee email", () => {
    const result = new Employee("Greg", 111, "greg@gmail", "Manager").email;
    expect(result).toEqual("greg@gmail");
  });

  it("should display employee position", () => {
    const result = new Employee("Greg", 111, "greg@gmail", "Manager").position;
    expect(result).toEqual("Manager");
  });
});
