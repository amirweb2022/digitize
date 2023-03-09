import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
const Layout = ({ children, value, changeInput }) => {
  return (
    <>
      <Navigation value={value} changeInput={changeInput} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;