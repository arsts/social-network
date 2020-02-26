import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import state from "./redux/state";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App state={state} />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
