import React from 'react';

function EventoOnClick1() {
  return (
    <div>
        <h3>Evento onClick</h3>
        <button onClick={() => alert("sorpresa!!")} >Haz Click !!</button>
        <p>El evento onClick llama una arrow function directamente desde el valor del atributo de onClick</p>
        <p>Definido con Funcion Component</p>
    </div>
  );
}

export default EventoOnClick1;
