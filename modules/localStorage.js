export const setMyLib = (myLib) => { 
    const str = JSON.stringify(myLib); 
    localStorage.setItem('myLib', str);
};

export const getMyLib = (myLib) => {
    const str = localStorage.getItem('myLib'); 
   myLib = JSON.parse(str);
    if (!myLib) {
       myLib = [];
    }
    console.log(str, "--",myLib);
    return myLib;
  };