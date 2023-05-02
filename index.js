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
                //console.log("displaying all departments");
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

        else if (choice === "add a department") {
            inquirer.prompt([{
                type: "input",
                name: "departmentName",
                message: "please add a department name"
            },
            {
                type: "input",
                name: "departmentId",
                message: "please enter the id"
            }]).then((result) => {
                var dpName = result.departmentName;
                var dpId = result.departmentId;
                var values = [dpId, dpName];
                
                db.query("INSERT INTO department (id, names) VALUES (?, ?)", values, (err, results) => {
                    console.log("added a department");
                    console.log(results);
                    userPrompt();
                });

            })
        }
        
        else if (choice === "add a role") {
            inquirer.prompt([{
                type: "input",
                name: "Title",
                message: "please add a Title"
            },
            {
                type: "input",
                name: "departmentId",
                message: "please enter the id"
            },
            {
                type: "input",
                name: "salary",
                message: "please enter the salary"
            },
            {
                type: "input",
                name: "roleId",
                message: "please enter the role id"
            }]).then((result) => {
                var roleTitle = result.Title;
                var roleSalary = result.salary;
                var id = result.roleId;
                var dpId = result.departmentId;
                var values = [id, roleTitle, roleSalary, dpId];
                
                db.query("INSERT INTO roles (id, title, salary, department_id) VALUES (?, ?, ?, ?)", values, (err, results) => {
                    console.log("added a role");
                    console.log(results);
                    userPrompt();
                });

            })
        }     
    });
};

