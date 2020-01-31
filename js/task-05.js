'use strict';

let inputCountry = prompt('Введите страну назначения');

let price;

if (inputCountry === null) {
  alert('Отменено пользователем!');
} else {
  switch (inputCountry.toLowerCase()) {
    case 'китай': {
      price = 100;
      inputCountry = 'Китай';
      alert(`Доставка в ${inputCountry} будет стоить ${price} кредитов`);
      break;
    }
    case 'чили': {
      price = 250;
      inputCountry = 'Чили';
      alert(`Доставка в ${inputCountry} будет стоить ${price} кредитов`);
      break;
    }
    case 'австралия': {
      price = 170;
      inputCountry = 'Австралия';
      alert(`Доставка в ${inputCountry} будет стоить ${price} кредитов`);
      break;
    }
    case 'индия': {
      price = 80;
      inputCountry = 'Индия';
      alert(`Доставка в ${inputCountry} будет стоить ${price} кредитов`);
      break;
    }
    case 'ямайка': {
      price = 120;
      inputCountry = 'Ямайка';
      alert(`Доставка в ${inputCountry} будет стоить ${price} кредитов`);
      break;
    }
    case '': {
      price = 0;
      break;
    }
    default:
      alert('В вашей стране доставка не доступна');
      break;
  }
}
