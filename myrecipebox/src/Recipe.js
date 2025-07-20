import React from "react";

function Recipe ({recipe}) {
console.log(recipe)

// const divStyle = {
//     backgroundImage: `url(${recipe.image})`,
//     backgroundOpacity: 0.1, 
//     backgroundSize: 'cover', 
//     backgroundPosition: 'center', 
//     // width: '100%',
//     // height: '300px', 
// }

    return(
        <div id="recipe" >
            <img id="recimage" src={recipe.image} alt="food"></img>
            <h1>{recipe.name}</h1>
            
            <p>{recipe.ingredients}</p>
            <p>{recipe.directions}</p>
            {/* <img src={recipe.image} alt="food"></img> */}
        </div>
    )



}

export default Recipe




