import React from "react";
import ReactDOM from "react-dom/client";
import App from "./router/App";
import store from "./store/index";
import { Provider } from "react-redux";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <App />
    </Provider>
);
