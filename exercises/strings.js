// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el
// texto en mayúscula (utilizar toUpperCase).
var str = "javascript es genial";
var upperStr = str.toUpperCase();
console.log(upperStr);

/**
 * b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con los primeros 5 caracteres guardando el resultado en una nueva
variable (utilizar substring).
 */
var str2 = "programacion";
var firstFive = str2.substring(0, 5);
console.log(firstFive);

/**
 * c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con los últimos 3 caracteres guardando el resultado en una nueva variable
(utilizar substring).
 */
var lastThree = str2.substring(str2.length - 3);
console.log(lastThree);

/**
 * d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con la primera letra en mayúscula y las demás en minúscula. Guardar el
resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y
el operador +).
 */
var formattedStr =
  str2.substring(0, 1).toUpperCase() + str2.substring(1).toLowerCase();
console.log(formattedStr);

/**
 * e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en
blanco. Encontrar la posición del primer espacio en blanco y guardarla en una
variable (utilizar indexOf).
 */
var str4 = "aprendiendo javascript";
var firstSpace = str4.indexOf(" ");
console.log(firstSpace);

/**
 * f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y
algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para
generar un nuevo string que tenga la primera letra de ambas palabras en
mayúscula y las demás letras en minúscula (utilizar indexOf, substring,
toUpperCase, toLowerCase y el operador +).
 */
var str5 = "desarrollador javascript";
var spaceIndex = str5.indexOf(" ");
var firstWord = str5.substring(0, spaceIndex);
var secondWord = str5.substring(spaceIndex + 1);
var capitalizedFirstWord =
  firstWord.substring(0, 1).toUpperCase() +
  firstWord.substring(1).toLowerCase();
var capitalizedSecondWord =
  secondWord.substring(0, 1).toUpperCase() +
  secondWord.substring(1).toLowerCase();
var result = capitalizedFirstWord + " " + capitalizedSecondWord;
console.log(result);
