# 🐾 MeowMoments

MeowMoments is a web-based application that fetches and displays random cat images along with detailed breed information using TheCatAPI.

The project focuses on handling asynchronous API requests, validating incomplete responses, and ensuring that only images with proper breed metadata are displayed.

---

## 🚀 Live Demo

🔗 Live Website: https://meow-moments.vercel.app/

---

## 📌 Features

- Fetches random cat images dynamically
- Displays associated breed data:
  - Breed Name
  - Wekipedia breed link
- Ensures breed data exists before rendering
- Fetch Cat fun fact
- Handles API responses safely
- Uses API key authentication
- Clean and responsive UI

---

## 🛠 Tech Stack

- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API

---

## 🧠 How It Works

1. Sends a request to TheCatAPI & CatFact API image search endpoint.
2. Filters responses to ensure breed information is present.
3. Dynamically updates the DOM with:
   - Cat image
   - Breed details
   - Cat fact
4. Used 2 API's

---

## 🔑 API Used
- CatFact API
  Endpoint: `https://catfact.ninja/fact`  


- TheCatAPI  
  Endpoint:  
  `https://api.thecatapi.com/v1/images/search?has_breeds=1`

  

---

## 📂 Project Structure
