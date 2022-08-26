import React, { Component } from 'react';
// import '../styles/Children.css';
import PropTypes from 'prop-types'
/*
  Verificar que esté instalada la librería prop-types en node_modules
  Si no está instalda, se inestala desde consola con el siguiente comando
  npm install prop-types -SE
 */

class Box extends Component {
  render() {
    return (
      <div className="Box-fecha">
        {this.props.children}
      </div>
    );
  }
}

class ArticleOld extends Component {
  constructor(props) {
    super(props)
  }
  render() {
      const {author, children, date, title} = this.props
      return(
        <section className="Children-Article">
          <h2>{title}</h2>
          {author && <p><em>Escrito por {author}</em></p>}
          <Box>{date}</Box>
          <article>
            {children}
          </article>
        </section>
      )
  }
}

function Article(props) {
  const {author, children, date, title} = props
  return (
    <section className="Children-Article">
      <h2>{title}</h2>
      {author && <p><em>Escrito por {author}</em></p>}
      <Box>{date}</Box>
      <article>
        {children}
      </article>
    </section>
  )
}

Article.propTypes = {
  author: PropTypes.string.isRequired
}

function Children1PropType() {
  return (
    <div>
      <h4>Children Props</h4>
      <Article
        author="Wikipedia"
        // date={new Date().toLocaleDateString()}
        date={new Date().toLocaleString()}
        title="Articulo de React JS">
          React (también llamada React.js o ReactJS) es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página.
      </Article>
      <hr></hr>
      <Article
        author="Antoine"
        date={new Date().toLocaleDateString()}
        title="Articulo de Angular JS">
          <p><strong>AngularJS</strong> (comúnmente llamado Angular.js o AngularJS 1), es un framework de JavaScript de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página.</p>
      </Article>
      <Article
        author="Otro Antoine"
        date={new Date().toLocaleDateString()}
        title="Articulo de Angular JS">
          <p><strong>AngularJS</strong> (comúnmente llamado Angular.js o AngularJS 1), es un framework de JavaScript de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página.</p>
      </Article>

    </div>
  );
}

export default Children1PropType;
