const { urlencoded } = require('express');
const express=require('express');
const fs = require('fs')
const app=express()
const PORT=9999;
app.use(express.json())
app.use(urlencoded({extended:false}))
app.set('view engine','ejs');
app.set('views','./views');
app.get("/",(req,res)=> {
    res.render('home');
});
app.get("/registration",(req,res)=> {
    res.render('register');
});
app.get("/login",(req,res)=> {
    res.render('login');
});
app.post("/postdata",(req,res)=>{
    const email= req.body.email;
    const password=req.body.password;
    const ph_no=req.body.ph_no;
    const city=req.body.city;

    let data=('email'+email+'\npassword'+password+'\nph_no'+ph_no+'\n city'+city);
    if(!fs.existsSync(`./users/${email}`)){
        fs.mkdirSync(`./users/${email}`);
        fs.writeFileSync(`./users/${email}/details.txt`,`${data.toString()}`)
        res.render('register',{successmsg:'User Register Sucessfully',errmsg:''});
    }
        else{
            res.render('register',{errmsg:'User Already Registered'});
         }
})




app.listen(PORT,(err)=>{
    console.log(`server is running on port ${PORT}`);
})