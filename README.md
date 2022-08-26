# Curso de React

## Descripción

Este repositorio contiene el código del curso **Introducción a React - Aplicaciones Web**.

## Contenido:

- Códigos de ejemplo (comentados). 
- Ejercicios
- Laboratorios

# Temario

1.  INTRODUCCIÓN
    1. ¿Qué es ReactJS?
2.  CONFIGURACIÓN DEL ENTORNO
    1. Instalación de NodeJS y NPM mediante Node
    2. Instalación del paquete npm Create React App
    3. Hola Mundo en ReactJS
    4. Componente de ejemplo de `create-react-app`
    5. Configuración del linter para la corrección de errores
3.  CONCEPTOS BÁSICOS
    1. ¿De dónde viene React y en qué está basado?
    2. Introducción a JSX
    3. Componentes en ReactJS
    4. Props I - Entendiendo las Props
    5. Props II - Funciones y elementos como Props
    6. Props III - Inmutabilidad de las Props
    7. Props por defecto
    8. State I - Gestión del estado en ReactJS
    9. Inicializa el state del componente usando una Class Field
    10. State II - Actualizar estado mediante hook `useState()`
    11. State III - Propagación del estado
    12. State IV - Inicializando el estado mediante Props
4.  RENDERIZADO CONDICIONAL y LISTAS
    1. Condicionales en el método Render
    2. Utilizando ternarias
    3. Trabajando con listas
    4. Listas de Objetos
    5. Renderizado condicional
5.  REACT DEVELOPER TOOLS
    1. React Dev Tools
    2. Instalación de las React Dev Tools en Chrome
    3. Inspeccionando un sitio
6.  EVENTOS y FORMULARIOS
    1. El evento onClick
    2. Eventos sintéticos
    3. Eventos soportados
    4. Eventos en React
    5. Formularios en React
    6. Particularidades del atributo For
    7. Entendiendo las Refs
    8. El evento onSubmit
    9. Componentes controlados
    10. Formularios
7.  CHILDREN y PROPTYPES
    1. La Prop especial Children
    2. Children Layout
    3. Desarrollando con PropTypes
    4. Children y PropTypes
8.  CICLO DE VIDA DE LOS COMPONENTES
    1. Hook useEffect / useLayoutEffect
    2. Hook useRef
    3. Hook useContext
    4. Hook useImperativeHandle
    5. Hook useMemo
    6. Hook useCallback
    7. Hook useReducer
    8. Reglas de los hooks
    9. Construyendo custom hooks
    10. Hook useDebugValue
    11. Ciclos de Actualización y Desmontaje

# Introducción

## ¿Qué es React?

React es una librería de JavaScript, desarrollada y mantenida principalmente por Facebook y muchas empresas y desarrolladores alrededor del mundo.

React utiliza en forma nativa JavaScript, en realidad JSX.

JSX (JavaScript XML) es una extensión de JavaScript también creada por Facebook para ser utilizada con su librería React.

JSX sirve de preprocesador y transforma nuestro código a JavaScript. Entonces JSX no es un lenguaje de programación, pero si es un mix entre de JavaScript y XML (eXtensible Markup Language) que nos permite escribir XML en JS y, por lo tanto, utilizar HTML creando nuestras propias etiquetas a las que llamaremos **componentes**.

Para poder utilizar JSX no podemos simplemente crear un archivo .jsx. Debemos importar una librería de JS llamada Babel (donde viene integrado JSX) y es esta librería la que se encargará de traducir nuestro código.

## ¿Cómo funciona React?

En lugar de manipular directamente el DOM (Document Object Model) del navegador, React crea un DOM VIRTUAL en la memoria, donde realiza toda la manipulación necesaria, antes de realizar los cambios en el DOM del navegador.
 
Entonces, React descubre qué cambios se han realizado y solo cambia aquello que debe cambiarse.

# Enlaces

[NodeJS](https://nodejs.org/) | 
[NPM](https://docs.npmjs.com/) |
[JSX](https://es.reactjs.org/docs/introducing-jsx.html) |
[Babel](https://babeljs.io/) | 

[React](https://es.reactjs.org/) |
[Getting started](https://es.reactjs.org/docs/getting-started.html) |
[API Reference](https://es.reactjs.org/docs/react-api.html) |
[Hooks](https://es.reactjs.org/docs/hooks-intro.html) | 
[CDN](https://es.reactjs.org/docs/cdn-links.html) |
[create-react-app](https://es.reactjs.org/docs/create-a-new-react-app.html#create-react-app) |


# Muchas Gracias

[Héctor Chocobar Torrejón](http://chocobar.net)

![Avatar de Héctor](https://en.gravatar.com/userimage/146115819/41a333edd75fea5257a0a684c76cf977.png)