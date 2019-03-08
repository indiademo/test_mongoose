var mongoose = require('mongoose');
var dbConfig = require('./dbConfig');


module.exports= async function(){
    await mongoose.connect(dbConfig.db, { useNewUrlParser: true }, (err,conn)=>{
        if(err){
            console.log("Error in DB connection:", err.message);
        }else{
            console.log("Connected to DB");
        }
    })
    let db = mongoose.Connection;
    return db;
}