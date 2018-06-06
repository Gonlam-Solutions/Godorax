# Godorax
Instructions for installation

node.js is required in order to use npm and install and run the aplication.
You can download it here: https://nodejs.org/en/download/

Once you have it you must open from a console the directory OurApp, and install angular/cli and mongosee

npm install -g @angular/cli

npm install mongoose

With this we are set up to run the apllication, now th next step is to build the app

ng build

And after that a directory dist will be created with our application, to make it work and run the connection with the Database we use

node server.js

And then enter to localhost:300 in order to try the app.
