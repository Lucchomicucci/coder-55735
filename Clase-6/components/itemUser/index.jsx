const ItemUser = ({usuario}) => {
    return(
        <div className='user-container'>
        <p>{usuario.id}</p>
        <p>{usuario.name}</p>
        <p>{usuario.age}</p>
        </div>
    )
}

export default ItemUser