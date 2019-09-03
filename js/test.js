'use strict';

/* let money = 12000;

let appData = {
  budget: money,
  budgetDay: [],
  budgetMonth: false,
  asking: function () {
    let a = +prompt ('Hau', 50);
     appData.budgetDay = a;
     appData.budgetMonth = confirm('jgjgj');
  }
};


  appData.asking();  
  console.log(appData.budget);  */

/*  let words = ['первый', 'второй', 'третий','fgh',   'jina'];
 

 /* console.log(words.map(n => `${n[0].toUpperCase()}${n.slice(1)}`).join(', ')); */
let myArr = ['первый', 'второй'];

/* myArr.map(item => {
  item = item.toString().charAt(0).toUpperCase() + item.slice(1);
}); */

/*console.log(myArr.map(item => {
  item = item.toString().charAt(0).toUpperCase() + item.slice(1);
})); */

function ValidNumber(param) {
 
  if (/^[-]?\d+$/.test(param)) {
  isNaN(param) || param === '' || param === ' ' || param === null;
  
  return param;
  }
 else {
!isNaN(param) || param === '' || param === ' ' || param === null;

  return param;
  }
}


console.log(ValidNumber(prompt(' Сколько в месяц вы на этом зарабатываете? ', 8000)));

/*  function ValidString(param) {
   while (!isNaN(param) || param === '' || param === ' ' || param === null) {
     param = prompt(' Какой у вас дополнительный заработок? ', ' Фриланс ');
   }
   return param;
 }

  
 
 
 
 console.log(ValidNumber(prompt(' Сколько в месяц вы на этом зарабатываете? ', 8000)));

console.log(ValidString(prompt (' Какой у вас дополнительный заработок? ', ' Фриланс '))); */

/*  function Valid(param) {
  if(/^[-]?\d+$/.test(param)) {
    return param;
  }
}

console.log(Valid(prompt('hghghgh kgkgk')));
/If(check) {
  .....
}    */