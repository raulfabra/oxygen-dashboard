import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./app/styles/index.css";
import { Provider } from "react-redux";
import { AuthProvider } from "./app/Providers/AuthProvider";
import { store } from "./app/store(redux)/store";
import { GlobalStyle } from "./app/styles/GlobalStyle";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <AuthProvider>
      <GlobalStyle />
      <App />
    </AuthProvider>
  </Provider>
);
