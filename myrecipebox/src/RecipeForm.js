import React from "react";
import { useState } from "react";

function RecipeForm({ recipes, setRecipes, categories }) {
    console.log(categories)

    const [formData, setFormData] = useState({
        name: "name",
        ingredients: "ingredients",
        directions: "directions",
        category_id: 26,
        image: "image",
        
    })


    function handleNameChange(e) {
        setFormData({
            ...formData, 
          name: e.target.value
        })


    }

    function handleIngredientsChange(e) {
        setFormData({
            ...formData,
            ingredients: e.target.value 

        })

    }

    function handleDirectionsChange(e) {
        setFormData({
            ...formData,
            directions: e.target.value 

        })

    }

    function handleImageChange(e) {
        setFormData({
            ...formData,
            image: e.target.value 

        })

    }

    function handleCategoryChange(e) {
        console.log(e.target.value)
        setFormData({
            ...formData,
            category_id: e.target.value 

        })

    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)
        fetch("http://localhost:9292/recipes", {
            method: "POST", 
            headers: {
                "Content-Type" : "application/json"
            }, 
            body: JSON.stringify(formData)
        })
        .then((response) => response.json())
        .then((json) => {
            let newrecipes = [...recipes, json]
            setRecipes(newrecipes)
            console.log(json)
        })


    }


   



    

    return(
        <div>
            <form id="form" onSubmit={handleSubmit}>
                <h3>Add a Recipe</h3>
                <input onChange={handleNameChange} type="text" value={formData.name}></input><br></br>
                <input onChange={handleIngredientsChange} type="text" value={formData.ingredients}></input><br></br>
                <input onChange={handleDirectionsChange} type="text" value={formData.directions}></input><br></br>
                <select onChange={handleCategoryChange} value={formData.category_id}>
                { categories ? categories.map((category) =>  
            <option key={category.id} value={category.id}>
            {category.name}
            </option>
            ) : null}
                </select><br></br>
                {/* <input onChange={handleCategoryChange} type="text" value={formData.category}></input><br></br> */}
                <input onChange={handleImageChange} type="text" value={formData.image}></input><br></br>
                
                <input type="submit" value="submit"></input>
             </form>
        </div>
    )
}

export default RecipeForm