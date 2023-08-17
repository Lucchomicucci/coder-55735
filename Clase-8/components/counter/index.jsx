import { useState } from "react"

const Counter = ({children}) => {

    const [contador, setContador] = useState(0)

    console.log(children)
    const increment = () => {
        setContador(prev => prev + 1)
    }
    
    const decrement = () => {
        setContador(prev => prev - 1)
    }

    const reset = () => {
        setContador(0)
    }

    return(
        <>
        <p>Contador: {contador}</p>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <button onClick={reset}>Resetear</button>
        </>
    )
}

export default Counter