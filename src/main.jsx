import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { AuthProvider } from "./app/Providers/AuthProvider.jsx";
import { store } from "./app/store.js";
import { GlobalStyle } from "./styles/GlobalStyle.jsx";
import App from "./App.jsx";
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
