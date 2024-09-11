import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GlobalStyle } from "./styles/GlobalStyle.jsx";

import { Provider } from "react-redux";
import { reduxStore } from "./app/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>
);
