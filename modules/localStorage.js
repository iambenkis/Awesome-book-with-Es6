import myLib from "../index.js";

export const setMyLib = () => {
    const str = JSON.stringify(myLib);
    localStorage.setItem('myLib', str); 
};

export const getMyLib = () => {
    const str = localStorage.getItem('myLib');   
    str? myLib.copyWithin( JSON.parse(str)) :alert('nothing ther');
    console.log('error ', myLib , 'value' , str); 
  };