import { setMyLib } from './localStorage.js';

const bookContainer = document.querySelector('.books');

export const displayBook = (myLib) => {
  bookContainer.innerHTML = '';
  myLib.forEach((s) => {
    bookContainer.innerHTML += ` 
                <div class="book-item">
                    <p class="title"> "${s.title}" by ${s.author}</p> 
                    <button class="remove">Remove</button>
                </div>
        `;
  });

  const deleteButton = bookContainer.querySelectorAll('.remove');
  deleteButton.forEach((key, index) => key.addEventListener('click', () => {
    deleteFunc(myLib, index);
  }));
};

export const deleteFunc = (myLib, index) => {
  myLib.splice(index, 1);
  setMyLib(myLib);
  displayBook(myLib);
};