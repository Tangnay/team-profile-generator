const Enginner = require("../lib/Engineer");
const Employee = require("../lib/Employee");

describe("Enginner", () => {
  it("should return the github whne the value is given", () => {
    const github = "vandet.pin";
    const enginner = new Enginner("", "", "", github);
    expect(enginner.github).toEqual(github);
    expect(enginner.getGithub()).toEqual(github);
  });

  it("tests getRole", () => {
    const enginner = new Enginner();
    expect(enginner.getRole()).toEqual("Enginner");
  });
});
