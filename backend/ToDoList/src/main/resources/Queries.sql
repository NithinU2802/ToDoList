DROP DATABASE todolist;

CREATE DATABASE todolist;

USE todolist;

CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    title VARCHAR(255) NOT NULL,      
    description TEXT,                 
    status ENUM('PENDING', 'COMPLETED') DEFAULT 'PENDING', 
    due_date DATE,   
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
);

INSERT INTO tasks (title, description, status, due_date) VALUES
('Buy groceries', 'Purchase milk, bread, and eggs', 'PENDING', '2025-01-20'),
('Complete project', 'Finish the web development project for work', 'PENDING', '2025-01-25'),
('Call Mom', 'Check in with Mom and update her about home visit', 'COMPLETED', NULL);

SELECT * FROM tasks;
