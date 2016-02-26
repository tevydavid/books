var _books = {
  book1: {title: 'Help', author: 'Tevy'},
  book2: {title: 'Whatup', author: 'Speegs'}
};

var books = {
  all: function(){
    var books = [];
    for (var id in _books) {
      books.push(_books[id]);
    }
    return books;
  }
};

module.exports = books;
