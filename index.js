import { displayBook } from './modules/displayBook.js'; 
import { setMyLib } from './modules/localStorage.js';
import { navigate } from './modules/navigation.js';

const addBtn = document.querySelector('.add');
const inTitle = document.querySelector('#in-title');
const inAuthor = document.querySelector('#in-author');
const bookContainer = document.querySelector('.books'); 
let myLib = [];  
class Book {
    constructor(title = '', author = '') {
        this.title = title;
        this.author = author;
    }
    saveBook() {
        const savedBook = {
            title: this.title,
            author: this.author,
        };

        myLib.unshift(savedBook);
        displayBook(myLib);
    }
}


const addBook = (e) => {
    e.preventDefault();
    const bookTitle = inTitle.value;
    const bookAuthor = inAuthor.value;
    if (inTitle.value !== '' && inAuthor.value !== '') {
      bookContainer.innerHTML = '';
      const insertBook = new Book(bookTitle, bookAuthor);
      insertBook.saveBook();
      inAuthor.value = '';
      inTitle.value = '';
      //myLib.push(insertBook);
      //window.location.reload();
      console.log('I add ', myLib);
      displayBook(myLib);
      setMyLib(myLib); 
    }
}

navigate();
// document.addEventListener('DOMContentLoaded', displayBook(myLib));
displayBook(myLib);
addBtn.addEventListener('click', addBook);