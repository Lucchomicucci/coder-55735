const Loader = ({loading, setLoad}) => {
    return(
        <>
        {loading && <p>Hola soy el cargando del componente nuevo</p>}
        <button onClick={() => setLoad(!loading)}>Cambiar desde el loader</button>
        </>
    )
}

export default Loader