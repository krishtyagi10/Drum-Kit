const searchButton = document.getElementById('search-button');
const cityInput = document.getElementById('city-input');
const weatherInfo = document.getElementById('weather-info');

const apiKey = 'your-openweathermap-api-key';

searchButton.addEventListener('click', () => {
  const cityName = cityInput.value.trim();
  if (cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        const temp = data.main.temp - 273.15; // Convert from Kelvin to Celsius
        const description = data.weather[0].description;
        weatherInfo.innerHTML = `<h2>${cityName}</h2><p>Temperature: ${temp.toFixed(1)}°C</p><p>Description: ${description}</p>`;
      })
      .catch(error => {
        console.error(error);
        weatherInfo.innerHTML = '<p>Error: City not found.</p>';
      });
  }
});