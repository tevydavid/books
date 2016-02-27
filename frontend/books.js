
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
