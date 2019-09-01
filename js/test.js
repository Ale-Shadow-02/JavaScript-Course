'use strict';

let money = 12000;

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
  console.log(appData.budget); 