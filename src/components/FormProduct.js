import React, { useState } from "react";
import { useCategory } from "../context/CategoryContext";
import { useProducts } from "../context/ProductsContext";

const FormProduct = () => {
  const [productform, setproductform] = useState({
    title: "",
    quantity: 1,
    category: "",
  });

  const { category } = useCategory();
  const { products, setProducts } = useProducts();

  const changeHandler = (e) => {
    setproductform({ ...productform, [e.target.name]: e.target.value });
  };

  const sendCategoryData = (e) => {
    e.preventDefault();
    setProducts([
      ...products,
      {
        title: productform.title,
        quantity: productform.quantity,
        category: productform.category,
        id: Math.floor(Math.random() * 100000),
        createdAt: new Date().toLocaleDateString("fa-IR-u-nu-latn"),
      },
    ]);
    setproductform({ title: "", quantity: 0, category: "" });
  };

  return (
    <div className="bg-slate-700 w-full md:w-3/4 rounded-lg p-4">
      <form onSubmit={sendCategoryData} className="space-y-6">
        <div>
          <label className="block mb-1">Title:</label>
          <input
            type="text"
            placeholder="title"
            name="title"
            value={productform.title}
            onChange={changeHandler}
            className="bg-transparent border border-gray-400 rounded-md w-full"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">Quantity:</label>
            <input
              type="number"
              className="bg-transparent border w-full border-gray-400 rounded-md "
              name="quantity"
              value={productform.quantity}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label className="block mb-1">Category:</label>
            <select
              className="bg-transparent border border-gray-400 rounded-md w-full"
              name="category"
              value={productform.category}
              onChange={changeHandler}
            >
              <option className="bg-slate-800 appearance-none p-4">select category</option>
              {category.map((c) => {
                return (
                  <option key={c.id} value={c.title} className="bg-slate-800 ">
                    {c.title}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <button type="submit" className="bg-gray-500 text-white rounded-md py-2 px-4 w-full">
          Create New Product
        </button>
      </form>
    </div>
  );
};

export default FormProduct;
