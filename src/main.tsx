import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { AuthProvider } from "./app/Providers/AuthProvider.js";
import { store } from "./app/store.js";
import App from "./App.js";
import { GlobalStyle } from "./styles/GlobalStyle.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <GlobalStyle />
        <App />
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
