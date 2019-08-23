let num1 = 266219;

num1 = 1;
let arrNum = [2, 6, 6, 2, 1, 9];
for (let i = 0; i < arrNum.length; i++) {
  num1 = num1 * arrNum[i];
}
console.log('num1: ', num1);

num1 **= 3;
console.log('num1: ', num1);

num1 = String(num1);

console.log(num1.substr(0, 2));