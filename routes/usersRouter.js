const express = require ("express");
const router = express.Router();
const userModel=require("../models/user.model")

router.get("/",function(req,res){
    res.send("hey this is user page")
})
router.post("/register",async function(req,res){
    try{
        let{fullname,email,password}=req.body;
        //using joy agr koi bhi data nhi aaya to create nhi krne dega kyuki mongodb schema less hota hai to koi bhi value rahe na rhe usse farak nhi padta hai 
        
        let user = await userModel.create({
        fullname,
        password,
        email
    })

    res.send(user)

    }
    catch(err){
        console.log(err.message)
    }
})


module.exports=router;