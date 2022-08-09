import deleteFunc from './delete.js';// eslint-disable-line
import myLib from '../index.js';// eslint-disable-line

const bookContainer = document.querySelector('.books');
export default function displayBook() {
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
    deleteFunc(index);
  }));
}