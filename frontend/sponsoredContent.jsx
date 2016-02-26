var React = require('react');

var SponsoredContent = React.createClass({

  render: function(){
    return (
      <div className = "box">
        <div className="sponsor-image" style={{'backgroundImage': 'url(http://in1.ccio.co/fI/iJ/v6/163044448979129468ACmFofsBc.jpg)'}}>
          Top 10 Australian beaches</div>
          <p className= "sponsor-number">Number 10</p>
          <p className= "sponsor-description">Whitehaven Beach<br></br>Whitsunday Island, Whitsunday Islands</p>
          <div className= "questions">
            <p className="question button">SHARE</p>
            <p className="question button" style={{color: '#FFAC31'}}>EXPLORE</p>
          </div>
      </div>
    );
  }



});

module.exports = SponsoredContent;
