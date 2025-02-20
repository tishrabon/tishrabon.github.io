import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App.jsx";
// import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";

import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter >
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </HashRouter >
  </StrictMode>,
);
