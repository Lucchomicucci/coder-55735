const Item = ({producto}) => {
    return(
        <div> 
            <p>{producto.name}</p>
            <p>{producto.precio}</p>
        </div>
    )
}

export default Item