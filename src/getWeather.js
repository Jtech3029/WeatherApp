export async function getWeather(city, units) {
    try {
        let weatherData = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=40019a14b452f826a2ed0fe97af7d6c3&units=${units}`
        );
        weatherData = await weatherData.json();
        let weather = {
          temperature: weatherData.main.temp,
          name: weatherData.name,
          weather: weatherData.weather[0].description,
          country: weatherData.sys.country,
          wind: weatherData.wind.speed,
        };
        return weather;
    } 
    catch (error) {
        throw new Error("not a city!");
    }

}
