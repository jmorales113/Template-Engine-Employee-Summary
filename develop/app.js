const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

const team = []

function manager() {
    inquirer.prompt([

    {
        type: "input",
        message: "Enter the manager's name: ",
        name: "name"
    
    },
    {
        type: "input",
        message: "Enter the manager's ID: ",
        name: "id"

    },
    {
        type: "input",
        message: "Enter the manager's Email: ",
        name: "email"

    },
    {
        type: "input",
        message: "Enter the manager's office number: ",
        name: "officeNumber"

    }
    ​]).then(response => {
        const mgr = new Manager(response.name, response.id, response.email, response.officeNumber)
        team.push(mgr)
        addEmployees()
    })
}

function engineer() {
    inquirer.prompt([

    {
        type: "input",
        message: "Enter the engineer's name: ",
        name: "name"
    
    },
    {
        type: "input",
        message: "Enter the engineer's ID: ",
        name: "id"

    },
    {
        type: "input",
        message: "Enter the engineer's Email: ",
        name: "email"

    },
    {
        type: "input",
        message: "Enter the engineer's GitHub username: ",
        name: "gitHub"

    }
    ​]).then(response => {
      const eng = new Engineer(response.name, response.id, response.email, response.gitHub)
        team.push(eng)
        addEmployees()
    })
}

function intern() {
    inquirer.prompt([

    {
        type: "input",
        message: "Enter the intern's name: ",
        name: "name"
    
    },
    {
        type: "input",
        message: "Enter the intern's ID: ",
        name: "id"

    },
    {
        type: "input",
        message: "Enter the intern's Email: ",
        name: "email"

    },
    {
        type: "input",
        message: "Enter the intern's school: ",
        name: "school"

    }
    ​]).then(response => {
        const int = new Intern(response.name, response.id, response.email, response.school)
        team.push(int)
        addEmployees()
    })
}

function addEmployees() {
    inquirer.prompt([
        
        {
            type: "list",
            message: "Add an employee?",
            name: "employee",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "Team complete."
            ]
        }
    ]).then(response => {
        console.log(response.employee)
        switch(response.employee) {
            case "Manager":
                manager();
                break;
            case "Engineer":
                engineer();
                break;
            case "Intern":
                intern();
                break;
            default:
                console.log(team)
        }
    })
}
addEmployees()
​
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
​
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
​
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
​
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
​
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
