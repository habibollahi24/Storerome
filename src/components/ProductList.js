import React, { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import {
  useCategorySort,
  useFilterProducts,
  useProducts,
  useSearchValue,
  useSort,
} from "../context/ProductsContext";
import { HiTrash } from "react-icons/hi";

const ProductList = () => {
  const [tooltip, showTooltip] = useState(true);
  const { products, setProducts } = useProducts();
  const { filterProducts, setFilterProducts } = useFilterProducts();
  const { sort } = useSort();
  const { searchValue } = useSearchValue();
  const { categorySort } = useCategorySort();

  useEffect(() => {
    let result = products;
    result = result.filter((product) =>
      product.title.toLowerCase().includes(searchValue)
    );
    result = result.sort((a, b) => {
      if (sort === "latest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      } else if (sort === "earlest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
      }
    });
    result = result.filter((item) => {
      if (categorySort === "") return item;
      else return item.category === categorySort;
    });

    setFilterProducts(result);
  }, [products, sort, searchValue, categorySort]);

  const deletHandler = (productId) => {
    const filtered = products.filter((product) => product.id !== productId);
    setProducts(filtered);
  };

  console.log(products);

  return (
    <div>
      <div className=" border-b border-gray-400 text-xl ">Product List:</div>
      {products.length === 0 && (
        <div className="text-gray-400"> Empty Anbar ... </div>
      )}
      <div className="">
        {filterProducts.map((product) => {
          const { id, createdAt, category, title, quantity, date } = product;
          return (
            <div
              key={id}
              className="  grid grid-cols-2 md:grid-cols-3 gap-2 bg-slate-700 rounded-md my-2 items-center justify-between p-4 text-gray-400 overflow-x-auto"
            >
              <div className="text-lg font-semibold text-gray-300">{title}</div>
              <div className=" flex items-center justify-between md:justify-end gap-x-5  col-span-2">
                {/* <div
                  data-tip="createdAt"
                  className="text-sm font-semibold"
                  onMouseEnter={() => showTooltip(true)}
                  onMouseLeave={() => {
                    showTooltip(false);
                    setTimeout(() => showTooltip(true), 50);
                  }}
                >
                  {createdAt}
                </div> */}
                <div
                  data-tip="category"
                  onMouseEnter={() => showTooltip(true)}
                  onMouseLeave={() => {
                    showTooltip(false);
                    setTimeout(() => showTooltip(true), 50);
                  }}
                  className="flex justify-center items-center rounded-full border text-lg px-4  border-gray-200"
                >
                  {category}
                </div>
                <div
                  data-tip="quantity"
                  onMouseEnter={() => showTooltip(true)}
                  onMouseLeave={() => {
                    showTooltip(false);
                    setTimeout(() => showTooltip(true), 50);
                  }}
                  className="flex justify-center items-center w-max rounded-full border-2 text-lg px-2 bg-gray-400 text-white  border-white"
                >
                  {quantity}
                </div>
                <div>
                  {new Date(date).toLocaleDateString("fa-IR-u-nu-latn")}
                </div>
                {/* <div>{new Date(date) - new Date()}</div> */}
                <div className=" whitespace-nowrap flex flex-row-reverse">
                  <span>
                    {Math.ceil(
                      Math.abs(new Date(date) - new Date()) /
                        (1000 * 60 * 60 * 24)
                    )}
                  </span>
                  <span> روز تا تحویل</span>
                </div>
                <div>
                  <button
                    onClick={() => deletHandler(id)}
                    className="text-red-500 text-2xl align-bottom transition-all duration-200 hover:scale-110"
                  >
                    <HiTrash />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {tooltip && <ReactTooltip effect="solid" />}
    </div>
  );
};

export default ProductList;
