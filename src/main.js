const recipe = {
  title: "Spaghetti Carbonara",
  instructions: [
    "Cook spaghetti according to package instructions.",
    "In a separate pan, cook pancetta until crispy.",
    "In a bowl, whisk eggs and grated cheese.",
    "Combine spaghetti, pancetta, and egg mixture, stirring quickly.",
    "Serve immediately with additional cheese and black pepper.",
  ],
  image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
};

const getRecipeBtn = document.getElementById(`getRecipeBtn`);

getRecipeBtn.addEventListener("click", onRandomRecipe);

function onRandomRecipe() {
  const recipeTitle = document.querySelector(".recipe-title");
  const recipeInstructions = document.querySelector(".recipe-instruction");
  const recipeImage = document.querySelector(".recipe-image");

  recipeTitle.innerText = recipe.title;
  recipeInstructions.innerText = recipe.instructions.join("\n");
  recipeImage.src = recipe.image;
  recipeImage.style.width = "200px";

  getRecipeBtn.style.display = "none";
}
