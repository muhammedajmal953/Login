const express=require("express")
const router=express.Router()

const app=express()

//credentials
const emailDb="ajmal@gmail.com"
const passwordDb="123"

//
const isLoggedIn = (req, res, next) => {
    if (req.session && req.session.user) {
      return next();
    }
    res.redirect('/');
  };



router.get("/",(req,res)=>{
    res.render("index.ejs")
  })
  
router.post('/',(req,res)=>{
    const {email,password}=req.body
    if(email === emailDb&&password===passwordDb){
        req.session.user=email
        res.redirect("/home")
    }else{
        res.send("incorect Username Password <a href='/login'>Try again</a>")
    }

   
    
})

router.get("/home",isLoggedIn,(req,res)=>{
    res.render("home")
})
router.get("/logout",(req,res)=>{
     req.session.destroy(()=>{
         res.redirect("/")
     })
})

module.exports=router