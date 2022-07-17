import { useEffect } from "react";
import Filter from "./components/Filter";
import FormCategory from "./components/FormCategory";
import FormProduct from "./components/FormProduct";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import { useCategory } from "./context/CategoryContext";
import { useProducts } from "./context/ProductsContext";

const App = () => {
  const { products, setProducts } = useProducts();
  const { category, setCategory } = useCategory();

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const savedCategories = JSON.parse(localStorage.getItem("categories")) || [];
    setProducts(savedProducts);
    setCategory(savedCategories);
  }, []);

  useEffect(() => {
    products.length && localStorage.setItem("products", JSON.stringify(products));
  }, [products]);
  useEffect(() => {
    category.length && localStorage.setItem("categories", JSON.stringify(category));
  }, [category]);

  return (
    <div>
      <Navbar />
      <div className="my-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 ">
          <div className="space-y-5">
            <FormCategory />
            <FormProduct />
          </div>
          <div className="space-y-10">
            <Filter />
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
