// import myLib from '../index.js';
export const setMyLib = (lib) => {
  const str = JSON.stringify(lib);
  localStorage.setItem('myLib', str);
};

export const getMyLib = () => {
  const books = JSON.parse(localStorage.getItem('myLib'));
  return books;
};
