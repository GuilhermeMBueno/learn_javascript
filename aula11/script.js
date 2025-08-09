//alert('Com a nossa mensagem.')

/*
Este código abaixo executa apenas em navegadores.
Pois ele aguarda uma introduçao de valor do usuario.
Que é o comando Prompt.
*/
/*

let num1 = prompt('Insira valor 1')
let num2 = prompt('Insira valor 2')
num1 = Number(num1)
num2 = Number(num2)
console.log(num1 + num2)

*/
//Já no node, ficaria mais ou menos assim: 

let num1 
let num2

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Insira valor 1: ', (num1) => {
    rl.question('Insira Valor 2: ', (num2) => {
        num1 = Number(num1);
        num2 = Number(num2);

        console.log(`A soma é: ${num1 + num2}`)
        rl.close();
    })
})

/* 
O CMD Ficaria assim:
guilhermebueno@ aula11 % node script.js
Insira valor 1: 10
Insira Valor 2: 20
A soma é: 30
*/