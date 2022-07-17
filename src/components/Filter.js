import { useCategory } from "../context/CategoryContext";
import { useCategorySort, useSearchValue, useSort } from "../context/ProductsContext";

const Filter = () => {
  const { searchValue, setSearchValue } = useSearchValue();
  const { sort, setSort } = useSort();
  const { categorySort, setCategorySort } = useCategorySort();
  const { category } = useCategory();

  return (
    <div className="space-y-4">
      <div className="text-2xl  border-b border-gray-400">Filter</div>
      <div className="flex justify-between items-center">
        <div className="text-xl ">Search:</div>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value.trim().toLowerCase())}
          type="text"
          className="bg-transparent w-auto border border-gray-400 rounded-md"
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="text-xl ">Sort:</div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="bg-transparent w-auto  border border-gray-400 rounded-md  "
        >
          <option className="bg-slate-800 " value="">
            Select a category
          </option>
          <option className="bg-slate-800 " value="latest">
            Latest
          </option>
          <option className="bg-slate-800 " value="earlest">
            Earlest
          </option>
        </select>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-xl ">Category:</div>
        <select
          value={categorySort}
          onChange={(e) => setCategorySort(e.target.value)}
          className="bg-transparent w-auto  border border-gray-400 rounded-md  "
        >
          <option className="bg-slate-800 " value="">
            All
          </option>
          {category.map((c) => {
            return (
              <option key={c.id} className="bg-slate-800 " value={c.title}>
                {c.title}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Filter;
