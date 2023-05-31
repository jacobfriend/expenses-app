import ReactDOM from "react-dom/client";
import React from "react";

import "./index.css";
import App from "./App"; // omit .js extensions, app is a component

const root = ReactDOM.createRoot(document.getElementById("root")); // div is most common root element selected
root.render(<App />); // jsx syntax
