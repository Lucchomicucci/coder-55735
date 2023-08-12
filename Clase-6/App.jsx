import { useEffect, useState } from 'react';
import './App.css';
import ListUsers from './components/listUsers'

function App() {
  const [cargando, setCargando] = useState(true)
  const [users, setUsers] = useState([])

  const getUsersData = () => {
    // Simulamos una petición asincrónica para obtener los datos del usuario
    return new Promise((resolve, reject) => {
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
}

useEffect(() => {
  getUsersData()
  .then(res => {
    setUsers(res)
  })
  .catch(e => console.error(e))
  .finally(() => setCargando(false))

}, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mi app de React</h1>
        <div>
        {cargando ? (
          <p>Cargando usuarios...</p>
        ) : (
          <ListUsers usuarios={users}/>
        )}
        </div>
      </header>
    </div>
  );
}

export default App;