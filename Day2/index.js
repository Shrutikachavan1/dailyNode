const fs = require('fs')
fs.readFile('index.txt','utf-8',(err, data)=>{
    let name = 'Shrutika';
    debugger;
    if(err){
        throw err
    }
    console.log(data);
})
