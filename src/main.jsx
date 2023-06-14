import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.jsx";
import "./global-styles/reset.scss";
import "./global-styles/normalize.scss";
import "./global-styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
