const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("should return the name when the name is provided", () => {
    const name = "vandet";
    const employee = new Employee(name);
    expect(employee.name).toEqual(name);
    expect(employee.getName()).toEqual(name);
  });

  it("should return the ID when the ID is provided", () => {
    const id = "123";
    const employee = new Employee("", id);
    expect(employee.id).toEqual(id);
    expect(employee.getId()).toEqual(id);
  });

  it("should return the email when the email is provided", () => {
    const email = "vandet.pin@gmail.com";
    const employee = new Employee("", "", email);
    expect(employee.email).toEqual(email);
    expect(employee.getEmail()).toEqual(email);
  });
});
