require("dotenv").config()
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/conn.js")
const PORT =6005;
const session = require("express-session");
const passport = require("passport");

const authStrategy=require("passport-google-oauth20").Strategy

const clientId=process.env.GOOGLE_CLIENT_ID
const secretKey=process.env.SECRET_KEY

app.use(cors({
    origin:"http://localhost:3000/",
    methods:"GET,POST,PUT,DELETE",
    credentials:true
}))

app.use(express.json());

app.use(session({
    secret: "54336778hdgdyftyfxr7r894u",
    resave:false,
    save:true
}))

// app.get("/",(req,res)=>{
//     res.status(200).json("server start")
// })
app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`)
})