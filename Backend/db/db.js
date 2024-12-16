const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect(process.env.MONGO_PORT).then(()=>{
        console.log("Database Connected Successfully");
    }).catch(err => console.log(err));
} 

module.exports = connectDB;