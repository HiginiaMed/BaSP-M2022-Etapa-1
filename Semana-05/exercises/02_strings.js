console.log ('--EXERCISE 2: STRINGS');

console.log('-Exercise 2.a:');
/*a. Crear una variable de tipo string con al menos 10 caracteres y
convertir todo el texto en mayúscula (utilizar toUpperCase).*/

var myName = 'maria higinia medica';

var fullName = myName.toUpperCase();

console.log(fullName);

console.log('-Exercise 2.b:');
/*b. Crear una variable de tipo string con al menos 10 caracteres y generar
 un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

 var ten = 'university';
 var five = (ten.substring(0,5));

 console.log(five);

 console.log('-Exercise 2.c:');
 /*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
  con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

  var tenString = 'radium rocket';
  var three = (tenString.substring(10));
  
  console.log(three);