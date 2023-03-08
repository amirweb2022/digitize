import Navigation from "../components/Navigation/Navigation";
const Layout = ({ children, value, changeInput }) => {
  return (
    <>
      <Navigation value={value} changeInput={changeInput} />
      {children}
      <footer>Footer</footer>
    </>
  );
};

export default Layout;