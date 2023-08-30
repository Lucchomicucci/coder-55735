import { useState } from 'react';
import './App.css';
// import Listener from './components/event';
import InputVocales from './components/inputVocales';
import Prevent from './components/prevent';
import Propagation from './components/propagation';

function App() {

  const [show, setShow] = useState(false)
  
  return (
    <div className="App">
      <header className="App-header">
        <InputVocales />
        {/* <Prevent /> */}
        {/* <Propagation /> */}

        {/* {show && <Listener />}
        <button onClick={() => setShow(!show)}>Mostrar/Ocultar</button> */}
      </header>
    </div>
  );

}

export default App;
