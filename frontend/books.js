
var _books = [
  {title: 'Marley And Me', author: 'John Grogan', imageUrl: 'http://www.johngroganbooks.com/images/marleychild_med.jpg' },
  {title: 'Mindset', author: 'Carol Dweck', imageUrl: 'http://ecx.images-amazon.com/images/I/517chSlPcLL._SX323_BO1,204,203,200_.jpg'}
];

var books = {

  all: function(){
    return _books;
  },

  checkForDuplicate: function(title, author){
    var dupe = false;

    //iterative check for duplicates runs in 0(n) but its okay for now
    //because we only have a few books.
    _books.forEach(function(book){
      if ( book['title'] === title && book['author'] === author ) {
        dupe = true;
      }
    });

    return dupe;
  },

  addBook: function(title, author, imageUrl){

    if (this.checkForDuplicate(title,author)) {
      return false;
    }


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

    return true;
  }
};

module.exports = books;
