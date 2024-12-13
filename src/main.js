// Constants for DOM elements
const getRecipeBtn = document.getElementById("getRecipeBtn");
const tryAnotherBtn = document.createElement("button"); // Create "Try Another Recipe" button
const recipeTitle = document.querySelector(".recipe-title");
const recipeInstruction = document.querySelector(".recipe-instruction");
const recipeImage = document.querySelector(".recipe-image");

// Set up "Try Another Recipe" button
tryAnotherBtn.textContent = "Try Another Recipe";
tryAnotherBtn.style.display = "none"; // Initially hidden
tryAnotherBtn.id = "tryAnotherBtn";
document.body.appendChild(tryAnotherBtn); // Append the button to the body

// Fetch a random recipe from TheMealDB API
async function fetchRandomRecipe() {
  try {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch recipe: ${response.statusText}`);
    }

    const data = await response.json();
    return data.meals[0]; // Return the first meal from the response
  } catch (error) {
    console.error("Error fetching recipe:", error);
    throw error; // Re-throw the error to be handled by the caller
  }
}

// Update the UI with the fetched recipe
function updateUI(recipe) {
  if (recipe) {
    recipeTitle.innerText = recipe.strMeal;
    recipeInstruction.innerText = recipe.strInstructions;
    recipeImage.src = recipe.strMealThumb;
    recipeImage.style.width = "200px";
    getRecipeBtn.style.display = "none"; // Hide the initial button
    tryAnotherBtn.style.display = "block"; // Show "Try Another Recipe" button
  } else {
    recipeTitle.innerText = "No recipe found.";
  }
}

// Handle fetch and display logic
async function handleGetRecipe() {
  try {
    const recipe = await fetchRandomRecipe();
    updateUI(recipe);
  } catch (error) {
    recipeTitle.innerText = "Error fetching recipe. Please try again later.";
  }
}

// Event listener for the initial button
getRecipeBtn.addEventListener("click", handleGetRecipe);

// Event listener for "Try Another Recipe" button
tryAnotherBtn.addEventListener("click", async () => {
  try {
    const recipe = await fetchRandomRecipe();
    updateUI(recipe);
  } catch (error) {
    recipeTitle.innerText = "Error fetching recipe. Please try again later.";
  }
});
