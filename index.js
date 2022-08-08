import { displayBook } from './modules/displayBook.js'; 
import { getMyLib, setMyLib } from './modules/localStorage.js';
import { navigate } from './modules/navigation.js';

const addBtn = document.querySelector('.add');
const inTitle = document.querySelector('#in-title');
const inAuthor = document.querySelector('#in-author');
const bookContainer = document.querySelector('.books'); 
let myLib = [
    {title: "benkis",author:"kkkksjhd"},
    {title: "benkis",author:"kkkksjhd"},
    {title: "benkis",author:"kkkksjhd"},
    {title: "benkis",author:"kkkksjhd"}];

function Book(title, author) {
    this.title = title;
    this.author = author;
}

Book.prototype.saveBook = () => {
    const savedBook = {
      title: this.title,
      author: this.author,
    };
  
    myLib.unshift(savedBook);
    displayBook();
  };
 
  navigate();
  displayBook(myLib);