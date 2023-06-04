import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

//adding custom styling
import "./fonts/NHaasGrotesk/NHaasGrotesk-Bold.ttf";
import "./fonts/NHaasGrotesk/NHaasGrotesk-Regular.ttf";
import "./fonts/NHaasGrotesk/NHaasGrotesk-Medium.ttf";

//redux setup
import store from "./redux";
import { persistStore } from "redux-persist";
import axios from "axios";

let persistor = persistStore(store);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
axios.defaults.baseURL = "http://3.93.236.132:3001"
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
