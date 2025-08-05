/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/

let anoAtual = new Date().getFullYear();
const nome = 'Guilherme'
const sobrenome = 'Bueno'
const idade = 25;
const peso = 78;
const altura = 1.76;
let imc;
let anoNascimento = 2000

let calculaIdade = anoAtual - anoNascimento;
imc =  peso / (altura * altura);


console.log(nome, sobrenome, 'possui', calculaIdade, 'anos', ', pesa', peso, 'kg')
console.log('possui', altura, 'e seu IMC é de', imc)

console.log('teste')