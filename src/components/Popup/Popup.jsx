import SearchBar from "../SearchBar/SearchBar";
import Button from "../../common/ButtonCloseSearchBar";
import Accordion from "../Accordion/Acordion";
import SortToggle from "../SortToggle/SortToggle";
import { sortList } from "../../assets/data";
const Popup = ({
  isOpenSearch,
  setIsOpenSearch,
  cuisines,
  changeChecked,
  setIsOpenFilter,
  isOpenFilter,
  selectedPrice,
  changePrice,
  selectedSortValue,
  selectSortValue,
  isOpenSort,
  setIsOpenSort,
  value,
  changeInput,
}) => {
  return (
    <>
      {/* search bar */}
      <section
        className={`fixed md:hidden w-full py-2 z-20 bg-white dark:bg-slate-800 justify-center items-center flex-col px-2 ${
          isOpenSearch ? "flex" : "hidden"
        }`}
      >
        <SearchBar value={value} changeInput={changeInput} />
        <Button close={setIsOpenSearch} cancellation="بستن" />
      </section>
      {/* filter popup */}
      <section
        className={`fixed w-full h-full z-20 backdrop-blur-sm bg-white/30 justify-end items-center flex-col ${
          isOpenFilter ? "flex" : "hidden"
        } md:hidden`}
      >
        <div
          className="bg-white dark:bg-slate-800 dark:text-white rounded-tr-xl fixed bottom-0
        shadow-lg shadow-slate-6 rounded-tl-xl px-4 py-4 w-full flex justify-start items-start flex-col md:hidden"
        >
          <h3 className="text-lg font-bold text-orange-500 mr-2">فیلتر</h3>
          <Accordion
            cuisines={cuisines}
            changeChecked={changeChecked}
            selectedPrice={selectedPrice}
            changePrice={changePrice}
          />
          <div className="w-full flex justify-between items-center">
            <button
              className="w-1/2 bg-orange-500 text-white rounded-md py-3 text-lg"
              onClick={setIsOpenFilter}
            >
              فیلتر
            </button>
            <button
              onClick={setIsOpenFilter}
              className="w-1/2 bg-transparent border-2 border-orange-600 text-orange-600 rounded-md py-3 text-lg mr-2"
            >
              بستن
            </button>
          </div>
        </div>
      </section>

      {/* sort toggle */}
      <section
        className={`fixed w-full h-full z-20 backdrop-blur-sm bg-white/30 justify-end items-center flex-col ${
          isOpenSort ? "flex" : "hidden"
        } md:hidden`}
        onClick={setIsOpenSort}
      >
        <div
          className="bg-white dark:bg-slate-800 dark:text-white rounded-tr-xl fixed bottom-0
        shadow-lg shadow-slate-6 rounded-tl-xl px-4 py-4 w-full flex justify-start items-start flex-col md:hidden"
        >
          <h3 className="text-lg font-bold text-orange-500 mb-3">مرتب سازی</h3>
          <SortToggle
            options={sortList}
            value={selectedSortValue}
            selectToggle={selectSortValue}
          />
        </div>
      </section>
    </>
  );
};

export default Popup;
