var mongoose = require('mongoose')
let schema = mongoose.Schema;

let userSchema = new schema({
    email:{
        type:String,
        required:true,
        unique:true,
        maxlength:50
    },
    name:{
        type:String,
        required:true
    }
})
const user_schema = mongoose.model('User', userSchema);
module.exports = user_schema;