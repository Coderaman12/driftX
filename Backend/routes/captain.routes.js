const captainController = require("../controllers/captain.controller");
const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const authMiddleware = require('../middlewares/auth.middleware');


router.post('/register',[
    body('email').isEmail().withMessage("Invalid Email Address"),
    body('fullname.firstname').isLength({min:3}).withMessage("First Name is required"),
    body('password').isLength({min:6}).withMessage("Password have minimim 6 characters"),
    body('vehicle.color').isLength({min:3}).withMessage("Color must be atleast 3 characters"),
    body('vehicle.plate').isLength({min:3}).withMessage("Plate must be atleast 3 characters"),
    body('vehicle.capacity').isLength({min:1}).withMessage("Capacity must be atleast 1"),
    body('vehicle.vehicleType').isIn(['car','auto','motorcycle']).withMessage("Invalid Vehicle Type"),

],
    captainController.registerCaptain)

router.post("/login",[
    body('email').isEmail().withMessage("Invalid Email Address"),
    body('password').isLength({min:6}).withMessage("Password have minimim 6 characters"),
],
    captainController.loginCaptain)

router.get('/profile',authMiddleware.authCaptain,captainController.getCaptainProfile);

router.get("/logout",authMiddleware.authCaptain,captainController.logoutCaptain);
module.exports = router;