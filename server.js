// Ran this in terminal: npm i dotenv
require('dotenv').config()

// Require express
const express = require("express")

// Initialize the app variable
const app = express()

//
// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//

// Import router from books.js
const booksController = require("./controllers/books")
app.use('/books', booksController)

// Configure body-parser for JSON
app.use(express.json())

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
const PORT = process.env.PORT
app.listen((PORT), ()=>{
    console.log("... I'm listening...", PORT)
})




///////////////////////////////////////////////////////////////////////
//  Extra code I might need later...
///////////////////////////////////////////////////////////////////////

//
// const methodOverride = require("method-override")
// const mongoose = require('mongoose')


//
// mongoose.set("strictQuery", true)
// mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true},
//         ()=>{console.log('connected to mongo: ', process.env.MONGO_URI)}
//     )


//
// app.use(methodOverride('_method'))
