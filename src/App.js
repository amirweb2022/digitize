import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import CartProvider from "./context/Cart/CartProvider";
import Routers from "./routers/Routers"
import { Toaster } from 'react-hot-toast';
const App = () => {
  return (
    <>
      <ScrollToTop />
      <CartProvider>
        <Toaster />
        <Routers />
      </CartProvider>
    </>
  );
}

export default App;