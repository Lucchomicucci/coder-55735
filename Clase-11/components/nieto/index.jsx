import React, {useContext, useState} from 'react';
import styles from './styles.module.css'
import { ShopContext } from '../../context/shopContext';

const Nieto = () => {

  const { productos } = useContext(ShopContext)

  return (
    <div className={styles['container']}>
      {/* <button onClick={limpiarProductos}>Limpiar</button> */}
      {productos.map((prod, index) => {
        return(
          <div className={styles['card']} key={index}>
            <p>{prod.titulo}</p>
            <p>{prod.descripcion}</p>
            <p>$ {prod.precio}</p>
          </div>
        )
      })}
    </div>
  );
};

export default Nieto;