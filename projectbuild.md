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




---- FONTEND PART ----
1.setup for frontend
    1.npm create vite@latest
    2.folder name 
    3.language
    4.go to that folder 
    5.npm i
2.add the tailwindcss in our project
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
3.create tha page folder in the src and all the routes pages
4.add the react-router-dom for routing in our app
    1.npm i react-router-dom
    2.go to main.jsx and wrap the [<App />] in BrowserRouter
    3. In app.jsx use the routes heirarchy for routing
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
5.Now the Ui/UX for each page is going to start
note- only the important things is written here
    1.After Creating the 2-way Binding
    2.Context 
        this is the small version of redux toolkit
        -> used to centralize the data in our react app
        create [src/context/filename] -> write data logic for centralizing

---- Backend and Frontend intergration ----
1.useNavigate for page navigation
2.create a dotenv in frontend for the baseurl save 
3.axios - for sending frontend data to the server 
4.context for use the user data
---- create the Auth for the pages by [UserProtectedWrapper.jsx]
----
    1.create this file 
    2.import the usercontext,UserDataContext,navigate
    3.pass the children
    4.the whole concept is based on the token from local storage -> because if we use the userdetails from the context when refresh is done the data is lost
    5.so forn the [user login and signup sent the token also]
    6.in app.jsx wrap the route which we want to protect.

-- creation of the captain context --
1. create [src/context/captainContext.js]
2. wrap this file to the main jsx 

-- Package for Animation --
1.gsap
2.@gsap/react