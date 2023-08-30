import React, { useState } from 'react';

const Prevent = () => {

  const handleKeyDown = (event) => {
    event.preventDefault();
    console.log(event.key)
  };

  return (
    <div>
      <input
        type="text"
        onKeyDown={handleKeyDown}
        onChange={(e) => console.log(`Contenido: ${e.target.value}`)}
      />
    </div>
  );
};

export default Prevent;