INSERT INTO department (id, names) 
VALUES (1, "Human Resources"),
       (2, "Egineering"),
       (3, "Sales"),
       (4, "Technology"),
       (5, "Marketing");

INSERT INTO roles (id, title, salary, department_id)
VALUES (1, "Admim Assisatant", 30.80, 1),
       (2, "Service Tech", 40.50, 4),
       (3, "Chemical Engineer", 50.30, 2),
       (4, "Accountant", 45.00, 5),
       (5, "Sales Representative", 35.00, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "John", "Doe", 1, NULL),
       (2, "Jane", "Doe", 4, NULL),
       (3, "Walsh", "Vaz", 3, NULL),
       (4, "Samantha", "Simmons", 5, NULL),
       (5, "Jill", "Valintine", 2, NULL);
       