import React, { createContext, useContext, useState } from "react";

const Products = createContext();
const FilterProducts = createContext();
const SearchValue = createContext();
const Sort = createContext();
const CategorySort = createContext();

const ProductsContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [sort, setSort] = useState("latest");
  const [categorySort, setCategorySort] = useState("");
  return (
    <Products.Provider value={{ products, setProducts }}>
      <FilterProducts.Provider value={{ filterProducts, setFilterProducts }}>
        <SearchValue.Provider value={{ searchValue, setSearchValue }}>
          <Sort.Provider value={{ sort, setSort }}>
            <CategorySort.Provider value={{ categorySort, setCategorySort }}>
              {children}
            </CategorySort.Provider>
          </Sort.Provider>
        </SearchValue.Provider>
      </FilterProducts.Provider>
    </Products.Provider>
  );
};

export const useProducts = () => {
  return useContext(Products);
};
export const useFilterProducts = () => {
  return useContext(FilterProducts);
};
export const useSearchValue = () => {
  return useContext(SearchValue);
};
export const useSort = () => {
  return useContext(Sort);
};
export const useCategorySort = () => {
  return useContext(CategorySort);
};

export default ProductsContext;
