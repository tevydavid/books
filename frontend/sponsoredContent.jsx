var React = require('react');

var SponsoredContent = React.createClass({

  render: function(){
    return (
      <div className = "box">
        <div className = "sponsor-content" >
          <div className="sponsor-image">
            <h1 className="sponsor-title">Top 10 Australian beaches</h1>
          </div>
          <p className= "sponsor-number">Number 10</p>
          <p className= "sponsor-description">Whitehaven Beach<br></br>Whitsunday Island, Whitsunday Islands</p>
          <div className= "questions">
            <p className="question button"><a href="#">SHARE</a></p>
            <p className="question button q2"><a href="#">EXPLORE</a></p>
          </div>
        </div>
      </div>
    );
  }



});

module.exports = SponsoredContent;
