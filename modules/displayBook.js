import { setMyLib } from './localStorage.js';

const bookContainer = document.querySelector('.books');

export const htmlTemplate = (title, author) => ` 
<div class="book-item">
    <p class="title"> "${title}" by ${author}</p> 
    <button class="remove">Remove</button>
</div>
`;

export const displayBook = (myLib) => {
  bookContainer.innerHTML = '';
  myLib.forEach((s) => {
    bookContainer.innerHTML += htmlTemplate(s.title, s.author);
  });

  const deleteButton = bookContainer.querySelectorAll('.remove');
  deleteButton.forEach((key, index) => key.addEventListener('click', () => {
    myLib.splice(index, 1);
    setMyLib(myLib);
    displayBook(myLib);
  }));
};
