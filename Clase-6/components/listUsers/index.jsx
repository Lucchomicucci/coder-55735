import ItemUser from "../itemUser"

const ListUsers = ({usuarios}) => {
    
    return(
        <>
        <h4>Usuarios:</h4>
            <div className='user-container'>
                <p>ID</p>
                <p>Nombre</p>
                <p>Edad</p>
            </div>
            {usuarios.map(user => <ItemUser usuario={user} key={user.id}/>)}
        </>
    )
}

export default ListUsers