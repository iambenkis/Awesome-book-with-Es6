import myLib from "../index.js";

export const setMyLib = () => {
    const str = JSON.stringify(myLib);
    localStorage.setItem('myLib', str); 
};

export const getMyLib = () => {
    let books = JSON.parse(localStorage.getItem("myLib"));
    return books;
  };
