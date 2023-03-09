import { useEffect, useState } from "react";
import DarkMode from "../components/DarkMode/DarkMode";
import Heade from "../components/Heade/Heade";
import Popup from "../components/Popup/Popup";
import ButtonSortAndFilter from "../common/ButtonSortAndFilter";
import FilterPanel from "../components/FilterPanel/FilterPanel";
import SortProduct from "../components/SortProduct/SortProduct";
import Layout from "../Layout/Layout";
import ProductList from "../components/ProductList/ProductList";
import baner from "../assets/images/iphone-14-1-d.jpg";
import { products } from "../data";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const [productsData, setProductsData] = useState([]);
  const [resultsFound, setResultsFound] = useState(true);
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const [isOpenFilter, setIsOpenFilter] = useState(false);

  const [isOpenSort, setIsOpenSort] = useState(false);

  const [selectedSortValue, setSelectedSortValue] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const [selectedPrice, setSelectedPrice] = useState([1900000, 59312000]);
  const [cuisines, setCuisines] = useState([
    { id: 1, checked: false, label: "اپل" },
    { id: 2, checked: false, label: "سامسونگ" },
    { id: 3, checked: false, label: "شیائومی" },
    { id: 4, checked: false, label: "هواوی" },
    { id: 5, checked: false, label: "قرمز" },
    { id: 6, checked: false, label: "آبی" },
    { id: 7, checked: false, label: "سبز" },
    { id: 8, checked: false, label: "بنفش" },
  ]);

  const handleSelectSortValue = (event, value) =>
    !value ? null : setSelectedSortValue(value);

  const handleChangeChecked = (id) => {
    const cusinesStateList = cuisines;
    const changeCheckedCuisines = cusinesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCuisines(changeCheckedCuisines);
  };

  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };

  const changeInputHandler = (e) => {
    setSearchInput(e.target.value);
    navigate("/");
  };

  const applyFilters = () => {
    let updatedList = products;
    // Search Filter
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.persionName
            .toLowerCase()
            .search(searchInput.toLowerCase().trim()) !== -1
      );
    }
    // sort Filter
    if (selectedSortValue === "hieghst") {
      updatedList = [...updatedList].sort((a, b) => b.price - a.price);
    } else if (selectedSortValue === "lowest") {
      updatedList = [...updatedList].sort((a, b) => a.price - b.price);
    }
    // Cuisine Filter
    const cuisinesChecked = cuisines
      .slice(0, 4)
      .filter((item) => item.checked)
      .map((item) => item.label);
    const cuisinesColorChecked = cuisines
      .slice(4, 8)
      .filter((item) => item.checked)
      .map((item) => item.label);

    if (cuisinesChecked.length) {
      updatedList = updatedList.filter((item) =>
        cuisinesChecked.includes(item.cuisine)
      );
    }
    if (cuisinesColorChecked.length) {
      updatedList = updatedList.filter((item) =>
        cuisinesColorChecked.includes(item.cuisineColor)
      );
    }
    // Price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );
    setProductsData(updatedList);
    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    setProductsData(products);
  }, []);

  useEffect(() => {
    applyFilters();
  }, [searchInput, cuisines, selectedPrice, selectedSortValue]);

  return (
    <>
      <Popup
        selectedSortValue={selectedSortValue}
        selectSortValue={handleSelectSortValue}
        isOpenSearch={isOpenSearch}
        setIsOpenSearch={() => setIsOpenSearch(false)}
        cuisines={cuisines}
        changeChecked={handleChangeChecked}
        isOpenFilter={isOpenFilter}
        setIsOpenFilter={() => setIsOpenFilter(false)}
        selectedPrice={selectedPrice}
        changePrice={handleChangePrice}
        isOpenSort={isOpenSort}
        setIsOpenSort={() => setIsOpenSort(false)}
        value={searchInput}
        changeInput={changeInputHandler}
      />
      <Layout value={searchInput} changeInput={changeInputHandler}>
        {/* Header */}
        <Heade text="صفحه اصلی">
          <button onClick={() => setIsOpenSearch(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-5 h-5 stroke-slate-800"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5zM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </Heade>

        {/* dark mode */}
        <DarkMode />

        <main className="dark:bg-slate-800 mb-3 dark:text-white transition-all duration-200 2xl:container 2xl:max-w-screen-2xl mx-auto">
          {/* button filter and sort in mobile size */}
          <div className="w-full md:hidden flex gap-x-2 justify-center items-center py-2 px-4">
            <ButtonSortAndFilter
              text="مرتب سازی"
              onClick={() => setIsOpenSort(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 stroke-orange-600 dark:stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                />
              </svg>
            </ButtonSortAndFilter>
            <ButtonSortAndFilter
              text="فیلتر محصول"
              onClick={() => setIsOpenFilter(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 stroke-orange-600 dark:stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                />
              </svg>
            </ButtonSortAndFilter>
          </div>

          {/* main data */}
          <div className="w-full flex justify-center items-center md:px-5 2xl:px-3 dark:bg-slate-800 md:flex md:justify-between md:items-start">
            {/* filter panel */}
            <div className="w-1/6 h-full py-5 sticky top-16 hidden md:block">
              <FilterPanel
                cuisines={cuisines}
                changeChecked={handleChangeChecked}
                selectedPrice={selectedPrice}
                changePrice={handleChangePrice}
              />
              <div className="w-full flex justify-center items-center overflow-hidden rounded-lg mt-3">
                <img src={baner} alt="baner" />
              </div>
            </div>
            <div className="w-full md:w-5/6 h-full flex justify-center md:flex-col md:justify-start items-center md:py-5 md:pr-5">
              {/* sort */}
              <SortProduct
                selectedSortValue={selectedSortValue}
                selectSortValue={handleSelectSortValue}
              />
              {/* productList */}
              {resultsFound ? (
                <ProductList data={productsData} />
              ) : (
                <h2 className="text-center dark:text-gray-400 font-bold text-slate-700 mt-5 text-xl">
                  محصولی یافت نشد:(
                </h2>
              )}
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Home;
