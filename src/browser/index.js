import React from "react";
import { render, hydrate } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "../shared/configureStore";
import App from "../shared/App";

const store = configureStore(window.__initialData__); // connect initialData from server to browser redux store
delete window.__initialData__; // cleanup exposed data to avoid injection

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);