# Godorax
## Instructions for installation


###### Requirements

node.js is required in order to use npm and install and run the aplication.
You can download it here: https://nodejs.org/en/download/

Once you have it you must open from a console the directory OurApp, and install angular/cli and mongosee using

`npm install -g @angular/cli`

and then

`npm install mongoose`

In order to implements the alerts, we will also need to install the bootstrap for angular using

`npm install --save @ng-bootstrap/ng-bootstrap`

###### Launchin the app

With this we are set up to run the apllication, now th next step is to build the app with

`ng build`

And after that a directory dist will be created with our application, to make it work and run the connection with the Database we use

`node server.js`

And then enter to **localhost:3000** in order to try the app.
