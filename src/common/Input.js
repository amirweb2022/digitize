const Input = ({ label, name, formik, placeholder, type = "text" }) => {
    return (
        <div className="mt-2 flex justify-start items-start flex-col w-full">
            <label htmlFor={name} className="text-slate-600 font-bold dark:text-gray-300">{label}</label>
            <input
                id={name}
                type={type}
                {...formik.getFieldProps(name)}
                name={name}
                className="bg-stone-100 dark:bg-slate-700 dark:border-gray-300 dark:text-gray-300 dark:shadow-none w-full my-2 p-2 outline-none transition-all duration-150 rounded-md text-slate-600 placeholder:text-sm border-[1px] border-slate-300 focus:border-orange-500 focus:shadow-md focus:shadow-stone-300 hover:border-orange-500 hover:shadow-md focus:shadow-stone-300"
                placeholder={placeholder}
            />
            {formik.errors[name] && formik.touched[name] && (
                <div className="text-red-400 text-sm">{formik.errors[name]}</div>
            )}
        </div>
    );
};

export default Input;