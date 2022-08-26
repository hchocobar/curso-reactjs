import React from 'react';

class Car4 extends React.Component {
  render() {
    return <h2>I am a {this.props.color} Car! y es un {this.props.model} y año {this.props.anio}</h2>;
  }
}

export default Car4;
