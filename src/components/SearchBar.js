import "./css/SearchBar.css";

import search from "../images/Search.svg";

export function SearchBar(){

    function handleFocus(e){
        let inpValue = e.target.value;
        if(inpValue === "Search") e.target.value = "";
    }

    function handleBlur(e){
        let inpValue = e.target.value;
        if(inpValue === "") e.target.value = "Search";
    }

    return (
        <div>
            <input className="input-bar" 
                   defaultValue={"Search"} 
                   onFocus={(e) => handleFocus(e)} 
                   onBlur={(e) => handleBlur(e)}>   
            </input>
            <button className="input-bar__submit-button">
                <img src={search}></img>
            </button>
        </div>
    );
}