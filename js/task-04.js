'use strict';

let credits = 23580;

let message;

const pricePerDroid = 3000;

const numberOfPurchase = prompt('Какое количество хотите приобрести?');

let totalPrice = numberOfPurchase * pricePerDroid;

let currentBalance = credits - totalPrice;

if (numberOfPurchase === null) {
  message = 'Отменено пользователем!';
} else if (totalPrice <= credits) {
  message = `Вы купили ${numberOfPurchase} дроидов, на счету осталось ${currentBalance} кредитов.`;
} else {
  message = 'Недостаточно средств на счету!';
}

console.log(message);
