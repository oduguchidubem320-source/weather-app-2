async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const resultDiv = document.getElementById("weatherResult");

  if (!city) {
    resultDiv.textContent = "Please enter a city name.";
    return;
  }

  const apiKey = "62c0644ed7734b25980141008261407"; // Your WeatherAPI.com key
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(city)}&aqi=no`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      throw new Error(data.error.message);
    }

    const { name, country } = data.location;
    const { temp_c, humidity, condition } = data.current;

    resultDiv.innerHTML = `
      <p><strong>${name}, ${country}</strong></p>      
      <p> Temperature: ${temp_c}°C</p>
      <p> Humidity: ${humidity}%</p>
      <p> Condition: ${condition.text}</p>
    `;
  } catch (error) {
    resultDiv.textContent = "Error: " + error.message;
  }
}

  const menuIcon = document.querySelector('.menu-icon');
  const dropdown = document.querySelector('.dropdown-menu');

  menuIcon.addEventListener('click', () => {
    dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
  });

