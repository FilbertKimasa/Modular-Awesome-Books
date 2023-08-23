import Book from './modules/book.js';
import setTime from './modules/date-time.js';

setTime();
const newBook = new Book();
window.addEventListener('load', newBook.init());
