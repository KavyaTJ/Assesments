import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import App from "./App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


const name="Kavya";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App FirstName={name}/>
  </StrictMode>
);
