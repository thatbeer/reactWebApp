
import CategoryItem from "../category/category.component";

const Directory = ({categories}) => {
    return (
        <div>
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category}/>
            ))}
        </div>
    )
};

export default Directory;