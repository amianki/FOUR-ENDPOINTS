const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/home.html");
})
app.get('/about',(req,res)=>{
    res.sendFile(__dirname + "/about.html");
})
app.get('/contact',(req,res)=>{
    res.sendFile(__dirname + "/contact.html");
    console.log("This is get contact ");
})
app.get('/career',(req,res)=>{
    res.sendFile(__dirname + "/career.html");
})
app.get('*',(req,res)=>{
    res.sendFile(__dirname + "/pagenotfound.html");
})
app.listen(port,()=>{
    console.log('Running in the port of 3000');
})