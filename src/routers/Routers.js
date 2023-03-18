import { Routes, Route } from "react-router-dom";
import Cart from "../Pages/Cart";
import Category from "../Pages/Category";
import Home from "../Pages/Home";
import SingleProduct from "../Pages/SingleProduct";
const Routers = () => {
    return (
        <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path="/singleProduct/:id" element={<SingleProduct />} />
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />
        </Routes>
    );
}

export default Routers;