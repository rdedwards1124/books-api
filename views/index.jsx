
const React = require('react')
const Default = require('./layouts/default')

const Index = ({books})=>{
    return (
      <Default>
        <h2>Index Page</h2>
        <p>I have {books[0].name} book.</p>
      </Default>
    )
}

module.exports = Index
