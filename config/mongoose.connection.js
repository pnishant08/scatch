const mongoose=require("mongoose")
const dbgr = require("debug")("development :mongoose");
const config=require("config")

mongoose
.connect(`${config.get("MONGODB_URI")}/scratch`)
.then(function(){
    dbgr("Connected");
})
.catch(function(){
    dbgr(err);
})

module.exports=mongoose.connection;
