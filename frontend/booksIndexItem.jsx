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
            <button className="question button"><a href="#">FREE SAMPLE</a></button>
            <button className="question button q2">REVIEW</button>
          </div>
        </div>
      </div>
    );
  }



});

module.exports = BooksIndexItem;
