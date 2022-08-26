import React from 'react';
// enviamos la propiedad "brand" del Componente "Garage3" al componente "Car8"
// - en este caso enviamos un objeto

class Car8 extends React.Component {
  render() {
    return <h2>I am a {this.props.brand.name} / {this.props.brand.model}</h2>;
  }
}

class Garage3 extends React.Component {
  render() {
    // creamos un objeto llamado carinfo
    const carinfo = {name: "Ford", model: "Mustang"};

    return (
      <div>
        <h1>Who lives in my garage? (object)</h1>
        {/* enviamos el objeto carinfo al componente */}
        <Car8 brand={carinfo} />
      </div>
    )
  }
}

export default Garage3;
