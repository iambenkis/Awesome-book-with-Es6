import './modules/displayBook.js'; 
import { getMyLib, setMyLib } from './modules/localStorage.js';
console.log('hello import');

const addBtn = document.querySelector('.add');
const inTitle = document.querySelector('#in-title');
const inAuthor = document.querySelector('#in-author');
const bookContainer = document.querySelector('.books');
const links = document.querySelectorAll('.link');
const slides = document.querySelectorAll('.slide');
let myLib = [];

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