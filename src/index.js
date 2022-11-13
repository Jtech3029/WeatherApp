import { getWeather } from "./getWeather.js";

const changeWeatherDisplay = (weather) => {
  let windMeasurement;
  if (currentDegrees == "imperial") {
    windMeasurement = "mph";
  } 
  else if (currentDegrees == "metric") {
    windMeasurement = "kph";
  }
  const location = document.getElementById("weather-info-location");
  location.innerText = `${weather.name}, ${weather.country}`;

  const temperature = document.getElementById("weather-info-temperature");
  temperature.innerText = Math.round(weather.temperature) + "°F";

  const sky = document.getElementById("weather-info-sky");
  sky.innerText = weather.weather;

  const wind = document.getElementById("weather-info-wind");
  wind.innerText = `${weather.wind} ${windMeasurement}`;
};

const weatherSubmitted = () => {
  getWeather(input.value, currentDegrees)
    .then(changeWeatherDisplay)
    .catch((x) => alert(x));
  input.value = "";
};

let currentDegrees = "imperial";
getWeather("riverton", currentDegrees)
  .then(changeWeatherDisplay)
  .catch((x) => alert(x));

const input = document.getElementById("input-field");

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    weatherSubmitted();
  }
});
