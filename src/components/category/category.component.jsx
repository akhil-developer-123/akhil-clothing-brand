import '../category-list/category-list.styles.scss';
import { useNavigate } from 'react-router-dom';

const Category = ({category}) => {
    const { title, imageUrl} = category;

    const navigate = useNavigate();
    const navigateToShopCategory = () => {
        navigate(`/shop/${title.toLowerCase()}`);
    }

    return (
        <div className="category">
            <div className="background-image" style={
                {
                    backgroundImage: `url(${imageUrl})`
                }
            }/>
            <div className="details" onClick={navigateToShopCategory}>
                <h2>{title}</h2>
                <p>Shop</p>
            </div>
        </div>
    );
}

export default Category;