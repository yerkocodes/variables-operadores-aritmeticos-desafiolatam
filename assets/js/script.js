//***************************************************************************************
//	Pedir dos valores y realizar suma, resta, division, multiplicacion y modulo.
//***************************************************************************************

const operadores = () => { 

  alert("Vamos a calcular la suma, resta, division, multiplicacion y el modulo de dos valores!");

  //Declaramos dos variables.
  let num1, num2;

  //Solicitamos los dos valores de las variables.
  num1 = parseInt(prompt("Ingresa el primer valor", ""));
  num2 = parseInt(prompt("Ingresa el segundo valor", ""));

  // Si ambos numeros son mayores a 0 ejecutar las operaciones.
  if (num1 > 0 & num2 > 0) {

    let sum = num1 + num2;
    let rest = num1 - num2;
    let div = num1 / num2;
    let mult = num1 * num2;
    let mod = num1 % num2;

    //Imprimir en pantalla los resultados de todas las operaciones.
    alert(`Los resultados para los valores ${num1} y ${num2} son: \n
    ${num1} + ${num2} = ${sum} \n
    ${num1} - ${num2} = ${rest} \n
    ${num1} / ${num2} = ${div} \n
    ${num1} * ${num2} = ${mult} \n
    ${num1} % ${num2} = ${mod}`);

  } else {

    // Si los valores ingresados no son mayores a 0 imprimir en pantalla el siguiente mensaje.
    alert("Los valores a ingresar deben ser mayor a 0");
  };
};

//****************************************************************************
//	Transformar grados ingresados en Celcius a Kelvin y Fahrenheit.
//****************************************************************************

const gradosconvert = () => {
  
  //Se solicita al usuario el dato a ingresar.
  let celcius = parseInt(prompt("Cual es la temperatura que deseas convertir a grados Kelvin y Fahrenheit.", "Ingresa la temperatura sin agregar '°C'"));

  //Se establecen variables para Kelvin y Fahrenheit para definir cual es el equivalente de 0 grados celcius a cada uno de ellos.
  const tokel = (celcius + (0 + 273.15));
  const tofaren = ((celcius * (9 / 5) + 32));

  //Se imprime en pantalla la convercion de 'celcius' a Kelvin y Fahrenheit.
  alert(`${celcius}°C equivalen a ${tokel} grados Kelvin. \n
      ${celcius}°C equivalen a ${tofaren} grados Fahrenheit.
    `);

};

//***********************************************
//	EQUIVALENTE DE DIAS EN AÑOS Y MESES
//***********************************************

const daystoyear = () => {
  alert("Ingresa una cantidad de días y los convertiremos a años, meses y semanas.");

  //Se define una variable para los numeros de dias que solicite el usuario.
  let days = parseInt(prompt("Ingresa un numero de dias", ""));

  //Si el valor es mayor a 0 ejecutar las operaciones.
  if (days > 0) {

    //Calculo de años.
    let years = Math.floor(days / 365);
    //Calcular el sobrante de years.
    let dayssob = Math.floor(days % 365);
    //Calcular el sobrante de dias en semanas.
    let weeksob = Math.floor(dayssob / 7);
    //Calcular el sobrante de semanas.
    let prueba = Math.floor(dayssob % 7);
    alert(`years ${years}, ${weeksob}, ${prueba}`);

  //Si el valor ingresado por el usuario no es mayor a 0 ejecutar un mensaje.
  } else {
    alert("El numero de dias debe ser mayor a 0");
  }

}

//*****************************************
//	SUMA Y PROMEDIO DE 5 VALORES
//*****************************************

const sumprom = () => {

  alert(`Calcularemos la suma y promedio de 5 valores!`);
  
  //Solicitamos al usuario los 5 valores por separado para poder realizar las operaciones.
  let num1 = parseInt(prompt("Ingrese el primer numero", ""));
  let num2 = parseInt(prompt("Ingrese el segundo numero", ""));
  let num3 = parseInt(prompt("Ingrese el tercer numero", ""));
  let num4 = parseInt(prompt("Ingrese el cuarto numero", ""));
  let num5 = parseInt(prompt("Ingrese el quinto numero", ""));

  //Se definen dos variables. Una para calcular la suma de todos y otra para el promedio.
  let resultsum = num1+num2+num3+num4+num5;
  let resultprom = ((num1+num2+num3+num4+num5) / 5);

  //Se imprime en pantalla ambas operaciones segun lo que el usuario ingreso.
  alert(`La suma de los 5 digitos es: ${resultsum} \n
      El promedio de los 5 digitos es: ${resultprom}
    `);
};
