const Intern = require("../lib/Intern");

describe("Intern", () => {
  it("should return the school when the school is given", () => {
    const school = "UT";
    const intern = new Intern("", "", "", school);
    expect(intern.school).toEqual(school);
    expect(intern.getSchool()).toEqual(school);
  });

  it("test getRole", () => {
    const intern = new Intern();
    expect(intern.getRole()).toEqual("Intern");
  });
});
