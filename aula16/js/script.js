/*let seuNumero = prompt('Insira um numero')
const valorUser = prompt('Digite seu numero, por favor!');

const numeroInformado = document.getElementById('num-Titulo');
const texto = document.getElementById('texto');

valorUser = Number(valorUser)


numeroInformado.innerHTML = valorUser
texto.innerHTML = `<p>Seu numero - 2 é ${numeroInformado - 10}<p>`
*/


let valor = prompt('Digite um numero');
valor = Number(valor);

const valorinformado = document.getElementById('valorHtml');
const raizquadrada = document.getElementById('raiz');
const valorInteiro = document.getElementById('inteiro');
const valorBoolean = document.getElementById('boolean');
const numeroIndefinido = document.getElementById('numeroNaN');
const arredondamentoUp = document.getElementById('pracima');
const arredondamentoDown = document.getElementById('prabaixo');
const decimais = document.getElementById('casadecimal');

//Calculos:
let resultadoRaizquadrada = valor ** 0.5;
let resultadoValorInteiro = Number.isInteger(valor);
let resultadoNumeroIndefinido = Number.isNaN(valor);
let resultaArredondamentoUp = Math.ceil(valor);
let resultaArredondamentoDown = Math.floor(valor);
let resultadoDecimais = valor.toFixed(2);

valorinformado.innerHTML = valor
raizquadrada.innerHTML = resultadoRaizquadrada
valorInteiro.innerHTML = valor
valorBoolean.innerHTML = resultadoValorInteiro
numeroIndefinido.innerHTML = resultadoNumeroIndefinido
arredondamentoUp.innerHTML = resultaArredondamentoUp
arredondamentoDown.innerHTML = resultaArredondamentoDown
decimais.innerHTML = resultadoDecimais