import { useEffect, useState } from "react"

const EffectComponent = () => {

    const [contador, setContador] = useState(0)
    const [nombre, setNombre] = useState('NombreEjemplo')

    // useEffect(() => {
    //     console.log('Soy el useEffect que se ejecuta cuando el componente se monta por primera vez y cuando alguno de los estados se modifique')
    // })

    // useEffect(() => {
    //     console.log('Soy el useEffect que se ejecuta solo cuando el componente se monta')
    // }, [])
    
    // useEffect(() => {
    //     console.log('soy el useEffect que se ejecuta cuando el componente se monta y cuando el estado contador cambia')
    // // IMPORTANTE: Si el estado nombre cambia no va a afectar y no se va a ejecutar este useEffect!!!
    // }, [contador])

    const sumar = () => {
        setContador(contador + 1)
    }

    const cambiarNombre = () => {
        setNombre('Juan')
    }

    return(
        <>
        <p>Contador: {contador}</p>
        <button onClick={sumar}>Incrementar</button>
        <p>Nombre: {nombre}</p>
        <button onClick={cambiarNombre}>Cambiar nombre</button>
        </>
        
    )
}

export default EffectComponent