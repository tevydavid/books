var React = require('react'),
    books = require('./books.js')
    BooksIndexItem = require('./booksIndexItem')
    Welcome = require('./welcome');

var BooksIndex = React.createClass({

  getInitialState: function(){
    return({welcomeOpen: true})
  },

  closeWelcome: function(){
    this.setState({welcomeOpen: false});
  },


  render: function(){
    var bookList = this.props.current_books.map(function(book, idx){
      return (
         <BooksIndexItem key={idx} book={book}/>
       );
    });
    return (
      <div>
        {this.state.welcomeOpen ? <Welcome updateBooks={this.props.updateBooks} closeWelcome={this.closeWelcome}/> : null }
        {bookList}
      </div>
    );
  }


});

module.exports = BooksIndex;
