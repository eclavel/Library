const addBook = document.getElementById('addBook');
const BookStatus = document.querySelectorAll('.book-status');
const popup = document.getElementById('form-container');
const formAuthor = document.getElementById('author');
  const formTitle = document.getElementById('title');
  const formPagesRead = document.getElementById('pages-read');
  const formBookStatus = document.getElementById('status');
const formSubmit = document.querySelector('.submit');

const myLibrary = [];

function Book(author, title, pagesRead, completed) {
  this.author = author;
  this.title = title;
  this.pagesRead = pagesRead;
  this.completed = completed;
}

function addBookToLibrary(len) {
  // do stuff here
  myLibrary[len] = new Book(formAuthor.value
    , formTitle.value, formPagesRead.value
    , formBookStatus.checked);
}

// Popup for the form when clicked
addBook.addEventListener('click', () =>{
  popup.style.top = '50px';
});

// Change Book Status 
BookStatus.forEach((bookStat) => {
  bookStat.addEventListener('click', () =>{
    if(bookStat.innerHTML === 'READ' ){
      bookStat.style.background = 'orange';
      bookStat.innerHTML = 'UNREAD';
    }
    else{
      bookStat.style.background = 'greenyellow';
      bookStat.innerHTML = 'READ';
    } 
})
});

function createLibraryCard(){
  const libraryContainer = document.querySelector('.library-container');

  // create library card
  const libraryCard = document.createElement('div');
  libraryCard.className = 'library-card';
  libraryContainer.appendChild(libraryCard);

  // create div with class 'info' and append to library
  const infoContainer = document.createElement('div');
  infoContainer.className = 'info';
  libraryCard.appendChild(infoContainer);

  // create 3 <p> element for infoContainer(Author, Title, Pages Read)
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');
  p1.className = 'author';
  p2.className = 'title';
  p3.className = 'pages-read';
  infoContainer.appendChild(p1);
  infoContainer.appendChild(p2);
  infoContainer.appendChild(p3);

  // create the underline Text for each <p>
  const p1Element = document.createElement('u');
  const p2Element = document.createElement('u');
  const p3Element = document.createElement('u');
  const u1 = document.createTextNode('Author: ')
  const u2 = document.createTextNode('Title: ');
  const u3 = document.createTextNode('Pages Read: ');
  p1Element.appendChild(u1);
  p1.appendChild(p1Element);
  p2Element.appendChild(u2);
  p2.appendChild(p2Element);
  p3Element.appendChild(u3);
  p3.appendChild(p3Element);

  // insert data into <p> and append to child
  const authorData = document.createTextNode(` ${formAuthor.value}`);
  p1.appendChild(authorData);
  const titleData = document.createTextNode(` ${formTitle.value}`);
  p2.appendChild(titleData);
  const pagesReadData = document.createTextNode(` ${formPagesRead.value}`);
  p3.appendChild(pagesReadData);

  // create buttons div 
  const buttonsContainer = document.createElement('div');
  buttonsContainer.className = 'buttons';
  libraryCard.appendChild(buttonsContainer);

  // create button status and remove button and append
  const buttonStatus = document.createElement('button');
  buttonStatus.className = 'book-status';
  // get value from book status checkbox
  let buttonStatusValue;
  if(formBookStatus.checked === false){
    buttonStatusValue = document.createTextNode('UNREAD');
  }
  else{
    buttonStatusValue = document.createTextNode('READ');
  }
  buttonStatus.appendChild(buttonStatusValue);
  buttonsContainer.appendChild(buttonStatus);

  // remove button
  const buttonRemove = document.createElement('button');
  buttonRemove.className = 'remove';
  const buttonRemoveText = document.createTextNode('REMOVE');
  buttonRemove.appendChild(buttonRemoveText);
  buttonsContainer.appendChild(buttonRemove);
}

// Add Book into Library
formSubmit.addEventListener('click', (event) =>{
  if(formAuthor.value !== '' && 
  formTitle.value !== '' && 
  formPagesRead.value !==''){
    const libraryLength = myLibrary.length;
   addBookToLibrary(libraryLength);
   event.preventDefault();
   popup.style.top = '-500px';
   createLibraryCard();
   formAuthor.value = '';
  formTitle.value = '';
  formPagesRead.value = '';
  formBookStatus.checked = false; 
  }
})
