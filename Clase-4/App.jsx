import './App.css';
import { useState } from 'react';
// import TextStyled from './components/textStyled';
// import ButtonStyled from './components/buttonStyled';
// import ButtonStyled from './components/buttonStyled';
// import ItemListContainer from './containers/itemListContainer';

function App() {

  const [contador, setContador] = useState(0)
  const [valorDelInput, setValorDelInput] = useState(0)

  const sumar = () => {
    setContador(contador + 1)
  }

  const restar = () => {
    setContador(contador - 1)
  }
  
  const restart = () => {
    setContador(0)
  }

  // const actualizarElValorDelInput = (valor) => {
  //   setValorDelInput(parseInt(valor))
  // }

  const actualizarContador = () => {
    setContador(valorDelInput)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Contador: {contador}</p>
        <div className='contador-container'>
          <button className='btn' onClick={restar} >-</button>
          <button className='btn' onClick={sumar} >+</button>
          <button className='btn' onClick={restart}>restart</button>
        </div>
        {/* Actualizarlo con la funcion "actualizarElValorDelInput" */}
        {/* <input type='number' onChange={(event) => actualizarElValorDelInput(event.target.value)}/> */}

        {/* Actualizarlo directamente usando el setValorDelInput del useState */}
        <input type='number' onChange={(event) => setValorDelInput(parseInt(event.target.value))}/>

        {/* El boton ejecuta la funcion "actualizarContador" que setea el valor del input al valor del contador del useState */}
        <button onClick={actualizarContador}>Actualizar contador</button>

        {/* Ejemplo de como llamar a un componente dentro de un componente enviandole una Prop en esta caso la prop se llama "title" */}
        {/* <TextStyled  title="Hola"/> */}

      </header>
    </div>
  );
}

export default App;


// Como crear un componente nuevo?

// const MiNuevoComponente = () => {
//     return(
//         <div>
//             <p>Este es mi nuevo componente</p>
//         </div>
//     )
// }

// export default MiNuevoComponente