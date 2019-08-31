'use strict';

let mission = 120000;
let accumulatedMonth;
let money;

/* let start = function () {
  money = prompt('Ваш месячный доход?', 25000);
  while (isNaN(money) || money === '' || money === null) {
    money = prompt('Ваш месячный доход?', 25000);
    console.log(' money : ',  money );
    }
  };
  start();*/

let start = function () {
  do {
    money = prompt('Ваш месячный доход?', 25000);
  }
  while (isNaN(money) || money === ' ' || money === null || money == 0);
};

start();

let addExpenses = prompt('Перечислете возможные расходы за рссчитываемый период через запятую', ' Кредит ');
console.log('addExpenses: ', addExpenses.split(','));

let deposit = confirm('Есть ли у вас депозит в банке?');

let showTypeOf = function (value) {
  return typeof (value);
};

console.log('Money: ', showTypeOf(money));
console.log('addExpenses: ', showTypeOf(addExpenses));
console.log('deposit: ', showTypeOf(deposit));


let expenseArr1,
  expenseArr2;

//Сумма всех расходов
let getExpensesMonth = function () {
  let sum = 0,
      ask;
  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      expenseArr1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', ' Кредит Альфа ');
    }
    if (i === 1) {
      expenseArr2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', ' Кредит Сбер ');
    }
    do {
      ask = prompt('Во сколько это обойдется?');
    }
    while (isNaN(ask) || ask === ' ' || ask === null);
    sum += +ask;

  }
  return sum;
};
let costsMonth = getExpensesMonth();

console.log(' Расходы за месяц: ', costsMonth);

//Накопления за месяц доход - расход
function getAccumulatedMonth() {
  accumulatedMonth = money - costsMonth;
  return accumulatedMonth;
}

console.log(' Доход: ' + getAccumulatedMonth());

//Округл период достижения цели
function getTargetMonth() {
  let intent = Math.floor(mission / getAccumulatedMonth());
  if (intent < 0) {
    return ('Цель не будет достигнута');
  } else {
    return ('Цель будет достигнута за: ' + intent + ' месяцa(ев)');
  }
}




//Результат дохода
let getStatusIncome = function () {
  if (getAccumulatedMonth() >= 800) {
    return ('Высокий уровень дохода');
  } else if (getAccumulatedMonth() >= 300) {
    return ('Средний уровень дохода');
  } else if (getAccumulatedMonth() >= 0) {
    return ('Низкий уровень дохода');
  } else {
    return ('Что то пошло не так');
  }
};

console.log(getStatusIncome());
console.log(getTargetMonth());