const userModel = require('../models/user.model');
const captainModel = require('../models/captain.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blacklistTokenModel = require('../models/blacklistToken.model');

module.exports.authUser = async (req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if (!token){
        return res.status(401).json({message:"Unauthorized User"});
    }

    const isBlacklisted = await blacklistTokenModel.findOne({token:token});
    if (isBlacklisted){
        return res.status(401).json({message:"Unauthorized User"});
    }

    try{
        const decoder = jwt.verify(token,process.env.JWT_SECRET);
        const user = await userModel.findById(decoder._id);

        req.user = user;
        return next();
    }
    catch(err){
        return res.status(401).json({message:"Unauthorized User"});
    }
}

module.exports.authCaptain = async(req, res, next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if (!token){
        return res.status(401).json({message:"Unauthorized Captain"});
    }

    const isBlacklisted = await blacklistTokenModel.findOne({token:token});
    if (isBlacklisted){
        res.status(401).json({message:"Unauthorized Captain"});
    }

    try{
        const decoder = jwt.verify(token,process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoder._id);

        req.captain = captain;
        return next();  
    }catch(err){
        return res.status(401).json({message:"Unauthorized Captain"});
    }
}