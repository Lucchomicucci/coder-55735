import './App.css'
import Contador from './components/contador/contador'
// import Saludo from './components/saludo/saludo'
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

// Ejercicio:
// Crear un componente de saludo con un boton y
// cuando le de click al boton aparezca en consola el nombre pasado por props

function App() {

  return (
    <> 
    {/* Ejercicio 1: */}
      {/* <h1>Titulo</h1>
      <Saludo nombre="Amir"/>
      <Saludo nombre="Yanina"/> */}


     {/*Ejercicio 2: */}
    <Contador />



    {/* Componente de libreria AntDesign */}
    <Button type="primary" icon={<SearchOutlined />}>
      Search
    </Button>
    </>
  )
}

export default App
