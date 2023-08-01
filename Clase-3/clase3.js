// // Propiedades dinamicas:
// const año = 19887;
// const objeto = { nombre: "luciano", [ "propDinamica" + año ]: "coders" };
// console.log(objeto); 

// // Salida: 
// // { 
// //     nombre: 'luciano',
// //     propDinamica2023: 'coders'
// // }





// Spread operator:
// const alumnosArray = ['Juan', 'Marce', 'Luis', 'Mica', 'Luz']
// const alumnosNuevosArray = ['Manu', 'Azul', 'Chiara']
// const alumnosTotal = [...alumnosArray, ...alumnosNuevosArray]
// console.log(alumnosTotal)
// ...alumnosArray = 'Juan', 'Marce', 'Luis', 'Mica', 'Luz'
// ...alumnosNuevosArray = 'Manu', 'Azul', 'Chiara'


// const alumnosTotalSinSpread = [alumnosArray, alumnosNuevosArray]
// console.log(alumnosTotalSinSpread)


// const arrayEjemplo = [1, 2, 3, 4]
// const nuevoValor = 10
// const nuevoArray = [...arrayEjemplo, nuevoValor, 22, 'hola']
// console.log(nuevoArray)
// const nuevo = [...arrayEjemplo]


// EJERCICIO:

// Crear una funcion que pasandole un numero y un array como parametro lo que haga es:
// Si el valor se encuentra dentro del array lo elimine
// Si el valor no esta dentro del array lo agregue
// RETORNE ARRAY console.log(arrayDeResultado)

let valores = [2, 6, '9', 0, 8]

// const miFuncion = (valor, array) => {
    //     // Codigo
    // }
    
    // Ayudas: podemos utilizar un .find() para ver si el valor se encuentra dentro del array
    
    
    

const miFuncionResuelta = (valor, array) => {
    const encontrado = array.find(numero => numero === valor)

    if(encontrado){
        const newArray = array.filter(numero => numero !== valor)
        return console.log(newArray)
    }else{
        const newArray = [...array, valor]
        return console.log(newArray)
    } 
}

miFuncionResuelta(9, valores)



// Y si el array seria
// let valores = [2, 6, '9', 0, '8']
// miFuncionResuelta(9, valores)






// Desestructuracion de array u objetos
const objetoDesestructuracion = {
    comision: '55735',
    alumnos: 103,
    clases: 15,
    tema: 'ReactJs'
}

// // Queremos acceder al numero de comision y de alumnos:
// const nroDeComision = objetoDesestructuracion.comision
// const nroDeAlumnos = objetoDesestructuracion.alumnos
// console.log(nroDeComision)
// console.log(nroDeAlumnos)

// // Podriamos hacer lo siguiente con desestructuracion:
// const {comision, alumnos, clases, tema} = objetoDesestructuracion
// console.log(comision) 
// console.log(alumnos) 




// // Vamos con los arrays (es muy parecido):
// Quiero obtener cada uno de los valores del array por separado
// const numeros = [1, 2, 3]
// // const primero = numeros[0]
// // const segundo = numeros[1]
// // const tercero = numeros[2]

// // // Con desestructuracion:
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

// const miCondicion = true
// console.log(miCondicion ? 'es true' : 'es false')

// Solo decime si es mayor, el resto no me importa:
// miValor > 50 && console.log(`mi valor es mayor a 50 y es de: ${miValor}`)

// A tener en cuenta:
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
// Que error tiene la linea de abajo?
// miCarrito && console.log('Hay algo en mi carrito')


// Que pasa si el array esta vacio?
const miCarrito = []
// miCarrito && console.log('Hay algo en mi carrito')

// // En este caso la pregunta podria ser:
// miCarrito.length > 0 ? console.log('Hay algo en mi carrito') : console.log('No hay nada')

// miCarrito.length > 0 ? 'TRUE' : 'FALSE'

// if(miCarrito.length > 0){
//     console.log('TRUE')
// }else{
//     console.log('FALSE')
// }

// miCarrito.length && 'TRUE'
// if(miCarrito.length > 0){
//     console.log('TRUE')
// }






