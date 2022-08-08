import './modules/displayBook.js'; 
import './modules/displayBook.js'; 
export const deleteFunc = (index) => {
    myLib.splice(index, 1);
    saveMyLib();
    displayBook();
  }
