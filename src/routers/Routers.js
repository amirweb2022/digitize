import { Routes, Route } from "react-router-dom";
import Category from "../Pages/Category";
import Home from "../Pages/Home";
const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />
        </Routes>
    );
}

export default Routers;