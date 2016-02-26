var React = require('react'),
    books = require('./books.js')
    BooksIndexItem = require('./booksIndexItem')
    Welcome = require('./welcome');

var BooksIndex = React.createClass({

  getInitialState: function(){
    return({current_books: books.all(), welcomeOpen: true})
  },

  closeWelcome: function(){
    this.setState({welcomeOpen: false});
  },

  updateBooks: function(){
    this.setState({current_books: books.all()});
  },

  render: function(){
    var bookList = this.state.current_books.map(function(book, idx){
      return (
         <BooksIndexItem key={idx} book={book}/>
       );
    });
    return (
      <div>
        {this.state.welcomeOpen ? <Welcome updateBooks={this.updateBooks} closeWelcome={this.closeWelcome}/> : null }
        {bookList}
      </div>
    );
  }


});

module.exports = BooksIndex;
