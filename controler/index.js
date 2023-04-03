const User= require("../model/user");
//for creating and saving products in database
const jwt=require("jwt")
module.exports.create = async(req, res)=>{
 console.log(req.body)
  //product.save();
  try{
   const user=new User(req.body);
   await user.save();
   const alluser=await User.find(req.body.email);
   res.render('dashbord',{
    user: alluser
   });
  }catch(e){
   console.log(e)
   return;
  }
};
module.exports.login = async(req, res)=>{
  const {password,repeatPassword}=req.body;
  if(password!=repeatPassword)return new Error("Invalid password")
  const user=await User.findOne(req.body.email);
  const correct=user.correctPassword(password,user.password);
  if(!user||!correct)return new Error("Invalid user or password")
  const token=sinInToken(user._id);
  user.token=token;

 res.render('dashbord');
}
module.exports.dashboard = async(req, res)=>{
 try{
  const user=await User.find(req.body.email);
  res.render('dashbord',{
   user: user
  });
 }catch(e){
  console.log(e)
  return;
 }
}

module.exports.addUser = async(req, res)=>{
 try{
  const user=new User(req.body);
  await user.save();
  const findAlluser=await User.find(req.body.email);
  return res.render('dashbord',{
   user: findAlluser
  });
 }catch(e){
  console.log(e)
  return;
 }
}
module.exports.removeUser = async(req, res)=>{
 try{
  const id=req.params.id;
  const user=await User.findByIdAndDelete({id});
  const finduser=await User.find({});
  return res.render('dashbord',{
   user: finduser
  });
 }catch(e){
  console.log(e)
  return;
 }
}
module.exports.editUser = async(req, res)=>{
 try{
  const user=await User.find();

 }catch(e){
  console.log(e)
  return;
 }
 res.render('dashbord');
}
module.exports.update_user= async(req, res)=>{
 try{
  const user=new User(req.body);
  await user.save();
  const findAlluser=await User.find({});
  return res.render('dashbord',{
   user: findAlluser
  });
 }catch(e){
  console.log(e)
  return;
 }
}
module.exports.sinInToken=id=>{
  return jwt.sign({id:newUser._id},"hiii i am vishal")
}
