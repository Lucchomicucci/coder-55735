// Promises

const myPromise = new Promise((resolve, reject) => {
    // Simulamos una operación asincrónica
    setTimeout(() => {
      const randomNumber = 1000
      if (randomNumber > 0.5) {
        resolve(randomNumber); // Si el número es mayor que 0.5, resolvemos la Promise con el número
      } else {
        reject('REJECT: El número es menor o igual a 0.5'); // Si el número es menor o igual a 0.5, rechazamos la Promise con un mensaje de error
      }
    }, 2000); // Simulamos un tiempo de espera de 2 segundos
  });

  // console.log(myPromise); // Output: Promise { <pending> }
  
  // myPromise
  //   .then(number => console.log(number)) // Output: 0.789456312
  //   .catch(error => console.error(error)) // Output: 'El número es menor o igual a 0.5'
  //   .finally(() => console.log('Me termine de resolver con o sin errores'))



// EJEMPLO ASYNC AWAIT

//   const getPromise = async () => {
//     try{
//         console.log(await myPromise)
//     }catch (e){
//         console.error(e)
//     }
// }
//   getPromise()




// MAP


// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map((number) => {
//   return number * 2;
// });

// console.log(numbers) // El map no modifica el array original sino que crea uno nuevo
// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]




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

const getUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    // Ingresar las respuestas de resolve y reject:
    const users = [
        { id: 1, name: 'Juan', age: 25 },
        { id: 2, name: 'Micaela', age: 18 },
        { id: 3, name: 'Guido', age: 14 },
        { id: 4, name: 'Flor', age: 15 },
        { id: 5, name: 'Nicolas', age: 32 }
    ]
    users.length > 0 ? resolve(users) : reject('Error no hay usuarios')
    }, 3000);
  })
}



// // Llamar a la funcion usando .then y .catch
// getUsers()
// .then(res => console.log(res)) // TABLE
// .catch(e => console.error(e))
// .finally(() => console.log('Termine de resolver o rechazar la solicitud'))

// Con async / await || try catch
// const llameUsuarios = async () => {
//   try{
//     const res = await getUsers()
//     console.log(res)
//   }catch(e) {
//     console.log('Error: ' + e)
//   }
// }

// llameUsuarios()







const getUsersData = new Promise((resolve, reject) => {
      // Simulamos una petición asincrónica para obtener los datos del usuario
      setTimeout(() => {
        const usersData = [
             { id: 1, name: 'Juan', age: 25 },
             { id: 2, name: 'Micaela', age: 18 },
             { id: 3, name: 'Guido', age: 14 },
             { id: 4, name: 'Flor', age: 15 },
             { id: 5, name: 'Nicolas', age: 32 }
        ];
        if (usersData) {
          resolve(usersData); // Si se resuelve con éxito, devolvemos los datos del usuario
        } else {
          reject('No se pudo obtener los datos del usuario'); // Si falla, rechazamos la Promise con un mensaje de error
        }
      }, 3000); // Simulamos un tiempo de espera de 3 segundos
  })
  
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


