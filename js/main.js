// Main Application Logic
import api from "./api.js";
import ui from "./ui.js";
import animations from "./animations.js";

document.addEventListener("DOMContentLoaded", () => {
  const elements = {
    stage1: document.getElementById("stage1"),
    stage2: document.getElementById("stage2"),
    getRecipeBtn: document.getElementById("getRecipeBtn"),
    tryAnotherBtn: document.getElementById("tryAnotherBtn"),
    goHomeBtn: document.getElementById("goHomeBtn"),
  };

  let countdownInterval;

  /**
   * Start the countdown as a visual loader.
   * @param {number} duration - Countdown duration in seconds.
   * @param {function} callback - Function to execute when countdown ends.
   */
  const startCountdown = (duration, callback) => {
    let count = duration;
    ui.setLoader(count);

    countdownInterval = setInterval(() => {
      count--;
      if (count > 0) {
        ui.setLoader(count);
      } else {
        clearInterval(countdownInterval);
        ui.clearCountdown();
        callback(); // Execute the callback after countdown
      }
    }, 1000);
  };

  /**
   * Fetch and display a random recipe after countdown.
   */
  const handleGetRecipe = async () => {
    if (!navigator.onLine) {
      ui.showError("You are offline. Please check your internet connection.");
      return;
    }

    animations.transitionStages(elements.stage1, elements.stage2);

    startCountdown(5, async () => {
      console.log("Countdown finished. Fetching recipe...");

      try {
        const recipe = await api.fetchRandomRecipe();
        console.log("Recipe fetched:", recipe);

        if (recipe) {
          ui.updateRecipe(recipe);
          animations.animateRecipeCard();
        } else {
          ui.showError("No recipe found.");
        }
      } catch (error) {
        console.error("Error during fetch:", error);
        ui.showError("Fetch error, please try again.");
      }
    });
  };

  // Event Listeners
  elements.getRecipeBtn.addEventListener("click", handleGetRecipe);

  elements.tryAnotherBtn.addEventListener("click", () => {
    clearInterval(countdownInterval);
    handleGetRecipe();
  });

  elements.goHomeBtn.addEventListener("click", () => {
    clearInterval(countdownInterval);
    animations.transitionStages(elements.stage2, elements.stage1);
    animations.animateQuotes();
  });

  // Listen for offline status
  window.addEventListener("offline", () => {
    ui.showError("You are offline. Please check your internet connection.");
  });

  animations.initButtonAnimations();
  animations.animateQuotes();
});
