const addBook = document.getElementById('addBook');
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
  alert('Add Book');
});