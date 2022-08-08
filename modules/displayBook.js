import { deleteFunc } from "./delete.js";

const bookContainer = document.querySelector('.books');
export const displayBook = () => {
    ///getMyLib();
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