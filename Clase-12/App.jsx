import { useEffect, useState } from "react";
import './App.css';
// import MiComponente from './components/memo'
import Contador from "./components/memoEjemplo";
import Loader from "./components/loader";

function App() {

  const [contador, setContador] = useState(0)
  const [contador2, setContador2] = useState(0)

  const [load, setLoad] = useState(true)

  // Return temprano:

  // if(miCondicion){
  //   return (
  //     <>
  //     <p>Se cumplio mi condicion</p>
  //     </>
  //   )
  // }
  
  return (
    <div className="App">
      <header className="App-header">
        <Contador title="Primer contador" cont={contador} setCont={setContador}/>
        <Contador title="Segundo contador" cont={contador2} setCont={setContador2} />

        {/* // Renders condicionales */}

        {/* {loader && <h1>Cargando</h1>}
        {!loader && <h1>Bienvenidos</h1>} */}
        {/* {loader ? <h1>Cargando</h1> : <h1>Bienvenidos</h1>} */}



        {/* <button onClick={() => setLoad(false)}>Cambiar estado</button>
        <Loader loading={load} setLoad={setLoad}/> */}

      </header>
    </div>
  );
}



export default App;
