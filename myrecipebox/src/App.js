
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import RecipeContainer from "./RecipeContainer";
import RecipeForm from './RecipeForm';
import Categories from './Categories';
import React from "react";

function App() {

  const [ recipes, setRecipes ] = useState([])
  const [ categories, setCategories ] = useState([])

  
  useEffect(() => {
      fetch("http://localhost:9292/recipes")
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setRecipes(json)
      })

  }, [])


    useEffect(() => {
      fetch("http://localhost:9292/categories")
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setCategories(json)
      })

  }, [])


 return (
    <div className="App">
      <img id="logo" src="MyRecipeBox.png" alt="logo"></img>
      <img id="woodfood" src="woodfood.jpg" alt="food"></img>
        <RecipeContainer setRecipes={setRecipes}  recipes={recipes}></RecipeContainer>
        <RecipeForm recipes={recipes} setRecipes={setRecipes}></RecipeForm>
        <Categories recipes={recipes} categories={categories}></Categories>
     
    </div>
  );
}

export default App
