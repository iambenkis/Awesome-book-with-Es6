import myLib from '../index.js';// eslint-disable-line

export const setMyLib = () => {
  const str = JSON.stringify(myLib);
  localStorage.setItem('myLib', str);
};

export const getMyLib = () => {
  const books = JSON.parse(localStorage.getItem('myLib'));
  return books;
};
