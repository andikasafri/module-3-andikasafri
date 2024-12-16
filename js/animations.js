import { gsap } from "gsap";
// Animation utilities using GSAP
const animations = (() => {
  /**
   * Animate meme quotes on the homepage.
   */
  const animateQuotes = () => {
    const quotes = document.querySelectorAll(".meme-quote");
    if (!quotes.length) {
      console.warn("No quotes found to animate.");
      return;
    }
    gsap.to(quotes, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.3,
      ease: "power3.out",
    });
  };

  /**
   * Animate recipe card appearance.
   */
  const animateRecipeCard = () => {
    const recipeCard = document.querySelector(".recipe-card");
    if (!recipeCard) {
      console.warn("No recipe card found to animate.");
      return;
    }
    gsap.fromTo(
      recipeCard,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
  };

  /**
   * Transition animation between stages.
   * @param {HTMLElement} fromStage - The current stage.
   * @param {HTMLElement} toStage - The next stage.
   */
  const transitionStages = (fromStage, toStage) => {
    if (!fromStage || !toStage) {
      console.error("Invalid stages provided for transition.");
      return;
    }

    gsap.to(fromStage, {
      opacity: 0,
      y: -50,
      duration: 0.5,
      onComplete: () => {
        fromStage.classList.add("hidden");
        toStage.classList.remove("hidden");
        gsap.fromTo(
          toStage,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.5 }
        );
      },
    });
  };

  /**
   * Add hover animations for buttons with icons.
   */
  const initButtonAnimations = () => {
    const buttons = document.querySelectorAll("button");
    if (!buttons.length) {
      console.warn("No buttons found for hover animations.");
      return;
    }

    buttons.forEach((button) => {
      const icon = button.querySelector(".icon");
      if (!icon) {
        console.warn(`Button "${button.textContent.trim()}" has no icon.`);
        return;
      }

      button.addEventListener("mouseenter", () => {
        gsap.to(icon, { rotate: 12, duration: 0.3 });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(icon, { rotate: 0, duration: 0.3 });
      });
    });
  };

  return {
    animateQuotes,
    animateRecipeCard,
    transitionStages,
    initButtonAnimations,
  };
})();

export default animations;
