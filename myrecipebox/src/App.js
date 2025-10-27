
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import RecipeContainer from "./RecipeContainer";
import Header from './Header';
import MealPlanner from './MealPlanner';
import React from "react";
import DinnerFinder from './DinnerFinder';
import {Routes, Route} from "react-router-dom";
import AddRecipeForm from './AddRecipeForm';
import KitchenManager from './KitchenManager';

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

<Header />


<Routes>
  <Route
    path="/"
    element={
      <>
      <RecipeContainer recipes={recipes} setRecipes={setRecipes} />
      <DinnerFinder recipes={recipes}/>
      
        
        <MealPlanner recipes={recipes} />
        <KitchenManager recipes={recipes}></KitchenManager>
        
      </>
    }
  />
  <Route
    path="/add-recipe"
    element={<AddRecipeForm onAddRecipe={(r) => setRecipes([...recipes, r])} />}
  />
  <Route path="/dinner-finder" element={<DinnerFinder recipes={recipes} />} />
</Routes>
      
        
     
    </div>
  );
}

export default App
