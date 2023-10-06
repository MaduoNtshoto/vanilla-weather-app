function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = timestamp.getHours();
  let minutes = date.getMinutes();
  let day = date.getDay();
  return "${day} ${hours} ${minutes}";
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
}

function displayTemperature(response) {
  console.log(response);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
}
let apiKey = "1518f0c619a9ace452061737d19b50db";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=Gaborone&appid=1518f0c619a9ace452061737d19b50db&units=metric";

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
