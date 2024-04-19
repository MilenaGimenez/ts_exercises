import * as readline from 'readline';

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
let horaActual: number = 11;
let cantHoras: number = 43;

let horaFinal: number = (horaActual + cantHoras) % 24
console.log(horaFinal)


console.log(`En ${cantHoras} horas, el reloj marcará las ${horaFinal}`);

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Ingrese la hora actual: ', (nombre: string) => {
//   console.log(`Hola, ${nombre}!`);
  
//   rl.close();
// });

// ;