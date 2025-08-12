import React from "react";
//import { useState } from "react";

function Category({recipes, option, categories}) {
console.log(recipes)
console.log(option)
console.log(categories)

// /const [ newrecs, setNewRecs ] = useState()



  let newcat = categories.find((cat) => cat.name === option) 
   console.log(newcat)
 let newrecs = newcat ? recipes.filter((recs) => recs.category_id === newcat.id) : recipes;
  console.log(newrecs)

    return(

        <div  id="filter">
            {newrecs.map((rec) => 
            <div id="recipe">
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