console.log ('--EXERCISE 5: FOR');

console.log('-Exercise 5.a:');
/*a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando
 un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.*/

var days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

for (var i = 0; i < 5; i++) {
    console.log(days[i]);
}

console.log('-Exercise 5.b:');
/*b. Al array anterior convertir la primera letra de cada palabra en mayúscula
 y mostrar una alerta por cada palabra modificada.*/

for (var b = 0; b < 5; b++) {
    var day = days[b];
    var daysMayus = (day.toUpperCase()).substring(0,1) + (day.toLowerCase()).substring(1);
    console.log(daysMayus);
}

console.log('-Exercise 5.c:');
/*c. Crear una variable llamada “sentence” que tenga un string vacío, 
luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro
de la variable sentence. Al final mostrar una única alerta con la cadena completa.*/

var sentence = '';

for (var c = 0; c < 5; c++) {
    sentence += days[c] + ' ';
}

console.log(sentence);

console.log('-Exercise 5.d:');
/*d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición,
es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array,
desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).*/

var empty = [];

for (var d = 0; d < 10; d++) {
    empty[d] = d;
}

console.log(empty);