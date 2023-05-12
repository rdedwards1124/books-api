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

// Keep server open to listen for connections (callback is optional)
app.listen((3002), ()=>{
    console.log("... I'm listening...")
})