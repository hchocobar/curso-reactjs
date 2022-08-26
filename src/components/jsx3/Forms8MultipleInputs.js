import React, { Component } from 'react'

class Forms8MultipleInputs extends Component {
  state = {
    product: '',
    select: 'Azul',
    active: true,
  }

  handleOnSubmit = e => {
    e.preventDefault()

    console.log('Enviando... 📤')
    console.log('Producto: ', this.state.product)
    console.log('Color: ', this.state.select)
    console.log('Activo: ', this.state.active)
  }

  handleOnChange = e => {
    // capturamos el objetivo del evento en una constante
    const target = e.target
    // capturamos el valor del objetivo pasado en el evento,
    // usando una ternaria podemos definir que tipo de input es
    const value = target.type === 'checkbox' ? target.checked : target.value
    // capturamos el name
    const name = target.name
    // Ahora si actualizamos el estado
    this.setState({
      // [name] porque se manda como objeto,
      // sin los [] se pasaria como string
      [name]: value,
    })
  }

  render() {
    return (
      <div>
        <h3>Multiples Inputs</h3>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor='id-product'>
            Producto: 
            <input
              id='id-product'
              // Usamos el name como se llama en el estado
              name='product'
              type='text'
              value={this.state.product}
              onChange={this.handleOnChange}
            />
          </label>
          <br/>
          {/* Si agregamos un elemento diferente
            como 'select' o 'textarea',
            se comportaria como un input mas
            */}
          <label htmlFor='id-select'>
            Color:
            <select
              id='id-select'
              // Usamos el name como se llama en el estado
              name='select'
              value={this.state.select}
              onChange={this.handleOnChange}
            >
              <option value='Rojo'>Rojo</option>
              <option value='Azul'>Azul</option>
              <option value='Verde'>Verde</option>
            </select>
          </label>
          <br/>
          <label htmlFor='id-check'>
            Activar:
            <input
              id='id-check'
              //El name es igual al nombre en el estado
              name='active'
              type='checkbox'
              checked={this.state.active}
              onChange={this.handleOnChange}
            />
          </label>
          <br/>
          <button type="submit">Enviar</button>
        </form>
      </div>
    )
  }
}

export default Forms8MultipleInputs;

/**
 * Manejando multiples Inputs
 *
 * Cuando se necesita usar múltiples elementos input controlados, puedes agregar
 un atributo 'name' a cada uno de los elementos y dejar que la función
 controladora(handleChange) decida que hacer basada en el valor de 'event.target.name'
 *
 * Anteriormente esto funcionaria para un solo input, pero al ser mas de dos
 * se comparte el handle, podria existir un handle por cada uno, pero no seria
 * la mejor forma por temas de optimización.
 *
 * this.setState({
 *    active: e.target.checked,
 *    product: e.target.value
 * });
 *
 * Por lo que tenemos que realizar un método generico usando el atributo name de los inputs,
 * tanto como establecer el nombre del parametro en el estado que se quiere modificar y
 * el valor que adquiere por cada vez que se ejecute el 'handle'
 *
 * const target = e.target;
 * const value = target.type === 'checkbox' ?
 *    target.checked :
 *    target.value;
 * const name = target.name;
 *
 * Hay que tener en cuenta como usamos la sintaxis de la propiedad 'name' computada de ES6
 * para actualizar la clave del estado correspondiente al nombre del 'input'
 * //Actualizamos el estado:
 * this.setState({
 *  [name]: value
 * });
 *
 */
