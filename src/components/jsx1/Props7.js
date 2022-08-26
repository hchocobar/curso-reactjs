import React from 'react';

class Car10 extends React.Component {
  render() {
    return <h2>I am a {this.props.marca}</h2>;
  }
}

Car10.defaultProps = {
  marca: "Audi"
};

export default Car10;
