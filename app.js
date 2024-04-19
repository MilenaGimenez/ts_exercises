// Ejercicio 1 - página 26:
//Escribe un programa que a partir de un número entero de tres dígitos entregue el número con los dígitos en orden inverso:
var numOriginal = 145;
var numString = numOriginal.toString();
var numArray = numString.split('').reverse();
var numUnir = numArray.join('');
console.log(numUnir);
console.log(typeof numUnir);
