var React = require('react'),
    ReactDOM = require('react-dom'),
    BooksIndex = require('./booksIndex'),
    Navbar = require('./navbar'),
    SponsoredContent = require('./sponsoredContent');

var MainComponent = React.createClass({
  render: function () {
    return(
      <div>
        <Navbar/>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-5">
              <BooksIndex />
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
