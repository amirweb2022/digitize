import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import CartProvider from "./context/Cart/CartProvider";
import Routers from "./routers/Routers"
import { Toaster } from 'react-hot-toast';
import AuthProvider from "./context/Auth/AuthProvider";
const App = () => {
  return (
    <>
      <ScrollToTop />
      <AuthProvider>
        <CartProvider>
          <Toaster />
          <Routers />
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;