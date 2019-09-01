'use strict';

let accumulatedMonth,
  money,
  start = function () {
    do {
      money = prompt('Ваш месячный доход?', 25000);
    }
    while (isNaN(money) || money === ' ' || money === null || money == 0);
  };

start();

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 120000,
  period: 12,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function () {
    let addExpenses = prompt('Перечислете возможные расходы за рссчитываемый период через запятую', ' Кредит ');
    appData.addExpenses = addExpenses.split(',');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
    //Сумма всех расходов
    for (let i = 0; i < 2; i++) {
      let ExpensesItem = prompt('Какие обязательные ежемесячные расходы у вас есть?', ' Кредит Альфа ');
      let ExpensesCash;
      do {
        ExpensesCash = prompt('Во сколько это обойдется?');
      }
      while (isNaN(ExpensesCash) || ExpensesCash === ' ' || ExpensesCash === '' || ExpensesCash === null);
      appData.expenses[ExpensesItem] = ExpensesCash;
    }
  },

  //Сумма всех обязательных расходов
  getExpensesMonth: function () {
    for (let key in appData.expenses) {
      appData.expensesMonth += +appData.expenses[key];
    }
  },

  getBudget: function () {
    appData.budgetMonth = appData.budget - appData.expensesMonth; // Накопления за месяц
    appData.budgetDay = Math.floor(appData.budgetMonth / 30); //наkопления за день
  },

  //Период достижения цели
  getTargetMonth: function () {
    return appData.mission / appData.budgetMonth;
  },

  //Результат дохода
  getStatusIncome: function () {
    if (appData.budgetDay >= 800) {
      return ('Высокий уровень дохода');
    } else if (appData.budgetDay >= 300) {
      return ('Средний уровень дохода');
    } else if (appData.budgetDay > 0) {
      return ('Низкий уровень дохода');
    } else {
      return ('Что то пошло не так');
    }
  }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();

console.log('Pасходы за месяц: ' + appData.expensesMonth);

if (appData.getTargetMonth() > 0) {
  console.log('Цель будет достигнута за: ' + Math.ceil(appData.getTargetMonth()) + ' месяца(ев)');
} else {
  console.log(' Цель не будет достигнута');
}
console.log(appData.getStatusIncome());

for (let key in appData) {
  console.log(' Наша программа включает в себя данные: ' + key + '-' + appData[key]);
}