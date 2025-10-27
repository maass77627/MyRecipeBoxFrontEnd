import React, { useState, useEffect } from "react";
import "./MealPlanner.css";

function MealPlanner({ recipes = [] }) {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const [plan, setPlan] = useState({});

  
  useEffect(() => {
    const savedPlan = JSON.parse(localStorage.getItem("weeklyPlan"));
    if (savedPlan) setPlan(savedPlan);
  }, []);

  
  useEffect(() => {
    localStorage.setItem("weeklyPlan", JSON.stringify(plan));
  }, [plan]);

  function assignRecipe(day, recipeId) {
    const selectedRecipe = recipes.find((r) => r.id === parseInt(recipeId));
    setPlan({ ...plan, [day]: selectedRecipe });
  }

  function clearDay(day) {
    const updated = { ...plan };
    delete updated[day];
    setPlan(updated);
  }

  function clearAll() {
    setPlan({});
  }

  function randomizeWeek() {
    if (recipes.length === 0) return;
    const randomPlan = {};
    days.forEach((day) => {
      const rand = recipes[Math.floor(Math.random() * recipes.length)];
      randomPlan[day] = rand;
    });
    setPlan(randomPlan);
  }

  return (
    <div className="mealplanner-container">
      <header className="planner-header">
        <h2>🗓️ Weekly Meal Planner</h2>
        <div className="planner-controls">
          <button onClick={randomizeWeek} className="planner-btn random">
            🎲 Randomize
          </button>
          <button onClick={clearAll} className="planner-btn clear">
            🧹 Clear All
          </button>
        </div>
      </header>

      <div className="planner-grid">
        {days.map((day) => (
          <div key={day} className="planner-day">
            <h3>{day}</h3>

           
            <select
              onChange={(e) => assignRecipe(day, e.target.value)}
              value={plan[day]?.id || ""}
            >
              <option value="">-- Select Recipe --</option>
              {recipes.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.name}
                </option>
              ))}
            </select>

           
            {plan[day] ? (
              <div className="planner-recipe-card">
                <img
                  src={plan[day].image}
                  alt={plan[day].name}
                  className="planner-recipe-img"
                />
                <p className="planner-recipe-name">{plan[day].name}</p>
                <button
                  onClick={() => clearDay(day)}
                  className="planner-remove-btn"
                >
                  ✖️ Remove
                </button>
              </div>
            ) : (
              <p className="planner-placeholder">No recipe selected</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MealPlanner;