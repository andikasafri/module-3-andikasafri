// API Module for handling recipe fetching
const api = (() => {
  const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

  /**
   * Fetch a random recipe from the API.
   * @returns {Promise<Object>} Recipe data or null if fetch fails.
   */
  const fetchRandomRecipe = async () => {
    try {
      console.log("Fetching recipe from API..."); // Debug log
      const response = await fetch(`${BASE_URL}/random.php`);
      if (!response.ok) {
        throw new Error(`Failed to fetch recipe: ${response.statusText}`);
      }
      const data = await response.json();
      return data.meals?.[0] || null; // Return null if no recipe is found
    } catch (error) {
      console.error("Error fetching recipe:", error);
      throw new Error("Fetch error, please try again.");
    }
  };

  return { fetchRandomRecipe };
})();

export default api;
