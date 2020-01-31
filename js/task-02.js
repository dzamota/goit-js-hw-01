'use strict';

const total = 80;

const ordered = 81;

const result = total >= ordered;

let message;

if (result === true) {
  message = 'Заказ оформлен, с вами свяжется менеджер';
} else {
  message = 'На складе недостаточно тoвара!';
}

console.log(message);
