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
var storedCities = document.getElementById("storedCities");
var currentWeatherCard = document.getElementById("currentWeather");
var currentTempDisplay = document.getElementById("temp");
var currentWindDisplay = document.getElementById("windSpeed");
var currentHumidityDisplay = document.getElementById("humidity");
var currentUVIndexDisplay = document.getElementById("uvIndex");
//
var forecastDisplay = document.getElementById("fiveDayForecastCard");
//
var forecastOne = document.getElementById("cardOne");
var tempOne = document.getElementById("tempOne");
var windOne = document.getElementById("windOne");
var humOne = document.getElementById("humOne");
//
var forecastTwo = document.getElementById("cardTwo");
var tempTwo = document.getElementById("tempTwo");
var windTwo = document.getElementById("windTwo");
var humTwo = document.getElementById("humTwo");
//
var forecastThree = document.getElementById("cardThree");
var tempThree = document.getElementById("tempThree");
var windThree = document.getElementById("windThree");
var humThree = document.getElementById("humThree");
//
var forecastFour = document.getElementById("cardFour");
var tempFour = document.getElementById("tempFour");
var windFour = document.getElementById("windFour");
var humFour = document.getElementById("humFour");
//
var forecastFive = document.getElementById("cardFive");
var tempFive = document.getElementById("tempFive");
var windFive = document.getElementById("windFive");
var humFive = document.getElementById("humFive");
//
//MASTER FUNCTION: ===================================================================

//SECONDARY FUNCTIONS: ===============================================================

function displayCurrentWeather() {
  //call out to OpenWeather
  //find current weather conditions
  //display current temp in currentTempDisplay
  //display current wind speed in currentWindDisplay
  //display current humidity in currentHumidityDisplay
  //display current UV Index in currentUVIndexDisplay
  //add a CSS class to currentUVIndexDisplay to indicate if conditions are favorable, moderate, or severe
  var requestURL = "http://api.openweathermap.org/data/2.5/weather?q=";
  var endPoint = citySearch.value;
  $.ajax({
    url:
      requestURL +
      endPoint +
      "&units=imperial&appid=ed004405d4f3def62ed5a19907c40193",
    method: "GET",
  }).then(function (response) {
    console.log(response);
    currentTempDisplay.textContent = "Temperature: " + response.main.temp;
    currentWindDisplay.textContent = "Wind Speed: " + response.wind.speed;
    currentHumidityDisplay.textContent = "Humidity: " + response.main.humidity;
  });
}

function displayFiveDay() {
  //find five day forecast
  //display forecastOne
  //display forecastTwo
  //display forecastThree
  //display forecastFour
  //display forecastFive
  var requestURL = "https://api.openweathermap.org/data/2.5/forecast?q=";

  var endPoint = citySearch.value;
  $.ajax({
    url:
      requestURL +
      endPoint +
      "&units=imperial&appid=ed004405d4f3def62ed5a19907c40193",
    method: "GET",
  }).then(function (response) {
    console.log(response);
    //Card One
    tempOne.textContent = "Temperature: " + response.list[0].main.temp;
    windOne.textContent = "Wind Speed: " + response.list[0].wind.speed;
    humOne.textContent = "Humidity: " + response.list[0].main.humidity;
    //Card Two
    tempTwo.textContent = "Temperature: " + response.list[8].main.temp;
    windTwo.textContent = "Wind Speed: " + response.list[8].wind.speed;
    humTwo.textContent = "Humidity: " + response.list[8].main.humidity;
    //Card Three
    tempThree.textContent = "Temperature: " + response.list[16].main.temp;
    windThree.textContent = "Wind Speed: " + response.list[16].wind.speed;
    humThree.textContent = "Humidity: " + response.list[16].main.humidity;
    //Card Four
    tempFour.textContent = "Temperature: " + response.list[24].main.temp;
    windFour.textContent = "Wind Speed: " + response.list[24].wind.speed;
    humFour.textContent = "Humidity: " + response.list[24].main.humidity;
    //Card Five
    tempFive.textContent = "Temperature: " + response.list[32].main.temp;
    windFive.textContent = "Wind Speed: " + response.list[32].wind.speed;
    humFive.textContent = "Humidity: " + response.list[32].main.humidity;
  });
}

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  var save = citySearch.value;
  localStorage.setItem("Last Search", save);
  var lastSave = localStorage.getItem("Last Search", save);
  storedCities.textContent = lastSave;
  displayCurrentWeather();
  displayFiveDay();
});
