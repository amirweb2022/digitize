import { Link, useNavigate } from "react-router-dom";
import Heade from "../components/Heade/Heade";
import Layout from "../Layout/Layout";
import DarkMode from "../components/DarkMode/DarkMode";
import CartProductList from "../components/CartProductList/CartProductList";
import { useCart } from "../context/Cart/CartProvider";
const Cart = () => {
  const { cart, total } = useCart();
  const navigate = useNavigate();
  if (cart.length === 0) {
    return (
      <Layout changeInput={() => navigate("/")}>
        {/* Heade */}
        <Heade text="سبد خرید">
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </Heade>
        {/* dark mode */}
        <DarkMode />
        <section className="w-full text-right mt-4 px-4 mb-3 md:mb-0 flex justify-start items-start flex-col md:h-80">
          <p className="mb-4 text-slate-700 dark:text-gray-300 text-lg font-bold">
            محصولی در سبد خرید ندارید!
          </p>
          <Link to="/" className="text-orange-500 font-bold text-xl">
            رفتن به فروشگاه ؟
          </Link>
        </section>
      </Layout>
    );
  }
  return (
    <Layout changeInput={() => navigate("/")}>
      {/* Heade */}
      <Heade text="سبد خرید">
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </Heade>
      {/* dark mode */}
      <DarkMode />
      <main className="dark:bg-slate-800 mb-3 dark:text-white transition-all duration-200 2xl:container 2xl:max-w-screen-2xl mx-auto">
        <div className="w-full flex justify-center items-center px-4 flex-col md:flex-row md:items-start">
          <div className="w-full md:w-2/3 flex justify-center items-center flex-col md:ml-3">
            <CartProductList data={cart} />
          </div>
          <CartSummery total={total}/>
        </div>
      </main>
    </Layout>
  );
};

export default Cart;
export const CartSummery = ({ total }) => {
  return (
    <div className="w-full md:w-1/3 flex justify-center items-center flex-col mt-3">
      <div className="w-full bg-white dark:bg-slate-700 shadow-lg flex justify-center items-center flex-col p-3 rounded-lg">
        <div className="w-full flex justify-between items-center">
          <span className="text-slate-900 dark:text-gray-300 text-lg">مجموع قیمت:</span>
          <span className="text-orange-500 text-lg">
            {total.toLocaleString("fa-IR")} تومان
          </span>
        </div>
        <div className="w-full flex justify-between items-center mt-3">
          <span className="text-slate-900 dark:text-gray-300 font-normal text-lg w-1/2">
            کد تخفیف:
          </span>
          <div className="flex justify-center items-center w-1/2 border-2 dark:border-slate-600 py-1 rounded-md">
            <input
              type="text"
              className="w-3/4 text-sm px-2 py-1 bg-transparent outline-none"
              placeholder="123ABC"
            />
            <button className="text-sm bg-orange-500 text-white p-1 w-1/3 ml-1 rounded-md">
              تایید
            </button>
          </div>
        </div>
        <div className="w-full flex justify-between items-center mt-3">
          <span className="text-slate-900 dark:text-gray-300 font-normal text-lg w-1/2">
            تخفیف:
          </span>
          <spa className="text-red-400 font-bold ml-2">0 -</spa>
        </div>
        <div className="w-full flex justify-between items-center mt-3">
          <span className="text-slate-900 dark:text-gray-300 text-lg">نهایی قیمت:</span>
          <span className="text-orange-500 text-lg">
            {total.toLocaleString("fa-IR")} تومان
          </span>
        </div>
      </div>
      <div className="w-full flex justify-center items-center flex-col mt-3">
        <button className="w-full py-2 bg-orange-500 text-white font-bold text-lg rounded-md mb-2">
          <Link to="/auth/?redirect=checkout">ادامه فرآیند خرید</Link>
        </button>
        <button className="w-full py-2 bg-transparent border-2 border-orange-500 text-orange-600 font-bold text-lg rounded-md">
          <Link to="/">انصراف از خرید</Link>
        </button>
      </div>
    </div>
  );
};