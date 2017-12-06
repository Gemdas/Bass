# Tee Time

## Description
This application serves as a member and administrator portal for a private golf club. This app allows members to view available tee times or book a tee time for the current week. Administrators can access a full roster of users and change their role between 'member' and 'admin' through an interface that syncs directly with the database. Admins are also able to invite new members by sending an email with a link to sign up. 

Login as an administrator at [bassteetime.herokuapp.com](bassteetime.herokuapp.com) and login as 'bassteetime@gmail.com' with password 'teetime' or create a new member profile [here](bassteetime.herokuapp.com/newuser). 

## Technologies Used
-HTML/CSS
-JavaScript
-jQuery
-Handlebars.js
-Boostrap
-Node.js
-Express
-MySQL
-Sequelize
-Passport.js
-Nodemailer

## Setup Instructions
The JavaScript files reference a MySql database called teetime_db, hosted locally. To create a similar database on your machine, please reference the schema.sql and seeds.sql files to see how the database was created. 

1. Clone repo
2. `npm install`
3. `node server.js`
4. Navigate to localhost:8080 to login with credentials 'bassteetime@gmail.com', password 'teetime' or localhost:8080/newuser to create a new member profile
