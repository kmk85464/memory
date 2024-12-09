import React, { useState } from "react";
import Board from "./components/Board";

const App = () => {
  return (
    <div className="App">
      <h1>Juego de Memoria</h1>
      <Board />
    </div>
  );
};

export default App;