//Parte #2
//Declarar dos variables con la palabra reservada "var", imprimir 
//el resultado de las operaciones de "Suma", "Resta", "Multiplicación" y "División" 
//en la consola. Las variables pueden ser estáticas. (10pts)

let num1 = 20;
let num2 = 10;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

//Parte #2
//Declarar dos variables con la palabra reservada "let", imprimir la concatenación de ellas. (10pts)
let nombre = 'Hector';
let apellido = 'Ortega';

console.log("Mi nombre es "+nombre +" "+apellido);

//Parte  #3
//Declarar dos variables con la palabra reservada "const", imprimir cuál es el tipo de dato de esa variable. (10pts)
const nombre2 = 'Rodolfo';
const num3 = 23;

console.log(typeof(nombre2));
console.log(typeof(num3));

//Parte #4
//Declarar una variable tipo Objeto, colocar 4 llaves dentro de él que contengan un number,
// un string, un booleano y un objeto vacío, en ese mismo orden. (10pts)

const objeto1 = {
    edad : 22,
    Nombre : 'Hector',
    Activo  :true,
    ObjetoVacio: {}
};

//Parte #5
//Escribir una función en JS que tome un número entero positivo como 
//argumento y devuelva la suma de todos los números menores que sean
// múltiplos de 3 o 5. Por ejemplo: Si el número dado es 10, la función 
//debería devolver la suma de 3, 5, 6 y 9, que es 23. (50 pts)

function sumaImpar(num){
    let suma = 0;
    for(i = 1;i < num; i++ ){
        if(i % 3 == 0 || i % 5 == 0){
            suma +=i ;
        }

    }

    return suma;

}

const fun = sumaImpar(10);
console.log(fun);



