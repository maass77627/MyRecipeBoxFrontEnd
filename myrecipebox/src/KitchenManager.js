import React, { useState, useEffect } from "react";
import "./KitchenManager.css";

function KitchenManager({ recipes = [] }) {
  const [pantry, setPantry] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [matchRecipes, setMatchRecipes] = useState([]);

  
  useEffect(() => {
    const savedPantry = JSON.parse(localStorage.getItem("pantry")) || [];
    const savedShopping = JSON.parse(localStorage.getItem("shoppingList")) || [];
    setPantry(savedPantry);
    setShoppingList(savedShopping);
  }, []);

  
  useEffect(() => {
    localStorage.setItem("pantry", JSON.stringify(pantry));
    localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
  }, [pantry, shoppingList]);

  
  function handleAddToPantry(e) {
    e.preventDefault();
    if (!newItem.trim()) return;
    if (!pantry.includes(newItem)) setPantry([...pantry, newItem]);
    setNewItem("");
  }

  function handleAddToShopping(e) {
    e.preventDefault();
    if (!newItem.trim()) return;
    if (!shoppingList.includes(newItem)) setShoppingList([...shoppingList, newItem]);
    setNewItem("");
  }

  
  function handlePurchased(item) {
    setShoppingList(shoppingList.filter((i) => i !== item));
    if (!pantry.includes(item)) setPantry([...pantry, item]);
  }

  
  function handleRemovePantry(item) {
    setPantry(pantry.filter((i) => i !== item));
  }

  function handleRemoveShopping(item) {
    setShoppingList(shoppingList.filter((i) => i !== item));
  }

  
  function findRecipes() {
    if (recipes.length === 0) return;

    const matches = recipes.filter((recipe) => {
      if (!recipe.ingredients) return false;
      const ingredientsArray = recipe.ingredients
        .split(",")
        .map((i) => i.trim().toLowerCase());
      const overlap = pantry.some((item) =>
        ingredientsArray.includes(item.toLowerCase())
      );
      return overlap;
    });

    setMatchRecipes(matches);
  }

  return (
    <div className="kitchen-board">
      <h2 className="kitchen-title">🧺 Kitchen Manager</h2>
      <p className="kitchen-subtitle">
        Track what’s in your pantry, what to buy, and see what you can cook!
      </p>

      <div className="kitchen-columns">
        
        <div className="kitchen-card pantry">
          <h3>🧂 My Pantry</h3>

          <form onSubmit={handleAddToPantry} className="kitchen-form">
            <input
              type="text"
              placeholder="Add ingredient..."
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />
            <button type="submit">Add</button>
          </form>

          <ul className="kitchen-list">
            {pantry.length === 0 ? (
              <p className="placeholder">Your pantry is empty 🪹</p>
            ) : (
              pantry.map((item) => (
                <li key={item}>
                  <span>{item}</span>
                  <button className="remove-btn" onClick={() => handleRemovePantry(item)}>
                    ✖
                  </button>
                </li>
              ))
            )}
          </ul>

          {pantry.length > 0 && (
            <button className="find-btn" onClick={findRecipes}>
              🍳 Find Recipes I Can Make
            </button>
          )}

          {matchRecipes.length > 0 && (
            <div className="match-section">
              <h4>Matching Recipes ({matchRecipes.length}):</h4>
              <ul className="match-list">
                {matchRecipes.map((r) => (
                  <li key={r.id}>
                    <strong>{r.name}</strong>
                    <br />
                    <span className="match-cat">
                      {r.category?.name ? `(${r.category.name})` : ""}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        
        <div className="kitchen-card shopping">
          <h3>🛒 Shopping List</h3>

          <form onSubmit={handleAddToShopping} className="kitchen-form">
            <input
              type="text"
              placeholder="Add to shopping list..."
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />
            <button type="submit">Add</button>
          </form>

          <ul className="kitchen-list">
            {shoppingList.length === 0 ? (
              <p className="placeholder">Nothing to buy yet ✨</p>
            ) : (
              shoppingList.map((item) => (
                <li key={item}>
                  <span>{item}</span>
                  <div className="item-actions">
                    <button className="done-btn" onClick={() => handlePurchased(item)}>
                      ✅ Bought
                    </button>
                    <button className="remove-btn" onClick={() => handleRemoveShopping(item)}>
                      ✖
                    </button>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default KitchenManager;