import Category from "../category/category.component";
import "./category-list.styles.scss";

const CategoryList = ({categories}) => {
    return (
        <div className="category-list">
        {
            categories.map((category) => {
                return <Category key={category.id} category={category}/>    
            })
        }
        </div>
    );
}

export default CategoryList;