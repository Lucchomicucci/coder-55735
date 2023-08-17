import { useEffect, useState } from 'react';
import './App.css';
import useCounter from './customHooks/useCounter';
import { MiComponente, MiComponenteConLogica } from './components/hoc';
import Container from './components/container';
import ContainerProps from './renderProps/container';
import Counter from './components/counter';

// const Box = ({saludo, saludo2, children}) => {
//   console.log(children)
//   return(
//     <>
//       {children}
//     </>
//   )
// }

// const ComponenteChildren = () => {

//   return(
//       <p>Soy el componente children</p>
//   )
// }

function App() {
  // const [stock, setStock] = useState(20)
  // const [miTexto, setMiTexto] = useState('Hola como estas?')
  // const [carrito, setCarrito] = useState([])

  // const {contador, decrementar, aumentar, resetear} = useCounter(1, stock)

  
//   const stockContador = useCounter(10, stock)
//   const cantidadAgregada = useCounter(1, stock)

//  const agregar = (cantidad) => {
//   setCarrito([...carrito, {producto: "Remera negra oversize", cantidad: cantidad}])
//   cantidadAgregada.resetear()
//   stockContador.decrementarPorValor(cantidad)
//  }

  return (
    <div className="App">
      <header className="App-header">
      {/* <Box saludo={miTexto} saludo2="Saludos dos">
        <ComponenteChildren />
      </Box> */}


        {/* <div>
          Mi contador de stock: {stockContador.contador}
          <div>
          <button onClick={stockContador.decrementar}>-</button>
          <button onClick={stockContador.aumentar}>+</button>
          </div>
          <button onClick={stockContador.resetear}>Reset</button>
        </div>

        <div className='card'>
          Producto: Remera negra oversize
          <div>
            <p>
              Stock: {stock}
            </p>
            <p>
              Cantidad: {cantidadAgregada.contador}
            </p>
          <button onClick={cantidadAgregada.decrementar}>-</button>
          <button onClick={cantidadAgregada.aumentar}>+</button>
          </div>
          <button onClick={() => agregar(cantidadAgregada.contador)}>Agregar</button>
        </div> */}



        {/* <div>
          Producto: Remera negra oversize
          <div>
          Stock: {stock}
          Cantidad: 1 
          <button onClick={decrementar}>-</button>
          <button onClick={aumentar}>+</button>
          </div>
          <button onClick={resetear}>Reset</button>
        </div> */}


        {/* -----------------------------   HOC  ------------------------------------*/}
        {/* <MiComponente /> */}
        {/* <MiComponenteConLogica /> */}

        {/* <Container /> */}


        {/* --------------------------- RenderProps -------------------------------- */}
        {/* <ContainerProps /> */}
      </header>
    </div>
  );
}

export default App;
