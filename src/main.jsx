 import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";   // your main component
import "./index.css";          // import Tailwind + custom CSS

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

