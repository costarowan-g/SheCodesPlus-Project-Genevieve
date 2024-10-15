function displayTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = temperature;
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
}

function updateCity(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;

  let apiKey = "ab7t243ba2b8a25f4fb421dc30o50328";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiURL).then(displayTemperature);
}

function updateDate(now) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[now.getDay()];
  let minutes = now.getMinutes();
  let hours = now.getHours();

  let currentDay = document.querySelector("#current-details");
  return `${day} ${hours}:${minutes} moderate rain Humidity 87%, Wind:7.3mk/h`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", updateCity);

let currentDateElement = document.querySelector("#current-details");
let now = new Date();
currentDateElement.innerHTML = updateDate(now);
