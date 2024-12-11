// Fetch and display a random recipe from TheMealDB API when the button is clicked
document
  .getElementById("getRecipeBtn")
  .addEventListener("click", async function () {
    try {
      // Fetch a random recipe from the API
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );

      // Check if the response is okay (status in the range 200-299)
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Parse the JSON data from the response
      const data = await response.json();
      const recipe = data.meals[0]; // Get the first meal from the response data

      // Display the recipe title, instructions, and image
      document.querySelector(".recipe-title").innerText = recipe.strMeal; // Set the recipe title
      document.querySelector(".recipe-instruction").innerText =
        recipe.strInstructions; // Set the recipe instructions
      document.querySelector(".recipe-image").src = recipe.strMealThumb; // Set the recipe image source
      document.querySelector(".recipe-image").style.width = "200px"; // Set the image width

      // Hide the button after fetching the recipe
      document.getElementById("getRecipeBtn").style.display = "none";
    } catch (error) {
      // Log any errors that occur during the fetch
      console.log("Something went wrong!", error);

      // Display an error message in the recipe title area
      document.querySelector(".recipe-title").innerText =
        "Error fetching recipe.";
    }
  });
