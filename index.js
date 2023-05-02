const inquirer = require("inquirer");
const db = require("./connection/server");

db.connect(err => {
    if (err) throw err;
    console.log("Emplyee Tracker");
    userPrompt();
});

var userPrompt = () => {
    console.log(`welcome to the employer tracker, What task would you like to perform`);
    inquirer.prompt ([
        {
            type: "list",
            name: "userChoices",
            message: "What operation would you like to use?",
            choices: ["View all departments", 
                "View all roles", 
                "View all employes", 
                "add a department",
                "add a role", 
                "add an employee", 
                "update an employee role"]

        }

    ]).then ((response) => {
        var choice = response.userChoices;
        console.log(response.choices);

        if (choice === "View all departments") {
            db.query("SELECT * FROM department", (err, results) => {
                console.log("displaying all departments");
                console.log(results);
                userPrompt();
            });
        }

        else if (choice === "View all roles") {
            db.query("SELECT roles.id, roles.title, department.names, roles.salary FROM roles JOIN department ON roles.department_id = department.id", (err, results) => {
                //console.log("displaying all roles");
                console.log(results);
                userPrompt();
            });

        }
        
        else if (choice === "View all employes"){
            console.log("displaying all employyes");
            db.query("SELECT employee.id, employee.first_name, employee.last_name, roles.title, roles.salary, department.names FROM employee JOIN roles ON employee.role_id = roles.id JOIN department ON roles.department_id = department.id", (err, results) => {
                //console.log("displaying all roles");
                console.log(results);
                userPrompt();
            });
        }
        
    });
};

