const fs = require("fs");
const http = require("http");
const PORT = 5000;
const server=http.createServer((req,res)=>{

    if(req.url=="/"){
        res.writeHead(200,{'Content-type': 'Text/Html'});
        res.end("<h2>File Handling Crud <h2>");
    }

else if(req.url=="/createfile"){
        if(fs.existsSync("neosoft.txt")){
            res.end("Already Exists");
        }
        else{
            fs.writeFile('neosoft.txt',"welcome to Neosoft !",(err)=>{
            if(err) throw err 
            else res.end('file Created');
            })
        }
    }
    else if(req.url=="read file"){
        if(fs.existsSync("neosoft.txt")){
            let data=fs.readFileSync("neosoft.txt");
            res.end(data.toString());
        }
        else{
            res.end("File doesnot Exists");
        }
    }
      
        else if(req.url=="/deletefile"){
            if(fs.existsSync("neosoft.txt")){
                fs.unlink("neosoft.txt",(err)=>{
                    if(err) throw err
                    else res.end("File Deleted")
                })
            }
            else{
                res.end("File is not Exists");
            }
        }
        else if(req.url=="/append"){
            if(fs.existsSync("neosoft.txt")){
                fs.appendFileSync("neosoft.txt","This is append line");
                res.end("File is Updated");
        }
        else{
            res.end("File doesnot Exists")
        }
    
    }
})
    server.listen(PORT,(err)=>{
        if (err) throw err
        else{
            console.log(`Server  created on ${PORT}`)
        }
        console.log("program Ended");
    })
 
    
