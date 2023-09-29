const Saludo = ({nombre}) => {

    // const click = () => {
    //     console.log(nombre)
    // }

    return(
        <>
        <button onClick={() => console.log(nombre)}>Click</button>
        </>
    )
}

export default Saludo