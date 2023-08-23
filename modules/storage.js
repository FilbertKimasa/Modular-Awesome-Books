export default class Data {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  removeBook(title, author) {
    this.books = this.books.filter(
      (book) => book.title !== title && book.author !== author,
    );
    this.updateStorage();
  }

  updateStorage() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}
