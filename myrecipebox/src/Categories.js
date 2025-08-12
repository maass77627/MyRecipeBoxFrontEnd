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
        <div className="scroll" id="categories">
                <select value={option} onChange={handleChange}>
                {categories.map((category) =>  
            <option key={category.id} value={category.name}>
            {category.name}
            </option>
            )}
            </select>
            <Category key={option} categories={categories} recipes={recipes} option={option}></Category>
        </div>
    )
}

export default Categories