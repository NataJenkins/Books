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
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

const myLibrary = [];

function Book(title, author, read, pages) {
  this.id = myLibrary.length + 1;
  this.title = title;
  this.author = author;
  this.read = read;
  this.pages = pages;
}

function addBookToLibrary(book, library) {
  library.push(book);
}

const parentElement = document.querySelector('.book-cards');

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
  pages.setAttribute('class', 'card-book-author');
  card.appendChild(pages);

  const readBtn = document.createElement('button');
  readBtn.textContent = 'Read';
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
      isRead.textContent = 'Not Read';
      myLibrary[book.id - 1].read = false;
      console.log(book);
    } else {
      isRead.textContent = 'Read';
      myLibrary[book.id - 1].read = true;
      console.log(book);
    }
  });

  console.log(book);

  const removeBtn = document.querySelector(`#remove-btn-${book.id}`);

  removeBtn.addEventListener('click', () => {
    const cardBook = document.querySelector(`#card-book-${book.id}`);
    cardBook.remove();
  });
}
function addNewBook() {
  const title = document.querySelector('.form-book-title').value;
  const author = document.querySelector('.form-book-author').value;
  const pages = document.querySelector('.form-book-pages').value;
  const read = document.getElementById('read-check-box').checked;

  const newBook = new Book(title, author, read, pages);

  addBookToLibrary(newBook, myLibrary);
  appendToParent(newBook);
}

const submitBtn = document.getElementById('form-btn');
window.onclick = function (event) {
  if (event.target === submitBtn) {
    addNewBook();
    document.getElementsByClassName('add-book-form')[0].reset();
    modal.style.display = 'none';
  }
};

const book1 = new Book('Math', 'Math Guy', false, 56);
// const book2 = new Book('Spanish', 'Spanish Guy', false);
// const book3 = new Book('Azul', 'Ruben Dario', false);
// const book4 = new Book('Illuminations', 'Arthur Rimbaud', false);

addBookToLibrary(book1, myLibrary);
// addBookToLibrary(book2, myLibrary);
// addBookToLibrary(book3, myLibrary);
// addBookToLibrary(book4, myLibrary);

for (let i = 0; i < myLibrary.length; i += 1) {
  appendToParent(myLibrary[i]);
}
