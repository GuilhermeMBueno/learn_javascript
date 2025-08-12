//               12 34567
let umaString = 'Um Texto';


console.log(umaString.concat(' em um lindo dia'));

console.log(`${umaString} em um lindo dia.`);

console.log(umaString.indexOf('Texto'))
                                                        //        12 34567
console.log(umaString.lastIndexOf('o', 3)) // Neste caso é -1 pq 'Um Texto' no 3 pra < não tem nenhum o.
console.log(umaString.lastIndexOf('m', 3)) //1
console.log(umaString.lastIndexOf('U', 3)) //0

console.log(umaString.match(/[a-z]/g)) //Expressões regulares...
//Ele vai encontrar um Array. 
console.log(umaString.search(/x/));

//Alterar valores da String.
console.log(umaString.replace('Um', 'Outra'))

