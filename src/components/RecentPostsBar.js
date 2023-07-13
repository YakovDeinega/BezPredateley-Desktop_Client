import { ArticleSlug } from "./ArticleSlug";

import "./css/RecentPostsBar.css";

// move articleslug here  

export function RecentPostsBar(){
    let articleSlugs = [];

    for(let i=0; i<6; i++){
        articleSlugs.push(<ArticleSlug key={i}/>)
    }

    return (
        <div className="posts-bar">
            <h2 className="posts-bar__header">Recent Posts</h2>
            <div className="posts-bar__slugs">
                {articleSlugs}
            </div>
        </div>
    );
}