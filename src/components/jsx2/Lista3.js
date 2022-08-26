/*
Ejemplo de un listado importando datos en formato JSON desde un sitio remoto
Utilizamos los datos del sitio jsonplaceholder.typicode.com
Utilizamos dos hooks de React useState y useEffect
Utilizamos fetch() y Response.json()
Utilizamos async / await
En el App.js importamos el componente Lista3
 */
import React, { useState, useEffect } from "react";

function Lista3() {
  const url = 'https://jsonplaceholder.typicode.com/todos'
  const [todos, setTodos] = useState()
  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    setTodos(responseJSON)
  }

  useEffect(() => {
      fetchApi()
    }, [])

  return (
    <div>
      <h3>Consumiendo API desde React</h3>
      <p>fuente: {url}</p>
      <section>
        <ul>
          { !todos ? 'Cargando los datos desde la url ...' :
            todos.map((todo,index) =>{
              return <li key={index}>{todo.id} - {todo.title} - {todo.userId}</li>
              }
            )
          }
        </ul>
      </section>
    </div>
  );
}

export default Lista3;
