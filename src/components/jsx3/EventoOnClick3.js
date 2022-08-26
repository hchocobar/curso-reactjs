import React from 'react';

function toogleSlider() {
  alert('Has Hecho Click 2')
}

function EventoOnClick3() {
  return (
    <div>
        <h3>Evento onClick</h3>
        <button onClick={toogleSlider}>Haz Click !!</button>
        <p>El evento onClick llama una función definida en el componente desde el valor del atributo de onClick</p>
        <p>Definido con Function Component</p>
    </div>
  );
}

export default EventoOnClick3;
