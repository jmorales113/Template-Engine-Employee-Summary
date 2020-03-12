// Importing Employee classes
const Employee = require("./Employee")
// Extending Employee class to Intern class

class Intern extends Employee {
    constructor(name, id, email, title = "Intern", school = "UCLA") {
        super(name, id, email, title)
        this.school = school
    }
    getSchool() {
        return this.school
    }
    getRole() {
        return "Intern"
    }
}

module.exports = Intern

