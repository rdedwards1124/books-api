
const express = require('express')
const books = express.Router()
const Book = require('../models/books.js')


books.get('/', (req,res)=>{
    res.render('index')
})


books.get('/:arrayIndex', (req, res) => {
    res.send(Book[req.params.arrayIndex])
  })
  

module.exports = books
