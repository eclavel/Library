const addBook = document.getElementById('addBook');
const popup = document.getElementById('form-container');
const BookStatus = document.querySelectorAll('.book-status');
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

// Popup for the form when clicked
addBook.addEventListener('click', () =>{
  popup.style.top = '50px';
});
// Change Book Status 
BookStatus.forEach(book => {
  book.addEventListener('click', () =>{
    if(book.innerHTML === 'READ' ){
      book.style.background = 'orange';
      book.innerHTML = 'UNREAD';
    }
    else{
      book.style.background = 'greenyellow';
      book.innerHTML = 'READ';
    } 
})
});
