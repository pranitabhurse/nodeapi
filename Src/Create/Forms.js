

const { UserReg} = require('../Create/Model');
// var bodyParser = require('body-parser')
const express = require('express')

const emailvalidator = require("email-validator");
exports.UserReg = async(req,res)=>{
    // validate request
  
    if(!req.body){
        res.status(400).send({ message : "required all feild"});
        return;
    }
   else if(emailvalidator.validate(req.body.email)){
    try{
        const userExist= await UserReg.findOne({email : req.body.email})
        if(userExist){
             return res.status(422).json({message:"this email is alreay register"})
        }
        else{
            const UserR = new UserReg({  
                name : req.body.name,
                email: req.body.email,
                mobile : req.body.mobile,
                password : req.body.password
            })
        
            // save user in the database
            UserR.save(UserR)
                .then(data => {
                    return res.status(200).json({message:"user register successfully"})
                    // res.send(data)
                    // res.redirect('/add-user');
                })
        }
    }   catch(err) {
                res.status(500).send({
                    message : err.message || "Some error occurred while creating a create operation"
                });
            };
            
  }

  else{
    return res.status(200).json({message:"invalid email"})
}
}






// user Login


exports.UserLogin = async(req,res)=>{
  
    try{
        const { email , password }= req.body;
    if( !email || !password  )
    {
        return res.status(400).json({message :"error please fill all feield"}) 
    }
      const loginData = await UserReg.findOne({email:email});
      if(loginData){
        //   const matchPass = await bcrypt.compare(password , loginData.password)
          if(password!==loginData.password)
          {
      
            return res.status(400).json({message :"invalid details"}) 
    
          }
   
      else{
    //  console.log(loginData); 
     res.send(loginData)
        // return res.status(201).json({message :"user login successfully"}) ;
        
      }
    }
     else {
        return res.status(400).json({message :"invalid details"}) 
     }
      
    }catch(err){
       console.log(err) 
    }
    
}