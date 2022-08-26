import logo from './logo.svg';
import './App.css';


// 4.3 - Components
import Car1 from './components/jsx1/Component1.js';
import Car2 from './components/jsx1/Component2.js';
import Car3 from './components/jsx1/Component3.js';

// 4.4 - Props - Entendiendo las Props
import Car4 from './components/jsx1/Props1.js';
import Car5 from './components/jsx1/Props2.js';
import Garage1 from './components/jsx1/Props3.js';
import Garage2 from './components/jsx1/Props4.js';
import Garage3 from './components/jsx1/Props5.js';
import Garage4 from './components/jsx1/Props6.js';
import Car10 from './components/jsx1/Props7.js';

// 4.8 - State - Gestión de los estados en ReactJS
import State1Class from './components/jsx1/State1Class.js';
import State2ClassField from './components/jsx1/State2ClassField.js';
import State3useState from './components/jsx1/State3useState.js';

// 5.1 - Condicionales
import Condicional1 from './components/jsx2/Condicional1.js';
import Condicional2 from './components/jsx2/Condicional2.js';

// 5.3 - Listas
import Lista1 from './components/jsx2/Lista1.js';
import Lista2 from './components/jsx2/Lista2.js';
import Lista3 from './components/jsx2/Lista3.js';
import Lista4Class from './components/jsx2/Lista4Class.js';
import Lista4Function from './components/jsx2/Lista4Function.js';
import Lista7 from './components/jsx2/Lista7.js';

// 7.1 - Eventos
import EventoOnClick1 from './components/jsx3/EventoOnClick1.js';
import EventoOnClick2 from './components/jsx3/EventoOnClick2.js';
import EventoOnClick3 from './components/jsx3/EventoOnClick3.js';


// 7.5 - Formularios
import Forms1ReactClass from './components/jsx3/Forms1ReactClass.js';
import Forms1ReactFunc from './components/jsx3/Forms1ReactFunc.js';
import Forms2onSubmit from './components/jsx3/Forms2onSubmit.js';
import Forms3onChange from './components/jsx3/Forms3onChange.js';
import Forms5input from './components/jsx3/Forms5input.js';
import Forms6Textarea from './components/jsx3/Forms6Textarea.js';
import Forms7Select from './components/jsx3/Forms7Select.js';

import Forms8MultipleInputs from './components/jsx3/Forms8MultipleInputs.js';

import Box from './components/jsx4/ChildrenBox.js';
import Children0 from './components/jsx4/Children0.js';
import Children1PropType from './components/jsx4/Children1PropType.js';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <article className="App-article-1">
        <h2>4.3 - Componentes en React</h2>
        <p>Class Component and Function Component</p>
        <Car1/>
        <Car2/>
        <Car3/>
      </article>
      <article className="App-article-2">
        <h2>4.4 - Props - Entendiendo las Props</h2>
        <Car4 color="RED" model="mustag" anio="2020"/>
        <Car5 marca="FORD"/>
      </article>
      <article className="App-article-1">
        <h2>4.5 - Props III - Funciones y elementos</h2>
        <Garage1/>
        <Garage2/>
        <Garage3/>
        <Garage4/>
      </article>
      <article className="App-article-2">
        <h2>4.7 - Props IV - Props por defecto - defaultProps</h2>
        <Car10/>
      </article>
      <article className="App-article-1">
        <h2>4.8 - State I - Gestión del Estado en ReactJS</h2>
        <State1Class/>
      </article>
      <article className="App-article-2">
        <h2>4.9 - State I - Inicializa el "state" del componente utilizando Class Field</h2>
        <State2ClassField/>
      </article>
      <article className="App-article-1">
        <h2>4.10 - State II - Actualiza el estado mediante hook useState()</h2>
        <State3useState/>
      </article>
      <article className="App-article-2">
        <h2>5.1 - Condicional en el método render</h2>
        <Condicional1/>
        <hr/>
        <h2>5.2 - Utilizando Ternarios</h2>
        <Condicional2/>
      </article>
      <article className="App-article-1">
        <h2>5.3 - Trabajando con Listas</h2>
        <h3>Renderizado de Múltiples Componentes</h3>
        <Lista1 numbers={[1, 2, 3, 4, 5]}/>
        <hr/>
        <h2>5.4 - Listas de Objetos</h2>
        <Lista2/>
        <hr/>
        <Lista3/>
        <hr/>
        <Lista4Class/>
        <hr/>
        <Lista4Function/>
        <h3>Consumiendo API JSON desde React</h3>
        <Lista7/>
        <hr/>
      </article>
      <article className="App-article-2">
        <h2>7.1 - Eventos</h2>
        <EventoOnClick1/>
        <hr/>
        <EventoOnClick2/>
        <hr/>
        <EventoOnClick3/>

      </article>
      <article className="App-article-1">
        <h2>7.5 - Formularios</h2>
        <Forms1ReactClass/>
        <hr/>
        <Forms1ReactFunc/>
        <hr/>
      </article>
      <article className="App-article-2">
        <h2>7.7 - Refs y 7.8 onSubmit</h2>
        <Forms2onSubmit/>
      </article>
      <article className="App-article-1">
        <h2>7.9 - Componentes Controlados</h2>
        <Forms3onChange/>
      </article>
      <article className="App-article-2">
        <h2>7.9 - Componentes Controlados</h2>
        <Forms5input/>
      </article>
      <article className="App-article-1">
        <h2>7.9 - Componentes Controlados</h2>
        <Forms6Textarea/>
      </article>
      <article className="App-article-2">
        <h2>7.9 - Componentes Controlados</h2>
        <Forms7Select/>
      </article>
      <article className="App-article-1">
        <h2>7.9 - Componentes Controlados</h2>
        <Forms8MultipleInputs/>
      </article>
      <article className="App-article-2">
        <h2>8.1 - Children Box</h2>
        <Box>Aqui agregue algo</Box>
      </article>
      <article className="App-article-1">
        <h2>8.1 - Children</h2>
        <Children0/>
      </article>
      <article className="App-article-2">
        <h2>8.1 - Children - PropTypes</h2>
        <Children1PropType/>
      </article>

    </div>
  );
}

export default App;
