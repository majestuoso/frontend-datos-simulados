import React from "react";
import { maniquies } from "../data/maniquies";

function ListaManiquies() {
  return (
    <div className="section">
      <h2>Maniquíes Terminados</h2>
      <ul>
        {maniquies.map(m => (
          <li key={m.id}>
            <strong>{m.numero_serie}</strong>
            <span>Modelo: {m.modelo_id}</span>
            <span>Fecha: {m.fecha_fabricacion}</span>
            <span>Costo: ${m.costo_total}</span>
            <span>Obs: {m.observaciones}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaManiquies;
