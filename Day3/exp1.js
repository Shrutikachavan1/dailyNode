const econst express= require('express');
const PORT=7788;
const app=express();
// const jsonCheck=require('./middleware/jsonmid')
const jsonCheck = require('./jsonmid')

app.use(express.json());
app.use(express.urlencoded({extended:false}));
const xyz=(req,res,next)=>{

}
app.use(xyz)
app.get("/",(req,res)=>{
   // res.send('welcome to express');
res.sendFile(__dirname+'/index.html');

})
app.post("/postdata",(req,res)=>{
    const fname = req.body.fname;
    const lname = req.body.lname;
    console.log(fname);
    console.log(lname);


    res.send("your name is "+ fname +" "  + lname);
    
})
app.post("/prodata",jsonCheck(),(req,res)=>{
    let id=req.body.pid;
    let pname=req.body.pname;
    let price=req.body.price;
    let data ={id:id,pname:pname,price:price}
    res.status(200).json({err:0,prodata:data})
})
app.put("/updatedata",(req,res)=>{
    res.send("Put Request");
})
app.delete("/deletedata",(req,res)=>{
    res.send("Delete Request");
})
app.listen(PORT,(err)=>{
    if(err) throw err;
    else console.log(`Server work on ${PORT}`);
}) 