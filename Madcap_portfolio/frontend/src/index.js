import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Header from "./Header";
import "./index.css"; 
import "./App.css";
import "./Header.css";

// ✅ Injection principale de React dans `root`
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />  {/* ✅ Affichage du Header React */}
    <App />     {/* ✅ Affichage du reste de l'application */}
  </React.StrictMode>
);

// ✅ Suppression du code en double pour `header-root`
console.log("📢 Vérification : `header-root` =", document.getElementById("header-root"));
