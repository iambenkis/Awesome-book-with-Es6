 import { displayBook } from "./displayBook.js";
 import { setMyLib } from "./localStorage.js";
 export const deleteFunc = (library,index) => {
    console.log(library, "jdfjfj")
    library.splice(index, 1);
    setMyLib(library);
    displayBook(library);
  }
