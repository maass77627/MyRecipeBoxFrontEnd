import React from "react";

function Recipe ({recipe, recipes, setRecipes}) {
console.log(recipe)
console.log(recipes)

console.log(recipe, setRecipes, recipes)

function handleDelete(id) {
    console.log(id)
    fetch(`http://localhost:9292/recipes/${id}`, {
        method: "DELETE",
    })
    let newrecipes = recipes.filter((rec) => rec.id !== id )
    setRecipes(newrecipes)

}

function handleEdit(){

}

    return(
        <div id="recipe" >
            <img id="recimage" src={recipe.image} alt="food"></img>
            <h1>{recipe.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h1>
            <h4 id="h4">Ingredients:</h4>
            <p>{recipe.ingredients}</p>
             <h4 id="h4">Directions:</h4> 
            <p>{recipe.directions}</p>
            <button onClick={() => handleDelete(recipe.id)}>delete</button>
            <button onClick={handleEdit}>edit</button>
            
        </div>
    )



}

export default Recipe




