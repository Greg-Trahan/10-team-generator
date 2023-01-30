const Engineer = require("../classes/Engineer");

describe("Engineer", () => {
  it("should should display github username", () => {
    const result = new Engineer("Greg", 111, "greg@gmail", "greg-github")
      .gitHub;
    expect(result).toEqual("greg-github");
  });
});
