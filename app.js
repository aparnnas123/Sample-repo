var express=require('express')
const server=express()
server.listen(8000,function(){
    console.log("server started listening")
})
server.get("*/",function(req,res){
    res.send("welocme")

})
server.get("/home",function(req,res){
    res.send("home page")

})
server.get("/",function(req,res){
    res.sendFile(__dirname+"/views/home.html")
    
})
