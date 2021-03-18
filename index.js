let myLibrary = [];

function Book(title, author) {
  this.title = title
  this.author = author
}

function addBookToLibrary(book, library) {
    library.push(book)
}

let book1 = new Book('Math', 'Math Guy')
let book2 = new Book('Spanish', 'Spanish Guy')
let book3 = new Book('Azul', 'Ruben Dario')
let book4 = new Book('Illuminations', 'Arthur Rimbaud')

addBookToLibrary(book1, myLibrary);
addBookToLibrary(book2, myLibrary);
addBookToLibrary(book3, myLibrary);
addBookToLibrary(book4, myLibrary);

for (let i = 0; i < myLibrary.length; i++) {
    let bookElement = document.createElement('div');
    bookElement.textContent = `${myLibrary[i].title} | ${myLibrary[i].author}`
    document.body.appendChild(bookElement);  
    // console.log(`${myLibrary[i].title} | ${myLibrary[i].author}`)
}