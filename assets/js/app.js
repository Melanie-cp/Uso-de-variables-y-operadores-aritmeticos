//Programa para operaciones aritméticas
// Se crean dos variables que el usuario llenará
const numero1 = +prompt("ingrese el primer número entero mayor que 0")
const numero2 = +prompt("ingrese el segundo número entero mayor que 0")

//se crean variables según cada operación a realizar
const resultadoSuma = numero1 + numero2
const resultadoResta = numero1 - numero2
const resultadoMulti = numero1 * numero2
const resultadoDiv = numero1 / numero2
const resultadoMod = numero1 % numero2

//Se crea la variable con la frase interpolada
const resultadoOperaciones = `Para los numeros ${numero1} y ${numero2}: <br/> La suma es: ${resultadoSuma} <br/> La resta es: ${resultadoResta} <br/> La multiplicación es: ${resultadoMulti} <br/> La división es: ${resultadoDiv} <br/> El modulo es: ${resultadoMod}`

//se crea un titulo para la sección
document.open();
document.write("<h2>Operaciones con dos números</h2>");
document.close();

//se imprime la frase que da los rasultados a las operaciones
document.write(resultadoOperaciones);

// programa para convertir celsius a fahrenheit y kelvin
// preguntar el valor de celcius al usuario
const celsius = +prompt("Ingrese un valor de grados celcius: ");

// calcular fahrenheit
const fahrenheit = (celsius / 1.8) + 32
const kelvin = (celsius + 273.15)

//Se crea la variable con la frase interpolada
const resultadoTemperaturas = `${celsius} grados celcius equivalen a ${fahrenheit.toFixed(2)} Fahrenheit y ${kelvin} Kelvin.`

//se crea un titulo para la sección
document.open();
document.write("<h2>Convertidor de Temperaturas</h2>");
document.close();

// imprimir el resultado
document.write(resultadoTemperaturas)

//programa que pida al usuario una cantidad de días y que muestre su equivalente en Años, Semanas y Día
//preguntar la cantidad de días al usuario
const numeroDeDias = +prompt("Ingrese una cantidad de días")

//transformar de dias a años, semanas y dias
let anios = Math.floor(numeroDeDias / 365);
let semanas = Math.floor(numeroDeDias % 365 / 7);
let dias = Math.floor(numeroDeDias % 365 % 30);

//Se crea la variable con la frase interpolada
const resultadoDias = `${numeroDeDias} días equivalen a ${anios} años, ${semanas} semanas y ${dias} días.`

//se crea un titulo para la sección
document.open();
document.write("<h2>Calculadora de Días</h2>");
document.close();

// imprimir el resultado
document.write(resultadoDias)

//programa para sacar promedio de 5 numeros
//preguntar los 5 numeros al usuario
const num1 = +prompt("ingrese el primer número")
const num2 = +prompt("ingrese el segundo número")
const num3 = +prompt("ingrese el tercer número")
const num4 = +prompt("ingrese el cuarto número")
const num5 = +prompt("ingrese el quinto número")

//operacion de suma
const resultadoSuma2 = num1 + num2 + num3 + num4 + num5

//operacion de promedio
const promedio = resultadoSuma2 / 5

//Se crea la variable con la frase interpolada
const resultadoPromedio = `La suma de los 5 numeros es: ${resultadoSuma2}. El promedio de ellos es: ${promedio.toFixed(2)}`

//se crea un titulo para la sección
document.open();
document.write("<h2>Promedio 5 numeros</h2>");
document.close();

// imprimir el resultado
document.write(resultadoPromedio)


