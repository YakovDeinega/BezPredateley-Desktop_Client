import "./css/ArticleSlug.css";

import slugImage from "../images/ArticleSlug.png";


export function ArticleSlug({date, title}){
    return (
        <div className="article-slug">
            <img src={slugImage} className="article-slug__image"></img>
            <div className="article-slug__content">
                <div className="article-slug__date">
                    Monday 05, September 2021
                </div>
                <h3 className="article-slug__title">
                    This Article’s Title goes Here, 
                    but not too long.
                </h3>
            </div>
        </div>
    );
}