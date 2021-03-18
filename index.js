let myLibrary = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function addBookToLibrary(book, library) {
  library.push(book);
}

let book1 = new Book("Math", "Math Guy");
let book2 = new Book("Spanish", "Spanish Guy");
let book3 = new Book("Azul", "Ruben Dario");
let book4 = new Book("Illuminations", "Arthur Rimbaud");

addBookToLibrary(book1, myLibrary);
addBookToLibrary(book2, myLibrary);
addBookToLibrary(book3, myLibrary);
addBookToLibrary(book4, myLibrary);

const parentElement = document.querySelector('.book-cards');

for (let i = 0; i < myLibrary.length; i++) {
  let card = document.createElement('div');
  card.setAttribute('class', 'card-book');

  let title = document.createElement('div');
  title.textContent = myLibrary[i].title
  title.setAttribute('class', 'card-book-title');
  card.appendChild(title);

  let author = document.createElement('div');
  author.textContent = myLibrary[i].author
  author.setAttribute('class', 'card-book-author');
  card.appendChild(author);

  parentElement.appendChild(card);
}
