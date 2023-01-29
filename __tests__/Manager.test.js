const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");


describe("Manager", () => {
  it("should return the office number when the office number is given", () => {
    const officeNumber = "456";
    const manager = new Manager("", "", "",officeNumber);
    expect(manager.officeNumber).toEqual(officeNumber);
  });

  it(" tests getRole", () => {
    const manager = new Manager();
    expect(manager.getRole()).toEqual("Manager");
  });
});
