const SearchBar = () => {
  return (
    <div className="flex justify-start items-center bg-gray-200 rounded-md h-12 w-full px-4 md:w-1/3 lg:w-1/2 xl:w-1/3">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-6 h-6 stroke-slate-500 font-medium"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5zM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div className="mr-1 w-full h-full">
        <input
          type="text"
          className="h-full focus:outline-none px-3 w-full text-sm text-slate-800 bg-transparent"
          placeholder="جستجوی نام محصول,نام برند,نام مدل و.."
        />
      </div>
    </div>
  );
};

export default SearchBar;