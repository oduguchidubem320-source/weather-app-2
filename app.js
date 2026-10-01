async function getWeather() {
  let city = "enugu";
  const degree = document.querySelector(".temp-value")
  const percip = document.querySelector(".percip")
  const wind_speed = document.querySelector(".wind-speed")
  const humidity_value = document.querySelector(".humidity")
  const temp_icon = document.querySelector(".temp-icon")
  const temp_condition = document.querySelector(".temp-condition")
  const date_time = document.querySelector(".date-time")
  const location_name = document.querySelector(".location-name")
  // let city = document.getElementById("cityInput").value.trim();
  // const resultDiv = document.getElementById("weatherResult");

  // if (!city) {
  //   // resultDiv.textContent = "Please enter a city name.";
  //   // return;
  //   city = "enugu"
  // }

  const apiKey = "62c0644ed7734b25980141008261407";
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(city)}&day_fields=wind_mph`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      throw new Error(data.error.message);
    }

    const { name, country, localtime, } = data.location;
    const { temp_c, humidity , condition , wind_kph, precip_mm,  } = data.current;
    
    const formattedDate = new Date(localtime).toLocaleString("en-NG", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit"
});
date_time.textContent = formattedDate;

  
    console.log(typeof precip_mm)

    degree.textContent = temp_c
    humidity_value.textContent = humidity
    wind_speed.textContent = wind_kph
    location_name.textContent = name
    percip.textContent = (parseFloat(precip_mm)*100).toFixed(1)
    
    temp_condition.textContent = condition.text
    temp_icon.innerHTML = `<img src="${condition.icon}" alt="weather icon" />`
  } catch (error) {
    console.error(error)
    // resultDiv.textContent = "Error: " + error.message;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  getWeather()
});
    const menuIcon = document.querySelector('.menu-icon');
    const dropdown = document.querySelector('.dropdown-menu');

    menuIcon.addEventListener('click', () => {
      if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'block';
      } else {
        dropdown.style.display = 'none';
      }
    });
