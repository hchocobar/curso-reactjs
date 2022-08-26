import React, { useState } from 'react';

function State3useState() {
  // Declaración de una variable de estado que llamaremos "contador"
  const [contador, setContador] = useState(0);

  return (
    <div>
      <span>Contador : {contador} </span>
      <button onClick={() => setContador(contador + 1)}>
        Aumentar +1
      </button>
        <span> con useState</span>
    </div>
  );
}

export default State3useState;
