export const deleteFunc = (index) => {
    myLib.splice(index, 1);
    saveMyLib();
    this.displayBook();
  }
