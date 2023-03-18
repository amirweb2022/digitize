import { useCartActions } from "../../../context/Cart/CartProvider";
const CartProduct = ({ data }) => {
  const dispatch = useCartActions();
  const incrementHadnler = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };
  const decrementHandler = (item) => {
    dispatch({ type: "DECREMENT_PRODUCT", payload: item });
  };
  const removeProduct = (item) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: item });
  };
  return (
    <div className="w-full dark:bg-slate-700 bg-stone-50 shadow-md rounded-md py-2 flex justify-between items-center mt-3">
      <div className="flex justify-center items-center">
        <div className="w-20 md:w-28">
          <img
            src={data.image}
            className="w-full h-auto"
            alt={data.persionName}
          />
        </div>
        <div className="flex flex-col justify-start items-start h-full py-3 mr-1 md:mr-3">
          <p className="text-xs md:text-lg text-slate-900 dark:text-gray-200">
            {data.persionName.substring(0, 20)}{" "}
          <span
            className={`shadow-md w-4 h-4 inline-block rounded-full ${data.color}`}
          ></span>
          </p>
          <span className="mt-3 text-sm md:text-lg text-orange-600 font-bold">
            {data.price.toLocaleString("fa-IR")} تومان
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end h-20 ml-3 w-16">
        <button className="mb-3" onClick={() => removeProduct(data)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 stroke-red-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex justify-center items-center w-full">
          <button
            className="bg-gray-300 text-white rounded-full w-7 h-6"
            onClick={() => incrementHadnler(data)}
          >
            <span className="text-lg">+</span>
          </button>
          <span className="mx-1 border-2 md:px-1 text-slate-700 border-orange-500 dark:text-white">
            {data.quantity}
          </span>
          <button
            className="bg-red-200 text-white rounded-full w-7 h-6"
            onClick={() => decrementHandler(data)}
          >
            <span className="text-lg text-red-400">-</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;