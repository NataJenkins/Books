let modal = document.getElementById("modal-bg");

// Get the button that opens the modal
let btn = document.getElementById("add-btn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

let myLibrary = [];

function Book(title, author, read) {
  this.id = myLibrary.length + 1;
  this.title = title;
  this.author = author;
  this.read = false;
}

function addBookToLibrary(book, library) {
  library.push(book);
}

function addNewBook() {
  let title = document.querySelector(".form-book-title").value;
  let author = document.querySelector(".form-book-author").value;
  let read = document.querySelector(".form-book-read").value;

  let newBook = new Book(title, author, read);

  addBookToLibrary(newBook, myLibrary);
  appendToParent(newBook);
}

function negateRead(book) {
  book.read = !book.read;
}

function appendToParent(book) {
  let card = document.createElement("div");
  card.setAttribute("class", "card-book");
  card.setAttribute("id", `card-book-${book.id}`);

  let title = document.createElement("h3");
  title.textContent = book.title;
  title.setAttribute("class", "card-book-title");
  card.appendChild(title);

  let author = document.createElement("h4");
  author.textContent = book.author;
  author.setAttribute("class", "card-book-author");
  card.appendChild(author);

  let readBtn = document.createElement("button");
  readBtn.textContent = "Read";
  readBtn.setAttribute("id", `read-status-${book.id}`);
  card.appendChild(readBtn);

  let remove = document.createElement("button");
  remove.textContent = "Remove";
  remove.setAttribute("id", `remove-btn-${book.id}`);
  card.appendChild(remove);

  parentElement.appendChild(card);

  let isRead = document.querySelector(`#read-status-${book.id}`);

  isRead.addEventListener("click", function () {
    if (book.read === true) {
      isRead.textContent = "Read";
    } else {
      isRead.textContent = "Not Read";
    }
  });
  console.log(book);

  let removeBtn = document.querySelector(`#remove-btn-${book.id}`);

  removeBtn.addEventListener("click", function () {
    let cardBook = document.querySelector(`#card-book-${book.id}`);
    cardBook.remove();
  });
}

let submitBtn = document.getElementById("form-btn");
window.onclick = function (event) {
  if (event.target == submitBtn) {
    addNewBook();
    document.getElementsByClassName("add-book-form")[0].reset();
    modal.style.display = "none";
  }
};

let book1 = new Book("Math", "Math Guy", false);
let book2 = new Book("Spanish", "Spanish Guy", false);
let book3 = new Book("Azul", "Ruben Dario", false);
let book4 = new Book("Illuminations", "Arthur Rimbaud", false);

addBookToLibrary(book1, myLibrary);
// addBookToLibrary(book2, myLibrary);
// addBookToLibrary(book3, myLibrary);
// addBookToLibrary(book4, myLibrary);

const parentElement = document.querySelector(".book-cards");

for (let i = 0; i < myLibrary.length; i++) {
  appendToParent(myLibrary[i]);
}
