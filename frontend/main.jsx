var React = require('react'),
    ReactDOM = require('react-dom')
    BooksIndex = require('./booksIndex')
    SponsoredContent = require('./sponsoredContent');

var MainComponent = React.createClass({
  render: function () {
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <BooksIndex />
          </div>
          <div className="col-sm-6">
            <SponsoredContent />
          </div>
        </div>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<MainComponent />, document.getElementById('main'));
});
