const express = require("express");
const app = express();
const dotenv = require("dotenv");
const authRout = require("./routes/auth");
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    
}).then(console.log("Connected to MongoDB")).catch((err) => console.log(err));

app.use("/api/auth", authRout);

app.listen("5000", ()=>{
    console.log("Backend Is Running")
})