import SortToggle from "../SortToggle/SortToggle";
import { sortList } from "../../assets/data";
const SortProduct = ({ selectedSortValue, selectSortValue }) => {
  return (
    <div className="w-full dark:bg-slate-700 bg-stone-50 shadow-md px-3 py-2 rounded-md hidden md:flex justify-start items-center">
      <div className="flex justify-center items-center bg-blue-400 p-2 rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-6 h-6 stroke-white text-white"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M2.25 4.5A.75.75 0 0 1 3 3.75h14.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75zm0 4.5A.75.75 0 0 1 3 8.25h9.75a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 9zm15-.75A.75.75 0 0 1 18 9v10.19l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 1 1 1.06-1.06l2.47 2.47V9a.75.75 0 0 1 .75-.75zm-15 5.25a.75.75 0 0 1 .75-.75h9.75a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div className="flex justify-center items-center w-full">
        <SortToggle
          options={sortList}
          value={selectedSortValue}
          selectToggle={selectSortValue}
        />
      </div>
    </div>
  );
};

export default SortProduct;