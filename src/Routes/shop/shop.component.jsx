import "./shop.styles.scss";
import CategoriesPreview from "../../components/categories-preview/categories-preview.component";
import { Route, Routes } from "react-router-dom";
import Category from "../category/category.component";

const Shop = () => {
    return (
        <Routes>
            <Route index element={<CategoriesPreview />}></Route>
            <Route path=":category" element={<Category />}></Route>
         </Routes>
    );
}

export default Shop;