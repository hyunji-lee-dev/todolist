'use strict';

const items = document.querySelector('.list__items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.btn--add');
const clearBtn = document.querySelector('.btn--clear');

// local storage
addEventListener('DOMContentLoaded', () => {
  const myStorage = localStorage.getItem('items');
  if (myStorage == null) {
    return;
  }
  items.innerHTML = myStorage;
});

addEventListener('beforeunload', () => {
  if (items.innerHTML === '') {
    clearMyStorage();
  } else {
    updateMyStorage();
  }
});

function clearMyStorage() {
  localStorage.removeItem('items');
}

function updateMyStorage() {
  localStorage.setItem('items', items.innerHTML);
}

// 아이템 추가 기능
addBtn.addEventListener('click', onAdd);

input.addEventListener('keydown', e => {
  e.key === 'Enter' && onAdd();
});

function onAdd() {
  const inputValue = input.value;
  if (!/\S/.test(inputValue)) {
    alert(`You have not entered anything🤔`);
    input.focus();
    return;
  }

  const item = createItem(inputValue);
  items.appendChild(item);
  item.scrollIntoView({ behavior: 'smooth' });

  input.value = '';
  input.focus();
}

function createItem(inputValue) {
  const id = Date.now();

  const item = document.createElement('li');
  item.setAttribute('class', 'item');
  item.setAttribute('data-id', id);

  const itemName = document.createElement('span');
  itemName.setAttribute('class', 'item__name');
  itemName.setAttribute('data-id', id);
  itemName.textContent = inputValue;

  const itemBtns = document.createElement('div');
  itemBtns.innerHTML = `
  <button class="item__btn btn--check">
    <i class="fas fa-check" data-check="${id}"></i>
  </button>
  <button class="item__btn btn--delete">
    <i class="fas fa-minus" data-delete="${id}"></i>
  </button>
  `;

  item.append(itemName, itemBtns);
  return item;
}

// 아이템 클리어 기능
clearBtn.addEventListener('click', () => {
  if (items.innerHTML === '') {
    return;
  }
  if (confirm(`Are you sure to clear all items?`)) {
    items.innerHTML = '';
  }
});

// 아이템 버튼들 클릭 처리
items.addEventListener('click', e => {
  const dataset = e.target.dataset;
  const checkId = dataset.check;
  const deleteId = dataset.delete;
  if (checkId == null && deleteId == null) {
    return;
  }
  checkId && checkItem(checkId);
  deleteId && deleteItem(deleteId);
});

function checkItem(checkId) {
  const toBeChecked = document.querySelector(
    `.item__name[data-id="${checkId}"]`
  );
  toBeChecked.classList.toggle('checked');
}

function deleteItem(deleteId) {
  const toBeDeleted = document.querySelector(`.item[data-id="${deleteId}"]`);
  toBeDeleted.remove();
}
