const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
        await mongoose.connect("mongodb+srv://sanjeevms28122:358251999191MS@cluster0.kwpz8.mongodb.net/charaaa")
        console.log("MongoDB connection success");
        
    }catch(error){
        console.error("MongoDB connection failed",error.message)
    }
};
module.exports = connectDB

