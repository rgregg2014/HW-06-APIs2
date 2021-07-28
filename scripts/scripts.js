//local storage
//autocomplete
//search function
// pulling data from a server-side API based on user input in search function
// open weather api (openweathermap.org)
//Use fetch requests to grab weather data

// PSEUDOCODE: =====================================================================
/* 
    As a user, want to be able to access up-to-date weather information. I want to be able to search for a city and get the current weather conditions, as well as a five-day forecast. I want my searches to be stored in local storage and displayed on the page for ease of access.

*/

// VARIABLES AND DEPENDENCIES: ========================================================
var submitButton = document.getElementById("submitButton");
var citySearch = document.getElementById("searchField");
var pastSearches = document.getElementsByClassName("pastSearches");
var currentWeatherCard = document.getElementById("currentWeather");
var currentTempDisplay = document.getElementById("temp");
var currentWindDisplay = document.getElementById("windSpeed");
var currentHumidityDisplay = document.getElementById("humidity");
var currentUVIndexDisplay = document.getElementById("uvIndex");
var forecastDisplay = document.getElementById("fiveDayForecastCard");
var forecastOne = document.getElementById("cardOne");
var forecastTwo = document.getElementById("cardTwo");
var forecastThree = document.getElementById("cardThree");
var forecastFour = document.getElementById("cardFour");
var forecastFive = document.getElementById("cardFive");
//MASTER FUNCTION: ===================================================================

function handleSubmit() {
  displayCurrentWeather();
  displayFiveDay();
  saveSubmits();
}

//SECONDARY FUNCTIONS: ===============================================================

function displayCurrentWeather() {
  var requestURL =
    "http://api.openweathermap.org/data/2.5/weather?q=Buffalo&units=imperial&appid=ed004405d4f3def62ed5a19907c40193";
  $.ajax({
    url: requestURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    currentTempDisplay.textContent = "Temperature: " + response.main.temp;
    currentWindDisplay.textContent = "Wind Speed: " + response.wind.speed;
    currentHumidityDisplay.textContent = "Humidity: " + response.main.humidity;
  });
  //call out to OpenWeather
  //find current weather conditions
  //display current temp in currentTempDisplay
  //display current wind speed in currentWindDisplay
  //display current humidity in currentHumidityDisplay
  //display current UV Index in currentUVIndexDisplay
  //add a CSS class to currentUVIndexDisplay to indicate if conditions are favorable, moderate, or severe
}

function displayFiveDay() {
  var requestURL =
    "http://api.openweathermap.org/data/2.5/forecast/daily?q=Buffalo&units=imerial&appid=f90e9468c596a367974d37f7914bbc30";
  $.ajax({
    url: requestURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
  });
  //find five day forecast
  //display forecastOne
  //display forecastTwo
  //display forecastThree
  //display forecastFour
  //display forecastFive
}

function saveSubmits(event) {
  event.preventDefault();
  var save = citySearch.value;
  localStorage.setItem("Last Search", save);
  //store submission in local storage
  //display local storage in pastSearches
}

// BUTTONS: ===========================================================================

submitButton.addEventListener("click", handleSubmit());
