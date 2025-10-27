// import React, { useState, useMemo } from "react";
// import "./DinnerFinder.css";

// function DinnerFinder({ recipes = [] }) {
//   // categories derived from recipes so you don't have to hardcode
//   const categories = useMemo(() => {
//     const unique = new Set();
//     recipes.forEach(r => {
//       if (r.category && r.category !== "") {
//         unique.add(r.category);
//       }
//     });
//     return ["Any", ...Array.from(unique)];
//   }, [recipes]);

//   // state
//   const [selectedCategory, setSelectedCategory] = useState("Any");
//   const [currentRecipe, setCurrentRecipe] = useState(null);
//   const [isSpinning, setIsSpinning] = useState(false);

//   // helper: get list of candidates that match dropdown
//   function getFilteredRecipes() {
//     if (selectedCategory === "Any") return recipes;
//     return recipes.filter(r => r.category === selectedCategory);
//   }

//   // pick a random recipe from filtered list
//   function spinForDinner() {
//     const pool = getFilteredRecipes();
//     if (pool.length === 0) {
//       // no match for that category
//       setCurrentRecipe({
//         name: "No matches 😭",
//         image: "",
//         ingredients: "Try another category.",
//         directions: "Or add more recipes!",
//         _unavailable: true
//       });
//       return;
//     }

//     // lil spin animation lock
//     setIsSpinning(true);

//     // choose random index
//     const randIndex = Math.floor(Math.random() * pool.length);
//     const choice = pool[randIndex];

//     // after animation finishes, reveal the choice
//     setTimeout(() => {
//       setCurrentRecipe(choice);
//       setIsSpinning(false);
//     }, 800); // keep this in sync w/ animation duration in CSS
//   }

//   function handleCategoryChange(e) {
//     setSelectedCategory(e.target.value);
//   }

//   return (
//     <section className="dinnerfinder-wrapper">
//       <div className="dinnerfinder-card">
//         <header className="dinnerfinder-header">
//           <h2 className="dinnerfinder-title">
//             🍽 Dinner Finder
//           </h2>
//           <p className="dinnerfinder-sub">
//             Stuck on what to cook tonight? Spin the wheel.
//           </p>
//         </header>

//         {/* Controls row */}
//         <div className="dinnerfinder-controls">
//           <div className="df-control-group">
//             <label className="df-label" htmlFor="df-category">
//               Category
//             </label>
//             <select
//               id="df-category"
//               className="df-select"
//               value={selectedCategory}
//               onChange={handleCategoryChange}
//               disabled={isSpinning}
//             >
//               {categories.map(cat => (
//                 <option key={cat} value={cat}>{cat.name}</option>
//               ))}
//             </select>
//           </div>

//           <button
//             className={`df-spin-btn ${isSpinning ? "spinning" : ""}`}
//             onClick={spinForDinner}
//             disabled={isSpinning}
//           >
//             {isSpinning ? "Spinning..." : "🎰 Spin Dinner"}
//           </button>
//         </div>

//         {/* Result display */}
//         {currentRecipe ? (
//           <div className="result-area">
//             <div className={`result-card ${currentRecipe._unavailable ? "unavailable" : ""}`}>
//               {currentRecipe.image ? (
//                 <div className="result-image-wrapper">
//                   <img
//                     src={currentRecipe.image}
//                     alt={currentRecipe.name}
//                     className="result-image"
//                   />
//                 </div>
//               ) : (
//                 <div className="result-placeholder">
//                   🍝
//                 </div>
//               )}

//               <div className="result-body">
//                 <h3 className="result-name">{currentRecipe.name}</h3>

//                 <div className="result-section">
//                   <h4 className="result-heading">Ingredients</h4>
//                   <p className="result-text">
//                     {currentRecipe.ingredients}
//                   </p>
//                 </div>

//                 <div className="result-section">
//                   <h4 className="result-heading">Directions</h4>
//                   <p className="result-text">
//                     {currentRecipe.directions}
//                   </p>
//                 </div>

