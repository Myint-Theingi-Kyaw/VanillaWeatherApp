function formatDate(date) {
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    let dayIndex = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[dayIndex];
  
    return `${day} ${hours}:${minutes}`;
  }
  
  function showCityName(event) {
    event.preventDefault();
    let mainCity = document.querySelector("#city-name");
    let cityInput = document.querySelector("#input-city");
    mainCity.innerHTML = cityInput.value;
  }
  
  let cityname = document.querySelector("#city-form");
  cityname.addEventListener("submit", showCityName);
  
  function convertToFahrenheit(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temp");
    temperatureElement.innerHTML = 66;
  }
  
  function convertToCelsius(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temp");
    temperatureElement.innerHTML = 19;
  }
  
  // Feature #1
  let dateElement = document.querySelector("#date");
  let currentTime = new Date();
  dateElement.innerHTML = formatDate(currentTime);
  
  // Bonus Feature
  let fahrenheitLink = document.querySelector("#flink");
  fahrenheitLink.addEventListener("click", convertToFahrenheit);
  
  let celsiusLink = document.querySelector("#clink");
  celsiusLink.addEventListener("click", convertToCelsius);
  