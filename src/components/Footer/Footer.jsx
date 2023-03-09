import { Link, NavLink } from "react-router-dom";
const nav__link = [
  {
    to: "/",
    text: "خانه",
  },
  {
    to: "/category",
    text: "دسته بندی",
  },
  {
    to: "/cart",
    text: "سبد خرید",
  },
  {
    to: "/auth",
    text: "ورود/عضویت",
  },
];

const Footer = () => {
  return (
    <footer className="dark:bg-slate-700 pt-5 shadow-lg dark:shadow-none dark:text-white bg-stone-100 transition-all duration-200 2xl:container 2xl:max-w-screen-2xl mx-auto">
      <div className="w-full h-full flex flex-col flex-wrap px-4 md:justify-between md:items-center md:px-5 md:flex-row">
        <div className="flex justify-start items-start flex-col w-full md:w-1/3">
          <Link to="/">
            <h2 className="text-2xl font-bold">
              <span className="text-orange-600">دیجی </span>
              <span className="text-slate-800 dark:text-gray-300">تایز</span>
            </h2>
          </Link>
          <p className="text-slate-800 dark:text-gray-300 mt-2 font-normal">
            دیجی‌ تایز عرضه کننده جدیدترین محصولات الکترونیک نظیر لپ تاپ، گوشی
            هوشمند و ساعت هوشمند می‌باشد.دیجی تایز افتخار این را داشته که به
            <span className="text-orange-600 font-bold">۱۲۲,۲۳۲ نفر</span> تا به
            اکنون خدمت رسانی داشته باشد.
          </p>
        </div>
        <div className="w-full md:w-1/3 flex justify-center items-start mt-4 md:mt-0 md:items-center flex-col">
          <h3 className="text-lg font-bold text-slate-700 dark:text-orange-500 ml-6">
            لینک ها
          </h3>
          <ul className="flex justify-center items-start flex-col">
            {nav__link.map((nav, index) => {
              return (
                <li key={index} className="mt-2">
                  <NavLink
                    to={nav.to}
                    className="text-slate-700 dark:text-gray-200"
                  >
                    {nav.text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-full md:w-1/3 flex justify-center items-start mt-4 md:mt-0 md:items-end flex-col">
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21056742.211671684!2d-97.241580625!3d49.89123500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfa!2sca!4v1678377367956!5m2!1sfa!2sca"
              width={"100%"}
              height={"100%"}
              style={{ border: 0 }}
              allowfullscreen=""
              loading={"lazy"}
              referrerpolicy={"no - referrer - when - downgrade"}
            ></iframe>
          </div>
          <div className="flex justify-center items-start md:items-end flex-col w-full mt-4 py-3">
            <div className="flex justify-center items-center flex-row-reverse">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6 stroke-orange-500 text-orange-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <span className="text-slate-700 dark:text-gray-200 ml-2">
                ۰۲۱-۱۲۳۴۵۶
              </span>
            </div>
            <span className="mt-3 text-slate-700 dark:text-gray-200">
              info@digitize.com
            </span>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-200 dark:bg-slate-800 text-center py-4 font-bold text-lg text-slate-700 dark:text-white">
        تمامیه حقوق محفوظ
      </div>
    </footer>
  );
};

export default Footer;