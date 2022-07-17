import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CategoryContext from "./context/CategoryContext";
import ProductsContext from "./context/ProductsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CategoryContext>
      <ProductsContext>
        <App />
      </ProductsContext>
    </CategoryContext>
  </React.StrictMode>
);
