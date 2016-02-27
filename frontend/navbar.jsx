var React = require('react');

var Navbar = React.createClass({

  render: function(){
    var bookList = this.props.current_books.map(function(book, idx){
      return (
         <li key={idx} className="button">{book.title}</li>
       );
    });

    bookList.push(<li key='3' className="button">Top 10 Australian Beaches</li>);

    return (
      <div>
        <div className="navbar-title">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#book-list" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M0 0h24v24h-24z" fill="none"/>
                <path d="M3 18h18v-2h-18v2zm0-5h18v-2h-18v2zm0-7v2h18v-2h-18z"/>
            </svg>
          </button>
          <p>My Books</p>
        </div>
        <div className='container-fluid nav-lower' >
          <div className="collapse navbar-collapse" id="book-list">
            <ul className="nav navbar-nav">
              {bookList}
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Navbar;
