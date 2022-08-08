export const setMyLib = (library) => {
    const str = JSON.stringify(library);
    localStorage.setItem('myLib', str);
};

export const getMyLib = (library) => {
    const str = localStorage.getItem('myLib');
    library = JSON.parse(str);
    if (!library) {
       library = [];
    }
  };