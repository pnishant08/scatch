const userModel=require("../models/user.model");
const bcrypt=require("bcrypt");
const jwt = require("jsonwebtoken");
const {generateToken}=require("../utils/generateToken");




module.exports.registerUser=async function(req,res){
    try{
        let{fullname,email,password}=req.body;
        //using joy agr koi bhi data nhi aaya to create nhi krne dega kyuki mongodb schema less hota hai to koi bhi value rahe na rhe usse farak nhi padta hai 
         
        let user=await userModel.findOne({email:email});
        if(user)
            return res.status(401).send("You already have an account , Please login.  ")

        bcrypt.genSalt(10,function(err,salt){
            bcrypt.hash(password,salt,async function(err,hash){
                if(err)return res.send(err.message);
                else {
                     let user = await userModel.create({
                     fullname,
                     password : hash,
                     email
                     });

                 let token = generateToken(user);
                 res.cookie("token",token);
                 res.send("user created successfully");
                }
            })
        })

        
    }
    catch(err){
        console.log(err.message)
    }
}