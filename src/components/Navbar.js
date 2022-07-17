import React from "react";
import { useProducts } from "../context/ProductsContext";

const Navbar = () => {
  const { products } = useProducts();
  return (
    <div className="flex justify-center items-center gap-x-3 bg-slate-700 p-4 text-2xl font-semibold">
      <div>Inventory App </div>
      <div className="flex justify-center items-center rounded-full border-2 text-lg px-2  border-gray-200">
        {products.length}
      </div>
    </div>
  );
};

export default Navbar;
