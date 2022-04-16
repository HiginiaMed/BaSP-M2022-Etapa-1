console.log ('--EXERCISE 3: ARRAYS');

console.log('-Exercise 3.a:');
/*a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).*/

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 
'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

console.log(months [4]);
console.log(months [10]);

console.log('-Exercise 3.b:');
//b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

console.log(months.sort());

console.log('-Exercise 3.c:');
//c. Agregar un elemento al principio y al final del array (utilizar unshift y push).

months.unshift('*'),months.push('**');

console.log(months);

console.log('-Exercise 3.d:');
//d. Quitar un elemento del principio y del final del array (utilizar shift y pop).

months.shift();
months.pop();

console.log(months);

console.log('-Exercise 3.e:');
//e. Invertir el orden del array (utilizar reverse).

months.reverse();

console.log(months);

console.log('-Exercise 3.f:');
//f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

var join = (months.join(' - '));

console.log(join);

console.log('-Exercise 3.g:');
//g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 
'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
var mayToNov = months.slice(4, 11);

console.log(mayToNov);

