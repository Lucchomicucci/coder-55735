import { useState } from "react"

// Arranca con use en minuscula
const useCounter = (valorInicial, max) => {
    const [contador, setContador] = useState(valorInicial)
  
    const aumentar = () => {
      contador < max && setContador(prev => prev + 1)
    }
  
    const decrementar = () => {
      contador > 1 && setContador(prev => prev - 1)
    }

    const decrementarPorValor = (cantidad) => {
      contador >= cantidad && setContador(prev => prev - cantidad)
    }
  
    const resetear = () => {
      setContador(valorInicial)
    }
  
    return {
      contador,
      aumentar,
      decrementar,
      resetear,
      decrementarPorValor
    }
  }

  export default useCounter