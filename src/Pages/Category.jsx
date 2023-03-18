import Layout from "../Layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import Heade from "../components/Heade/Heade";
import DarkMode from "../components/DarkMode/DarkMode";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
// import required modules
import { FreeMode } from "swiper";
import imgPhone from "../assets/images/3dimagePhone.png";
import { category } from "../assets/data";
const Category = () => {
  const navigate = useNavigate();
  return (
    <Layout changeInput={() => navigate("/")}>
      {/* Heade */}
      <Heade text="دسته بندی">
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
      <main className="dark:bg-slate-800 mb-3 px-4 h-80 dark:text-white transition-all duration-200 2xl:container 2xl:max-w-screen-2xl mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={8}
          freeMode={true}
          modules={[FreeMode]}
          className="my-5"
        >
          <SwiperSlide
            className="bg-[#E2E2E2] rounded-md flex justify-center items-center flex-col py-4"
            style={{ maxWidth: "187.57px" }}
          >
            <div className="text-slate-700 font-bold text-lg w-full text-center">
              تلفن همراه
            </div>
            <div>
              <img src={imgPhone} alt="Phone" className="w-full h-auto" />
            </div>
          </SwiperSlide>
          {category.map((cate) => {
            return (
              <SwiperSlide
                className="bg-white shadow-lg rounded-md flex justify-center items-center flex-col py-2"
                style={{ maxWidth: "187.57px" }}
                key={cate.id}
              >
                <Link to={`/?brand=${cate.brand}`}>
                  <div className="w-4/5 flex justify-center items-center mx-auto rounded-md overflow-hidden">
                    <img
                      src={cate.image}
                      alt={cate.brand}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="mt-3 text-slate-700 text-base w-full flex justify-center items-center ">
                    {cate.value}
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </main>
    </Layout>
  );
};

export default Category;