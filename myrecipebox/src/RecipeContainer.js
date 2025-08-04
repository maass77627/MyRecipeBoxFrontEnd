import React from "react";
import Recipe from "./Recipe";

function RecipeContainer({ setRecipes, recipes }) {
console.log(recipes)



    return (
        <div id="recipecontainer" className="scroll">
            {recipes ? recipes.map((recipe) => <Recipe setRecipes={setRecipes} recipes={recipes} key={recipe.id} recipe={recipe}></Recipe>) : null}

        </div>
    )
}

export default RecipeContainer