const modal = document.getElementById('modal-bg');

// Get the button that opens the modal
const btn = document.getElementById('add-btn');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
  document.getElementsByClassName('add-book-form')[0].reset();
};

const myLibrary = {};

function Book(title, author, pages, read) {
  this.id = Object.keys(myLibrary).length + 1;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book, library) {
  library[book.id] = book;
}

function addNewBook() {
  const title = document.querySelector('.form-book-title').value;
  const author = document.querySelector('.form-book-author').value;
  const read = document.querySelector('.form-book-read').value;
  const pages = document.querySelector('.form-book-pages').value;

  const newBook = new Book(title, author, pages, read);

  addBookToLibrary(newBook, myLibrary);
  appendToParent(newBook);
}

function appendToParent(book) {
  const card = document.createElement('div');
  card.setAttribute('class', 'card-book');
  card.setAttribute('id', `card-book-${book.id}`);

  const title = document.createElement('h3');
  title.textContent = book.title;
  title.setAttribute('class', 'card-book-title');
  card.appendChild(title);

  const author = document.createElement('h4');
  author.textContent = book.author;
  author.setAttribute('class', 'card-book-author');
  card.appendChild(author);

  const pages = document.createElement('h6');
  pages.textContent = `${book.pages} Pages`;
  pages.setAttribute('class', 'card-book-pages');
  card.appendChild(pages);

  const readBtn = document.createElement('button');
  readBtn.textContent = document.querySelector('#read-check-box:checked') === null ? 'Not Read' : 'Already Read';
  readBtn.setAttribute('id', `read-status-${book.id}`);
  card.appendChild(readBtn);

  const remove = document.createElement('button');
  remove.textContent = 'Remove';
  remove.setAttribute('id', `remove-btn-${book.id}`);
  card.appendChild(remove);

  parentElement.appendChild(card);

  const isRead = document.querySelector(`#read-status-${book.id}`);

  isRead.addEventListener('click', () => {
    if (book.read === true) {
      isRead.textContent = 'Already Read';
      myLibrary[book.id].read = false;
    } else {
      isRead.textContent = 'Not Read';
      myLibrary[book.id].read = true;
    }
  });

  const removeBtn = document.querySelector(`#remove-btn-${book.id}`);

  removeBtn.addEventListener('click', () => {
    const cardBook = document.querySelector(`#card-book-${book.id}`);
    cardBook.remove();
    delete myLibrary[book.id];
  });
}

const submitBtn = document.getElementById('form-btn');
window.onclick = function (event) {
  if (event.target == submitBtn) {
    addNewBook();
    document.getElementsByClassName('add-book-form')[0].reset();
    modal.style.display = 'none';
  }
};

const book1 = new Book('Math', 'Math Guy', 123, false);

addBookToLibrary(book1, myLibrary);

const parentElement = document.querySelector('.book-cards');

for (const key in myLibrary) {
  appendToParent(myLibrary[key]);
}
