// Code which defines and exports the Intern class. This class inherits from Employee class.

const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }

    getRole() {
        return "Intern"
    }

    getSchool() {
        return this.school;
    }
};
module.exports = Intern;