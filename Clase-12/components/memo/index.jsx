import React, { memo } from 'react';

// Definimos nuestro componente funcional
const MiComponente = ({ datos }) => {
    console.log(datos)
  return (
    <div>
      <p>{datos}</p>
    </div>
  );
};

// Usamos memo para optimizar el componente
export default memo(MiComponente);

// React memo se utiliza para evitar que un componente funcional se vuelva a renderizar a menos que sus propiedades (props) hayan cambiado.
// Funciona creando una version memorizada (cache) del componente y comparando las propiedades antiguas con las nuevas antes de decidir si se debe realizar un nuevo renderizado.
// Esto puede ser especialmente util cuando tenes componentes funcionales que no dependen de cambios en las propiedades.