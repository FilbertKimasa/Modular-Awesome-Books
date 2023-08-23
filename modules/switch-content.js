import UI from './ui.js';

const ui = new UI();
export const addToList = () => {
  ui.sectionNew.classList.remove('hidden');
  ui.sectionList.classList.add('hidden');
  ui.sectionContact.classList.add('hidden');
};

export const displayBookList = () => {
  ui.sectionList.classList.remove('hidden');
  ui.sectionNew.classList.add('hidden');
  ui.sectionContact.classList.add('hidden');
};

export const displayContactInfo = () => {
  ui.sectionList.classList.add('hidden');
  ui.sectionNew.classList.add('hidden');
  ui.sectionContact.classList.remove('hidden');
};
