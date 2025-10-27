
import React from "react";
import "./RecipeContainer.css"; 

function Recipe({ recipe, setRecipes, recipes }) {
  
  function handleDelete() {
    fetch(`/recipes/${recipe.id}`, {
      method: "DELETE",
    }).then(() => {
      const updated = recipes.filter((r) => r.id !== recipe.id);
      setRecipes(updated);
    });
  }

  return (
    <div className="recipe-card">
      
      {recipe.image ? (
        <img src={recipe.image} alt={recipe.name} />
      ) : (
        <div
          style={{
            height: "180px",
            backgroundColor: "#f2e5b5",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "12px",
            fontFamily: "Pacifico, cursive",
            fontSize: "1.2rem",
            color: "#555",
          }}
        >
          No Image
        </div>
      )}

     
      <h3>{recipe.name}</h3>

      
      {recipe.category && recipe.category.name && (
        <div
          style={{
            display: "inline-block",
            backgroundColor: "rgba(255, 123, 123, 0.15)",
            color: "#ff7b7b",
            border: "1px solid rgba(255, 123, 123, 0.3)",
            borderRadius: "20px",
            fontSize: "0.8rem",
            padding: "0.25rem 0.75rem",
            marginBottom: "0.5rem",
            fontWeight: "600",
          }}
        >
          {recipe.category.name}
        </div>
      )}

      
      {recipe.ingredients && (
        <>
          <h4
            style={{
              fontSize: "1rem",
              fontWeight: "bold",
              color: "#333",
              marginTop: "0.5rem",
              marginBottom: "0.2rem",
              fontFamily: "Pacifico, cursive",
            }}
          >
            Ingredients
          </h4>
          <p>{recipe.ingredients}</p>
        </>
      )}

     
      {recipe.directions && (
        <>
          <h4
            style={{
              fontSize: "1rem",
              fontWeight: "bold",
              color: "#333",
              marginTop: "0.5rem",
              marginBottom: "0.2rem",
              fontFamily: "Pacifico, cursive",
            }}
          >
            Directions
          </h4>
          <p>{recipe.directions}</p>
        </>
      )}

     
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "1rem",
        }}
      >
        <button
          style={{
            backgroundColor: "#ff7b7b",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "6px 12px",
            cursor: "pointer",
            fontFamily: "Handlee, cursive",
          }}
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Recipe;