export async function getWeather(city){
    let x = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=40019a14b452f826a2ed0fe97af7d6c3&units=imperial`);
    let y = await x.json();
    console.log(y)
}