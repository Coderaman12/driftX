--------- Node-Project-Build ----------
1. npm init -y - > package.json create
2.npm i express -> 
3.create app.js -> main app
4.create server.js -> for port running
5.here we have used the dotenv for port runnng
[note- > make changes in package.json in main field to make server run]

----------------- Databse-Connection ----------------------
-1. npm i mongoose
-2.create [db/db.js]
-3.call the function from the db.js to app.js to connect the database

----- User-Model, User-Controllers -----
-1.create [models/user.model.js] -> CREATE Schema and methods for comparing password
-2.packgage 
    -1.bcrypt - to hash the password 
    -2.jwt - to generate token
-3.create [controllers/controllers.js] to write the logic for the models we have created
