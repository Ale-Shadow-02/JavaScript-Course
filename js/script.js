let num = 266219;

num = 1;
let arrNum = [2, 6, 6, 2, 1, 9];
for (let i = 0; i < arrNum.length; i++) {
  num = num * arrNum[i];
}
console.log('num: ', num);

num **= 3;
console.log('num: ', num);

num = String(num);

console.log(num.substr(0, 2));


/* let num = 266219;
num = 2 * 6;
num *= 6;
num *= 2;
num *= 1;
num *= 9;
console.log('num: ', num);

num **=3;
console.log('num: ', num);

num = String(num);
console.log(num.substring(0, 2)); */