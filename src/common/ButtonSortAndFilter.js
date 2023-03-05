const ButtonSortAndFilter = ({ onClick, text, children }) => {
    return (
        <button
            className="w-1/2 bg-white shadow-md shadow-slate-400 dark:shadow-transparent dark:bg-orange-500 mr-2 p-2 rounded-md flex justify-start items-center"
            onClick={onClick}
        >
            <span>
                {children}
            </span>
            <span className="text-sm text-slate-600 dark:text-white mr-2 font-bold">
                {text}
            </span>
        </button>
    );
}

export default ButtonSortAndFilter;