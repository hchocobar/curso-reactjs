import React from 'react';
// enviamos la propiedad "brand" del Componente "Garage1" al componente "Car6"
// - en este caso estamos enviando una cadena "Ford"

class Car6 extends React.Component {
  render() {
    return <h2>I am a {this.props.brand}</h2>;
  }
}

class Garage1 extends React.Component {
  render() {
    return (
      <div>
        <h1>Who lives in my garage?</h1>
        <Car6 brand="Ford" />
      </div>
    )
  }
}

export default Garage1;
