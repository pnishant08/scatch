const express = require ("express");
const router = express.Router();

router.get("/",function(req,res){
    res.send("hey this is owner page")
})

module.exports=router;