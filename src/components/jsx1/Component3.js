import React from 'react';
// Class Component with constructor

class Car3 extends React.Component {
  constructor() {
    super();
    this.state = {color: "azul"};
  }
  render() {
    return <p>Hi, I am a {this.state.color} Car! - Class Component with constructor()</p>;
  }
}

export default Car3;
