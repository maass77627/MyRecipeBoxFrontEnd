
 import { useEffect } from 'react';
 import { useState } from 'react';
import './App.css';
import RecipeContainer from "./RecipeContainer";
import RecipeForm from './RecipeForm';
import Categories from './Categories';

function App() {

  const [ recipes, setRecipes ] = useState([])

  

  useEffect(() => {
    fetch("http://localhost:9292/recipes")
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      setRecipes(json)
    })

  }, [])









  return (
    <div className="App">
      <img id="logo" src="MyRecipeBox.png"></img>
      <img id="woodfood" src="woodfood.jpg" alt="food"></img>
      
        {/* <h1>"My Recipe Box"</h1> */}
        <RecipeContainer  recipes={recipes}></RecipeContainer>
        <RecipeForm></RecipeForm>
        <Categories></Categories>
     
    </div>
  );
}

export default App;
