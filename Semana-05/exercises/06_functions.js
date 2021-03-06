console.log ('--EXERCISE 6: FUNCTIONS');

/*a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable,
mostrando el valor de dicha variable en la consola del navegador.*/

console.log('-Exercise 6.a:');

function suma(num1,num2){
    return num1 + num2;
}

var result = suma(5, 10);

console.log('Result:', result);

/*b. A la función suma anterior, agregarle una validación para controlar si alguno 
de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros 
tiene error y retornar el valor NaN como resultado.*/

console.log('-Exercise 6.b:');

function suma(numA, numB) {
    if (typeof(numA) != 'number' || typeof(numB) != 'number'){
		alert('One (or both) of the parameters is not a number');
		return NaN;
	}
	return numA + numB;
}

var nan = suma("nn", 10);

console.log('Error:', nan);

/*c. Crear una función validate integer que reciba un número como parámetro y 
devuelva verdadero si es un número entero.*/

console.log('-Exercise 6.c:');

function validateInteger (integer) {
    if (integer === Math.floor(integer)) {
        return true;
    }
    return false
}

var integer = validateInteger(4);
var integerNon = validateInteger(4.5);

console.log('Number: 4');
console.log('Is it integer?:',integer);
console.log('Number: 4.5')
console.log('Is it integer?:',integerNon);

/*d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. 
En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).*/

console.log('-Exercise 6.d:');

function suma1(numA, numB) {
	if (typeof(numA) != 'number' || typeof(numB) != 'number'){
		alert('One (or both) of the parameters is not a number');
		return NaN;
	}
	if (!validateInteger(numA)) {
		alert(`${numA} is not an integer`);
		numA = Math.round(numA);
	}
	if (!validateInteger(numB)) {
		alert(`${numB} is not an integer`);
		numB = Math.round(numB);
	}

	return numA + numB;
}

var resultInt = suma1(10, 20); 
var resultFloatsA = suma1(3.7, 8);
var resultFloatsB = suma1(40, 9.2);
var notResult = suma1('nn', 2)

console.log('Result integer:', resultInt);
console.log('Result with floats:', resultFloatsA);
console.log('Result with floats:', resultFloatsB);
console.log('Result with string:', notResult);

/*e. Convertir la validación del ejercicio 6d) en una función separada
y llamarla dentro de la función suma probando que todo siga funcionando igual.*/

console.log('-Exercise 6.e:');

function integerValidator(newNum) {
	return validateInteger(newNum) ? newNum : Math.round(newNum);
}

function suma2(numA, numB) {
	if (typeof(numA) != 'number' || typeof(numB) != 'number'){
		alert('One (or both) of the parameters is not a number');
		return NaN;
	}
	if (!validateInteger(numA)) {
		alert(`${numA} is not an integer`);
	}
	if (!validateInteger(numB)) {
		alert(`${numB} is not an integer`);
	}

	numA = integerValidator(numA);
	numB = integerValidator(numB);

	return numA + numB;
}

var resultInt2 = suma2(10, 20); 
var resultFloatsA2 = suma2(3.7, 8);
var resultFloatsB2 = suma2(40, 9.2);
var notResult2 = suma2('nn', 2)

console.log('Result Integer:', resultInt2);
console.log('Result with floats:', resultFloatsA2);
console.log('Result with floats:', resultFloatsB2);
console.log('Result with string:', notResult2);