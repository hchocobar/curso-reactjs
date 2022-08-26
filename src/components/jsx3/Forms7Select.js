import React, { Component } from "react";

class Forms7Select extends Component {
  state = {
    // Selección por default: Svelte
    selection: "React"
  };

  handleOnSubmit = e => {
    e.preventDefault();
    console.log("Seleccionando a: ", this.state.selection);
  };

  handleOnChange = e => {
    this.setState({
      selection: e.target.value
    });
  };
  render() {
    return (
      <div>
        <h3>select</h3>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="id-select">
            Seleccione:
            <select
              id="id-select"
              value={this.state.selection}
              onChange={this.handleOnChange}
            >
              <option value="React">React JS</option>
              <option value="Angular">Angular JS</option>
              <option value="Vue">Vue</option>
              <option value="Svelte">Svelte</option>
            </select>
          </label>
          <br/>
          <button type="submit">Enviar</button>
        </form>
        <hr/>
      </div>
    );
  }
}

export default Forms7Select;
