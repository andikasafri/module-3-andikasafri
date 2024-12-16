// UI Module for handling DOM updates
const ui = (() => {
  const elements = {
    title: document.querySelector(".recipe-title"),
    instruction: document.querySelector(".recipe-instruction"),
    image: document.querySelector(".recipe-image"),
    countdown: document.getElementById("countdown"),
  };

  /**
   * Update the recipe card UI with recipe data.
   * @param {Object|null} recipe - Recipe data or null for an empty state.
   */
  const updateRecipe = (recipe) => {
    if (recipe) {
      elements.title.innerText = recipe.strMeal;
      elements.instruction.innerText = recipe.strInstructions;
      elements.image.src = recipe.strMealThumb || "";
      elements.image.style.width = "100%";
    } else {
      elements.title.innerText = "No recipe found.";
      elements.instruction.innerText = "";
      elements.image.src = "";
      elements.image.style.width = "0%";
    }
  };

  /**
   * Set the loader state using the countdown element.
   * @param {number} count - Current countdown number.
   */
  const setLoader = (count) => {
    elements.countdown.innerText = `🎮 Loading your epic meal in ${count}... Don't rage quit! 🎮`;
  };

  /**
   * Display an error message in the recipe title area.
   * @param {string} message - Error message to display.
   */
  const showError = (message) => {
    elements.title.innerText = message;
    elements.instruction.innerText = "";
    elements.image.src = "";
    elements.image.style.width = "0%";
  };

  /**
   * Clear the countdown message.
   */
  const clearCountdown = () => {
    elements.countdown.innerText = "";
  };

  return { updateRecipe, setLoader, showError, clearCountdown };
})();

export default ui;
