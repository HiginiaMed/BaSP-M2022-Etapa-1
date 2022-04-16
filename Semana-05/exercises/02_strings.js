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
 /*c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
  con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

  var tenString = 'radium rocket';
  var three = (tenString.substring(10));
  
  console.log(three);

  console.log('-Exercise 2.d:');
  /*d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la
  primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable 
  (utilizar substring, toUpperCase, toLowerCase y el operador +).*/

  var tenSt = 'inglaterra';
  var up = tenSt.toUpperCase();
  var low = up.toLowerCase();
  var justUp = (up.substring(0,1));
  var justLow = (low.substring(1));
  var country = (justUp + justLow);

  console.log(country);

  console.log('-Exercise 2.e:');
  /*e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
  Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/
  
  var spaceTen= 'Maria Higinia';
  var space= spaceTen.indexOf(' ');

  console.log(space);  

  console.log('-Exercise 2.f:');
  /*f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
  Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera 
  letra de ambas palabras en mayúscula y las demás letras en minúscula 
  (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +). */

  var tenSpaceTen = 'republicas independientes';
  var space2= tenSpaceTen.indexOf(' ');
  var firstWord = (tenSpaceTen.toUpperCase()).substring(0,1) + tenSpaceTen.substring(1,11);
  var secondWord = (tenSpaceTen.toUpperCase()).substring(11,12) + tenSpaceTen.substring(12);
  var newWord = (firstWord + secondWord);

  console.log (newWord);






