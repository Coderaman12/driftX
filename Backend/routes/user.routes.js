const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const userController = require("../controllers/user.cotroller"); 

router.post('/register',[
    body('email').isEmail().withMessage("Invalid Email Address"),
    body('fullname.firstname').isLength({min:3}).withMessage("First Name is required"),
    body('password').isLength({min:6}).withMessage("Password have minimim 6 characters"),
],
    userController.registerUser)

module.exports = router;