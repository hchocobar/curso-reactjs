/*
Ejemplo de un listado importando datos en formato JSON desde un sitio remoto
Utilizamos los datos del sitio jsonplaceholder.typicode.com
Utilizamos dos hooks de React useState y useEffect
Utilizamos fetch() y Response.json()
Utilizamos async / await
En el App.js importamos el componente Lista3
 */
import React, { useState, useEffect } from "react";

function Lista7Bis() {
  const url = 'https://countriesnow.space/api/v0.1/countries/currency'
  const [misUsers, setMisUsers] = useState()
  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    setMisUsers(responseJSON)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <div>
      <h3>Consumiendo API JSON desde React</h3>
      <p>fuente: {url}</p>
      <ul>
        { !misUsers ? 'Cargando...' :
          misUsers.map((usuario,index) =>{
            return <li key={index}>{usuario.name}</li>
          }
        )}
      </ul>
    </div>
  );
}

export default Lista7Bis;
