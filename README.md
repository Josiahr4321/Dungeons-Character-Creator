# Dungeons-Character-Creator

## Description

This project can be used as a tool for user who like to create and keep track of any and all characters they may or may not want to use in their future dungeons and dragons campaigns. Users also have access at all times to information to further assist them in understanding and playing dungeons and dragons. 

## Installation

To install this project you must first clone the repository. The user must then start up their local MySQLserver connection and confirm in the .env file that 'DB_PORT' variable  contains the correct port connection code, username, and password for their database to connect properly. After doing so the user can go in to the db folder and copy lines 1-3 in the schema.sql to be pasted into their personal sql database. Doing so will create the dnd_db. In order for the application to work properly the user must open up the main 'Dungeons-Character-Creator' file in the intergrated terminal and enter 'npm i'. Doing so will install all the necessary packages needed for the application to run. Once the packages are installed the user can now enter 'npm start' into the terminal for the application to start running. Once the user is notified the server has been launched they can now open the webpage in the browser, create an account, and begin creating characters.

## Usage

Once the installation proccess has been completed and the user has entered 'npm start' while in the intergrated terminal for the 'Dungeons-Character-Creator' file, the user can now open the application in the browser. The first page the user will land on is the login/signup page. If the user already has an account they can enter the information into the sign in form and click the login button. If it is the first time the user is coming to the page they must create an account. The user can do so by filling out the desired information in to the sign up form and clicking the sign up button. Once the user is signed up and or signed in they will now have access to the homepage where they have access to a form to create characters, display past created characters, and delete past created characaters. In addition to having access to creating, deleting, and displaying characters; the user will also have access to informational links that can help inform the user with everything there is to know about dungeons and dragons. 

## Links

https://github.com/Josiahr4321/Dungeons-Character-Creator
https://nameless-oasis-56785-78698e88b34e.herokuapp.com/
