import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "./woodfood.jpg"; 

function Header() {
  return (
    <header className="app-header">
      <div className="header-left">
        <img src={logo} alt="MyRecipeBox Logo" className="header-logo" />
        <h1 className="header-title">MyRecipeBox</h1>
      </div>

      <nav className="header-nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          🏠 Home
        </NavLink>
        <NavLink
          to="/add-recipe"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          ➕ Add Recipe
        </NavLink>
        <NavLink
          to="/dinner-finder"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          🎰 Meal Spinner
        </NavLink>
        <NavLink to="/meal-planner" className="nav-link">📅 Meal Planner</NavLink>
      </nav>
    </header>
  );
}

export default Header;