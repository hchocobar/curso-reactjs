/*
  Recibo un arreglo de números como props (parametro)
  en App.js llamar de esta manera: <Lista1 numbers = {[4, 5, 6, 7]}/>
  El atributo debe tener el mismo nombre que Utilizamos en el componente.
  debe estar entre {} porque estamos enviado un valor de javascript.
 */

function Lista1(props) {
  const numeros = props.numbers;
  const listItems = numeros.map((number, index) =>
    <li key={index}>{number}</li>);
  return (
    <section>
      <ul>{listItems}</ul>
    </section>
  );
}

export default Lista1;
