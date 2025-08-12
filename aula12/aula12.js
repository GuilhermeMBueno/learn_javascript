let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

const varATemp = varA;

varA = varB;
varB = varC;
varC = varATemp;

[var1, var2, var3] = [3, 1, 2]

console.log(var1, var2, var3)
console.log(varA, varB, varC)


