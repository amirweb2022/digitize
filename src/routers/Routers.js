import { Routes, Route } from "react-router-dom";
import Cart from "../Pages/Cart";
import Category from "../Pages/Category";
import Home from "../Pages/Home";
import SingleProduct from "../Pages/SingleProduct";
import Auth from "../Pages/AuthPage";
import Checkout from "../Pages/Checkout";
const Routers = () => {
    return (
        <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path="/singleProduct/:id" element={<SingleProduct />} />
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/auth/checkout" element={<Checkout />} />
        </Routes>
    );
}

export default Routers;