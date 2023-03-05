const ButtonCloseSearchBar = ({ close, cancellation }) => {
    return (
        <>
            <button
                className="w-full mt-2 bg-transparent text-orange-400 border-2 border-orange-400 rounded-md py-2"
                onClick={close}
            >
                {cancellation}
            </button>
        </>
    );
};

export default ButtonCloseSearchBar