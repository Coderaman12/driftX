const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const userController = require("../controllers/user.cotroller"); 
const authMiddleware = require('../middlewares/auth.middleware');

// creation of register route 
router.post('/register',[
    body('email').isEmail().withMessage("Invalid Email Address"),
    body('fullname.firstname').isLength({min:3}).withMessage("First Name is required"),
    body('password').isLength({min:6}).withMessage("Password have minimim 6 characters"),
],
    userController.registerUser)


// creation of user login route
router.post("/login",[
    body('email').isEmail().withMessage("Invalid Email Address"),
    body('password').isLength({min:6}).withMessage("Password have minimim 6 characters"),
],
    userController.loginUser)

// create the profile route 
router.get("/profile",authMiddleware.authUser,userController.getUserProfile)
router.get("/logout",authMiddleware.authUser,userController.logoutUser);

module.exports = router;