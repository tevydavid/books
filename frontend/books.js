
var _books = [
  {title: 'Marley And Me', author: 'John Grogan', imageUrl: 'http://www.johngroganbooks.com/images/marleychild_med.jpg' },
  {title: 'Mindset', author: 'Carol Dweck', imageUrl: 'http://ecx.images-amazon.com/images/I/517chSlPcLL._SX323_BO1,204,203,200_.jpg'}
];

var books = {
  all: function(){
    return _books;
  },

  addBook: function(title, author, imageUrl){
    var book = {
      title: title,
      author: author,
      imageUrl: imageUrl
    };
    _books.push(book);
  }
};

module.exports = books;
