
// const { response } = require('express')
const express = require('express')
const books = express.Router()
const Book = require('../models/books.js')


books.get('/', (req,res)=>{
    Book.find().then((books)=>{     
      res.json(books)
    })
})

books.get('/:id', (req,res)=>{
  const id = req.params.id
  Book.findById(id).then((oneBook)=>{
    res.json(oneBook)
  })
})

books.post("/", (req,res)=>{
  Book.create(req.body).then((createdBook)=>{
    res.json(createdBook)
  })
})

books.put('/:id', (req,res)=>{
  const id = req.params.id
  Book.findByIdAndUpdate(id, req.body).then((updatedBook)=>{
    res.json(updatedBook)
  })
})

books.delete('/:id', (req,res)=>{
  const id = req.params.id
  Book.findByIdAndDelete(id).then(()=>{
    res.redirect('/books')
  })
})

module.exports = books


//////////////////////////////////
//    EXTRA Code
//////////////////////////////////
/*

// books.get('/:arrayIndex', (req, res) => {
//     res.send(Book[req.params.arrayIndex])
// })

*/