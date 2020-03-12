class Employee {
    //Constructor Properties
    constructor(name, id, email, title = "Employee"){
        this.name = name
        this.id = id
        this.email = email
        this.title = title
    }
    //Methods

    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getTitle() {
        return this.title
    }
    getRole() {
        return "Employee"
    }
}

// Exporting class Employee

module.exports = Employee