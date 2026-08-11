# 📸 Preview

<img src="https://socialify.git.ci/Samukelokhathi/weather-app-react-ts/image?description=1&font=JetBrains+Mono&language=0&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI%2BCiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8%2BCiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8%2BCiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8%2BCiAgPC9nPgo8L3N2Zz4K&owner=0&pattern=Circuit+Board&pulls=1&stargazers=1&theme=Auto" alt="weather-app-react-ts" width="640" height="320" />
# 🌤️ SkyCast — Weather App React-Task-4

A modern, responsive weather application that lets users check current conditions and forecasts for their location or any city they search for. This project was built to practice consuming third-party APIs, managing asynchronous state, and persisting data with `localStorage` in a React + TypeScript environment.

## 🚀 Getting Started

Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

Navigate into the project

```bash
cd YOUR_REPO_NAME
```

Install dependencies

```bash
npm install
```

Add your API key

Create a `.env` file in the project root and add your [Visual Crossing](https://www.visualcrossing.com/) API key:

```
VITE_APP_WEATHER_KEY=your_api_key_here
```

Start the development server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

## ✨ Features

* 🔍 Search weather for any city
* 📍 Detect and display weather for the user's current location (with permission)
* 🌡️ View current temperature, humidity, and wind speed
* 📅 Toggle between hourly and daily forecasts
* ⭐ Save multiple locations and switch between them
* 🗑️ Remove saved locations
* 💾 Locations persisted using `localStorage`
* ⚠️ Friendly error handling for invalid searches and failed requests
* 📱 Fully responsive design across mobile, tablet, and desktop breakpoints

## 🛠️ Technologies Used

* React
* TypeScript
* Vite
* Tailwind CSS
* Visual Crossing Weather API

## 📚 What I Learned

During this project I practiced:

* Fetching and mapping data from a third-party REST API
* Structuring API logic separately from UI components (`services/`)
* Managing async state with `useState` and `useEffect`
* Handling loading, error, and empty states gracefully
* Persisting and syncing data with `localStorage`
* Building reusable, prop-driven React components
* Writing and reusing TypeScript interfaces for API data
* Creating responsive layouts with Tailwind CSS
* Structuring a React + TypeScript project for readability and scale

## 🔗 Documents Links

* 🔗 Live Site:https://weather-app-seven-lemon-34.vercel.app/
* 🔗 GitHub Repository:https://github.com/Samukelokhathi/weather-app-react-ts
