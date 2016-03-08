
var _books = [
  {title: 'Marley And Me', author: 'John Grogan', imageUrl: 'http://www.johngroganbooks.com/images/marleychild_med.jpg' },
  {title: 'Mindset', author: 'Carol Dweck', imageUrl: 'http://ecx.images-amazon.com/images/I/517chSlPcLL._SX323_BO1,204,203,200_.jpg'}
];

var books = {

  all: function(){
    return _books;
  },

  checkForDuplicate: function(title, author){
    //iterative check for duplicates runs in 0(n) but its okay for now
    //because we only have a few books.
    _books.forEach(function(book){
      if ( book['title'] === title && book['author'] === author ) {
        throw "You've already added this book!"
      }
    });

  },

  addBook: function(title, author, imageUrl){

    if (title === "") {
      throw "Title cannot be blank!"
    }

    if (author === "") {
      throw "Author cannot be blank!"
    }

    this.checkForDuplicate(title,author);

    var book = {
      title: title,
      author: author,
      //assign default image if no image is provided
      imageUrl: 'http://jcfamilies.com/wp-content/themes/jcfamily/images/noPhotoProvided.gif'
    };

    if (imageUrl) {
      book['imageUrl'] = imageUrl;
    }

    _books.push(book);
  }
};

module.exports = books;
