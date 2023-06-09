import Switcher from "../Switcher/Switcher";
const DarkMode = () => {
  return (
    <div
      className="fixed bg-white z-10 dark:bg-slate-800 dark:shadow-md dark:shadow-gray-600 rounded-full w-11 h-11 flex justify-center 
    items-center bottom-11 left-[44%] md:left-1/2 md:bottom-7 
    md:shadow-md md:shadow-slate-400"
    >
      <Switcher />
    </div>
  );
};

export default DarkMode;