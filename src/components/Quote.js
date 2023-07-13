import { useState } from "react";

import "./css/Quote.css";

import quotes from "../../src/images/Quotes.svg";

export function Quote(){
    const [page, setPage] = useState(2);

    function handleClick(e){
        const dotElement = e.target;
        if(dotElement.className.includes("quote__dot")){
            setPage(parseInt(dotElement.id));
        }
    }
    
    return (
        <div className="quote">
            <img src={quotes} className="quote__symbol"></img>
            <p className="quote__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.  {/* add conditional rendering of texts*/}
            Quisque placerat scelerisque tortor ornare ornare. 
            Quisque placerat scelerisque felis vitae tortor augue. 
            Velit nascetur Consequat faucibus porttitor enim et.
            </p>
            <div className="quote__divider"></div>
            <p className="quote__author">John Doe</p>
            <div className="quote__dots-container" onClick={(e) => handleClick(e)}>
                <div id="1" className={"quote__dot " + (page === 1 ? "highlight" : "")}></div> {/* redo for DRY*/}
                <div id="2" className={"quote__dot " + (page === 2 ? "highlight" : "")}></div>
                <div id="3" className={"quote__dot " + (page === 3 ? "highlight" : "")}></div>
            </div>
        </div>
    );
}