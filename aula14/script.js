//IEEE 754-2008

let num1 = 0.8;
let num2 = 0.1;

// console.log(num1.toString() + num2) //Nao altera o tipo do dado. 
// num1 = num1.toString();  Dessa forma é alterado o tipo de dado.
//console.log(num1.toString(2));
//console.log(typeof num1);
//console.log(num1.toFixed(2));
// console.log(Number.isInteger(num1)); //Numero de valor inteirno retorna Boolean

num1 += num2 // 0.9
num1 += num2 // 1.0
num1 += num2 // 1.1
//num1 += num2 // 1.2

num1 = parseFloat(num1.toFixed(2));

console.log(num1);
let temp = num1 * '5';
console.log(Number.isNaN(temp));
console.log(Number.isInteger(num1));