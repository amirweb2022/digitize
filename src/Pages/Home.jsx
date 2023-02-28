import Header from "../components/Header/Header";
import Layout from "../Layout/Layout";
const Home = () => {
  return (
    <Layout>
      <Header text="صفحه اصلی">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-5 h-5 stroke-slate-800"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5zM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5z"
            clip-rule="evenodd"
          />
        </svg>
      </Header>
      <div> صفحه اصلی</div>
    </Layout>
  );
};

export default Home;