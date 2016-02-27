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
              <div className="welcome-title">Which Book Did You Read?</div>
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
              <p className="question button" style={{marginLeft: '38px'}}
                  onClick={this.toggleForm}>CANCEL</p>
              <p className="question button" style={{color: '#FFAC31', marginLeft: '38px'}}
                  onClick={this.addBook}>SAVE</p>
            </div>
          </div>
        )
      } else {
        return(
          <div className="box">
            <div className="welcome-heading">
              <div className="welcome-title">Welcome back!</div>
              <p className="welcome-description">It's been a while.</p>
              <p className="welcome-description">Read any new books lately?</p>
            </div>
            <div className="questions" >
              <p className="question button" style={{marginLeft: '38px'}}
                  onClick={this.props.closeWelcome}>NO</p>
              <p className="question button" style={{color: '#FFAC31', marginLeft: '38px'}}
                  onClick={this.toggleForm}>YES</p>
            </div>
          </div>
        )
      }
    }
});

module.exports = Welcome;
