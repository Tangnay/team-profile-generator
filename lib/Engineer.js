const Employee = require("../lib/Employee");

class Enginner extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }

  getRole() {
    return "Enginner";
  }
}

module.exports = Enginner;
