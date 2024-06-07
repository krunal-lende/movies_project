const express = require("express");
const mongoose = require("mongoose");
const cors =require("cors");
const port =2024;

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/showbooking");

const schemas = mongoose.Schema({
    username:String ,
    email:String ,
    password:String,
    mob_no:Number
});

const mongo =new mongoose.model("register",schemas);

app.get("/registration/",async(req,res)=>{
    const data = await mongo.find({});
    res.send(data)
});

app.post("/login/",async(req,res)=>{
    const request = req.body;
    try{
        const data = await mongo.findOne({"email":request.email});
   
        if( data.email === request.email && data.password === request.password ){
           // console.log("match")
           res.send({result:"Match"})
       }
       else{
           // console.log("notMatch")
           res.send({result:"notMatch"})
       }
    }
    catch(error){
        res.send({result:"notMatch"})
    }
    
    
});

app.post("/registration/",async(req,res)=>{
    console.log(req.body)
    const data =await mongo.insertMany(req.body)
    res.send(data)
});

app.listen(port,()=>{
    console.log(`server is running on port :-${port}`)
})