//                 {currentRecipe.category ? (
//                   <div className="result-chip">
//                     {currentRecipe.category}
//                   </div>
//                 ) : null}
//               </div>
//             </div>

//             {!currentRecipe._unavailable ? (
//               <div className="result-actions">
//                 <button
//                   className="again-btn"
//                   onClick={spinForDinner}
//                   disabled={isSpinning}
//                 >
//                   🔄 Spin Again
//                 </button>
//               </div>
//             ) : null}
//           </div>
//         ) : (
//           <div className="no-result-hint">
//             Pick a category (or leave as Any) and hit Spin Dinner.
//           </div>
//         )}

//       </div>
//     </section>
//   );
// }

// export default DinnerFinder;


// import React, { useState, useMemo } from "react";
// import "./DinnerFinder.css";

// function DinnerFinder({ recipes = [] }) {
//     console.log(recipes)
//   // ✅ Extract unique category names from nested recipe.category.name
//   const categories = useMemo(() => {
//     const unique = new Set();
//     recipes.forEach((r) => {
//       if (r.category && r.category.name) {
//         unique.add(r.category.name);
//       }
//     });
//     return ["Any", ...Array.from(unique)];
//   }, [recipes]);

//   const [selectedCategory, setSelectedCategory] = useState("Any");
//   const [currentRecipe, setCurrentRecipe] = useState(null);
//   const [isSpinning, setIsSpinning] = useState(false);

//   // ✅ Filter recipes by nested category name
//   function getFilteredRecipes() {
//     if (selectedCategory === "Any") return recipes;
//     return recipes.filter(
//       (r) => r.category && r.category.name === selectedCategory
//     );
//   }

//   function spinForDinner() {
//     const pool = getFilteredRecipes();

//     if (pool.length === 0) {
//       setCurrentRecipe({
//         name: "No matches 😭",
//         image: "",
//         ingredients: "Try another category.",
//         directions: "Or add more recipes!",
//         _unavailable: true,
//       });
//       return;
//     }

//     setIsSpinning(true);

//     const randIndex = Math.floor(Math.random() * pool.length);
//     const choice = pool[randIndex];

//     setTimeout(() => {
//       setCurrentRecipe(choice);
//       setIsSpinning(false);
//     }, 800);
//   }

//   function handleCategoryChange(e) {
//     setSelectedCategory(e.target.value);
//   }

//   return (
//     <section className="dinnerfinder-wrapper">
//       <div className="dinnerfinder-card">
//         <header className="dinnerfinder-header">
//           <h2 className="dinnerfinder-title">🍽 Dinner Finder</h2>
//           <p className="dinnerfinder-sub">
//             Stuck on what to cook tonight? Spin the wheel.
//           </p>
//         </header>

//         {/* Controls row */}
//         <div className="dinnerfinder-controls">
//           <div className="df-control-group">
//             <label className="df-label" htmlFor="df-category">
//               Category
//             </label>
//             <select
//               id="df-category"
//               className="df-select"
//               value={selectedCategory}
//               onChange={handleCategoryChange}
//               disabled={isSpinning}
//             >
//               {categories.map((cat) => (
//                 <option key={cat} value={cat}>
//                   {cat}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <button
//             className={`df-spin-btn ${isSpinning ? "spinning" : ""}`}
//             onClick={spinForDinner}
//             disabled={isSpinning}
//           >
//             {isSpinning ? "Spinning..." : "🎰 Spin Dinner"}
//           </button>
//         </div>

//         {/* Result display */}
//         {currentRecipe ? (
//           <div className="result-area">
//             <div
//               className={`result-card ${
//                 currentRecipe._unavailable ? "unavailable" : ""
//               }`}
//             >
//               {currentRecipe.image ? (
//                 <div className="result-image-wrapper">
//                   <img
//                     src={currentRecipe.image}
//                     alt={currentRecipe.name}
//                     className="result-image"
//                   />
//                 </div>
//               ) : (
//                 <div className="result-placeholder">🍝</div>
//               )}

