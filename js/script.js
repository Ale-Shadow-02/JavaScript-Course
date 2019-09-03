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
  persentDeposit: 0,
  moneyDeposit: 0,
  mission: 120000,
  period: 12,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function () {
    if (confirm('Усть ли у вас дополнительный заработок?')) {
      let itemIncom,
        cashIncom;
      do {
        itemIncom = prompt(' Какой у вас дополнительный заработок? ', ' Фриланс ');
      }
      while (!isNaN(itemIncom) || itemIncom === ' ' || itemIncom === '' || itemIncom === null);
      do {
        cashIncom = prompt(' Сколько в месяц вы на этом зарабатываете? ', 8000);
      }
      while (isNaN(cashIncom) || cashIncom === ' ' || cashIncom === '' || cashIncom === null);
      appData.income[itemIncom] = cashIncom;
    }

    let addExpenses;
    do {
      addExpenses = prompt('Перечислете возможные расходы за рaссчитываемый период через запятую', ' Кредит ');
    }
    while (!isNaN(addExpenses) || addExpenses === ' ' || addExpenses === '' || addExpenses === null);
    appData.addExpenses = addExpenses.split(',').map(function (item) {
      return item.trim();
    });



    appData.deposit = confirm('Есть ли у вас депозит в банке?');
    //Сумма всех расходов
    for (let i = 0; i < 2; i++) {
      let ExpensesItem,
        ExpensesCash;
      do {
        ExpensesItem = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Кредит Альфа');
      }
      while (!isNaN(ExpensesItem) || ExpensesItem === ' ' || ExpensesItem === '' || ExpensesItem === null);

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
  },

  // получаем данные по дипозиту
  getInfoDeposit: function () {
    if (appData.deposit) {
      do {
        appData.persentDeposit = prompt(' Какой годовой процент', 8);
      }
      while (isNaN(appData.persentDeposit) || appData.persentDeposit === ' ' || appData.persentDeposit === '' || appData.persentDeposit === null);
      do {
        appData.moneyDeposit = prompt(' Какая сумма заложена', 8000);
      }
      while (isNaN(appData.moneyDeposit) || appData.moneyDeposit === ' ' || appData.moneyDeposit === '' || appData.moneyDeposit === null);
    }
  },
  //Сколько мы накопим за определенный период если наш доход bugetMonth * на period
  calcSavedMoney: function () {
    return appData.budgetMonth * appData.period;
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

console.log(appData.addExpenses.map(function (item) {
  return item[0].toUpperCase() + item.slice(1);
}).join(', '));