// Ejemplos comunes de Sugar Syntax:
// Sin sugar syntax:
let i = 0
i = i + 1
i = i - 1
i = i * 4
i = i / 2
// Con sugar syntax
i += 1; // Equivalente a i = i + 1; (Suma)
i -= 1; // Equivalente a i = i - 1; (Resta)
i *= 1; // Equivalente a i = i * 1; (Multiplicación)
i /= 1; // Equivalente a i = i / 1; (División)

// Otros ejemplos:
i++ // Esto suma 1
i-- // Esto resta 1



// Teoria: // --------------------------------------------------------------------------------------

// Polyfills:

// Los polyfills(también conocidos como "shims") son fragmentos de código que se utilizan para proporcionar funcionalidades modernas en navegadores o entornos que no las soportan de forma nativa.En el contexto de React(o cualquier otra biblioteca o framework de JavaScript), los polyfills son especialmente útiles para asegurarse de que tu código funcione en navegadores más antiguos que no admiten ciertas características de JavaScript o APIs del estándar ECMAScript.

// React, al ser una biblioteca de JavaScript moderna, utiliza muchas características avanzadas de ECMAScript, como "Arrow Functions", "Promises", "Map", "Set", "async/await", etc.Estas características pueden no ser compatibles con versiones antiguas de navegadores como Internet Explorer 11 o versiones más antiguas de navegadores móviles.

// Los polyfills permiten llenar esas lagunas y proporcionar una implementación compatible para las funciones o características que faltan en el navegador objetivo.De esta manera, puedes escribir código utilizando las últimas características de JavaScript y estar seguro de que funcionará en la mayoría de los navegadores, incluso los más antiguos.

// Para utilizar polyfills en proyectos de React, hay varias opciones.Algunas de las más comunes son:

// Babel: Babel es una herramienta popular que se utiliza para transpilar código JavaScript moderno a versiones más compatibles con navegadores antiguos.Junto con Babel, puedes incluir ciertos plugins o presets que incluyan polyfills para las características que necesites.

// polyfill.io: Es un servicio que permite cargar solo los polyfills necesarios según el navegador del cliente.Simplemente incluyes una URL en tu código y polyfill.io se encarga de servir los polyfills necesarios.

// core - js: Es una biblioteca que proporciona polyfills para muchas características modernas de JavaScript y es ampliamente utilizada para asegurar la compatibilidad con navegadores antiguos.

// Es importante destacar que el uso de polyfills puede aumentar el tamaño de los archivos descargados por el cliente y afectar el rendimiento, por lo que es recomendable incluir solo los polyfills necesarios para el soporte de navegadores específicos en lugar de cargar todos los polyfills en todos los navegadores.Además, es importante tener en cuenta que algunos polyfills pueden no ser completamente compatibles con todas las funcionalidades de las características modernas, por lo que siempre es recomendable realizar pruebas exhaustivas en los navegadores objetivo para garantizar que todo funcione correctamente.

// Instalar libreria de pollyfills:
// npm i core-js
// Importarla en el archivo donde la quiero usar (en este caso es el metodo find() de un array):
// import 'core-js/features/array/find';



// Webpack:

// Webpack es una herramienta de construcción de módulos para aplicaciones web. Su principal función es tomar diferentes archivos JavaScript, CSS, imágenes y otros recursos, y agruparlos en bundles (paquetes) optimizados para el navegador. De esta manera, se optimiza la carga de la aplicación y se mejora el rendimiento.

// Webpack también permite la transpilación de código moderno (como ECMAScript 6+) a versiones más antiguas para mejorar la compatibilidad con navegadores más antiguos mediante el uso de loaders. Además, ofrece una amplia gama de plugins para realizar diversas tareas, como la minificación del código, la gestión de assets, la división de bundles, entre otras.

// En resumen, Webpack es una poderosa herramienta que facilita la construcción y optimización de aplicaciones web al permitir la gestión de dependencias, la transpilación, la creación de bundles y la automatización de tareas, lo que contribuye a mejorar la eficiencia y el rendimiento de los proyectos web.

// Para profundizar WEBPACK: https://www.youtube.com/watch?v=FMNuTj89RzU&ab_channel=midudev