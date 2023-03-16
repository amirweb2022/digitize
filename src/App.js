import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import CartProvider from "./context/Cart/CartProvider";
import Routers from "./routers/Routers"
const App = () => {
  return (
    <>
      <ScrollToTop />
      <CartProvider>
        <Routers />
      </CartProvider>
    </>
  );
}

export default App;