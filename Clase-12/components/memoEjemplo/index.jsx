import React, {memo} from 'react';
import styles from './styles.module.css'
import MiComp from '../miComp';

const Contador = ({ title, cont, setCont }) => {

//   console.log(`Renderizando ${title}`);

  return (
    <div className={styles['card']}>
      <p>{title}</p>
      <p>Contador: {cont}</p>
      <button onClick={() => setCont(cont + 1)}>+</button>
      <MiComp title={title} dato={true}/>
    </div>
  );
};

// Usamos memo para optimizar el componente
export default memo(Contador);