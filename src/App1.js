import logo from './media/logo.svg';
import './styles/App.css';

// import Lista1 from './components/Lista1.js';
import Lista2 from './components/jsx2/Lista2.js';
import Lista7 from './components/jsx2/Lista7.js';

import Condicional1 from './components/jsx2/Condicional1.js';
import Condicional2 from './components/jsx2/Condicional2.js';

import EventoOnClick1 from './components/EventoOnClick1.js';
import EventoOnClick2 from './components/EventoOnClick2.js';
import EventoOnClick3 from './components/EventoOnClick3.js';

import Forms1React from './components/Forms1React.js';
import Forms2onSubmit from './components/Forms2onSubmit.js';
import Forms3onChange from './components/Forms3onChange.js';

import Forms5input from './components/Forms5input.js';
import Forms6Textarea from './components/Forms6Textarea.js';
import Forms7Select from './components/Forms7Select.js';
import Forms8MultipleInputs from './components/Forms8MultipleInputs.js';

import Box from './components/ChildrenBox.js';
import Children0 from './components/Children0.js';

import Example from './components/Contador.js';
import ExUseEffect from './components/ExUseEffect.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <article className="App-article-1">
        <h2>5.3 - Trabajando con Listas</h2>
        <h3>Renderizado de Múltiples Componentes</h3>
        <hr/>
        <h2>5.4 - Listas de Objetos</h2>
        <Lista2/>
        <hr/>
        <h3>Consumiendo API JSON desde React</h3>
        <Lista7/>
        <hr/>
        <h2>5.5 - Renderizando Condicional</h2>
        <Condicional1/>
        <hr/>
        <h2>5.2 - Utilizando Ternarios</h2>
        <Condicional2/>
        <hr/>
      </article>
      <article className="App-article-2">
        <h2>7.- Eventos</h2>
        <EventoOnClick1/>
        <hr/>
        <EventoOnClick2/>
        <hr/>
        <EventoOnClick3/>
      </article>
      <article className="App-article-1">
        <h2>7.- Formularios</h2>
        <Forms1React/>
        <Forms2onSubmit/>
        <Forms3onChange/>
      </article>
      <article className="App-article-2">
      <h2>Componentes Controlados</h2>
        <Forms5input/>
        <Forms6Textarea/>
        <Forms7Select/>
        </article>
        <article className="App-article-1">
        <h2>Componentes Controlados</h2>
        <Forms8MultipleInputs/>
        <hr/>
      </article>
      <article className="App-article-2">
        <Box>Texto q envia al Box</Box>
        <Box>Hola este texto nuevo</Box>
        <Children0/>
      </article>
      <Example/>
      <ExUseEffect/>

      <hr/>

    </div>
  );
}

export default App;
