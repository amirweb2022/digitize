import Accordion from "../Accordion/Acordion";
const FilterPanel = ({
  cuisines,
  changeChecked,
  selectedPrice,
  changePrice,
}) => {
  return (
    <div
      className="w-full dark:bg-slate-700 overflow-auto
     dark:shadow-md dark:shadow-gray-600 bg-stone-50 shadow-md shadow-gray-400 h-80 rounded-xl p-3 flex justify-start items-start flex-col"
    >
      <h3 className="text-lg font-bold text-orange-500 mr-2">فیلتر</h3>
      <Accordion
        cuisines={cuisines}
        changeChecked={changeChecked}
        selectedPrice={selectedPrice}
        changePrice={changePrice}
      />
    </div>
  );
};

export default FilterPanel;