
// Import Mongoose
const mongoose = require('mongoose')

// Create shorthand for schema instructor
const { Schema } = mongoose

// Need book schema here
const bookSchema = new Schema({
    title: {type: String},
    description: {type: String},
    year: {type: Number},
    quantity: {type: Number},
    imageURL: {type: String, default: 'https://banner2.cleanpng.com/20180316/chq/kisspng-book-free-content-clip-art-office-books-cliparts-5aab4c121e0864.187068161521175570123.jpg'},
})

// create book model
const Book = mongoose.model("Book", bookSchema)

// export book model
module.exports = Book










//////////////////////////////////
//      EXTRA unwanted Code
/////////////////////////////////


// module.exports = [
//     {
//       title: 'Rye',
//       description: 'This is a rye bread/book.',
//       year: 2009,
//       quantity: 10,
//       imageURL: 'https://images.unsplash.com/photo-1595535873420-a599195b3f4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
//     },
//     {
//       title: 'French',
//       description: 'This is a french bread/book.',
//       year: 2013,
//       quantity: 12,
//       imageURL: 'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
//     },
//     {
//       title: 'Gluten-Free',
//       description: 'This is a gluten-free bread/book.',
//       year: 2007,
//       quantity: 19,
//       imageURL: 'https://images.unsplash.com/photo-1546538490-0fe0a8eba4e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
//     },
//     {
//       title: 'Pumpkin',
//       description: 'This is a pumpkin bread/book.',
//       year: 2010,
//       quantity: 8,
//       imageURL: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
//     }
//   ]
  