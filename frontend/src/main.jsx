import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/global.css";
import "./styles/layout.css";
import "./styles/navbar.css";
import "./styles/footer.css";
import "./styles/table.css";
import "./styles/form.css";
import "./styles/buttons.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>

    <App />

    <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="colored"
    />

</React.StrictMode>
);