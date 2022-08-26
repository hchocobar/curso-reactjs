/*
Ejemplo de un listado importando datos de un archivo JSON local
Utilizamos el archivo Lista2-data.js donde están los datos de la tabla
Importamos la constante lista2Data agregando la siguiente linea:
  import { lista2Data } from './Lista2-data.js';
 */

import React from "react";
import { lista2Data } from './Lista2-data.js';

// explicar si la siguiente línea comentada sería válida. Porque no la usarías?
// export const Lista2 = () => {
const Lista2 = () => {
  return (
    <>
      <h3>Listado con JSON en un archivo local</h3>
      <section>
        {lista2Data.map((data, key) => {
          return (
            <span key={key}>
              <ListItems
                key={key}
                company={data.company}
                ticker={data.ticker}
                stockPrice={data.stockPrice}
                timeElapsed={data.timeElapsed}
              />
            </span>
          );
        })}
      </section>
    </>
  );
};


const ListItems = ({ company, ticker, stockPrice, timeElapsed }) => {
  if (!company) return <div />;
  return (
    <table>
      <tbody>
        <tr>
          <td className="td-left">{company}</td>
          <td className="td-center">{ticker}</td>
          <td className="td-center">{stockPrice}</td>
          <td className="td-right">{timeElapsed}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Lista2;
