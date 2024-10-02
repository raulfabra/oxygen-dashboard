import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { AuthProvider } from "./app/Providers/AuthProvider";
import { DataProvider } from "./app/Providers/DataProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <DataProvider>
          <GlobalStyle />
          <App />
        </DataProvider>
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
