import { useEffect, useContext, useState, createContext } from "react";
import './App.css';
import Hijo from './components/hijo';
import { ShopComponentContext } from './context/shopContext';

const mockProductos = [{
  titulo: 'Remera',
  precio: 6000,
  descripcion: 'lorem ipsum lorem ipsum'
},
{
  titulo: 'Pantalon',
  precio: 12000,
  descripcion: 'lorem ipsum lorem ipsum'
},
{
  titulo: 'Buzo',
  precio: 18000,
  descripcion: 'lorem ipsum lorem ipsum'
}]


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <ShopComponentContext>
          <Hijo />
        </ShopComponentContext>
      </header>
    </div>
  );
}

export default App;
