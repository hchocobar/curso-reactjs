import React, { Component } from "react";

class Forms2onSubmit extends Component {
  constructor(props) {
    super(props);
    // Almanecanos la entrada en this.entradaNombre, inicializamos en el constructor
    this.entradaNombreRef = React.createRef();
    this.entradaSocialRef = React.createRef();
    // Esto me da acceso al objeto de referencia que me da React,
    // y luego lo asigno a mi propiedad
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    const name = this.entradaNombreRef.current.value;
    const twitter = this.entradaSocialRef.current.value;
    // const name = this.entradaNombreRef.current.focus();
    // const twitter = this.entradaSocialRef.current.focus();
    console.log("Enviando nombre ...", name);
    console.log("Enviando twitter ...", twitter);
  }

  render() {
    return (
      <div>
        <h3>Form - onSubmit</h3>
        <div>
          <form onSubmit={this.handleOnSubmit}>
            <p>
              <label htmlFor="id__name">Nombre:</label>
              <input
                id="id__name"
                name="userName"
                placeholder="name"
                type="text"
                ref={this.entradaNombreRef}
              />
            </p>
            <p>
              <label htmlFor="id__twitter">Twitter:</label>
              <input
                id="id__twitter"
                name="twitterAccount"
                placeholder="@Twitter"
                type="text"
                ref={this.entradaSocialRef}
              />
            </p>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Forms2onSubmit;
