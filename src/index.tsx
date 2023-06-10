import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "react-toastify/dist/ReactToastify.css";

//adding custom styling
import "./fonts/NHaasGrotesk/NHaasGrotesk-Bold.ttf";
import "./fonts/NHaasGrotesk/NHaasGrotesk-Regular.ttf";
import "./fonts/NHaasGrotesk/NHaasGrotesk-Medium.ttf";

//redux setup
import store from "./redux";
import { persistStore } from "redux-persist";
import axios from "axios";
import { ToastContainer } from "react-toastify";

let persistor = persistStore(store);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
axios.defaults.baseURL = process.env.REACT_APP_SERVER_IP;
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <App />
      <ToastContainer />
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
