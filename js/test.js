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

  let words = ['первый', 'второй', 'третий'];
  for (let word of words) {
    word = word.charAt(0).toUpperCase() + word.substr(3);
    
  }
  console.log(words.join(''));