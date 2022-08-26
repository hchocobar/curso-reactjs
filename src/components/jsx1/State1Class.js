import React from 'react';

class State1Class extends React.Component {
  constructor() {
    super();
    this.state = { contador: 0 };
  }

  aumentarContador = () => {
    this.setState({contador: this.state.contador + 1});
  }

  decrementarContador = () => {
    this.setState({contador: this.state.contador - 1});
  }

  render() {
    return (
      <div>
        <span>Contador 1 : {this.state.contador} </span>
        <button onClick={this.aumentarContador}> Aumentar +1 </button>
        <button onClick={this.decrementarContador}> Decrementar -1 </button>

        <span> state con constructor en una Clase</span>
      </div>
    );
  }
}

export default State1Class;
