var React = require('react'),
    books = require('./books.js');

var Welcome = React.createClass({

    render: function(){
      return(
        <div className="box">
          <div className="welcome-heading">
            <div className="welcome-title">Welcome back!</div>
            <p className="welcome-description">It's been a while.</p>
            <p className="welcome-description">Read any new books lately?</p>
          </div>
          <div className="questions" >
            <p className="question button">NO</p>
            <p className="question button" style={{color: '#FFAC31'}}>YES</p>
          </div>
        </div>
      )
    }


});

module.exports = Welcome;
