import { deleteFunc } from "./delete.js";
import { getMyLib } from "./localStorage.js";
const bookContainer = document.querySelector('.books');
export const displayBook = (myLib) => {
    
    console.log("i get this:",  getMyLib(myLib))
    bookContainer.innerHTML = '';
    getMyLib(myLib).forEach((s) => {
      bookContainer.innerHTML += ` 
                <div class="book-item">
                    <p class="title"> "${s.title}" by ${s.author}</p> 
                    <button class="remove">Remove</button>
                </div>
        `;
    });
    
    const deleteButton = bookContainer.querySelectorAll('.remove');
    deleteButton.forEach((key, index) => key.addEventListener('click', () => {
      deleteFunc(myLib,index);
    }));
  }