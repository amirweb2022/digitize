import { Link } from "react-router-dom";
const Product = ({ item, key }) => {
  return (
    <div
      className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 h-full flex justify-center items-center flex-col rounded-xl dark:bg-slate-800 dark:shadow-md dark:shadow-slate-600 bg-white p-2 mb-2 shadow-md"
      key={key}
    >
      <div className="w-full flex justify-center items-center dark:bg-slate-600 bg-gray-200 rounded-xl py-2">
        <Link to={`/singleProduct/${item.id}`}>
          <img src={item.image} alt={item.persionName} className="w-56 h-56" />
        </Link>
      </div>
      <div className="w-full py-3 px-1 mt-2 flex justify-between items-center">
        <div className="text-gray-300 font-medium text-sm dark:text-gray-500">
          {item.category}
        </div>
        <div className="flex justify-center items-center">
          {item.colors.map((color, index) => {
            return (
              <Link
                to={`/?color=${color}`}
                key={index}
                className={`shadow-md w-5 h-5 mr-1 flex justify-center items-center rounded-full ${color} focus:ring-1 focus:ring-blue-200 focus:ring-offset-2 focus:ring-offset-white`}
              ></Link>
            );
          })}
        </div>
      </div>
      <div className="px-1 py-3 text-slate-800 w-full font-medium dark:text-gray-300">
        <Link to={`/singleProduct/${item.id}`}>{item.persionName}</Link>
      </div>
      <div className="w-full text-left text-orange-600 font-bold text-lg px-1">
        <span>{item.price.toLocaleString("fa-IR")}</span>
        <span className="mr-2">تومان</span>
      </div>
      <div className="w-full px-1 mt-2 flex justify-center items-center">
        <button className="w-full text-orange-600 py-2 font-bold text-lg border-t-2 border-gray-200 dark:border-gray-500">
          <Link to={`/singleProduct/${item.id}`}>مشاهده و ثبت سفارش</Link>
        </button>
      </div>
    </div>
  );
};

export default Product;
