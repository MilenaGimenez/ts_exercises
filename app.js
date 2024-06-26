"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// --------------------------------------------- Ejercicio 1 - página 26:
//Escribe un programa que a partir de un número entero de tres dígitos entregue el número con los dígitos en orden inverso:
//Solución 1
// let numOriginal: number = 145;
// let numString: string = numOriginal.toString()
// let numArray: Array<string> = numString.split('').reverse()
// let numUnir: string = numArray.join('')
// console.log(numUnir)
//Solución 2
// const invertirNumero = (numero: number) => {
//     let numString: string = numero.toString()
//     let numArray: Array<string> = numString.split('').reverse()
//     let numUnir: string = numArray.join('')
//     console.log(`El número inicial es: ${numero}. El número invertido es: ${numUnir}`)
// };
// invertirNumero(145);
//--------------------------------------------- Ejercicio 2 - página 26:
//Escribe un programa a partir de una hora “actual” y un número entero de horas e indique qué hora marcará el reloj dentro de esa cantidad de horas.
//Solución 1
// let horaActual: number = 11;
// let cantHoras: number = 43;
// let horaFinal: number = (horaActual + cantHoras) % 24
// console.log(horaFinal)
// console.log(`En ${cantHoras} horas, el reloj marcará las ${horaFinal}`);
//Solución 2
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// rl.question('Ingrese la hora actual: ', (hora: string) => {
//     rl.question('Ingrese la cantidad de horas ', (cantidad: string) => {
//         const horaActual = parseInt(hora);
//         const cantHoras = parseInt(cantidad);
//         const horaFinal: number = (horaActual + cantHoras) % 24
//         console.log(`En ${cantHoras} horas, el reloj marcará las ${horaFinal}`);
//       rl.close();
//     });
//   });
//--------------------------------------------- Ejercicio 3 - página 31:
//Modifica el siguiente código (que identifica el mayor de dos números) a fin de encontrar ahora el mayor de 3 números.
// let num1: number = 12;
// let num2: number = 5;
// let num3: number = 24;
// if (num1 > num2 && num1 > num3) {
//     console.log("El mayor de los tres números es: " + num1);
// } else if (num2 > num1 && num2 > num3){
//     console.log("El mayor de los tres números es: " + num2);
// } else {
//     console.log("El mayor de los tres números es: " + num3);
// };
//--------------------------------------------- Ejercicio 4 - página 36:
//Calcule el factorial de un número.
//Solución 1:
// const num: number = 5;
// let numFinal: number = 1;
// for (let i = 1; i <= num; i++) { numFinal *= i;};
// console.log(`El factorial de ${num} es: ${numFinal}`);
//Solución 2:
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question('Ingrese un número: ', (numero: string) => {
//     const num: number = parseInt(numero);
//     let numFinal: number = 1;
//     for (let i = 1; i <= num; i++) { numFinal *= i;};
//     console.log(`El factorial de ${num} es: ${numFinal}`);
//     rl.close();
// });
//--------------------------------------------- Ejercicio 5 - página 36:
//Calcule la sumatoria de los números comprendidos en el rango [10,50]
// let contador: number = 0;
// for (let index = 10; index <= 50; index++) {
//     contador += index    
// };
// console.log(contador)
//--------------------------------------------- Ejercicio 6 - página 36:
//Calcule el promedio de un número.
// let numeros: number = 350;
// let promedio: number = numeros / 5;
// console.log("El promedio es:", promedio);
//--------------------------------------------- Ejercicio 7 - página 41:
// Escribe un programa que a partir de dos números enteros positivos, entregue la suma de todos los números comprendidos entre ellos.
// let numeroA: number = 1;
// let numeroB: number = 7; //La suma es 20
// let contador: number = 0;
// for (let i = numeroA + 1; i < numeroB; i++) {
//     const element = i;
//     contador += element;   
// };
// console.log(contador);
//--------------------------------------------- Ejercicio 8 - página 41:
// Escribe un programa que a partir de 4 números enteros positivos, los entregue ordenados de menor a mayor.
// let numeroA: number = 7;
// let numeroB: number = 0;
// let numeroC: number = 6;
// let numeroD: number = 1; //0 1 6 7
// let arrayVacio: Array<number> = [];
// for (const iterator of [numeroA, numeroB, numeroC, numeroD]) {
//     arrayVacio.push(iterator)
//     arrayVacio.sort()
// };
// console.log(arrayVacio);
//--------------------------------------------- Ejercicio 9 - página 41:
// Escribe un programa que a partir de un número entero (altura), dibuje un triángulo utilizando asteriscos.
var altura = 5;
for (var i = 1; i <= altura; i++) {
    var aterisco = "*".repeat(i);
    console.log(aterisco);
}
;
//--------------------------------------------- Ejercicio 10 - página 42:
// Escribe un programa que a partir de un número entero (altura), dibuje un triángulo utilizando asteriscos.
