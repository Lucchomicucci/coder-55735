import { useState } from "react"

// Ejercicio:
// 1) Implementar un boton nuevo que lo que haga es resetear el valor a 0
// 2) Validar que el monto no quede en valor 0 o negativo


const Contador = () => {

    const [contador, setContador] = useState(1)

    // let contador = 0
    const suma = () => {
        setContador(contador + 1)
        // contador += 1
        // console.log(contador)
    }
    
    const resta = () => {
        // if(contador > 1){
        //     setContador(contador - 1)
        // }

        contador > 1 && setContador(contador - 1)

        // contador -= 1
        // console.log(contador)
    }

    const reset = () => {
        setContador(1)
    }

    return(
        <>
        <button onClick={resta}>-</button>
        <p>{contador}</p>
        <button onClick={suma}>+</button>
        <button onClick={reset}>Reset</button>
        </>
    )
}

export default Contador