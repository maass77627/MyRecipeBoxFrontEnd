import React, { useState, useEffect } from "react";
import "./AddRecipeForm.css";

function AddRecipeForm({ onAddRecipe }) {
  const [showForm, setShowForm] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [categories, setCategories] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    ingredients: "",
    directions: "",
    image: "",
    category_id: "",
  });

  
  useEffect(() => {
    fetch("http://localhost:9292/categories") 
      .then((r) => {
        console.log("Response status:", r.status);
        return r.json();
      })
      .then((data) => {
        console.log("Fetched categories:", data);
        setCategories(data);
      })
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);




  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }



  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9292/recipes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newRecipe) => {
        onAddRecipe(newRecipe);
        setFormData({
          name: "",
          ingredients: "",
          directions: "",
          image: "",
          category_id: "",
        });
        setIsFlipped(false);
        setTimeout(() => setShowForm(false), 400);
      });
  }

  function handleOpenForm() {
    setShowForm(true);
    setTimeout(() => setIsFlipped(true), 50);
  }

  function handleCloseForm() {
    setIsFlipped(false);
    setTimeout(() => setShowForm(false), 400);
  }

  return (
    <div className="add-recipe-container">
      {!showForm && (
        <button className="add-recipe-btn" onClick={handleOpenForm}>
          ➕ Add New Recipe
        </button>
      )}

      {showForm && (
        <div className="overlay" onClick={handleCloseForm}>
          <div
            className={`recipe-card-form ${isFlipped ? "flipped" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="form-title">📜 New Recipe Card</h2>

            <form onSubmit={handleSubmit} className="recipe-form">
              <label>
                <span>Recipe Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                <span>Ingredients</span>
                <textarea
                  name="ingredients"
                  rows="3"
                  value={formData.ingredients}
                  onChange={handleChange}
                />
              </label>

              <label>
                <span>Directions</span>
                <textarea
                  name="directions"
                  rows="3"
                  value={formData.directions}
                  onChange={handleChange}
                />
              </label>

              <label>
                <span>Image URL</span>
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                />
              </label>

              
              <label>
                <span>Category</span>
                <select
                  name="category_id"
                  value={formData.category_id}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a category...</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </label>

              <div className="form-buttons">
                <button type="submit" className="save-btn">
                  Save Recipe
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={handleCloseForm}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddRecipeForm;