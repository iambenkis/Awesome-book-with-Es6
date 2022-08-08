

export const saveBook = () => {
    const savedBook = {
      title: this.title,
      author: this.author,
    };
    myLib.unshift(savedBook);
    this.displayBook();
  }