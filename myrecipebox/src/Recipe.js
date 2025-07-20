import React from "react";

function Recipe ({recipe}) {
console.log(recipe)

    return(
        <div id="recipe">
            <h1>{recipe.name}</h1>
            <p>{recipe.directions}</p>
            <p>{recipe.ingredients}</p>
            <img src={recipe.image} alt="food"></img>
        </div>
    )



}

export default Recipe




