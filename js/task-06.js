'use strict';

let input;
let total = 0;

input = prompt('Введите число');

while (input !== null && input !== NaN) {
  while (isNaN(input)) {
    alert('Недопустимый ввод! Необходимо вводить только числа');
    input = 0;
  }
  input = Number.parseFloat(input);
  total += input;
  console.log(total);
  input = prompt('Введите число');
}

alert(`Сумма введенных чисел ${total}`);
