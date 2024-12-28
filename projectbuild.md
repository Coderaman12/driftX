----- Node-Project-Build -----
1. npm init -y - > package.json create
2.npm i express -> 
3.create app.js -> main app
4.create server.js -> for port running
5.here we have used the dotenv for port runnng
[note- > make changes in package.json in main field to make server run]

----- Databse-Connection -----
1. npm i mongoose
2.create [db/db.js]
3.call the function from the db.js to app.js to connect the database

----- User-Model, User-Controllers -----
1.create [models/user.model.js] -> CREATE Schema and methods for comparing password
2.packgage 
    1.bcrypt - to hash the password 
    2.jwt - to generate token
    3.create [controllers/controllers.js] to write the logic for the models we have created

----- Authentication -----
1.create [routes/user.routes.js]
    Express-Validator - used to check the comming data from front-end is valid or not.
2. In controller we have to write the code for creating a new user 
3.create [services/user.service.js]
    we create this for using the MONGODb service to stored the new user data
4.token generate is taken care here.
5.connect these files to the app.js


----- Login route creation ------
1.[user.routes.js] - create a post route 
    email and password login
2.[user.controllers.js] - create login controllers for finding the user 

----- profile route creation -----
1.[user.routes.js] - create a profile route 
2.[user.controllers.js] - create a controllers here 
3.Auth we have to add in our profile so we have to create the middleware here

--- creation of auth middleware ---
1.[middlewares/auth.middleware.js] create 
    here all necessary file and code should be there to create the auth middleware
2. use this middleware in route directly
3. here a package {cookie-parser} is used 

--- creation of logout route ---
note:- TTL - TIME TO LEAVE
1.[models/blacklistToken.model.js] - create a schema for blacklist token with ttl of 24hrs
2.[routes/user.route.js] - here create the logout route
3.[controllers/user.controllers.js] - create the controllers for logout
4.[middleware/auth.middleware.js] - make changes to update the token 


----- captain/driver  ------
1.[models/captain.model.js] - here create the captain schema and methods
2.[controllers/captain.controller.js] - logics for routes
3.[routs/captain.route.js] - here creating the routes
4. add captain files to the [app.js] to run in the app
5.[services/captain.service.js] - to created the captain services

---- create [captain/register,login,profile,logout] ----
1.same creation user registration creation only
-> same process is there for captain also
