# 🍳 Meme Recipe Generator

> A fun way to discover random recipes, enhanced with animations and a dynamic user interface!

![Meme Recipe Generator Demo](./assets/step4.gif)

---

## 📋 Table of Contents

1. [Introduction](#introduction)
2. [How It Works](#how-it-works)
3. [Features](#features)
4. [My Progress](#my-progress)
5. [Demo](#demo)
6. [Installation & Contribution](#installation--contribution)
7. [API Integration](#api-integration)
8. [Connect with Me](#connect-with-me)

---

## 🛠 Introduction

The **Meme Recipe Generator** is a lightweight and engaging web application. It fetches random recipes from [TheMealDB](https://www.themealdb.com/) API and displays them dynamically with exciting animations and an interactive UI. It's perfect for discovering new culinary ideas while having fun with meme-like visuals and transitions.

---

## ⚙️ How It Works

1. **Homepage Animation**: Motivational meme quotes fade in on page load.
2. **Fetch Recipes**: Click the "Get Random Recipe" button to start the magic.
3. **Countdown Animation**: A fun countdown runs before showing a random recipe.
4. **Recipe Display**: See the recipe's name, instructions, and image.
5. **Retry or Home**: Try another recipe or return to the homepage seamlessly.

---

## 🌟 Features

- **Dynamic Animations**: Powered by GSAP for smooth transitions and hover effects.
- **Interactive Buttons**: Buttons are animated and responsive to user interactions.
- **Error Handling**: Provides user feedback when things go wrong (e.g., offline).
- **Offline Detection**: Displays error messages if the user is offline.
- **Responsive Design**: Works beautifully on various screen sizes.

---

## 📈 My Progress

### **Initial Work**

- **Date**: 05/12
  - Built initial recipe fetching functionality.
  - Added DOM manipulation to display recipe data dynamically.

### **Current Progress**

- **Date**: 16/12
  - Integrated animations using GSAP for improved user experience.
  - Refactored code into reusable modules (`api.js`, `ui.js`, `animations.js`).
  - Enhanced the countdown and added transition animations between stages.
  - Improved error handling for network issues or failed API requests.
  - Optimized and added hover animations for buttons with icons.

---

## 🎥 Demo

![Meme Recipe Generator Demo](./assets/step3.gif)

---

## 🔧 Installation & Contribution

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [NPM](https://www.npmjs.com/) (v6 or higher)

### Steps

```bash
# Clone the repository
git clone https://github.com/revou-fsse-oct24/module-3-andikasafri.git

# Navigate to the project directory
cd module-3-andikasafri

# Install dependencies
npm install

# Start the application
npm run dev
```

### Want to Contribute?

We’d love your help!

- Fork the repository and create a feature branch.
- Make your changes and submit a pull request.

---

## 🌐 API Integration

This project leverages [TheMealDB API](https://www.themealdb.com/) for fetching recipes.

### Endpoints

- **`GET /random.php`**: Fetches a random recipe.

### API Code

**`api.js`**:

```javascript
const api = (() => {
  const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

  const fetchRandomRecipe = async () => {
    try {
      const response = await fetch(`${BASE_URL}/random.php`);
      if (!response.ok) {
        throw new Error(`Failed to fetch recipe: ${response.statusText}`);
      }
      const data = await response.json();
      return data.meals?.[0] || null;
    } catch (error) {
      console.error("Error fetching recipe:", error);
      throw error;
    }
  };

  return { fetchRandomRecipe };
})();

export default api;
```

---

## 📧 Connect with Me

[![Linkedin Badge](https://img.shields.io/badge/-Andika_Safri-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/andika-safri/)
[![Instagram Badge](https://img.shields.io/badge/-Andika_Safri-purple?style=flat-square&logo=instagram&logoColor=white)](https://www.instagram.com/dikko_pujangga/)
[![Gmail Badge](https://img.shields.io/badge/-andika.saf3@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white)](mailto:andika.saf3@gmail.com)
