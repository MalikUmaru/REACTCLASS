//creation of basic server

//import express 
const express = require('express');

//making instance of express
const app = express();

//midlewares-these are functions that execute before the server execution
app.use(express.json())

//routes-are commands that we use to handle where a server is getting its request and where a server is sending its response
app.get("/", (req, res)=>{
    res.send("Welcome Dear User, Need anything? - I am here to help")
})

//PORT Number - actual home of a web page
const PORT = 5000;
app.listen(PORT, ()=>{
    console.log("Server is running, listening on port :", PORT)
})

