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
    }]).then(response=>{
        var mgr = new Manager(response.name, response.id, response.email, response.officeNumber)
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
    }]).then(response=>{
        let eng = new Engineer(response.name, response.id, response.email, response.gitHub)
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
}]).then(response=>{
        let int = new Intern(response.name, response.id, response.email, response.school)
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
                fs.writeFile(outputPath, render(team), function(err){
                    if (err) {
                        throw err
                    }
                })
        }
    })
    
}
addEmployees()

