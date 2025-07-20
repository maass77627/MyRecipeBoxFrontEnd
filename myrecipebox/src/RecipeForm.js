import React from "react";
import { useState } from "react";

function RecipeForm() {

    const [formData, setFormData] = useState({
        name: "blue album",
        ingredients: "weezer",
        directions: "rock",
        image: "weezer.jpg",
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
        fetch("http://localhost:9292/recipes", {
            method: "POST", 
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
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} type="text" value={formData.name}></input>
                <input onChange={handleIngredientsChange} type="text" value={formData.ingredients}></input>
                <input onChange={handleDirectionsChange} type="text" value={formData.directions}></input>
                <input onChange={handleImageChange} type="text" value={formData.image}></input>
                <input type="submit" value="submit"></input>
             </form>
        </div>
    )
}

export default RecipeForm