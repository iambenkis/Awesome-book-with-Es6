 import { displayBook } from "./displayBook.js";
 export const deleteFunc = (library,index) => {
    library.splice(index, 1);
    //saveMyLib();
    displayBook(library);
  }
