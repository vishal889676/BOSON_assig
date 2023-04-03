const express =require('express');
const app = express();
const mongoose=require('./config/mongoose.js');
app.use(express.json())//parsing incomming json data from postman
app.use(express.urlencoded({ extended: false }));//parse data
const port = process.env.PORT || 27017;
const router=require('./router/index');
app.set("view engine", "ejs");//setup for view engine
app.set("views", "./views");//giving location from view
app.use('/',async (req, res,next) => {
  try{
    const user=await User.find(req.bodt.email);
    if(!user.token){
      res.redirect('login')
    }
    next();
   }catch(e){
    console.log(e)
    return;
   }
})
app.use("/", router);//diversing our req
app.listen(port, function (err) {
 if (err) {
   console.log("find some err while connecting to server");
   return;
 }
 console.log(`Server running successfully`);
});