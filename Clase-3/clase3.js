// // Propiedades dinamicas:
// const año = 2023;
// const objeto = { nombre: "luciano", [ "propDinamica" + año ]: "coders" };
// console.log(objeto); 
// // Salida: 
// // { 
// //     nombre: 'luciano',
// //     propDinamica2023: 'coders'
// // }





// // Spread operator:
// const alumnosArray = ['Juan', 'Marce', 'Luis', 'Mica', 'Luz']
// const alumnosNuevosArray = ['Manu', 'Azul', 'Chiara']

// const alumnosTotal = [...alumnosArray, ...alumnosNuevosArray]
// console.log(alumnosTotal)
// const alumnosTotalSinSpread = [alumnos, alumnosNuevos]
// console.log(alumnosTotalSinSpread)
// ...alumnos = 'Juan', 'Marce', 'Luis', 'Mica', 'Luz'
// ...alumnosNuevos = 'Manu', 'Azul', 'Chiara'

// const arrayEjemplo = [1, 2, 3, 4]
// const nuevoValor = 10
// const nuevoArray = [...arrayEjemplo, nuevoValor]
// console.log(nuevoArray)








// // Desestructuracion de array o objetos
// const objetoDesestructuracion = {
//     comision: '55735',
//     alumnos: 103,
//     clases: 15,
//     tema: 'ReactJs'
// }

// // Queremos acceder al numero de comision y de alumnos:
// const nroDeComision = objetoDesestructuracion.comision
// const nroDeAlumnos = objetoDesestructuracion.alumnos
// console.log(nroDeComision)
// console.log(nroDeAlumnos)

// // Podriamos hacer lo siguiente con desestructuracion:
// const {comision, alumnos} = objetoDesestructuracion
// console.log(comision) 
// console.log(alumnos) 


// // Vamos con los arrays (es muy parecido):
// // Quiero obtener cada uno de los valores del array por separado
// const numeros = [1, 2, 3]
// const primero = numeros[0]
// const segundo = numeros[1]
// const tercero = numeros[2]

// // Con desestructuracion:
// const [primero, segundo, tercero] = numeros
// console.log(primero, segundo, tercero)






// // Operador ternario y "template literals" o "template strings"
// const miValor = 102
// if(miValor > 50){
//     console.log('mi valor es mayor a 50 y es de: ' + miValor)
// }else{
//     console.log('mi valor es menor o igual a 50 y es de: ' + miValor)
// }

// // Veamoslo con operador ternario y template strings:
// const miValor = 49
// console.log(
//     miValor > 50 ? 
//     `mi valor es mayor a 50 y es de: ${miValor}` : 
//     `mi valor es menor o igual a 50 y es de: ${miValor}`
// )

// // Solo decime si es mayor, el resto no me importa:
// miValor > 50 && console.log(`mi valor es mayor a 50 y es de: ${miValor}`)

// // A tener en cuenta:
// const miCarrito = [
//     {
//         producto: 'Monitor',
//         precio: 90000
//     },
//     {
//         producto: 'Teclado',
//         precio: 25500
//     }
// ]

// miCarrito && console.log('Hay algo en mi carrito')

// // Que pasa si el array esta vacio?
// const miCarrito = []
// miCarrito && console.log('Hay algo en mi carrito')

// // En este caso la pregunta podria ser:
// miCarrito.length > 0 &&  console.log('Hay algo en mi carrito')


