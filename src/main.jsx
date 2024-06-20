import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { NoteContextProvider } from "./contexts/NoteContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NoteContextProvider>
        <App />
      </NoteContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
