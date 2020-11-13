/// cómo agregar elementos a una matriz

const matriz = []

for (let i = 0; i < 5; i++) {
  matriz[i] = []
  for (let j = 0; j < 5; j++) {
    // matriz[i][j] = "hola" ---  eso es equivalente al de abajo
     matriz[i].push("hola")
  }
}

console.log(matriz)

// arrays bidimensionales, matrices 

const nombres = ["malena", "carola", "agus, la dictadora", "ana"]
const edades = [33, 25, 22, 32]
const direcciones = ["pinzon 461", "anzorena 100", "san martin 285", "chacabuco 239"]


nombres[0]
edades[0]
direcciones[0]


const matriz = [
  ["malena", "carola", "agus, la dictadora", "ana"], 
  [33, 25, 22, 32], // separar arrays con coma
  ["pinzon 461", "anzorena 100", "san martin 285", "chacabuco 239"]
]

matriz[0][0]
matriz[1][0]
matriz[2][0]  // info correspondiente a Malena




for (let i = 0; i < matriz.length; i++) {
  console.log("empiezan las vueltas del primer for")
  console.log("estoy en la vuelta", i)
  console.log(matriz[i])

  for (let j = 0; j < matriz[i].length; j++) {
    console.log("estoy en la vuelta", j)
    console.log("adentro del segundo for")
    console.log(matriz[i][j])
    
  }
  
  console.log("fin de la vuelta", i, "del for de afuera")
}

// el de abajo es el for mas basico para recorrer uno a uno los elementos de un array

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    console.log(matriz[i][j])
  }
}

/// EJERCICIOS

// pasar a mayusculas la matriz
// Opcion 1

const convertirMatrizAMayusculas = (matriz)=> {
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {

      if (typeof matriz[i][j] === "string") {   /// si el typeof es string, pasar a mayuscula (porq si no saldria error al llegar a los numeros porque no sirve toUpperCase para numeros, solo strings)
        matriz[i][j] = matriz[i][j].toUpperCase()
      }
    //   else {
    //       console.log(matriz[i][j])
    //   } opcional

    }
  }
  return matriz
}

// opcion 2

const convertirMatrizAMayusculas = (matriz)=> {
    
    
    for (let i = 0; i < matriz.length; i++) {
      console.log(matriz[i])
      
      for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j].toString().toUpperCase())
      }
    }
}

console.log(convertirMatrizAMayusculas(matriz))


/// Crear una función obtenerNumeroMayor que tome como argumento un array 2d de números matriz y devuelva el mayor número de dicha matriz.

const obtenerNumeroMayorDeMatriz = (matriz) => {
    let contadora = 0
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] > contadora) {
                contadora = matriz[i][j];
            }
        }
    }
    return contadora;
    // devuelva el mayor número de dicha matriz.
  };
  
  console.log(obtenerNumeroMayorDeMatriz([[ 2, 7, 12, 1 ], [ 8, 23 ], [ 9, 45, 7 ], [ 22, 3, 24, 4 ]])); // 45



// Crear una función esMatrizCuadrada que tome como argumento un array 2d matriz y devuelva true si es una matriz cuadrada, es decir, si tiene igual cantidad de filas que de columnas, o false si no lo es.

const esMatrizCuadrada = (matriz) => {
    for (let i = 0; i < matriz.length; i++) {
      if (matriz.length !== matriz[i].length) {
        return false
      }
    }
    return true 
}
  
console.log(esMatrizCuadrada([
  [4, 5], 
  [2, 7, 1],
  [8, 10, 2], 
])) // false

console.log(esMatrizCuadrada([
  [4, 5, 3],
  [2, 7, 1],
  [8, 10],
])) // false

console.log(esMatrizCuadrada([
  [4, 5, 9],
  [2, 7, 1],
  [8, 10, 5],
])) // true


/// Crear una función generarGrilla que tome como argumentos un número entero filas, un número entero columnas y un array de valores items, y devuelva una matriz de filas filas y columnas columnas, donde cada ítem de la matriz es un ítem aleatorio de items.

// Como todos los problemas complejos, comenza por dividirlo en problemas mas pequeños: por ejemplo, comenza por una funcion que devuelva un numero aleatorio. Una vez que la tengas, hacé una función que reciba un array y devuelva un número aleatorio en cada posición de ese array. Luego, mejorala para hacer que devuelva un array cuyos elementos sean elementos aleatorios del array recibido como parametro. Solo entonces, hace la funcion generarGrilla.
const frutas = ['🍉', '🥥', '🍋', '🥝', '🍒', '🍑']

const obtenerNumeroAlAzar = (array) => {
  return Math.floor(Math.random() * array.length)
}


const generarGrilla = (filas, columnas, items) => {

  let grilla = []
  for (let i = 0; i < filas; i++) {
    grilla[i] = []  
    for (let j = 0; j < columnas; j++) {  // la j se usa porque es un for dentro de otro for
      grilla[i][j] = items[obtenerNumeroAlAzar(items)]
      
    }  
  }
  return grilla
}



console.log(generarGrilla(9, 9, frutas))










// const arrayAlAzar = (array) => {
//   const array2 = []
 
//   for (let i = 0; i < array; i++) {
//     NO ESTA TERMINADO array[obtenerNumeroAlAzar(array)]
//   }
//   return array
// }

// console.log(arrayAlAzar(["a", "b", "c"]))




