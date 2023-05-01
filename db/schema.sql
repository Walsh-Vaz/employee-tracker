DROP DATABASE IF EXISTS employee_database;
CREATE DATABASE employee_database;

USE employee_database;

CREATE TABLE department(
    id INT PRIMARY KEY NOT NULL, 
    names VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    id INT PRIMARY KEY NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE employee(
    id INT PRIMARY KEY NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT ,
    manager_id INT REFERENCES employee(id),
    FOREIGN KEY (role_id) REFERENCES roles(id)
    ON DELETE SET NULL
);

