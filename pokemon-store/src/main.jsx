import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { PokemonProvider } from "../context/pokemonStore";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PokemonProvider>
      <App />
    </PokemonProvider>
  </React.StrictMode>
);
