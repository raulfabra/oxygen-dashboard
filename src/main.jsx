import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { AuthProvider } from "./app/Providers/AuthProvider.jsx";
import { store } from "./app/store.js";
import App from "./App.jsx";
import { GlobalStyle } from "./styles/GlobalStyle.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <GlobalStyle />
        <App />
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
