const mongoose = require("mongoose");
const DB=process.env.DATABASE;
mongoose.connect(DB,{
}).then(()=>console.log("DB connected and it is mongoDB")).catch((err)=>console.log("error",err));