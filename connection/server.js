//const express = require("express");
const sql = require("mysql2");


const database = sql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "National123!",
        database: "employee_database"
    },

    console.log("employee_database Connected")
);

//database.connect(err => {
    //if (err) throw err;
    //console.log("Emplyee Tracker");
//});

module.exports = database;
