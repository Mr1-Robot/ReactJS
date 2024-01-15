import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import { FavoritesContextProvider } from "./store/favorites-context";
ReactDOM.createRoot(document.getElementById("root")).render(
  <FavoritesContextProvider>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </FavoritesContextProvider>
);
