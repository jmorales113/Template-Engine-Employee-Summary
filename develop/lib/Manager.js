const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, title= "Manager", officeNumber = 100) {
        super(name, id, email, title) 
        this.officeNumber = officeNumber
            {
        }
    }
    getOfficeNumber() {
        return this.officeNumber
    }
    getRole() {
        return "Manager"
    }

}

module.exports = Manager
