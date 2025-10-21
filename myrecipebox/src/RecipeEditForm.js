import React, { useState } from "react";

function RecipeEditForm({ recipe, setRecipes, recipes }) {
  const [recipeData, setRecipeData] = useState({
    name: recipe.name,
    ingredients: recipe.ingredients,
    directions: recipe.directions,
    category_id: recipe.category_id, 
    image: recipe.image,
  });

  
  function handleChange(e) {
    const { name, value } = e.target;
    setRecipeData({
      ...recipeData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const id = recipe.id;

    fetch(`http://localhost:9292/recipes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipeData),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Failed to update recipe");
        return response.json();
      })
      .then((updatedRecipe) => {
        console.log("Updated recipe:", updatedRecipe);
        const updatedList = recipes.map((r) =>
          r.id === id ? updatedRecipe : r
        );
        setRecipes(updatedList);
      })
      .catch((error) => console.error("Error updating recipe:", error));
  }

  return (
    <div>
      <form id="editform" onSubmit={handleSubmit}>
        <h3>Edit Recipe</h3>

        <input
          type="text"
          name="name"
          value={recipeData.name}
          placeholder="Recipe name"
          onChange={handleChange}
        />
        <br />

        <input
          type="text"
          name="ingredients"
          value={recipeData.ingredients}
          placeholder="Ingredients"
          onChange={handleChange}
        />
        <br />

        <input
          type="text"
          name="directions"
          value={recipeData.directions}
          placeholder="Directions"
          onChange={handleChange}
        />
        <br />

        <input
          type="text"
          name="category_id"
          value={recipeData.category_id}
          placeholder="Category ID"
          onChange={handleChange}
        />
        <br />

        <input
          type="text"
          name="image"
          value={recipeData.image}
          placeholder="Image URL"
          onChange={handleChange}
        />
        <br />

        <input type="submit" value="Save Changes" />
      </form>
    </div>
  );
}

export default RecipeEditForm;