//               <div className="result-body">
//                 <h3 className="result-name">{currentRecipe.name}</h3>

//                 <div className="result-section">
//                   <h4 className="result-heading">Ingredients</h4>
//                   <p className="result-text">
//                     {currentRecipe.ingredients
//                       ? currentRecipe.ingredients
//                       : "N/A"}
//                   </p>
//                 </div>

//                 <div className="result-section">
//                   <h4 className="result-heading">Directions</h4>
//                   <p className="result-text">
//                     {currentRecipe.directions
//                       ? currentRecipe.directions
//                       : "N/A"}
//                   </p>
//                 </div>

//                 {currentRecipe.category && currentRecipe.category.name ? (
//                   <div className="result-chip">
//                     {currentRecipe.category.name}
//                   </div>
//                 ) : null}
//               </div>
//             </div>

//             {!currentRecipe._unavailable ? (
//               <div className="result-actions">
//                 <button
//                   className="again-btn"
//                   onClick={spinForDinner}
//                   disabled={isSpinning}
//                 >
//                   🔄 Spin Again
//                 </button>
//               </div>
//             ) : null}
//           </div>
//         ) : (
//           <div className="no-result-hint">
//             Pick a category (or leave as Any) and hit Spin Dinner.
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// export default DinnerFinder;

// import React, { useState, useEffect } from "react";
// import "./DinnerFinder.css";

// function DinnerFinder({ recipes = [] }) {
//   const [categories, setCategories] = useState(["Any"]);
//   const [selectedCategory, setSelectedCategory] = useState("Any");
//   const [currentRecipe, setCurrentRecipe] = useState(null);
//   const [isSpinning, setIsSpinning] = useState(false);

//   // ✅ Build category list once recipes actually load
//   useEffect(() => {
//     if (recipes.length > 0) {
//       const unique = new Set();
//       recipes.forEach((r) => {
//         if (r.category && r.category.name) {
//           unique.add(r.category.name);
//         }
//       });
//       const allCats = ["Any", ...Array.from(unique)];
//       console.log("✅ Extracted categories:", allCats);
//       setCategories(allCats);
//     }
//   }, [recipes]);

//   // ✅ Filter recipes by selected category
//   function getFilteredRecipes() {
//     if (selectedCategory === "Any") return recipes;
//     return recipes.filter(
//       (r) => r.category && r.category.name === selectedCategory
//     );
//   }

//   function spinForDinner() {
//     const pool = getFilteredRecipes();

//     if (pool.length === 0) {
//       setCurrentRecipe({
//         name: "No matches 😭",
//         image: "",
//         ingredients: "Try another category.",
//         directions: "Or add more recipes!",
//         _unavailable: true,
//       });
//       return;
//     }

//     setIsSpinning(true);
//     const randIndex = Math.floor(Math.random() * pool.length);
//     const choice = pool[randIndex];

//     setTimeout(() => {
//       setCurrentRecipe(choice);
//       setIsSpinning(false);
//     }, 800);
//   }

//   function handleCategoryChange(e) {
//     setSelectedCategory(e.target.value);
//   }

//   return (
//     <section className="dinnerfinder-wrapper">
//       <div className="dinnerfinder-card">
//         <header className="dinnerfinder-header">
//           <h2 className="dinnerfinder-title">🍽 Dinner Finder</h2>
//           <p className="dinnerfinder-sub">
//             Stuck on what to cook tonight? Spin the wheel.
//           </p>
//         </header>

//         {/* Controls row */}
//         <div className="dinnerfinder-controls">
//           <div className="df-control-group">
//             <label className="df-label" htmlFor="df-category">
//               Category
//             </label>
//             <select
//               id="df-category"
//               className="df-select"
//               value={selectedCategory}
//               onChange={handleCategoryChange}
//               disabled={isSpinning}
//             >
//               {categories.map((cat) => (
//                 <option key={cat} value={cat}>
//                   {cat}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <button
//             className={`df-spin-btn ${isSpinning ? "spinning" : ""}`}
//             onClick={spinForDinner}
//             disabled={isSpinning}
//           >
//             {isSpinning ? "Spinning..." : "🎰 Spin Dinner"}
//           </button>
//         </div>

