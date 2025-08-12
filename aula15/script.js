//Aprendendo sobre o Math.

let num1 = 9.49;
// let num2 = Math.floor(num1); //Arredonda para baixo.
// let num2 = Math.ceil(num1);  //Arredonda para cima.
//let num2 = Math.round(num1); // = 9 


console.log(Math.max(1, 2, 59, 41, -1));  //valida o maior numero.
console.log(Math.min(-10, 2, 431, 491, -41)); //Valida o menor numero. 


const aleatorio = Math.round(Math.random() * (10 - 5) + 5); //Irá retornar um valor aleat. entre 5 a 10.
console.log(aleatorio);
console.log(Math.pow(2, 10))

let num2 = 9 
console.log(num2 ** (1/2))

console.log(100 / 0);  // = Infinity 
console.log(typeof(100 / 0.0000))
console.log(!!(100 / 0));
