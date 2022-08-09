import displayBook from './displayBook.js';// eslint-disable-line
import { setMyLib } from './localStorage.js';// eslint-disable-line
import myLib from '../index.js';// eslint-disable-line

export default function deleteFunc(index) {
  myLib.splice(index, 1);
  setMyLib(myLib);
  displayBook(myLib);
}
