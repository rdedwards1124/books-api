// Ran this in terminal: npm i dotenv
require('dotenv').config()

// Require express
const express = require("express")

// Initialize the app variable
const app = express()

// Create a homepage route
app.get('/', (req,res)=>{
    res.send('Hello World')
})

// BONUS: create another route
app.get('/second', (req,res)=>{
    res.send('Hi Computer')
})

// 404 Error Route needs to go below other routes!!
app.get('*', (req,res)=>{
    res.status(404).send("<h1>404 Page</h1>")
})

// Keep server open to listen for connections (callback is optional)
app.listen((process.env.PORT), ()=>{
    console.log("... I'm listening...")
})