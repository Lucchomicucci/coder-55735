import { Button } from "antd"
import { useEffect, useRef, useState } from "react"
import {Spin} from 'antd';
import Item from "../item/item";
const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    // Crear una promise que devuelva un array de productos con el siguiente formato:
    // {name: "producto1", precio: 2000, id: 1}. IMPORTANTE: El ID no puede repetirse
    // Simular tiempo de espera

    // Cuando el componente se monte hacer la peticion a la promise, guardar la data y mostrarla.
    // NOTA: Mostrar nombre y precio

   // 1) Crear la Promise
    const promesa = new Promise((resolve, reject) => {
        const productosArray = [
            {name: "Remera", precio: 20000, id: 1},
            {name: "Pantalon", precio: 12500, id: 2},
            {name: "Buzo", precio: 35000, id: 3},
            {name: "Campera", precio: 55500, id: 4}
        ]

        setTimeout(() => {
            productosArray.length > 0 ? resolve(productosArray) : reject({data: [], message: "No hay productos"})
        }, 5000)
    })


    // 2) Llamar a la promise y guardar su resultado... Acuerdense:
    // QUE ESTAN TRABAJANDO CON REACT. 
    useEffect(() => {
        promesa
        .then(res => {
            console.log(res)
            setProducts(res)
        })
        .catch(error => console.error(error.message))
    }, [])


    return(
        <>
            <h2 className="saludo">{greeting}</h2>
            {/* 3) Recorrer el array de productos y mostrar nombre y precio */}
            {products.length > 0 ? (
                <>
                {products.map((prod, index) => <Item key={prod.id} producto={prod} />)}
                </>
            ) : (
                <Spin />
            )}
            <>
            </>
        </>
    )
}

export default ItemListContainer