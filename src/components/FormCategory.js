import React, { useState } from "react";
import { useCategory } from "../context/CategoryContext";

const FormCategory = () => {
  const [showform, setShowform] = useState(false);
  const [catform, setCatform] = useState({
    title: "",
    description: "",
  });

  const { category, setCategory } = useCategory();

  const changeHandler = (e) => {
    setCatform({ ...catform, [e.target.name]: e.target.value });
  };

  const sendCategoryData = (e) => {
    e.preventDefault();
    setCategory([
      ...category,
      {
        title: catform.title,
        description: catform.description,
        id: Math.floor(Math.random() * 100000),
        createdAt: new Date().toLocaleDateString("fa-IR-u-nu-latn"),
      },
    ]);
    setCatform({ title: "", description: "" });
  };

  if (!showform)
    return (
      <button
        className="text-xl underline underline-offset-2"
        onClick={() => setShowform(!showform)}
      >
        Add New Category?
      </button>
    );

  return (
    <div className="bg-slate-700 w-full md:w-3/4 rounded-lg p-4 ">
      <form onSubmit={sendCategoryData} className="space-y-5">
        <div>
          <label className="block mb-1 ">Title:</label>
          <input
            type="text"
            name="title"
            value={catform.title}
            onChange={changeHandler}
            className="bg-transparent w-full md:w-auto border border-gray-400 rounded-md "
          />
        </div>
        <div>
          <label className="block mb-1">Descriptions:</label>
          <textarea
            rows="3"
            name="description"
            value={catform.description}
            onChange={changeHandler}
            className="bg-transparent border border-gray-400 rounded-md w-full"
          ></textarea>
        </div>
        <div className="grid grid-cols-2 gap-5 ">
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowform(false);
            }}
            className="border border-gray-500 text-white rounded-md py-2 px-4"
          >
            Cancel
          </button>
          <button type="submit" className="bg-gray-500 text-white rounded-md py-2 px-4">
            Add Category
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormCategory;
