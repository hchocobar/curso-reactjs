import React from 'react';

// Componentes funciones adicionales para el complemento principal que no son exportados
function UserGreeting(props) {
  return <span>Bienvenido! </span>;
}

function GuestGreeting(props) {
  return <span>Ingresar: </span>;
}

// En el return utilizamos
// el operador ternario para mostrar el mensaje adecuado
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  return isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}


// Componente principal exportado LoginControl
class Condicional2 extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }
  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }
  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }
  // En la función render() utilizamos el operador ternario para mostrar el botón adecuado
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    isLoggedIn
      ? button = <LogoutButton onClick={this.handleLogoutClick} />
      : button = <LoginButton onClick={this.handleLoginClick} />
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
        <p>Utilizando el operador ternarios ? :</p>
      </div>
    );
  }
}

export default Condicional2;
