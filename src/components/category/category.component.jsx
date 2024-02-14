import '../category-list/category-list.styles.scss';

const Category = ({category}) => {
    const { title, imageUrl} = category;
    return (
        <div className="category">
            <div className="background-image" style={
                {
                    backgroundImage: `url(${imageUrl})`
                }
            }/>
            <div className="details">
                <h2>{title}</h2>
                <p>Shop</p>
            </div>
        </div>
    );
}

export default Category;