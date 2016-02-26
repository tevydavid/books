var React = require('react');

var BooksIndexItem = React.createClass({

  render: function(){
    return (
      <div className = "box">
        <img className="book-image" src={this.props.book.imageUrl}/>
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
