import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const nav__link = [
  {
    to: "/",
    text: "خانه",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-6 h-6"
        viewBox="0 0 24 24"
      >
        <path d="M11.47 3.84a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.06l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 0 0 1.061 1.06l8.69-8.69z" />
        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.43z" />
      </svg>
    ),
  },
  {
    to: "/category",
    text: "دسته بندی",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-6 h-6"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6zM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25z"
          clip-rule="evenodd"
        />
      </svg>
    ),
  },
  {
    to: "/cart",
    text: "سبد خرید",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-6 h-6"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0zM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75z"
          clip-rule="evenodd"
        />
      </svg>
    ),
  },
  {
    to: "/auth",
    text: "ورود/عضویت",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-6 h-6"
        viewBox="0 0 24 24"
      >
        <path d="M6.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0zm-3 12.75a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 0 0-1.5 0v2.25H16a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H22a.75.75 0 0 0 0-1.5h-2.25V7.5z" />
      </svg>
    ),
  },
];

const Navigation = ({ value, changeInput }) => {
  return (
    <>
      {/* navigation in mobile size */}
      <header className="fixed bottom-0 dark:bg-slate-800 transition-all duration-200 bg-white rounded-tr-2xl rounded-tl-2xl shadow-slate-600 shadow-lg px-3 py-4 w-full md:hidden">
        <nav>
          <ul className="flex justify-around items-center">
            {nav__link.map((nav, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={nav.to}
                    className={(navClass) =>
                      navClass.isActive
                        ? "flex justify-center items-center text-slate-800 font-bold dark:text-orange-400"
                        : "flex justify-center items-center text-gray-500 text-lg"
                    }
                  >
                    <span>{nav.icon}</span>
                    <NavLink
                      to={nav.to}
                      className={(navClass) =>
                        navClass.isActive ? "mr-2 mt-1" : "mr-2 mt-1 hidden"
                      }
                    >
                      <span>{nav.text}</span>
                    </NavLink>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {/* navigation in desctop */}
      <header className="sticky top-0 w-full hidden md:block z-30">
        <div className="2xl:container 2xl:max-w-screen-2xl shadow-md dark:shadow-slate-500 bg-stone-50 dark:bg-slate-800 transition-all duration-200 mx-auto h-full px-5 py-3 flex justify-between items-center">
          <div>
            <ul className="flex justify-center items-center gap-x-5">
              <li>
                <NavLink to="/">
                  <h2 className="text-2xl font-bold">
                    <span className="text-orange-600">دیجی </span>
                    <span className="text-slate-800 dark:text-gray-300">
                      تایز
                    </span>
                  </h2>
                </NavLink>
              </li>
              {nav__link.map((nav, index) => {
                return (
                  <li key={index}>
                    <NavLink
                      to={nav.to}
                      className={(navClass) =>
                        navClass.isActive
                          ? "inline-block bg-orange-600 text-white py-2 px-3 rounded-md font-bold"
                          : "inline-block hover:bg-orange-600 text-slate-800 dark:text-gray-200 hover:text-white hover:py-1 hover:px-3 rounded-md duration-150 transition-all"
                      }
                    >
                      {nav.text}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <SearchBar value={value} changeInput={changeInput} />
        </div>
      </header>
    </>
  );
};

export default Navigation;