// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  var aux=nombre[0];
  var l=nombre.length;
  switch(aux){
    case "a":
      aux="A"; break;
    case "b":
      aux="B"; break;
    case "c":
      aux="C"; break;
    case "d":
      aux="D"; break;
    case "e":
      aux="E"; break;
    case "f":
      aux="F"; break;
    case "g":
      aux="G"; break;
    case "h":
      aux="H"; break;
    case "i":
      aux="I"; break;
    case "j":
      aux="J"; break;
    case "k":
      aux="K"; break;
    case "l":
      aux="l"; break;
    case "k":
      aux="L"; break;
    case "m":
      aux="M"; break;
    case "n":
      aux="N"; break;
    case "o":
      aux="O"; break;
    case "p":
      aux="P"; break;
    case "q":
      aux="Q"; break;
    case "r":
      aux="R"; break;
    case "s":
      aux="S"; break;
    case "t":
      aux="T"; break;
    case "u":
      aux="U"; break;
    case "v":
      aux="V"; break;
    case "w":
      aux="W"; break;
    case "x":
      aux="X"; break;
    case "y":
      aux="Y"; break;
    case "z":
      aux="Z"; break;
  }
  for(var i=1;i<l;i++){
    aux=aux+nombre[i];
  }
  return aux;
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  return cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1,n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  var l=numeros.length;
  var suma=0;
  for(i=0;i<l;i++){
    suma=suma+numeros[i];
  }
  cb(suma);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  var l=array.length;
  for(var i=0;i<l;i++){
    cb(array[i]);
  }
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var solve=[];
  var l=array.length;
  for(i=0;i<l;i++){
    solve.push(cb(array[i]));
  }
  return solve;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  var filtro=[];
  var aux;
  var l=array.length;
  for(var i=0;i<l;i++){
    aux=array[i];
    if(aux[0]=="a"){
      filtro.push(aux);
    }
  }
  return filtro;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
