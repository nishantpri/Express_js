const http=require("http");
// const fs=require("fs");
// const url=require("url");
const express=require("express");
const app=express();// here app is the handler function ,using app we can perform any action and their correspondence response
app.get('/',(req,res)=>{
    return res.send("Welcome You are on Homepage");
})
app.get("/about",(req,res)=>{
    return res.send("Welcome You are on About page"+"  "+req.query.name +"your age is  " + req.query.age);
})

// app.post("/about",(req,res)=>{
//     return res.send("Hello from About Page"+ "hey"+req.query.name);
// })

// const myServer=http.createServer(app);
// myServer.listen(8000,()=>console.log("Server Started!"));
//now we don't need to write even above code as express gives you another functionalities to run you server even with using http component
app.listen(8000,()=>{
    console.log("Server Started");
})


//Express->