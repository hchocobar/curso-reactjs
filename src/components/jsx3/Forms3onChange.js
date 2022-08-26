import React, {Component} from 'react'

class Form3onChange extends Component {
  constructor() {
    super()
    this.state = {
        inputName: "",
        inputTwitter: "@",
        inputTerms: false
    }
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  handleOnChangeCheckBox = (e) => {
    // console.log("handleOnChange")
    // console.log(e.target.checked)
    this.setState({inputTerms: e.target.checked})
  }
  render() {
    return (
      <div>
        <h3>Form - onChange</h3>
        <form onSubmit={this.handleOnSubmit}>
          <p>
            <label htmlFor='name' >Nombre: </label>
            <input
                id="name"
                placeholder="ingrese su nombre"
                ref={inputElement => this.inputName = inputElement}
                onChange={e => this.setState({inputName: e.target.value})}
                value={this.state.inputName}/>
          </p>
          <p>
            <label htmlFor="twitter">Twitter: </label>
            <input
                id="twitter"
                type="text"
                placeholder="pon tu Twitter"
                ref={inputElement => this.inputTwitter = inputElement}
                onChange={
                  e => this.setState({inputTwitter: e.target.value})
                }
                value={this.state.inputTwitter}/>
          </p>
          <p>
            <label>
              <input
                onChange={this.handleOnChangeCheckBox}
                type="checkbox"
                checked={this.state.inputTerms}/>
              Aceptar las condiciones
            </label>
          </p>
          <button type="submit">Enviar</button>
        </form>
        <hr/>
      </div>
    )
  }
}

export default Form3onChange;

/**
 * Example onChange
 */
