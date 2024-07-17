import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient.tsx";
import store from "./state/store.tsx";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </MantineProvider>
    </Provider>
  </React.StrictMode>
);
