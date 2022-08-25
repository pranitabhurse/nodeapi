


const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true
    },

    gender : String,
    status : String
})

const Userdb = mongoose.model('userdb', schema);



var schemaReg = new mongoose.Schema({
    
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        // validate(value){
        //    if(!validator.isEmail(value)){
        //        throw new error("email is invalid")
        //    }
        // }
    },
    mobile : {
        type: Number,
        required: true    
       
    },
    password : {
        type: String,
        required: true
    },
   
})


const UserReg = mongoose.model('UserReg', schemaReg);



module.exports = {Userdb, UserReg}



