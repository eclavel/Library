const addBook = document.getElementById('addBook');
const popup = document.getElementById('form-container');
const myLibrary = [];

function Book(author, title, pagesRead, completed) {
  this.author = author;
  this.title = title;
  this.pagesRead = pagesRead;
  this.completed = completed;
}

function addBookToLibrary() {
  // do stuff here
}

addBook.addEventListener('click', () =>{
  popup.style.top = '50px';
});