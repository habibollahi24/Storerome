import React, { createContext, useContext, useState } from "react";

const Category = createContext();

const CategoryContext = ({ children }) => {
  const [category, setCategory] = useState([]);
  return <Category.Provider value={{ category, setCategory }}>{children}</Category.Provider>;
};

export const useCategory = () => {
  return useContext(Category);
};

export default CategoryContext;
