 import { displayBook } from "./displayBook.js";
 import { setMyLib } from "./localStorage.js";
 import myLib from "../index.js";
 export const deleteFunc = (index) => {
    myLib.splice(index, 1);
    setMyLib(myLib);
    displayBook(myLib);
  }
