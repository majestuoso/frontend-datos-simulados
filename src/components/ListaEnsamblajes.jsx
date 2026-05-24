import React from "react";
import { ensamblajes } from "../data/ensamblajes";

function ListaEnsamblajes() {
  return (
    <div className="section">
      <h2>Ensamblajes</h2>
      <ul>
        {ensamblajes.map(e => (
          <li key={e.id}>
            <strong>Maniquí {e.maniqui_id}</strong>
            <span>→ Pieza {e.pieza_id}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaEnsamblajes;
