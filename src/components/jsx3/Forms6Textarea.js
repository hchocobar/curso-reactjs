import React, { Component } from 'react';

class Forms6Textarea extends Component {
  state = { // Inicializando el state
    textarea: 'Escribe algo acerca de ti'
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log('Enviando texto... 📤', this.state.textarea);
  }

  handleOnChange = (e) => {
    this.setState({
      textarea: e.target.value.toUpperCase()
    });
  }

  render() {
    return (
      <div>
        <h3>textarea</h3>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="id-textarea">
            <textarea
              id="id-textarea"
              name="textarea"
              cols="30"
              rows="10"
              value={this.state.textarea}
              onChange={this.handleOnChange}>
            </textarea>
          </label>
          <br/>
          <button type="submit">Enviar</button>
        </form>
        <hr/>
      </div>
    );
  }
}

export default Forms6Textarea;

/**
 * Recordemos que el estado puese estar inicializado con un calor,
 * así que el text area puede empezar con algun texto.
*/
