const express=require('express')
const exphbs=require('express-handlebars')
const PORT=9999;
const app=express();
app.engine('handlebars',exphbs.engine())
app.set('view engine','handlebars');
app.set('views','./views');
app.use(express.json())
app.use(express.urlencoded({extended:false}))
//routes
const mainRoute=require('./routes/mainRoutes');
const userRoute=require('./routes/userRoutes');
app.use("/",mainRoute);
app.use("/users",userRoute);

app.get('*',(req, res)=>{
    res.status(404).render('notFound')
})

app.listen(PORT,(err)=>{
    if (err)throw err;
    else console.log(`Server work on ${PORT}`)
})