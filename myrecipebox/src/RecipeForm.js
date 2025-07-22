import React from "react";
import { useState } from "react";

function RecipeForm() {

    const [formData, setFormData] = useState({
        name: "name",
        ingredients: "ingredients",
        directions: "directions",
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


   



    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)
        fetch("http://localhost:9292/recipes", {
            method: "POST", 
            // mode: 'no-cors',
            headers: {
                "Content-Type" : "application/json"
            }, 
            body: JSON.stringify(formData)
        })
        .then((response) => response.json())
        .then((json) => {
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
                <input onChange={handleImageChange} type="text" value={formData.image}></input><br></br>
                <input type="submit" value="submit"></input>
             </form>
        </div>
    )
}

export default RecipeForm