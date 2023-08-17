import { useEffect } from "react"

export const ComponenteUno = () => {
    return(
        <h5>Mira la consola!</h5>
    )
}






export const withConsoleLog = (Component) => {



    const ComponenteMejorado = () => {

        useEffect(() => {
            console.log('Mensaje desde el withConsoleLog')
        }, [])

        return <Component />
    }



    return ComponenteMejorado
}





export const MiComponenteConLogica = withConsoleLog(ComponenteUno)