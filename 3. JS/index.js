//lenguaje de programcion> javascript(frontend) javascript(backend)->nodejs
//JAVASCRIPT
//1.Tipado datos: dinamico / estatico R=dinamico
//2.Cómo se ejecuta el lenguaje: interpretados / compilados R=interpretado
//3. qué paradigma sigue el lenguaje: procedimentales / objetos / eventos //multiparadigma R= multiparadigma

//variables, condicionales, ciclos, funciones, estructuras de datos, objetos
//APIs DOM, FETCH
//literales
console.log(2 + 2);
console.log("2+2");
console.log("hola mundo");
console.log("2" + "2");
console.log("2" + 2);
console.log(2 + "2");
console.log(2 + true);
console.log(2 + false);
console.log(false + false);
console.log(2 * "*");

//declaracion variables
let nombre = "juan"; //variables locales
var apellido = "perez"; //variables globales
const edad = 30; //constantes, no cambian el valor
console.log(edad);

//tipos variables: enteros, flotantes, boleanos, cadenas, referencia
//enteros
//debugger; //DEPURAR CODIGO JS
let numero = 10;
//flotante
let numero2 = 10.5;
//boleano
let sesionUsuario = true;
let sesionUsuario2 = false;
//cadenas
let nombreUsuario = "juan"; //SON INMUTABLES

//CONDICIONALES
let edadPersona = 18;
console.log(edadPersona > 18);
console.log(edadPersona < 18);
console.log(edadPersona == 18);
console.log(edadPersona != 18);

let numero1 = 1;
let numero3 = "1";
console.log(numero1 == numero3);
console.log(numero1 === numero3);

if (numero1 === numero3) {
  console.log("son iguales");
} else {
  console.log("no son iguales");
}

let sesion = false;

if (sesion == true) {
  alert("sesion iniciada");
  console.log("sesion iniciada");
} else {
  alert("sesion no iniciada");
  console.log("sesion no iniciada");
}

//operador ternario ?
//sesion ? alert("sesion iniciada") : alert("sesion no iniciada");

let nombreEstudiante = "juan";

nombreEstudiante == "gabriel"
  ? console.log("hola juan")
  : console.log("no eres juan");

if (nombreEstudiante == "juan") {
  console.log("hola juan");
} else {
  console.log("no eres juan");
}

//ciclos while, for
//tres elementos de un ciclo: inicio, condicion, incremento
//contar del 1 al 5
let inicio = 1;
while (inicio <= 5) {
  console.log(inicio);
  inicio = inicio + 1;
}

//for es un ciclo compacto
for (let i =1;i<=5;i++){
  console.log("ciclo for", i);
  console.log(`Ciclo for: ${i}`);
}

//Funcion: Alista el codigo para poderlo reutilizar
/*
1. Parametro y retorno
2. parametro y sin retorno
3. Sin parametro y retorno*/

function saludar(dato){
  console.log("hola", dato);
}
//invoco la funcion
saludar ("Juan");
saludar("Leidy");

//función anonima
let suma = function (numero1, numero2){
  return numero1 + numero2;
};
console.log(suma(2,3));

//Funciones de flecha y funciones anonimas
let resta =(numero1 , numero2) =>{
  return numero1 -numero2 ;
}
console.log(resta(2,4))

//Funciones Nativas
let saludo = "holaa hola";
console.log(saludo.toUpperCase());

/*
Estructuras de datos:
1. Arreglos o vectores o listas
2. dicciones o map */

let edades = [12,34,56,78,12]
edades //muestra todo el arreglo
console.log(edades[2]);
console.log(edades);

let personas =[["Leidy",26,"leimoldi"],["Andres",30,"aalfaro"]]
console.log(personas);
console.log(personas[1][2]);

//ciclos para recorrer listas
//map realiza un mapeo del arreglo
edades
edadesAux = edades.map((edad)=> edad+1)
console.log(edadesAux);

//Reduce, reduce una expredion de un arreglo
let promedio = edades.reduce((sumatoria,edad)=>{
  return sumatoria+edad
},0)/edades.length
//el 0 en la funcion me permite inicializar el acumulador o sumatoria
console.log(promedio);

let promedio1 = edades.reduce((sumatoria=0,edad)=>{
  return sumatoria+edad
})/edades.length
//el 0 en la funcion me permite inicializar el acumulador o sumatoria
console.log(promedio1);

//foreach me recorre el arreglo
edades.forEach ((edad)=>{
  console.log("edad ->",edad)
});
for ( let i = 0; i < edades; i ++){
  console.log(edades[i]);
}

// find busca en el arreglo un elemento que cumpla con x condición
let filtroEdad = edades.find((edad)=>edad==12)
console.log(filtroEdad);

let filtroEdades = edades.find((edad)=>edad>20)
console.log(filtroEdades);

//filter, me filtra una lista pero devuelce una nueva lista

letFiltroEdad2 = edades.filter ((edad)=>edad>18)
console.log(letFiltroEdad2);

//Objetos = representación de algo que es real
/*
let estudiante ={
  correo: "lmmolano@gmail.com",
  nombre: "Leidy",
  apellido: "Molano"
}
estudiante.correo
estudiante.nombre
estudiante.apellido

let usurio ={
  correo: "jhonm@gmail.com",
  nombreusurio: "jmendez",
  contraseña: "123"
}

let producto= {
  nombre :"leche",
  precio: 5500,
  codigo: 56789,
  descripcion: "leche en caja"
}*/

let estudiante1 ={
  correo: "lmmolano@gmail.com",
  nombre: "Leidy",
  apellido: "Molano"
}

let estudiante2 ={
  correo: "camezquita@gmail.com",
  nombre: "Camilo",
  apellido: "Amezquita"
}

let estudiantes =[estudiante1,estudiante2]
console.log(estudiantes);
console.log(estudiantes[1]).apellido;