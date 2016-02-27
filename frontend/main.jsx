var React = require('react'),
    ReactDOM = require('react-dom'),
    BooksIndex = require('./booksIndex'),
    Navbar = require('./navbar'),
    books = require('./books'),
    SponsoredContent = require('./sponsoredContent');

var MainComponent = React.createClass({

  getInitialState: function(){
    return({
      current_books: books.all()
    })
  },

  updateBooks: function(){
    this.setState({current_books: books.all()});
  },

  render: function () {
    return(
      <div>
        <Navbar current_books={this.state.current_books}/>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-5">
              <BooksIndex updateBooks={this.updateBooks} current_books={this.state.current_books}/>
            </div>
            <div className="col-sm-6 col-lg-5">
              <SponsoredContent />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<MainComponent />, document.getElementById('main'));
});
