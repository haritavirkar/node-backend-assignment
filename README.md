# node-backend-assignment
This project is a backend application built with Node.js, featuring admin authentication, CRUD operations, a basic dashboard, and user interaction capabilities. It is deployed on Heroku for easy access and demonstration.

Features
Admin Authentication:
Admin login functionality using JWT.
CRUD Operations:
Create, Read, Update, and Delete items.
Dashboard:
Basic dashboard displaying items and statistics.
User Features:
View list of items.
View detailed information about each item.
Interact with items (e.g., add comments).


Steps to Set Up and Deploy
Clone the Repository:

bash
Copy code
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
Install Dependencies:

bash
Copy code
npm install
Set Up MongoDB:

Ensure MongoDB is installed and running.
Update the MongoDB connection string in server.js if necessary.
Create a Procfile:

plaintext
Copy code
web: node server.js
Deploy to Heroku:

bash
Copy code
heroku login
heroku create your-app-name
git add .
git commit -m "Initial commit"
git push heroku master
Access Instructions
Admin Interface: https://your-app-name.herokuapp.com/admin (Authorization: Bearer admin)
User Interface: https://your-app-name.herokuapp.com/items
