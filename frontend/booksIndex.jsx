var React = require('react'),
    books = require('./books.js')
    BooksIndexItem = require('./booksIndexItem')
    Welcome = require('./welcome');

var BooksIndex = React.createClass({

  render: function(){
    var bookList = books.all().map(function(book, idx){
      return (
         <BooksIndexItem key={idx} book={book}/>
       );
    });
    return (
      <div>
        <Welcome/>
        {bookList}
      </div>
    );
  }


});

module.exports = BooksIndex;
