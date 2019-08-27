'use strict';

let money = +prompt('Ваш месячный доход?'); // 1)

if (!money || 0 === money.lenght) {
  alert('Перзагрузите страницу и Введите сумму цифрами ');
}

let addExpenses = prompt('Перечислете возможные расходы за рссчитываемый период через запятую');
console.log('addExpenses: ', addExpenses.split(',')); // 2)

let deposit = confirm('Есть ли у вас депозит в банке?'); // 3)

console.log(typeof money);
console.log(typeof addExpenses);
console.log(typeof deposit); // 4)

let expenseArr1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let sum1 = prompt('Во сколько это обойдется?');

let expenseArr2 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let sum2 = prompt('Во сколько это обойдется?'); // 5)

/* let budgetMonth = money - sum1;
console.log('Доход в месяц: ', budgetMonth); // 6)

let mission = 120000;
console.log(Math.ceil(mission / budgetMonth)); // 7)

budgetMonth = money - sum2;
console.log(Math.floor(mission / budgetMonth)); // 8) */
let mission = 120000;
let budgetMonth = '';

  console.log(Math.ceil(budgetMonth = mission / (money - sum1)));
  console.log(Math.floor(budgetMonth = mission / (money - sum2)));


if (budgetMonth >= 800) {
  console.log('Высокий уровень дохода');
} else if (budgetMonth >= 300 && budgetMonth < 800) {
  console.log('Средний уровень дохода');
} else if (budgetMonth >= 0 && budgetMonth < 300) {
  console.log('Низкий уровень дохода');
} else if (budgetMonth < 0) {
  console.log('Что то пошло не так');
} // 9)

// 10) Проверено все работает
// 11) Добавлено с комитом в ветку мастер