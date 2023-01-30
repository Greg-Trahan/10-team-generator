const Intern = require("../classes/Intern");

describe("Intern", () => {
  it("should display employee name", () => {
    const result = new Intern("Greg", 111, "greg@gmail", "mySchool").school;
    expect(result).toEqual("mySchool");
  });
});
