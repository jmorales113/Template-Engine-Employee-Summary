// Importing Employee class
const Employee = require("./Employee")
// Extending Employee class to Engineer class
class Engineer extends Employee {
    constructor(name, id, email, title = "Engineer", github = "GitHubUser") {
        super(name, id, email, title)
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