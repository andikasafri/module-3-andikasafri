// Constants for DOM elements
const getRecipeBtn = document.getElementById("getRecipeBtn");
const recipeTitle = document.querySelector(".recipe-title");
const recipeInstruction = document.querySelector(".recipe-instruction");
const recipeImage = document.querySelector(".recipe-image");

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
    getRecipeBtn.style.display = "none"; // Hide the button
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

// Event listener for the button
getRecipeBtn.addEventListener("click", handleGetRecipe);
