import { useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import { useCartActions } from "../../context/Cart/CartProvider";
import toast from "react-hot-toast";
import Tab from "../Tab/Tab";
const ProductDetail = ({ product }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useCartActions();
  const colorQuery = searchParams.get("color") || "";
  const [tab, setTab] = useState("designing");
  const button = [
    { text: "دوربین", value: "camera" },
    { text: "طراحی", value: "designing" },
    { text: "باتری", value: "battery" },
  ];
  const {
    id,
    persionName,
    colors,
    price,
    cuisine,
    category,
    seller,
    warranty,
    postedBy,
    englishName,
    productFeatures,
    review,
    designing,
    camera,
    battery,
    imageDetailProduct,
    image,
  } = product;
  const addToCart = () => {
    if (colorQuery) {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          id,
          persionName,
          price,
          color: colorQuery,
          image,
        },
      });
      toast.success(`محصول ${persionName} به سبد خرید اضافه شد`);
    } else {
      toast.error("لطفا رنگ مورد نظر را انتخاب کنید");
    }
  };
  return (
    <div className="w-full md:bg-white rounded-md mt-2 md:dark:bg-slate-700 md:mt-4 px-3 md:px-0 flex justify-center items-center flex-col overflow-hidden">
      <div className="flex flex-col justify-center md:justify-between lg:flex-row items-start lg:p-5 w-full">
        <div className="w-full flex flex-col justify-center items-center md:justify-start md:items-start md:flex-row ml-0 md:w-full lg:w-3/4 lg:ml-2">
          <div className="w-72 md:w-80">
            <img src={image} alt={persionName} className="w-full h-auto" />
          </div>
          <div className="flex flex-col justify-start w-full items-start py-3 md:mr-3">
            <div className="md:flex justify-strat items-start w-full hidden">
              <span className="w-6 h-6 bg-[#FFCBCB47] dark:bg-slate-600 rounded-full inline-block relative ml-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  stroke-width={1.5}
                  className="w-6 h-6 stroke-orange-400 dark:stroke-gray-300 absolute -left-1 -bottom-1"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              </span>
              <p className="mt-1 text-sm text-orange-500 font-bold">
                {category}
              </p>
              <p className="mt-1 text-sm text-orange-500 font-bold mr-3">
                {cuisine}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center md:justify-strat md:items-start w-full py-3 border-b-none lg:border-b-2 lg:border-gray-100 dark:border-slate-600">
              <h2 className="text-xl text-slate-800 font-bold dark:text-gray-300">
                {persionName}
              </h2>
              <p className="mt-2 text-sm text-slate-800 font-light dark:text-gray-400">
                {englishName}
              </p>
            </div>
            <SelectColor colors={colors} id={id} />
            <DetailSeller
              seller={seller}
              warranty={warranty}
              postedBy={postedBy}
            />
            <DetailProduct productFeatures={productFeatures} />
          </div>
        </div>
        <BuyProduct
          seller={seller}
          warranty={warranty}
          postedBy={postedBy}
          price={price}
          onClick={addToCart}
        />
      </div>
      {/* review */}
      <Wraper>
        <Description title="نقد و بررسی محصول">{review}</Description>
      </Wraper>
      {/* designing */}
      <Wraper>
        <div className="w-full flex justify-center items-center">
          <div className="w-3/4 bg-stone-100 dark:bg-slate-600 mb-1 rounded-full px-3 py-1 flex justify-between items-center md:hidden">
            {button.map((item, index) => (
              <Tab
                text={item.text}
                value={item.value}
                tab={tab}
                onClick={() => setTab(item.value.toString())}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="md:hidden">
          {tab === "designing" ? (
            <Description title="طراحی">{designing}</Description>
          ) : tab === "camera" ? (
            <Description title="دوربین">{camera}</Description>
          ) : tab === "battery" ? (
            <Description title="باتری">{battery}</Description>
          ) : (
            ""
          )}
        </div>
        <div className="hidden md:flex justify-center items-center flex-col gap-y-4">
          <Description title="طراحی">{designing}</Description>
          <div className="w-full flex justify-center items-center">
            <img src={imageDetailProduct} alt={persionName} />
          </div>
          <Description title="دوربین">{camera}</Description>
          <Description title="باتری">{battery}</Description>
        </div>
      </Wraper>
    </div>
  );
};

export default ProductDetail;
export const SelectColor = ({ colors, id }) => {
  return (
    <div className="flex justify-center items-center w-full md:justify-start md:items-start mt-3">
      <span className="text-slate-800 text-base md:text-xl dark:text-gray-300">
        انتخاب رنگ:
      </span>
      <div className="flex justify-center items-center mr-5">
        {colors.map((color, index) => {
          return (
            <NavLink
              to={`/singleProduct/${id}?color=${color}`}
              key={index}
              className={`shadow-md w-5 h-5 mr-1 flex justify-center items-center rounded-full ${color} focus:ring-1 focus:ring-blue-200 focus:ring-offset-2 focus:ring-offset-white`}
            ></NavLink>
          );
        })}
      </div>
    </div>
  );
};
export const DetailSeller = ({ seller, warranty, postedBy }) => {
  return (
    <div className="flex justify-center items-center w-full mt-5 flex-wrap md:hidden">
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center">
          <span className="w-4 h-4 bg-[#FFCBCB47] dark:bg-slate-600 rounded-full inline-block relative ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-width={1.5}
              className="w-4 h-4 stroke-orange-400 dark:stroke-gray-300 absolute -left-1 -bottom-1"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72L4.318 3.44A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72m-13.5 8.65h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .415.336.75.75.75z"
              />
            </svg>
          </span>
          <span className="font-bold text-slate-700 dark:text-gray-300 text-sm">
            فروشنده :{" "}
          </span>
        </div>
        <div className="mr-2 dark:text-gray-300 text-slate-600 text-sm">
          {seller}
        </div>
      </div>

      <div className="flex justify-center items-center mr-2">
        <div className="flex justify-center items-center">
          <span className="w-4 h-4 bg-[#FFCBCB47] dark:bg-slate-600 rounded-full inline-block relative ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-width={1.5}
              className="w-4 h-4 stroke-orange-400 dark:stroke-gray-300 absolute -left-1 -bottom-1"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
              />
            </svg>
          </span>
          <span className="font-bold text-slate-700 dark:text-gray-300 text-sm">
            گارانتی :{" "}
          </span>
        </div>
        <div className="mr-2 dark:text-gray-300 text-slate-600 text-sm">
          {warranty.substring(0, 12)}
        </div>
      </div>

      <div className="flex justify-center items-center mt-2 sm:mt-0 sm:mr-2">
        <div className="flex justify-center items-center">
          <span className="w-4 h-4 bg-[#FFCBCB47] dark:bg-slate-600 rounded-full inline-block relative ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-width={1.5}
              className="w-4 h-4 stroke-orange-400 dark:stroke-gray-300 absolute -left-1 -bottom-1"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              />
            </svg>
          </span>
          <span className="font-bold text-slate-700 dark:text-gray-300 text-sm">
            ارسال توسط :{" "}
          </span>
        </div>
        <div className="mr-2 dark:text-gray-300 text-slate-600 text-sm">
          {postedBy}
        </div>
      </div>
    </div>
  );
};
export const DetailProduct = ({ productFeatures }) => {
  return (
    <div className="mt-3 flex justify-start items-start flex-col md:bg-transparent md:shadow-none bg-white dark:bg-slate-700 w-full px-4 md:px-0 rounded-md shadow-md">
      <h4 className="text-slate-800 text-lg md:text-xl dark:text-gray-300 my-3">
        ویژگی‌های کالا:
      </h4>
      <ul className="flex justify-start items-start flex-col w-full">
        {productFeatures.map((feature) => (
          <li className="flex justify-start items-start flex-col text-slate-700 dark:text-gray-300 font-normal mb-1">
            <div>
              <span className="inline-block w-2 h-2 rounded-full bg-orange-500 ml-2"></span>
              {feature.title} :
            </div>
            <p className="text-slate-800 font-bold dark:text-gray-300">
              {feature.value}
            </p>
            <p className="text-slate-800 font-bold dark:text-gray-300">
              {feature.values}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export const BuyProduct = ({ seller, warranty, postedBy, price, onClick }) => {
  return (
    <div className="w-full md:w-full lg:w-1/4 flex bg-transparent justify-center items-center md:p-3 lg:p-0">
      <div className="bg-stone-100 dark:bg-slate-700 dark:md:bg-slate-800 w-full h-full flex justify-start items-start flex-col gap-y-4 py-4 px-3 rounded-md">
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center">
            <span className="w-4 h-4 bg-[#FFCBCB47] dark:bg-slate-600 rounded-full inline-block relative ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-width={1.5}
                className="w-4 h-4 stroke-orange-400 dark:stroke-gray-300 absolute -left-1 -bottom-1"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72L4.318 3.44A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72m-13.5 8.65h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .415.336.75.75.75z"
                />
              </svg>
            </span>
            <span className="font-bold text-slate-700 dark:text-gray-300 text-sm">
              فروشنده :{" "}
            </span>
          </div>
          <div className="mr-2 dark:text-gray-300 text-slate-600 text-sm">
            {seller}
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center">
            <span className="w-4 h-4 bg-[#FFCBCB47] dark:bg-slate-600 rounded-full inline-block relative ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-width={1.5}
                className="w-4 h-4 stroke-orange-400 dark:stroke-gray-300 absolute -left-1 -bottom-1"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
            </span>
            <span className="font-bold text-slate-700 dark:text-gray-300 text-sm">
              گارانتی :{" "}
            </span>
          </div>
          <div className="mr-2 dark:text-gray-300 text-slate-600 text-sm">
            {warranty}
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center">
            <span className="w-4 h-4 bg-[#FFCBCB47] dark:bg-slate-600 rounded-full inline-block relative ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-width={1.5}
                className="w-4 h-4 stroke-orange-400 dark:stroke-gray-300 absolute -left-1 -bottom-1"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
              </svg>
            </span>
            <span className="font-bold text-slate-700 dark:text-gray-300 text-sm">
              ارسال توسط :{" "}
            </span>
          </div>
          <div className="mr-2 dark:text-gray-300 text-slate-600 text-sm">
            {postedBy}
          </div>
        </div>
        <div className="w-full text-left text-orange-600 font-bold text-lg px-1 mt-5">
          <span>{price.toLocaleString("fa-IR")}</span>
          <span className="mr-2">تومان</span>
        </div>
        <div className="w-full">
          <button
            className="w-full bg-orange-600 text-white py-3 rounded-md"
            onClick={onClick}
          >
            اضافه به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
};
export const Description = ({ title, children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <section className="w-full">
      <h2 className="text-lg text-slate-700 dark:text-gray-300 font-bold">
        {title}
      </h2>
      <p className="text-slate-500 dark:text-gray-400 text-justify mt-4">
        {isReadMore ? text.slice(0, 450) : text}
        <span
          onClick={toggleReadMore}
          className="mr-2 text-blue-400 font-semibold cursor-pointer"
        >
          {isReadMore ? "... ادامه مطلب" : "بستن"}
        </span>
      </p>
    </section>
  );
};
export const Wraper = ({ children }) => {
  return (
    <div className="w-full shadow-lg md:shadow-none mt-3 md:px-8 py-3 dark:bg-slate-700 bg-white rounded-lg px-4 md:bg-transparent">
      {children}
    </div>
  );
};