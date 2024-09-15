function updateCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInput.value;
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