//         {/* Result display */}
//         {currentRecipe ? (
//           <div className="result-area">
//             <div
//               className={`result-card ${
//                 currentRecipe._unavailable ? "unavailable" : ""
//               }`}
//             >
//               {currentRecipe.image ? (
//                 <div className="result-image-wrapper">
//                   <img
//                     src={currentRecipe.image}
//                     alt={currentRecipe.name}
//                     className="result-image"
//                   />
//                 </div>
//               ) : (
//                 <div className="result-placeholder">🍝</div>
//               )}

//               <div className="result-body">
//                 <h3 className="result-name">{currentRecipe.name}</h3>

//                 <div className="result-section">
//                   <h4 className="result-heading">Ingredients</h4>
//                   <p className="result-text">
//                     {currentRecipe.ingredients
//                       ? currentRecipe.ingredients
//                       : "N/A"}
//                   </p>
//                 </div>

//                 <div className="result-section">
//                   <h4 className="result-heading">Directions</h4>
//                   <p className="result-text">
//                     {currentRecipe.directions
//                       ? currentRecipe.directions
//                       : "N/A"}
//                   </p>
//                 </div>

//                 {currentRecipe.category && currentRecipe.category.name ? (
//                   <div className="result-chip">
//                     {currentRecipe.category.name}
//                   </div>
//                 ) : null}
//               </div>
//             </div>

//             {!currentRecipe._unavailable ? (
//               <div className="result-actions">
//                 <button
//                   className="again-btn"
//                   onClick={spinForDinner}
//                   disabled={isSpinning}
//                 >
//                   🔄 Spin Again
//                 </button>
//               </div>
//             ) : null}
//           </div>
//         ) : (
//           <div className="no-result-hint">
//             {recipes.length === 0
//               ? "Loading recipes..."
//               : "Pick a category (or leave as Any) and hit Spin Dinner."}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// export default DinnerFinder;






// import React, { useState, useEffect } from "react";
// import "./DinnerFinder.css";

// function DinnerFinder({ recipes = [] }) {
//   const [categories, setCategories] = useState(["Any"]);
//   const [selectedCategory, setSelectedCategory] = useState("Any");
//   const [currentRecipe, setCurrentRecipe] = useState(null);
//   const [isSpinning, setIsSpinning] = useState(false);

//   // ✅ Fetch all categories from backend on mount
//   useEffect(() => {
//     fetch("http://localhost:9292/categories")
//       .then((r) => r.json())
//       .then((data) => {
//         const allNames = ["Any", ...data.map((cat) => cat.name)];
//         console.log("✅ Loaded backend categories:", allNames);
//         setCategories(allNames);
//       })
//       .catch((err) => console.error("Error loading categories:", err));
//   }, []);

//   // ✅ Filter recipes by selected category
//   function getFilteredRecipes() {
//     if (selectedCategory === "Any") return recipes;
//     return recipes.filter(
//       (r) => r.category && r.category.name === selectedCategory
//     );
//   }

//   // ✅ Spin for a random recipe
//   function spinForDinner() {
//     const pool = getFilteredRecipes();

//     if (pool.length === 0) {
//       setCurrentRecipe({
//         name: "No matches 😭",
//         image: "",
//         ingredients: "Try another category.",
//         directions: "Or add more recipes!",
//         _unavailable: true,
//       });
//       return;
//     }

//     setIsSpinning(true);
//     const randIndex = Math.floor(Math.random() * pool.length);
//     const choice = pool[randIndex];

//     setTimeout(() => {
//       setCurrentRecipe(choice);
//       setIsSpinning(false);
//     }, 800);
//   }

//   function handleCategoryChange(e) {
//     setSelectedCategory(e.target.value);
//   }

