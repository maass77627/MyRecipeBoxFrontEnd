import React, { useState, useMemo } from "react";
import "./RecipeFilter.css";

function RecipeFilter({ recipes, setFilteredRecipes }) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  
  const categories = useMemo(() => {
    const unique = new Set();
    recipes.forEach((r) => {
      if (r.category && r.category.name) {
        unique.add(r.category.name);
      }
    });
    return ["All", ...Array.from(unique)];
  }, [recipes]);

 
  function handleFilter() {
    let filtered = recipes;

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (r) => r.category && r.category.name === selectedCategory
      );
    }

    if (search.trim() !== "") {
      const term = search.toLowerCase();
      filtered = filtered.filter(
        (r) =>
          r.name.toLowerCase().includes(term) ||
          (r.ingredients && r.ingredients.toLowerCase().includes(term))
      );
    }

    setFilteredRecipes(filtered);
  }

  
  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "search") setSearch(value);
    if (name === "category") setSelectedCategory(value);
  }

  
  React.useEffect(() => {
    handleFilter();
  }, [search, selectedCategory, recipes]);

  return (
    <div className="recipe-filter">
      <h3 className="filter-title">🔎 Find a Recipe</h3>

      <div className="filter-controls">
        <input
          type="text"
          name="search"
          value={search}
          onChange={handleChange}
          placeholder="Search by name or ingredient..."
          className="filter-input"
        />

        <select
          name="category"
          value={selectedCategory}
          onChange={handleChange}
          className="filter-select"
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default RecipeFilter;