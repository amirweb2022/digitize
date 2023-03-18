import products from "../assets/data.js";
import Layout from "../Layout/Layout";
import Heade from "../components/Heade/Heade";
import { useNavigate, NavLink, Link, useParams } from "react-router-dom";
import DarkMode from "../components/DarkMode/DarkMode";
import baner from "../assets/images/iphone-14-1-d.jpg";
import ProductDetail from "../components/ProductDetail/ProductDetail";
const SigleProduct = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const SidebarLink = [
    { to: "#designing", text: "طراحی" },
    { to: "#camera", text: "دوربین" },
    { to: "#battery", text: "باتری" },
  ];
  const navigate = useNavigate();
  return (
    <Layout changeInput={() => navigate("/")}>
      {/* Heade */}
      <Heade text={product.persionName.substring(0, 20)}>
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

      {/* forward Link  in mobile */}
      <ForwardLinkSection>
        <ForwardLink href="/" text="خانه" />
        <ForwardLink
          href={`/?category=${product.category}`}
          text={product.category}
        />
        <ForwardLink href={`/?brand=${product.brand}`} text={product.cuisine} />
        <ForwardLink
          href={`/singleProduct/${product.id}`}
          text={product.persionName.substring(0, 5)}
        />
      </ForwardLinkSection>

      <main className="dark:bg-slate-800 mb-3 dark:text-white transition-all duration-200 2xl:container 2xl:max-w-screen-2xl mx-auto">
        {/* main data */}
        <div className="w-full flex justify-center items-center md:px-5 2xl:px-3 dark:bg-slate-800 md:flex md:justify-between md:items-start">
          {/* sidebar */}
          <div className="lg:w-1/6 md:w-1/4 h-full py-5 sticky top-16 hidden md:block">
            <div
              className="w-full dark:bg-slate-700 overflow-auto
     bg-stone-50 shadow-md h-auto rounded-xl p-3 flex justify-start items-start flex-col"
            >
              <h3 className="text-lg font-bold text-orange-500 mr-2">
                دسترسی سریع
              </h3>
              <div className="w-full px-2 mt-2 flex justify-start items-start flex-col">
                {SidebarLink.map((link) => {
                  return (
                    <Link
                      to={link.to}
                      className="mb-2 dark:text-gray-300 text-slate-600 font-bold"
                    >
                      {link.text}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="w-full flex justify-center items-center overflow-hidden rounded-lg mt-3">
              <img src={baner} alt="baner" />
            </div>
          </div>
          <div className="w-full md:w-10/12 lg:w-5/6 h-full flex justify-center md:flex-col md:justify-start items-center md:py-5 md:pr-5">
            {/* Forward Link */}
            <div className="w-full dark:bg-slate-700 bg-stone-50 shadow-md px-4 py-3 rounded-md hidden md:flex justify-start items-center">
              <ForwardLink href="/" text="خانه" />
              <ForwardLink
                href={`/?category=${product.category}`}
                text={product.category}
              />
              <ForwardLink
                href={`/?brand=${product.brand}`}
                text={product.cuisine}
              />
              <ForwardLink
                href={`/singleProduct/${product.id}`}
                text={product.persionName}
              />
            </div>
            {/* productDetail */}
            <ProductDetail product={product} />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default SigleProduct;
export const ForwardLink = ({ href, text }) => {
  return (
    <NavLink
      to={href}
      className={(navClass) =>
        navClass.isActive
          ? "flex justify-center items-center text-orange-500 text-sm font-bold"
          : "flex justify-center items-center text-slate-700 dark:text-gray-400 text-sm"
      }
    >
      <span>{text}</span>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </NavLink>
  );
};
export const ForwardLinkSection = ({ children }) => {
  return (
    <section className="w-full flex justify-start items-start dark:bg-slate-800 transition-all duration-200 md:hidden">
      <div className="flex justify-start items-start w-full px-7 md:px-0">
        {children}
      </div>
    </section>
  );
};