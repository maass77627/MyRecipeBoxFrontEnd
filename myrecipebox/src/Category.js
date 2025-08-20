import React from "react";


function Category({recipes, option, categories}) {


  let newcat = categories.find((cat) => cat.name === option) 
  console.log(newcat)
  let newrecs = newcat ? recipes.filter((recs) => recs.category_id === newcat.id) : recipes;
  console.log(newrecs)

    return(

         <>
            {newrecs.map((rec) => 
            <div id="recipe">
             <img id="recimage" src={rec.image} alt="food"></img>
            <h1>{rec.name}</h1>
            <h4 id="h4">Ingredients:</h4>
            <p>{rec.ingredients}</p>
             <h4 id="h4">Directions:</h4> 
            <p>{rec.directions}</p>
            </div>
            )}
          </>


    )
}

export default Category