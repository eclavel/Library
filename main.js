const addBook = document.getElementById('addBook');
const popup = document.getElementById('form-container');
const formAuthor = document.getElementById('author');
const formTitle = document.getElementById('title');
const formPagesRead = document.getElementById('pages-read');
const formBookStatus = document.getElementById('status');
const formSubmit = document.querySelector('.submit');
const formCancel = document.querySelector('.cancel');

const myLibrary = [];

function Book(author, title, pagesRead, completed) {
  this.author = author;
  this.title = title;
  this.pagesRead = pagesRead;
  this.completed = completed;
}

function addBookToLibrary() {
  const book = new Book(
    formAuthor.value,
    formTitle.value,
    formPagesRead.value,
    formBookStatus.checked
  );

  myLibrary.push(book);
  createLibraryCard(book);
}

// Popup for the form when clicked
addBook.addEventListener('click', () => {
  popup.style.top = '50px';
});

// Toggle book status
function toggleBookStatus(stringIndex) {
  const index = parseInt(stringIndex, 10);
  const book = myLibrary[index];
  book.completed = !book.completed;
  const bookStatus = document.querySelector(`.book-status[data-index="${index}"]`);
  bookStatus.textContent = book.completed ? 'READ' : 'UNREAD';
  bookStatus.style.background = book.completed ? 'greenyellow' : 'orange';
}

// Remove book from library
function removeBookFromLibrary(index) {
  // delete item from array but don't update index
  delete myLibrary[index];
  const libraryCard = document.querySelector(`.library-card[data-index="${index}"]`);
  libraryCard.parentNode.removeChild(libraryCard);
}

// Create library card
function createLibraryCard(book) {
  const libraryContainer = document.querySelector('.library-container');

  // Create library card
  const libraryCard = document.createElement('div');
  libraryCard.className = 'library-card';
  libraryCard.setAttribute('data-index', myLibrary.indexOf(book));
  libraryContainer.appendChild(libraryCard);

  // Create info container
  const infoContainer = document.createElement('div');
  infoContainer.className = 'info';
  libraryCard.appendChild(infoContainer);

  // Create author element
  const authorElement = document.createElement('p');
  authorElement.innerHTML = `<u>Author:</u> ${book.author}`;
  infoContainer.appendChild(authorElement);

  // Create title element
  const titleElement = document.createElement('p');
  titleElement.innerHTML = `<u>Title:</u> ${book.title}`;
  infoContainer.appendChild(titleElement);

  // Create pages read element
  const pagesReadElement = document.createElement('p');
  pagesReadElement.innerHTML = `<u>Pages Read:</u> ${book.pagesRead}`;
  infoContainer.appendChild(pagesReadElement);

  // Create buttons container
  const buttonsContainer = document.createElement('div');
  buttonsContainer.className = 'buttons';
  libraryCard.appendChild(buttonsContainer);

  // Create status button
  const statusButton = document.createElement('button');
  statusButton.className = 'book-status';
  statusButton.setAttribute('data-index', myLibrary.indexOf(book));
  statusButton.textContent = book.completed ? 'READ' : 'UNREAD';
  statusButton.style.background = book.completed ? 'greenyellow' : 'orange';
  statusButton.addEventListener('click', () => {
    const index = statusButton.getAttribute('data-index');
    toggleBookStatus(index);
  });
  buttonsContainer.appendChild(statusButton);

  // Create remove button
  const removeButton = document.createElement('button');
  removeButton.className = 'remove';
  removeButton.textContent = 'REMOVE';
  removeButton.addEventListener('click', () => {
    removeBookFromLibrary(myLibrary.indexOf(book));
  });
  buttonsContainer.appendChild(removeButton);
}

// Add Book into Library
formSubmit.addEventListener('click', (event) =>{
  if(formAuthor.value !== '' && 
  formTitle.value !== '' && 
  formPagesRead.value !==''){
   addBookToLibrary();
   event.preventDefault();
   popup.style.top = '-500px';
   // empty the values
   formAuthor.value = '';
  formTitle.value = '';
  formPagesRead.value = '';
  formBookStatus.checked = false; 
  }
})

formCancel.addEventListener('click', () =>{
  popup.style.top = '-500px';
})
