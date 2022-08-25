const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        // mongodb connection string
        mongoose.connect("mongodb+srv://pranitaarenaitech:P12345678@cluster0.tvipq.mongodb.net/Users?retryWrites=true&w=majority",{
    
        })
       
        console.log(`MongoDB connected : connection successful`);
    }catch(err){
        console.log(err);
       
    }
}

module.exports = connectDB