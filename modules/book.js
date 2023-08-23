import UI from './ui.js';
import Data from './storage.js';
import * as content from './switch-content.js';

export default class Book {
  constructor() {
    this.ui = new UI();
    this.data = new Data();
  }

  init() {
    this.ui.addBtn.addEventListener('click', this.addBook.bind(this));
    this.ui.addLink.addEventListener('click', content.addToList.bind(this));
    this.ui.listLink.addEventListener(
      'click',
      content.displayBookList.bind(this)
    );
    this.ui.listContact.addEventListener(
      'click',
      content.displayContactInfo.bind(this)
    );

    this.renderBooks();
  }

  addBook() {
    const title = this.ui.bookTitle.value.trim();
    const author = this.ui.bookAuthor.value.trim();

    if (title.length > 0 && author.length > 0) {
      const book = { title, author };
      const same = this.data.books.some(
        (bk) => JSON.stringify(bk) === JSON.stringify(book)
      );
      if (!same) {
        this.data.books.push(book);
        this.data.updateStorage();
        this.ui.clearInputs();
        this.renderBooks();
      }
    }
    window.stop();
  }

  renderBooks() {
    this.ui.listEntry.innerHTML = this.data.books
      .map(
        (book) => `
          <li class="book-card">
            <p class="entry">
              <span class="book-title">"${book.title}"</span> by
              <span class="book-author">${book.author}</span>
            </p>
            <button class="remove-btn">Remove</button>
          </li>
        `
      )
      .join('');

    const removeBtns = document.querySelectorAll('.remove-btn');

    removeBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const card = e.target.closest('.book-card');
        const title = card.querySelector('.book-title').innerText;
        const author = card.querySelector('.book-author').innerText;
        this.data.removeBook(title, author);
        this.renderBooks();
      });
    });
  }
}
