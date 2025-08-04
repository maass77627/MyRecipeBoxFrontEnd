import React from "react";
import Category from "./Category";
import { useState } from "react";


function Categories({categories, recipes}) {
    const [ option, setOption ] = useState("")

    function handleChange(e) {
                setOption(e.target.value)
                console.log(option)
        
              }


    return(
        <div id="categories">
                <select value={option} onChange={handleChange}>
                {categories.map((category) =>  
            <option value={category.name}>
            {category.name}
            </option>
            )}
            </select>
            <Category key={option} recipes={recipes} option={option}></Category>
        </div>
    )
}

export default Categories