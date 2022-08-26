import React from 'react';
// enviamos la propiedad "brand" del Componente "Garage2" al componente "Car7"
// - en este caso estamos enviando variable entre, siempre entre {}

class Car7 extends React.Component {
  render() {
    return <h2>I am a {this.props.brand}</h2>;
  }
}

class Garage2 extends React.Component {
  render() {
    const carname = "Chevy";

    return (
      <div>
        <h1>Who lives in my garage? (variable)</h1>
        <Car7 brand={carname} />
      </div>
    )
  }
}

export default Garage2;
