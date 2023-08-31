import { createContext } from "react";
import { useState, useEffect } from "react";

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


// Creamos el contexto con createContext
export const ShopContext = createContext(); 


// Creamos un componente para nuestro contexto
export const ShopComponentContext = ({children}) => {

    const [productos, setProductos] = useState([])

    const limpiarProductos = () =>{
        setProductos([])
    }

    useEffect(() => {
        setProductos(mockProductos)
    }, [])

    return <ShopContext.Provider value={{productos}}>
        {children}
    </ShopContext.Provider>
}