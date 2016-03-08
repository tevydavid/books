var React = require('react'),
    books = require('./books.js'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var Welcome = React.createClass({

    mixins: [LinkedStateMixin],

    getInitialState: function(){
      return({opened: false, title: "", author: "", imageUrl: "", message:""})
    },

    toggleForm: function(){
      this.setState({opened: !this.state.opened, message: ""})
    },

    addBook: function(e){
      e.preventDefault();
      try {
        books.addBook(this.state.title.trim(), this.state.author.trim(), this.state.imageUrl);
        this.setState(this.getInitialState());
        this.props.updateBooks();
        throw "Book Added!"
      }
      catch(error) {
        this.setState({message: error})
      }
    },

    render: function(){
      if ( this.state.message ) {
        var validation = <div className='welcome-validation'>{this.state.message}</div>
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
              <h1 className="welcome-title">{ this.state.message ? this.state.message : 'Welcome back!' }</h1>
              <h2 className="welcome-description">It's been a while.</h2>
              <h2 className="welcome-description">Read any{this.state.message ? ' more ' : ' '}new books lately?</h2>
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
