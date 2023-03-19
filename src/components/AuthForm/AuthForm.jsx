import { useFormik } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";
import Layout from "../../Layout/Layout";
import { useNavigate, useSearchParams } from "react-router-dom";
import Heade from "../Heade/Heade";
import DarkMode from "../DarkMode/DarkMode";
import Input from "../../common/Input";
import { useAuth, useAuthActions } from "../../context/Auth/AuthProvider";
import { useEffect } from "react";
const initialValues = {
  name: "",
  phonenumber: "",
};
const validationSchema = Yup.object({
  name: Yup.string()
    .required("نام خالی است !")
    .min(6, "تعداد کاراکتر حداقل باید 6 تا باشد"),
  phonenumber: Yup.string()
    .required("شماره تلفن خالی است !")
    .matches(/^[0-9]{11}$/, "شماره تلفن نامعتبر")
    .nullable(),
});
const AuthForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const setAuth = useAuthActions();
  const auth = useAuth();
  const redirect = searchParams.get("redirect") || "/";
  const onSubmit = (values) => {
    localStorage.setItem("authState", JSON.stringify(values));
    setAuth(values);
    navigate(redirect);
    toast.success("به دیجی تایز خوش آمدید");
  };

  useEffect(() => {
    if (auth) navigate(redirect);
  }, [redirect, auth]);
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <Layout changeInput={() => navigate("/")}>
      {/* Heade */}
      <Heade text="ورود/عضویت">
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
        <div className="w-full flex justify-center items-center md:px-5 2xl:px-3 px-4 md:mt-4">
          <form
            className="bg-stone-100 dark:bg-slate-700 shadow-md flex justify-center items-center flex-col w-full md:1/2 lg:w-1/4 rounded-md py-5 px-4"
            onSubmit={formik.handleSubmit}
          >
            <div className="w-full text-center">
              <h2 className="text-2xl font-bold">
                <span className="text-orange-600">دیجی </span>
                <span className="text-slate-800 dark:text-gray-300">تایز</span>
              </h2>
            </div>
            <div className="w-full text-right mt-3">
              <h4 className="text-slate-600 font-bold dark:text-gray-300">
                ورود | عضویت
              </h4>
            </div>
            <div className="w-full text-right mt-3 text-xs text-gray-500 dark:text-gray-400">
              <p>سلام !</p>
              <p>به دیجی تایز خوش آمدید لطفا اطلاعات را کامل کنید</p>
            </div>
            <Input
              formik={formik}
              name="name"
              label="نام"
              placeholder="نام خود را وارد کنید"
            />
            <Input
              formik={formik}
              name="phonenumber"
              label="شماره تلفن"
              type="tel"
              placeholder="شماره تلفن خود را وارد کنید"
            />
            <button
              type="submit"
              disabled={!formik.isValid}
              className="w-full mt-3 bg-orange-500 transition-all duration-150 hover:bg-orange-600 text-white py-3 shadow-md shadow-orange-500 rounded-md disabled:bg-gray-300 disabled:shadow-none"
            >
              ورود و ثبت نام
            </button>
          </form>
        </div>
      </main>
    </Layout>
  );
};

export default AuthForm;