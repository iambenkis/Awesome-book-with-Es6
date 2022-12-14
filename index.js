import { displayBook } from './modules/displayBook.js';
import { setMyLib, getMyLib } from './modules/localStorage.js';
import navigate from './modules/navigation.js';
import displayDateTime from './modules/addDate.js';

const addBtn = document.querySelector('.add');
const inTitle = document.querySelector('#in-title');
const inAuthor = document.querySelector('#in-author');
const bookContainer = document.querySelector('.books');
const myLib = [...getMyLib()];
export default myLib;

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
    setMyLib(myLib);
  }
};
displayDateTime();
navigate();
document.addEventListener('DOMContentLoaded', displayBook(myLib));
addBtn.addEventListener('click', addBook);
