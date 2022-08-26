import React, {Component} from 'react';

class EventoOnClick2 extends Component {
  render () {
    return (
      <div>
          <h3>Evento onClick</h3>
          <button onClick={this.toogleSlider}>Haz Click!!!</button>
          <p>El evento onClick llama una función definida en el componente desde el valor del atributo de onClick</p>
          <p>Definido con Class Component</p>
      </div>
    );
  }

  toogleSlider() {
    alert('Has Hecho Click 2')
  }
}

export default EventoOnClick2
