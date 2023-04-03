var mongoose = require('mongoose');
const bcrypt = require('bcrypt');
  const UserSchema = new mongoose.Schema({

    name: {//name oof the products
        type : String,
        required : true, 
    },
    email: {//name oof the products
     type : String,
     required : true, 
 },
 token: {
 type:String
 },
    password: {//quantity avliable 
     type :String,
     required : true,
    }
  });
  UserSchema.pre("save",async function (next) {
  if(!this.isModified('password'))return next();
  this.password =await bcrypt(this.password,12)
  next();
  }) 
  UserSchema.method.correctPassword= async function (candidatePassword,userpassword){
  return await bcrypt(candidatePassword,userpassword);
  }
  
  const User= mongoose.model('User',UserSchema );
  module.exports =User;