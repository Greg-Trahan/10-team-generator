const Manager = require("../classes/Manager");

describe("Manager", () => {
  it("should display employee name", () => {
    const result = new Manager("Greg", 111, "greg@gmail", 111).officeNumber;
    expect(result).toEqual(111);
  });
});
