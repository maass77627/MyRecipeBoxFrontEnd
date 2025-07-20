import React from "react";
import Recipe from "./Recipe";

function RecipeContainer({recipes}) {
console.log(recipes)



    return (
        <div id="recipecontainer">
            {recipes ? recipes.map((recipe) => <Recipe key={recipe.id} recipe={recipe}></Recipe>) : null}

        </div>
    )
}

export default RecipeContainer