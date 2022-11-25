const express=require('express');
const exphbs=require('express-handlebars');
const PORT=9999;
const app=express();
app.engine('handlebars',exphbs.engine());
var path = require('path');

app.use("/static",express.static(path.join(__dirname,'public')));
app.set('view engine','handlebars');
app.set('views','./views');

app.get("/",(req,res)=> {
    res.render("app");
});
app.listen(PORT,(err)=>{
    if(err)throw err;
    else console.log(`Server work on ${PORT}`)
})
