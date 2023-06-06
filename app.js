const express = require('express');
const app = express();
const port = 3000;
app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/home.html");
})
app.get('/about',(req,res)=>{
    res.sendFile(__dirname + "/about.html");
})
app.get('/contact',(req,res)=>{
    res.sendFile(__dirname + "/contact.html");
})
app.get('/career',(req,res)=>{
    res.sendFile(__dirname + "/career.html");
})
app.listen(port,()=>{
    console.log('Running in the port of 3000');
})