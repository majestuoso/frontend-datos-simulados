import React from "react";
import ListaModelos from "./components/ListaModelos";
import ListaPiezas from "./components/ListaPiezas";
import ListaManiquies from "./components/ListaManiquies";
import ListaEnsamblajes from "./components/ListaEnsamblajes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Simulación de Base de Datos</h1>
      <ListaModelos />
      <ListaPiezas />
      <ListaManiquies />
      <ListaEnsamblajes />
    </div>
  );
}

export default App;
