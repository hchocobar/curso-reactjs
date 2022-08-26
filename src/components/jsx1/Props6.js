import React from 'react';
// Si el componente tiene una función constructor(), las props siempre deben
// pasarse al constructor y también al React.Component a través del método
// super()


class Car9 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h2>I am a {this.props.model}</h2>;
  }
}

class Garage4 extends React.Component {
  render() {
    return (
      <div>
        <h1>Who lives in my garage? - constructor</h1>
        {/* enviamos el objeto carinfo al componente */}
        <Car9 model="Clio" />
      </div>
    )
  }
}

export default Garage4;
