import React from 'react';

class State2ClassField extends React.Component {
  state = { contador: 0 };

  aumentarContador = () => {
    this.setState({contador: this.state.contador + 1});
  }

  decrementarContador = () => {
    this.setState({contador: this.state.contador - 1});
  }

  render() {
    return (
      <div>
        <span>Contador 2 : {this.state.contador} </span>
        <button onClick={this.aumentarContador}> Aumentar +1 </button>
        <button onClick={this.decrementarContador}> Decrementar -1 </button>

        <span> state con Class Field</span>
      </div>
    );
  }
}

export default State2ClassField;
