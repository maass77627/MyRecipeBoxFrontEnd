
import React, { useState, useEffect } from "react";
import "./DinnerFinder.css";

function DinnerFinder({ recipes = [] }) {
  const [categories, setCategories] = useState(["Any"]);
  const [selectedCategory, setSelectedCategory] = useState("Any");
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [isVisible, setIsVisible] = useState(true); 
  
  useEffect(() => {
    fetch("http://localhost:9292/categories")
      .then((r) => r.json())
      .then((data) => {
        const allNames = ["Any", ...data.map((cat) => cat.name)];
        setCategories(allNames);
      })
      .catch((err) => console.error("Error loading categories:", err));
  }, []);

 
  function getFilteredRecipes() {
    if (selectedCategory === "Any") return recipes;
    return recipes.filter(
      (r) => r.category && r.category.name === selectedCategory
    );
  }

  function spinForDinner() {
    const pool = getFilteredRecipes();

    if (pool.length === 0) {
      setCurrentRecipe({
        name: "No matches 😭",
        image: "",
        ingredients: "Try another category.",
        directions: "Or add more recipes!",
        _unavailable: true,
      });
      return;
    }

    setIsSpinning(true);
    const randIndex = Math.floor(Math.random() * pool.length);
    const choice = pool[randIndex];

    setTimeout(() => {
      setCurrentRecipe(choice);
      setIsSpinning(false);
    }, 800);
  }

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

 
  function handleCloseFinder() {
    setIsVisible(false);
    setTimeout(() => setCurrentRecipe(null), 300); 
  }

  if (!isVisible) {
    return (
      <button
        className="reopen-btn"
        onClick={() => setIsVisible(true)}
      >
        🍽 Open Dinner Finder
      </button>
    );
  }

  return (
    <section className="dinnerfinder-wrapper">
      <div className="dinnerfinder-card">
        <header className="dinnerfinder-header">
          <h2 className="dinnerfinder-title">🍽 Dinner Finder</h2>
          <p className="dinnerfinder-sub">
            Stuck on what to cook tonight? Spin the wheel.
          </p>
        </header>

        <button className="close-btn" onClick={handleCloseFinder}>
          ✖️ Close Finder
        </button>

        
        <div className="dinnerfinder-controls">
          <div className="df-control-group">
            <label className="df-label" htmlFor="df-category">
              Category
            </label>
            <select
              id="df-category"
              className="df-select"
              value={selectedCategory}
              onChange={handleCategoryChange}
              disabled={isSpinning}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <button
            className={`df-spin-btn ${isSpinning ? "spinning" : ""}`}
            onClick={spinForDinner}
            disabled={isSpinning}
          >
            {isSpinning ? "Spinning..." : "🎰 Spin Dinner"}
          </button>
        </div>

       
        {currentRecipe ? (
          <div className="result-area">
            <div
              className={`result-card ${
                currentRecipe._unavailable ? "unavailable" : ""
              }`}
            >
              {currentRecipe.image ? (
                <div className="result-image-wrapper">
                  <img
                    src={currentRecipe.image}
                    alt={currentRecipe.name}
                    className="result-image"
                  />
                </div>
              ) : (
                <div className="result-placeholder">🍝</div>
              )}

              <div className="result-body">
                <h3 className="result-name">{currentRecipe.name}</h3>

                <div className="result-section">
                  <h4 className="result-heading">Ingredients</h4>
                  <p className="result-text">
                    {currentRecipe.ingredients || "N/A"}
                  </p>
                </div>

                <div className="result-section">
                  <h4 className="result-heading">Directions</h4>
                  <p className="result-text">
                    {currentRecipe.directions || "N/A"}
                  </p>
                </div>

                {currentRecipe.category?.name && (
                  <div className="result-chip">
                    {currentRecipe.category.name}
                  </div>
                )}
              </div>
            </div>

            {!currentRecipe._unavailable && (
              <div className="result-actions">
                <button
                  className="again-btn"
                  onClick={spinForDinner}
                  disabled={isSpinning}
                >
                  🔄 Spin Again
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="no-result-hint">
            {recipes.length === 0
              ? "Loading recipes..."
              : "Pick a category (or leave as Any) and hit Spin Dinner."}
          </div>
        )}
      </div>
    </section>
  );
}

export default DinnerFinder;