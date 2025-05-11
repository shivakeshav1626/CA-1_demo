const express = require("express");
const app = express();
const port = 9000;
app.use(express.json());

app.get('/shiva',(req,res)=>{
    res.send("signup")
})

app.post('/submit',(req,res)=>{
    try{
        const{username, email, password, dateofBirth}=req.body
        if(!username || !email){
            res.status(400).json("Username cannot be empty")
        }
        if(password.length<8 || password.length>=16){
            res.status(401).json("Password should")
        }
    }catch(error){
        res.status(500).json("server error")
    }
})
app.listen(port,()=>{
    console.log(`server is running in http://localhost:${port}`);
})

