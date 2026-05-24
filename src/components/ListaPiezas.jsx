// src/components/ListaPiezas.jsx
import React from "react";
import { piezas } from "../data/piezas";

function ListaPiezas() {
  return (
    <div className="section">
      <h2>Piezas</h2>
      <ul>
        {piezas.map(p => (
          <li key={p.id}>
            <strong>{p.tipo}</strong>
            <span>Serie: {p.numero_serie}</span>
            <span>Color: {p.color}</span>
            <span>Material: {p.material}</span>
            <span>Fecha: {p.fecha_fabricacion}</span>
            <span>Costo: ${p.costo}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaPiezas;   
