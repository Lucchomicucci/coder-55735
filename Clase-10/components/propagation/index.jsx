import styles from './styles.module.css'

const Propagation = () => {

    return(
        <div className={styles['container']} onClick={() => console.log('click en el div')}>
            <button 
                onClick={(e) => {
                    e.stopPropagation()
                    console.log('click en el boton')
                }
            }>
                Click btn
            </button>
        </div>
    )
}

export default Propagation