"use strict";
// Ejercicio 1 - página 26:
//Escribe un programa que a partir de un número entero de tres dígitos entregue el número con los dígitos en orden inverso:
Object.defineProperty(exports, "__esModule", { value: true });
// let numOriginal: number = 145;
// let numString: string = numOriginal.toString()
// let numArray: Array<string> = numString.split('').reverse()
// let numUnir: string = numArray.join('')
// console.log(numUnir)
//Solución 2
var invertirNumero = function (numero) {
    var numString = numero.toString();
    var numArray = numString.split('').reverse();
    var numUnir = numArray.join('');
    console.log("El n\u00FAmero inicial es: ".concat(numero, ". El n\u00FAmero invertido es: ").concat(numUnir));
};
invertirNumero(145);
