var React = require('react');

var BooksIndexItem = React.createClass({

  render: function(){
    return (
      <div className = "box">
        <img className="book-image" src="http://static1.squarespace.com/static/532abed3e4b025f227941d11/t/532ce5e3e4b0f59c2979d8c2/1395451365611"/>
        <div className= "book-info">
          <div className= "book-title">{this.props.book.title}</div>
          <div className= "book-author">By {this.props.book.author}</div>
          <div className= "questions">
            <p className="question button">FREE SAMPLE</p>
            <p className="question button" style={{color: '#FFAC31'}}>REVIEW</p>
          </div>
        </div>
      </div>
    );
  }



});

module.exports = BooksIndexItem;
