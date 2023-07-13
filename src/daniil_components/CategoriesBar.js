import "./css/RecentPostsBar.css";
import "./css/CategoriesBar.css";

export function CategoriesBar(){
    return (
        <div className="posts-bar">
            <h2 className="posts-bar__header">Categories</h2>
            <div>
                <Category></Category>
            </div>
        </div>
    );
}

function Category({categoryTitle, postCount}){
    return (
        <div className="category">
            <div className="category__title">Surgery</div>
            <div className="category__bubble">5</div>
        </div>
    );
}