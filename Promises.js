// Promises

// const myPromise = new Promise((resolve, reject) => {
//     // Simulamos una operación asincrónica
//     setTimeout(() => {
//       reject('REJECT: Operacion rechazada');
//       resolve('RESOLVE: Me resolvi con exito'); 
//     }, 2000); // Simulamos un tiempo de espera de 2 segundos
//   });

// console.log(myPromise); // Output: Promise { <pending> }
  
  // myPromise
  //   .then(res => console.log(res)) // Output: RESOLVE: 'Me resolvi con exito'
  //   .catch(error => console.error(error)) // Output: 'REJECT: Operacion rechazada'
  //   .finally(() => console.log('Me termine de resolver con o sin errores'))



// EJEMPLO ASYNC AWAIT

  // const getPromise = async () => {
  //   try{
  //       console.log(await myPromise)
  //   }catch (error){
  //       console.error(error)
  //   }finally {
  //     console.log('Entro al finally')
  //   }
  // }

  // getPromise()


// Ejercicio 1:

// Crear una promise donde tengamos un numero random (lo pueden poner ustedes fijo)
// Y si ese numero es mayor a 50 entre al resolve con un msj de "El numero es mayor a 50"
// Y si ese numero es menor o igual a 50 entre al reject con un msj de 
// "El numero es menor o igual a 50"

// const myPromise = new Promise((resolve, reject) => {
// });


// Respuesta:

// const miPromise = new Promise((resolve, reject) => {
//   const num = 44;
//   num > 50 ? resolve("El número es mayor a 50") : reject("El número es menor o igual a 50");
// });

// miPromise
//   .then((resultado) => {
//     console.log(resultado);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => console.log('Terminó'));

// MAP


// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map((number, index) => {
//   console.log(index)
//   return number * 2;
// });

// console.log(numbers) // El map no modifica el array original sino que crea uno nuevo
// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]


// Ejercicio 2: 

// Crear una funcion donde a partir de un array de nombres me devuelva en la consola:
// "Hola, (nombre correspondiente)"
// Array: [Guido, Guille, Ale, Chiara, Cami]

const nombres= ["Guido", "Guille", "Ale", "Chiara", "Cami"]

nombres.map((nombre) => console.log(`Hola, ${nombre}`));



// // Rta:
// const nombres = ["Guido", "Guille", "Ale", "Chiara", "Cami"]

// const saludar = (arrayDeNombres) => {
//   return arrayDeNombres.map(n => console.log(`Hola, ${n}`))
// }

// saludar(nombres)

















// Ejercicio bonus //

// Realizar una funcion que me devuelva el listado de Usuarios despues de 3 segundos (resolve)
// con then, catch y finally 
// ACLARACION: (El finally me debe mostrar en consola el mensaje:
//  'Termine de resolver o rechazar la solicitud')

// BONUS: Lo mismo pero con try catch

// { id: 1, name: 'Juan', age: 25 },
// { id: 2, name: 'Micaela', age: 18 },
// { id: 3, name: 'Guido', age: 14 },
// { id: 4, name: 'Flor', age: 15 },
// { id: 5, name: 'Nicolas', age: 32 }




// Estructura del ejercicio:

// const getUsers = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//     // Ingresar las respuestas de resolve y reject:
//     const users = [
//         { id: 1, name: 'Juan', age: 25 },
//         { id: 2, name: 'Micaela', age: 18 },
//         { id: 3, name: 'Guido', age: 14 },
//         { id: 4, name: 'Flor', age: 15 },
//         { id: 5, name: 'Nicolas', age: 32 }
//     ]
//     users.length > 0 ? resolve(users) : reject('Error no hay usuarios')
//     }, 3000);
//   })
// }



// // Llamar a la funcion usando .then y .catch
// getUsers()
// .then(res => console.log(res)) // TABLE
// .catch(e => console.error(e))
// .finally(() => console.log('Termine de resolver o rechazar la solicitud'))

// // Con async / await || try catch
// const llameUsuarios = async () => {
//   try{
//     const res = await getUsers()
//     console.log(res)
//   }catch(e) {
//     console.log('Error: ' + e)
//   } finally {
//     console.log('Termine de resolver o rechazar la solicitud')
//   }
// }

// llameUsuarios()







// const getUsersData = new Promise((resolve, reject) => {
//       // Simulamos una petición asincrónica para obtener los datos del usuario
//       setTimeout(() => {
//         const usersData = [
//              { id: 1, name: 'Juan', age: 25 },
//              { id: 2, name: 'Micaela', age: 18 },
//              { id: 3, name: 'Guido', age: 14 },
//              { id: 4, name: 'Flor', age: 15 },
//              { id: 5, name: 'Nicolas', age: 32 }
//         ];
//         if (usersData) {
//           resolve(usersData); // Si se resuelve con éxito, devolvemos los datos del usuario
//         } else {
//           reject('No se pudo obtener los datos del usuario'); // Si falla, rechazamos la Promise con un mensaje de error
//         }
//       }, 3000); // Simulamos un tiempo de espera de 3 segundos
//   })
  
  // getUsersData()
  //   .then(usersData => {
  //       usersData.map(user => {
  //           if(user.age >= 16){
  //               console.log(user)
  //           }
  //       })
  //   })
  //   .catch(error => {
  //     console.error(error); // Si la Promise es rechazada, imprimimos un mensaje de error en la consola
  //   });




  // Dado un array de numeros crear una funcion que devuelva el valor mas bajo 
  // y el mas alto haciendo un solo loop.
  // const arrayOfNumber = [9, 4, 10, 20, 555, 2, 56, 99]




  

// function getMinorAndMajor(numbers){
//   let minor = numbers[0];
//   let major = numbers[0];
//   for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] > major){
//       major = numbers[i]
//     }

//     if(numbers[i] < minor){
//       minor = numbers[i]
//     }
//   }

//   return [minor, major]
// }

// console.log(getMinorAndMajor(arrayOfNumber))

const arrayOfNumber = [9, 4, 10, 20, 555, 2, 56, 99]

// const getMinorAndMajor = (numbers) => {
//   let minor, major
//   numbers.forEach((number, index) => {
//     !index && (minor = number, major = number)
//     minor > number && (minor = number)
//     major < number && (major = number)
//   });
//   return [minor, major]
// }


// function getMinorAndMajor(numbers) {
//   if (numbers.length === 0) {
//     return { minor: undefined, major: undefined };
//   }
//   let min = numbers[0];
//   let max = numbers[0];
//   for (const number of numbers) {
//     if (number < min) {
//       min = number;
//     }
//     if (number > max) {
//       max = number;
//     }
//   }
//   return { minor: min, major: max };
// }



// function getMinorAndMajor(numbers){
//     let min = Math.min(...numbers)
//     let max = Math.max(...numbers)
//     console.log(min)
//     console.log(max)
//   }

//  console.log(getMinorAndMajor(arrayOfNumber))

// function getMinorAndMajor(numbers){

//   let min = 0
//   let max = 0

//   for(i=0; i<numbers.length; i++){
//       if (i==0){
//           min = numbers[i]
//           max = numbers[i]
//       } else {
//           if (numbers[i]<min){
//               min = numbers[i]
//           }
//           if (numbers[i]>max){
//               max = numbers[i]
//           }
//       }
//   }
//   console.log(min)
//   console.log(max)
// }

// console.log(getMinorAndMajor(arrayOfNumber))