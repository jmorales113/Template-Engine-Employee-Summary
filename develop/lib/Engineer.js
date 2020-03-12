// Importing Employee class
const Employee = require("./Employee")
// Extending Employee class to Engineer class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }
    getGithub() {
        return this.github
    }
    getRole() {
        return "Engineer"
    }
}

// Exporting Engineer class

module.exports = Engineer