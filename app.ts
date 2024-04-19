// Ejercicio 1 - página 26:
//Escribe un programa que a partir de un número entero de tres dígitos entregue el número con los dígitos en orden inverso:

let numOriginal: number = 145;
let numString: string = numOriginal.toString()
let numArray: Array<string> = numString.split('').reverse()
let numUnir: string = numArray.join('')

console.log(numUnir)