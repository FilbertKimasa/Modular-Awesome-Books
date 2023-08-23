export default class UI {
  constructor() {
    this.bookTitle = document.getElementById('book-title');
    this.bookAuthor = document.getElementById('book-author');
    this.addBtn = document.getElementById('btn');
    this.listEntry = document.getElementById('list-entry');
    this.listLink = document.querySelector('#bk-list');
    this.addLink = document.querySelector('#bk-add');
    this.listContact = document.querySelector('#bk-contact');
    this.sectionList = document.querySelector('#list');
    this.sectionNew = document.querySelector('#new');
    this.sectionContact = document.querySelector('#contact');
    this.showDate = document.querySelector('.show-date');
  }

  clearInputs() {
    this.bookTitle.value = '';
    this.bookAuthor.value = '';
  }
}
