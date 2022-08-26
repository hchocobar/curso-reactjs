import React, { Component } from 'react';

class Box extends Component {
  render() {
    return (
      <p className="Box-fecha">
        {this.props.children}
      </p>
    )
  }
}

function Article(props) {
  const {author, children, date, title} = props
  return (
    <div className="Children-Article">
      <h2>{title}</h2>
      {author && <p><em>Escrito por {author}</em></p>}
      {date && <Box>{date}</Box>}
      <article>{children}</article>
    </div>
  )
}

function Children0() {
  return (
    <div>
      <h4>Children Props</h4>
      <Article
        author="Wikipedia"
        date={new Date().toLocaleString()}
        title="Articulo de React JS">
          <p>React (también llamada React.js o ReactJS) es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página.</p>
      </Article>
      <Article
        author="Antoine"
        date={new Date().toLocaleDateString()}
        title="Articulo de Angular JS">
          <p><strong>AngularJS</strong> (comúnmente llamado Angular.js o AngularJS 1), es un framework de JavaScript de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página.</p>
      </Article>
      <Article
        title="this en funciones arrow">
          <p>En las <strong>funciones regulares</strong>, la palabra clave this representaba el objeto que llamaba a la función, que podía ser la ventana, el documento, un botón o lo que fuera.</p>
          <p>Con las <strong>arrow function</strong>, la palabra clave this siempre representa el objeto que definió la arrow function.</p>
      </Article>
    </div>
  );
}

export default Children0;
