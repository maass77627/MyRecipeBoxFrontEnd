import React from "react";

function Category({recipes, option}) {
console.log(recipes)
console.log(option)

 let newrecipes = recipes.filter((rec) => rec.option === option)
 console.log(newrecipes)

    return(

        <div>
            {newrecipes.map((rec) => 
            <div id="category">
             <img id="recimage" src={rec.image} alt="food"></img>
            <h1>{rec.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h1>
            <h4 id="h4">Ingredients:</h4>
            <p>{rec.ingredients}</p>
             <h4 id="h4">Directions:</h4> 
            <p>{rec.directions}</p>
            </div>
            )}
            

        </div>


    )
}

export default Category