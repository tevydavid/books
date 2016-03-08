var React = require('react');

var BooksIndexItem = React.createClass({

  render: function(){
    return (
      <div className = "box">
        <img className="book-image" src={this.props.book.imageUrl}/>
        <div className= "book-info">
          <h1 className= "book-title">{this.props.book.title}</h1>
          <h2 className= "book-author">By {this.props.book.author}</h2>
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
