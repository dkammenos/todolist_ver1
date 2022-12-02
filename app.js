const express = require("express");
const https = require("https");
//const bodyParser = require("body-parser");
const bodyParser = require("body-parser");
const app = express();

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

  app.listen(3000, () => {
    console.log("the server is started at port 3000");
    }); 
