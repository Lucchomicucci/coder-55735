import React, { useEffect } from 'react';

const Listener = () => {
    
  useEffect(() => {
    // Función que se ejecutará cuando ocurra el evento 'click'
    const handleClick = () => {
      console.log('Se hizo click en el elemento');
    };

    // Agregar el event listener al montar el componente
    document.addEventListener('click', handleClick);

    // Remover el event listener al desmontar el componente
    return () => {
        console.log('Se esta removiendo el event listener');
        document.removeEventListener('click', handleClick);
    };
  }, []); // Este efecto se ejecuta solo una vez al montar y desmontar

  return (
    <div>
      <p>Haz clic en cualquier lugar para ver el mensaje en la consola.</p>
    </div>
  );
};

export default Listener;