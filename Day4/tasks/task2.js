const express=require('express');
const PORT =5000;
const app=express()

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set('view engine','pug')
app.set('viewss','./viewss')

app.get("/",(req,res)=>{
    // res.render("first_view")
    res.render('dashboard');
})

app.get("/login",(req,res)=>{
    // res.render("first_view")
    res.render('login');
})

app.post("/postdata",(req,res)=>{
    const fname=req.body.fname;
    const pass=req.body.pass;
    console.log(fname, pass);
    if(fname==="Shrutika" && pass==="1234"){
        res.send(`Welocome ${fname}`);
    }
    else{
        res.redirect("/")

    }
})
app.listen(PORT,(err)=>{
    if(err) throw err 
    else{
        console.log(`Server is on the ${PORT}`)
    }
}) 
