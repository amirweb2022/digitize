import Navigation from "../components/Navigation/Navigation";
const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <footer>Footer</footer>
    </>
  );
};

export default Layout;