Weather Dashboard

A simple weather dashboard built with Vite and React that fetches weather data from OpenWeather API.

Features

Search for a city's weather

Toggle between Celsius and Fahrenheit

View current weather conditions

See a 5-day weather forecast

Error handling for invalid cities or network issues

Getting Started

Prerequisites

Make sure you have the following installed:

Node.js (Recommended version: 16 or later)

npm or yarn

Installation

Clone the repository:

git clone https://github.com/your-username/weather-dashboard.git

Navigate to the project directory:

cd weather-dashboard

Install dependencies:

npm install

or

yarn install

Setting Up Environment Variables

Create a .env file in the root of the project and add your OpenWeather API key:

VITE_OPENWEATHER_API_KEY=your_api_key_here
VITE_OPENWEATHER_URL=https://api.openweathermap.org/data/2.5/

Running the Development Server

Start the Vite development server:

npm run dev

or

yarn dev

The app will be available at http://localhost:5173/ by default.
