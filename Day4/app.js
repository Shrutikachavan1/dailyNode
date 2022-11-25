const express=require('express');
const PORT=9999;
const app=express();
app.set('view engine','pug');
app.set('views','./views');
// define routes
app.get("/",(req,res)=> {
    res.render("first_view");
})
app.get("/dyanamic",(req,res)=> {
    let courses=["php","nodejs","python","Angular"]
    res.render("dyanamic",{name1:'Shrtuika',age:22, mycourses:courses});
})
app.listen(PORT,(err)=>{
    if(err)throw err;
    else console.log(`Server work on ${PORT}`)
})