//   return (
//     <section className="dinnerfinder-wrapper">
//       <div className="dinnerfinder-card">
//         <header className="dinnerfinder-header">
//           <h2 className="dinnerfinder-title">🍽 Dinner Finder</h2>
//           <p className="dinnerfinder-sub">
//             Stuck on what to cook tonight? Spin the wheel.
//           </p>
//         </header>

//         {/* Controls row */}
//         <div className="dinnerfinder-controls">
//           <div className="df-control-group">
//             <label className="df-label" htmlFor="df-category">
//               Category
//             </label>
//             <select
//               id="df-category"
//               className="df-select"
//               value={selectedCategory}
//               onChange={handleCategoryChange}
//               disabled={isSpinning}
//             >
//               {categories.map((cat) => (
//                 <option key={cat} value={cat}>
//                   {cat}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <button
//             className={`df-spin-btn ${isSpinning ? "spinning" : ""}`}
//             onClick={spinForDinner}
//             disabled={isSpinning}
//           >
//             {isSpinning ? "Spinning..." : "🎰 Spin Dinner"}
//           </button>
//         </div>

//         {/* Result display */}
//         {currentRecipe ? (
//           <div className="result-area">
//             <div
//               className={`result-card ${
//                 currentRecipe._unavailable ? "unavailable" : ""
//               }`}
//             >
//               {currentRecipe.image ? (
//                 <div className="result-image-wrapper">
//                   <img
//                     src={currentRecipe.image}
//                     alt={currentRecipe.name}
//                     className="result-image"
//                   />
//                 </div>
//               ) : (
//                 <div className="result-placeholder">🍝</div>
//               )}

//               <div className="result-body">
//                 <h3 className="result-name">{currentRecipe.name}</h3>

//                 <div className="result-section">
//                   <h4 className="result-heading">Ingredients</h4>
//                   <p className="result-text">
//                     {currentRecipe.ingredients
//                       ? currentRecipe.ingredients
//                       : "N/A"}
//                   </p>
//                 </div>

//                 <div className="result-section">
//                   <h4 className="result-heading">Directions</h4>
//                   <p className="result-text">
//                     {currentRecipe.directions
//                       ? currentRecipe.directions
//                       : "N/A"}
//                   </p>
//                 </div>

//                 {currentRecipe.category && currentRecipe.category.name ? (
//                   <div className="result-chip">
//                     {currentRecipe.category.name}
//                   </div>
//                 ) : null}
//               </div>
//             </div>

//             {!currentRecipe._unavailable ? (
//               <div className="result-actions">
//                 <button
//                   className="again-btn"
//                   onClick={spinForDinner}
//                   disabled={isSpinning}
//                 >
//                   🔄 Spin Again
//                 </button>
//               </div>
//             ) : null}
//           </div>
//         ) : (
//           <div className="no-result-hint">
//             {recipes.length === 0
//               ? "Loading recipes..."
//               : "Pick a category (or leave as Any) and hit Spin Dinner."}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// export default DinnerFinder;

import React, { useState, useEffect } from "react";
import "./DinnerFinder.css";

function DinnerFinder({ recipes = [] }) {
  const [categories, setCategories] = useState(["Any"]);
  const [selectedCategory, setSelectedCategory] = useState("Any");
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // ✅ controls visibility

  // ✅ Fetch categories from backend
  useEffect(() => {
    fetch("http://localhost:9292/categories")
      .then((r) => r.json())
      .then((data) => {
        const allNames = ["Any", ...data.map((cat) => cat.name)];
        setCategories(allNames);
      })
      .catch((err) => console.error("Error loading categories:", err));
  }, []);

  // ✅ Filter recipes
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

  // ✅ Close + reset the spinner
  function handleCloseFinder() {
    setIsVisible(false);
    setTimeout(() => setCurrentRecipe(null), 300); // small fade reset
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

        {/* ✅ Add close button */}
        <button className="close-btn" onClick={handleCloseFinder}>
          ✖️ Close Finder
        </button>

        {/* Controls */}
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

        {/* Result */}
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