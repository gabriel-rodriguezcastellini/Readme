/**
 * a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de
dicha variable en la consola del navegador.
 */
function suma(num1, num2) {
  return num1 + num2;
}
var resultado = suma(5, 10);
console.log(resultado);

/**
 * b. A la función suma anterior, agregarle una validación para controlar si alguno de
los parámetros no es un número, mostrar una alerta aclarando que uno de los
parámetros tiene error y retornar el valor NaN como resultado.
 */
function sumaB(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    alert("Uno de los parámetros tiene error");
    return NaN;
  }
  return num1 + num2;
}
var resultado = sumaB(5, "10");
console.log(resultado);

/**
 * c. Crear una función validate integer que reciba un número como parámetro y
devuelva verdadero si es un número entero.
 */
function validateInteger(num) {
  return Number.isInteger(num);
}

/**
 * d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los
números sean enteros. En caso que haya decimales mostrar un alerta con el
error y retorna el número convertido a entero (redondeado).
 */
function sumaD(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    alert("Uno de los parámetros tiene error");
    return NaN;
  }
  if (!validateInteger(num1)) {
    alert("El primer número no es un entero. Será redondeado.");
    num1 = Math.round(num1);
  }
  if (!validateInteger(num2)) {
    alert("El segundo número no es un entero. Será redondeado.");
    num2 = Math.round(num2);
  }
  return num1 + num2;
}
var resultado = sumaD(5.5, 10.3);
console.log(resultado);

/**
 * e. Convertir la validación del ejercicio 6d) en una función separada y llamarla
dentro de la función suma probando que todo siga funcionando igual.
 */
function validateAndRound(num) {
  if (!validateInteger(num)) {
    alert("El número no es un entero. Será redondeado.");
    return Math.round(num);
  }
  return num;
}

function sumaE(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    alert("Uno de los parámetros tiene error");
    return NaN;
  }
  num1 = validateAndRound(num1);
  num2 = validateAndRound(num2);
  return num1 + num2;
}
var resultado = sumaE(5.5, "10");
console.log(resultado);
