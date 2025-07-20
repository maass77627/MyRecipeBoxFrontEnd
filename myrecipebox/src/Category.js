import React from "react";

function Category({category}) {


    function handleClick(e) {
        console.log(e)
    }


    return(
        <div id="category">
            <button id="button" onClick={handleClick}>{category.name}</button>
            {/* <button  id="button" onClick={handleClick}></button>
            <button  id="button" onClick={handleClick}></button>
            <button  id="button" onClick={handleClick}></button>
            <button  id="button" onClick={handleClick}></button> */}

        </div>
    )
}

export default Category