
const express=require("express")
const session = require('express-session');
const app=express()
const path=require("path")
const bodyParser=require('body-parser')
const router=require("./routes")
const nocache = require("nocache");
const PORT = process.env.PORT || 3000;






app.use(bodyParser.urlencoded({extented:true}))
app.use(express.json())

app.set("view engine",'ejs')


app.use(nocache());

app.use(express.static(path.join(__dirname,'Assets')))
app.use(session({ secret: 'secret-key', resave: false, saveUninitialized: true ,cookie:{maxAge:60000}}));


app.use('/',router)





app.listen(PORT)































