import React from "react";
import Category from "./Category";


function Categories({categories}) {


    return(
        <div id="categories">
                {categories.map((category) => <Category category={category}></Category>)}
        </div>
    )
}

export default Categories