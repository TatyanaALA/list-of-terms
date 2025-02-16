import { createRoot } from 'react-dom/client';
import { TermList } from './TermList';
import './index.css';

function saveTermList(terms) {
  localStorage.setItem("termList", JSON.stringify(terms));
}

function restoreTermList() {
  const rawTermList = localStorage.getItem("termList");

  if (!rawTermList) {
    return [];
  }

  return JSON.parse(rawTermList);
}

let terms = restoreTermList();

const descriptionlist = document.getElementById('dascription-list');

const reactRoot = createRoot(descriptionlist);

function syncTermList() {
  saveTermList(terms);
  reactRoot.render(<TermList terms={terms} onDelete={deleteItem} />);
}

function addTern(titel, description) {
  terms.push({
    id: Date.now(),
    titel,
    description,
  });

  terms.sort((term1, term2) => (term1.titel < term2.titel ? -1 : 1));

  syncTermList();
}

function deleteItem(id) {
  terms = terms.filter((term) => term.id !== id)

  syncTermList();
}

syncTermList();

const form = document.getElementById('add-description');

form.addEventListener('submit', (event) => {
  // Отменяем поведение по умолчанию
  event.preventDefault();

  // Получаем значения полей формы
  const title = form.elements['title'].value;
  const description = form.elements['description'].value;

  // Сбрасываем форму
  form.reset();

  addTern(title, description);
});
