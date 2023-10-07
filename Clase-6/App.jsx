import { useState } from 'react'
import './App.css'
import NavBar from './components/navBar/navBar'
import ItemListContainer from './components/itemListContainer/itemListContainer'
// import Contador from './components/contador/contador.jsx'
import { Button } from 'antd'

function App() {
  const [mostrar, setMostrar] = useState(true)

  return (
    <>
      <NavBar />
      {mostrar && <ItemListContainer greeting="Hola, bienvenido a nuestro ecommerce" />}
      <Button onClick={() => setMostrar(!mostrar)}>Click</Button>
    </>
  )
}

export default App
