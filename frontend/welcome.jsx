var React = require('react'),
    books = require('./books.js'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var Welcome = React.createClass({

    mixins: [LinkedStateMixin],

    getInitialState: function(){
      return({opened: false, title: "", author: "", imageUrl: "", message:""})
    },

    toggleForm: function(){
      this.setState({opened: !this.state.opened})
    },

    addBook: function(e){
      e.preventDefault();
      if (books.addBook(this.state.title, this.state.author, this.state.imageUrl)) {
        this.setState(this.getInitialState());
        this.props.updateBooks();
      } else {
        this.setState({message: "You've already added this book."})
      };
    },

    render: function(){
      if ( this.state.message ) {
        var validation = <div className='welcome-validation'>You've already added this book!</div>
      }

      if (this.state.opened){
        return (
          <div className="box">
            <div className="welcome-heading" >
              <h1 className="welcome-title">Which Book Did You Read?</h1>
              <form onSubmit={this.addBook}>
                <input type='text'
                        className="welcome-description"
                        valueLink={this.linkState('title')}
                        placeholder='Title'/>
                <input type="text"
                        className="welcome-description"
                        valueLink={this.linkState('author')}
                        placeholder='Author'/>
                <input type="text"
                        className="welcome-description"
                        valueLink={this.linkState('imageUrl')}
                        placeholder='Image Url' />
              </form>
              {validation}
            </div>
            <div className="questions" >
              <button className="question button"
                  onClick={this.toggleForm}>CANCEL</button>
              <button className="question button q2"
                  onClick={this.addBook}>SAVE</button>
            </div>
          </div>
        )
      } else {
        return(
          <div className="box">
            <div className="welcome-heading">
              <h1 className="welcome-title">Welcome back!</h1>
              <h2 className="welcome-description">It's been a while.</h2>
              <h2 className="welcome-description">Read any new books lately?</h2>
            </div>
            <div className="questions welcome-questions" >
              <button className="question button"
                  onClick={this.props.closeWelcome}>NO</button>
              <button className="question button q2"
                  onClick={this.toggleForm}>YES</button>
            </div>
          </div>
        )
      }
    }
});

module.exports = Welcome;
