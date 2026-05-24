import React from "react";
import { modelos } from "../data/modelos";

function ListaModelos() {
  return (
    <div className="section">
      <h2>Modelos</h2>
      <ul>
        {modelos.map(m => (
          <li key={m.id}>
            <strong>{m.nombre}</strong>
            <span>{m.descripcion}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaModelos;
