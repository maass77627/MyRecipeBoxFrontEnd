
import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";
import AddRecipeForm from "./AddRecipeForm";
import RecipeFilter from "./RecipeFilter";
import "./RecipeContainer.css";

function RecipeContainer({ setRecipes, recipes }) {
  const [filteredRecipes, setFilteredRecipes] = useState(recipes || []);

  useEffect(() => {
    setFilteredRecipes(recipes);
  }, [recipes]);

  function handleAddRecipe(newRecipe) {
    const updated = [...recipes, newRecipe];
    setRecipes(updated);
    setFilteredRecipes(updated);
  }

  return (
    <section id="recipecontainer">
      
      <div className="recipe-sidebar">
        <h2 className="recipecontainer-title">📖 My Recipes</h2>
        <RecipeFilter recipes={recipes} setFilteredRecipes={setFilteredRecipes} />
        <AddRecipeForm onAddRecipe={handleAddRecipe} />
      </div>

      
      <div className="recipe-grid">
        {filteredRecipes && filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <Recipe
              key={recipe.id}
              recipe={recipe}
              recipes={recipes}
              setRecipes={setRecipes}
            />
          ))
        ) : (
          <p className="no-recipes">
            No recipes match your search — try another category or keyword!
          </p>
        )}
      </div>
    </section>
  );
}

export default RecipeContainer;