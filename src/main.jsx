import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";

import { GlobalStyle } from "./main.style.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
