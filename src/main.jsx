import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    <ToastContainer
      position="top-center"
      autoClose={1500}
      hideProgressBar={true}
      newestOnTop={true}
      closeOnClick
      draggable={false}
      theme="light"
      toastClassName="custom-toast"
      
    />
  </BrowserRouter>
);
