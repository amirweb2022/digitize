const Tab = ({ onClick, tab, text, value }) => {
  return (
    <button
      className={`transition-all duration-75 ${
        tab === value
          ? "bg-white rounded-full shadow-md py-1 px-3 text-slate-800"
          : "text-gray-400 text-sm"
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Tab;