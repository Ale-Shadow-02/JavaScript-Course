/* function ShowFunc (koleso) {
  koleso--;
  console.log('koleso: ', koleso);

  if (koleso > 0) {
    ShowFunc(koleso);
  }
}

ShowFunc(4);*/

let a = 3;
/*let g = 0;
while (a <= 10) {
  let g = a;
  a++;
  console.log(g);
}
 */

/*  do {
   console.log(a);
   a++;
 }
 while (a < 5);
   
 
 */
let money;

let start = function () {
  money = prompt('Ваш месячный доход?', 25000);
  while (isNaN(money) || money === '' || money === null) {
    money = prompt('Ваш месячный доход?', 25000);
    console.log(' money : ', money);
  }
};




let expenseArr1,
  expenseArr2;

let getExpensesMonth = function () {
  let sum = 0;
  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      expenseArr1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', ' Кредит Альфа ');
    }
    if (i === 1) {
      expenseArr2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', ' Кредит Сбер ');
    }

    sum += start();
    
  }
  return sum;
};


console.log('getExpensesMonth(): ', getExpensesMonth());


