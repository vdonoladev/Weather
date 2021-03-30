/* 
======================================================
00. Global variables
01. Geolocation Event Listener
02. Api GET Request
03. Other functions
====================================================== 
*/

// *  00. Global variables *

  // Current location (A) variables
  let currentForecast__CurrentLocation = document.querySelector(".current-location__name");
  let currentForecast__CurrentDate = document.querySelector(".current-location__date");

  // Current weather (B) variables
  let currentForecast__CurrentTemp  = document.querySelector(".current-temp__value");
  let currentForecast__CurrentTempDescription = document.querySelector(".current-temp__description");

  // Daily forecast (C) variables
  let dailyForecast__MaxTemp = document.querySelector(".daily-stats__max-temp");
  let dailyForecast__MinTemp = document.querySelector(".daily-stats__min-temp");
  let dailyForecast__RainChance = document.querySelector(".daily-stats__rain-chance");
  let dailyForecast__HumidityPercentage = document.querySelector(".daily-stats__humidity-percentage");
  let dailyForecast__SunriseTime = document.querySelector(".daily-stats__sunrise-time");
  let dailyForecast__SunsetTime = document.querySelector(".daily-stats__sunset-time");

  // Hourly forecast (D) variables
  let hourlyForecast__Hour1_Name = document.querySelector(".hourly-forecast__next-1-hour--name");
  let hourlyForecast__Hour1_Temperature = document.querySelector(".hourly-forecast__next-1-hour--temps");
  let hourlyForecast__Hour4_Name = document.querySelector(".hourly-forecast__next-4-hour--name");
  let hourlyForecast__Hour4_Temperature = document.querySelector(".hourly-forecast__next-4-hour--temps");
  let hourlyForecast__Hour7_Name = document.querySelector(".hourly-forecast__next-7-hour--name");
  let hourlyForecast__Hour7_Temperature = document.querySelector(".hourly-forecast__next-7-hour--temps");
  let hourlyForecast__Hour10_Name = document.querySelector(".hourly-forecast__next-10-hour--name");
  let hourlyForecast__Hour10_Temperature = document.querySelector(".hourly-forecast__next-10-hour--temps");
  let hourlyForecast__Hour13_Name = document.querySelector(".hourly-forecast__next-13-hour--name");
  let hourlyForecast__Hour13_Temperature = document.querySelector(".hourly-forecast__next-13-hour--temps");
  let hourlyForecast__Hour16_Name = document.querySelector(".hourly-forecast__next-16-hour--name");
  let hourlyForecast__Hour16_Temperature = document.querySelector(".hourly-forecast__next-16-hour--temps");
  let hourlyForecast__Hour19_Name = document.querySelector(".hourly-forecast__next-19-hour--name");
  let hourlyForecast__Hour19_Temperature = document.querySelector(".hourly-forecast__next-19-hour--temps");

  // Three days forecast (E) variables
  // ** Day 1/3 **
  let threeDaysForecast__FirstDay_Name = document.querySelector(".next-3-days-forecast__next-1-day--name");
  let threeDaysForecast__FirstDay_MinTemperature = document.querySelector(".next-3-days-forecast__next-1-day--min-temp");
  let threeDaysForecast__FirstDay_MaxTemperature = document.querySelector(".next-3-days-forecast__next-1-day--max-temp");
  // ** Day 2/3 **
  let threeDaysForecast__SecondDay_Name = document.querySelector(".next-3-days-forecast__next-2-day--name");
  let threeDaysForecast__SecondDay_MinTemperature = document.querySelector(".next-3-days-forecast__next-2-day--min-temp");
  let threeDaysForecast__SecondDay_MaxTemperature = document.querySelector(".next-3-days-forecast__next-2-day--max-temp");
  // ** Day 3/3 **
  let threeDaysForecast__ThirdDay_Name = document.querySelector(".next-3-days-forecast__next-3-day--name");
  let threeDaysForecast__ThirdDay_MinTemperature = document.querySelector(".next-3-days-forecast__next-3-day--min-temp");
  let threeDaysForecast__ThirdDay_MaxTemperature = document.querySelector(".next-3-days-forecast__next-3-day--max-temp");

  // Five days forecast (F) variables
  // ** Day 1/5 **
  let fiveDaysForecast__FirstDay_Name = document.querySelector(".next-5-days-forecast__next-1-day--name");
  let fiveDaysForecast__FirstDay_Date = document.querySelector(".next-5-days-forecast__next-1-day--date");
  let fiveDaysForecast__FirstDay_MaxTemperature = document.querySelector(".next-5-days-forecast__next-1-day--max-temp");
  let fiveDaysForecast__FirstDay_MinTemperature = document.querySelector(".next-5-days-forecast__next-1-day--min-temp");
  let fiveDaysForecast__FirstDay_HumidityPercentage = document.querySelector(".next-5-days-forecast__next-1-day--humidity-percentage");
  let fiveDaysForecast__FirstDay_RainChance = document.querySelector(".next-5-days-forecast__next-1-day--rain-chance");
  // ** Day 2/5 **
  let fiveDaysForecast__SecondDay_Name = document.querySelector(".next-5-days-forecast__next-2-day--name");
  let fiveDaysForecast__SecondDay_Date = document.querySelector(".next-5-days-forecast__next-2-day--date");
  let fiveDaysForecast__SecondDay_MaxTemperature = document.querySelector(".next-5-days-forecast__next-2-day--max-temp");
  let fiveDaysForecast__SecondDay_MinTemperature = document.querySelector(".next-5-days-forecast__next-2-day--min-temp");
  let fiveDaysForecast__SecondDay_HumidityPercentage = document.querySelector(".next-5-days-forecast__next-2-day--humidity-percentage");
  let fiveDaysForecast__SecondDay_RainChance = document.querySelector(".next-5-days-forecast__next-2-day--rain-chance");
  // ** Day 3/5 **
  let fiveDaysForecast__ThirdDay_Name = document.querySelector(".next-5-days-forecast__next-3-day--name");
  let fiveDaysForecast__ThirdDay_Date = document.querySelector(".next-5-days-forecast__next-3-day--date");
  let fiveDaysForecast__ThirdDay_MaxTemperature = document.querySelector(".next-5-days-forecast__next-3-day--max-temp");
  let fiveDaysForecast__ThirdDay_MinTemperature = document.querySelector(".next-5-days-forecast__next-3-day--min-temp");
  let fiveDaysForecast__ThirdDay_HumidityPercentage = document.querySelector(".next-5-days-forecast__next-3-day--humidity-percentage");
  let fiveDaysForecast__ThirdDay_RainChance = document.querySelector(".next-5-days-forecast__next-3-day--rain-chance");
  // ** Day 4/5 **
  let fiveDaysForecast__FourthDay_Name = document.querySelector(".next-5-days-forecast__next-4-day--name");
  let fiveDaysForecast__FourthDay_Date = document.querySelector(".next-5-days-forecast__next-4-day--date");
  let fiveDaysForecast__FourthDay_MaxTemperature = document.querySelector(".next-5-days-forecast__next-4-day--max-temp");
  let fiveDaysForecast__FourthDay_MinTemperature = document.querySelector(".next-5-days-forecast__next-4-day--min-temp");
  let fiveDaysForecast__FourthDay_HumidityPercentage = document.querySelector(".next-5-days-forecast__next-4-day--humidity-percentage");
  let fiveDaysForecast__FourthDay_RainChance = document.querySelector(".next-5-days-forecast__next-4-day--rain-chance");
  // ** Day 5/5 **
  let fiveDaysForecast__FifthDay_Name = document.querySelector(".next-5-days-forecast__next-5-day--name");
  let fiveDaysForecast__FifthDay_Date = document.querySelector(".next-5-days-forecast__next-5-day--date");
  let fiveDaysForecast__FifthDay_MaxTemperature = document.querySelector(".next-5-days-forecast__next-5-day--max-temp");
  let fiveDaysForecast__FifthDay_MinTemperature = document.querySelector(".next-5-days-forecast__next-5-day--min-temp");
  let fiveDaysForecast__FifthDay_HumidityPercentage = document.querySelector(".next-5-days-forecast__next-5-day--humidity-percentage");
  let fiveDaysForecast__FifthDay_RainChance = document.querySelector(".next-5-days-forecast__next-5-day--rain-chance");

  // Weather elements variable
  let weatherIcons = document.getElementsByClassName("weather-icon");

  // Location variables
  let long;
  let lat;

// 01. Geolocation Event Listener
window.addEventListener('load', ()=> {
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat  = position.coords.latitude;
      ApiGETRequest();
    }
  )}
})

// 02. Api GET Request
function ApiGETRequest() {
  // Apis URL
  const owm_location_api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=a7945e759b4784693427e59a9911052a`;
  const owm_weather_api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=a7945e759b4784693427e59a9911052a`;
  
  // ## Fetch Location Api ##
  fetch(owm_location_api)
    // ## Extract the JSON body content from the response and parse it ##
    .then(response => {
      return response.json();
    })
    // ## Store and display values from JSON data ##
    .then(data => {
      // A) Current location and date
      // ## Display data ##
      currentForecast__CurrentLocation.textContent = data.name;
      currentForecast__CurrentDate.textContent = convertUnixTimeStampToHourAndMinute(data.dt) + " " + convertUnixTimeStampToDayMonth(data.dt);
    });

  // ## Fetch Weather Api ##
  fetch(owm_weather_api)
    // ## Extract the JSON body content from the response and parse it  ##
    .then(response => {
      return response.json();
    })
    // ## Store and display values from JSON data ##
    .then(data => {
      // B) Current temperature values
      // ## Display data ##
      currentForecast__CurrentTemp.textContent = parseInt(data.current.temp) + '°';
      currentForecast__CurrentTempDescription.textContent = data.current.weather[0].description.toUpperCase();


      // C) Daily stats values
      // ## Display data ##
      dailyForecast__MaxTemp.textContent = parseInt(data.daily[0].temp.max) + '°';
      dailyForecast__MinTemp.textContent = parseInt(data.daily[0].temp.min) + '°';
      dailyForecast__HumidityPercentage.textContent = parseInt(data.daily[0].pop) + "%";
      dailyForecast__RainChance.textContent = parseInt(data.current.humidity) + "%";
      dailyForecast__SunriseTime.textContent = convertUnixTimeStampToHourAndMinute(data.current.sunrise);
      dailyForecast__SunsetTime.textContent = convertUnixTimeStampToHourAndMinute(data.current.sunset);


      // D) Hourly forecast values
      // ## Display data ##
      hourlyForecast__Hour1_Name.textContent =  convertUnixTimeStampToHourAndMinute(data.hourly[1].dt);
      hourlyForecast__Hour1_Temperature.textContent = parseInt(data.hourly[1].temp) + '°';
      hourlyForecast__Hour4_Name.textContent = convertUnixTimeStampToHourAndMinute(data.hourly[4].dt);
      hourlyForecast__Hour4_Temperature.textContent = parseInt(data.hourly[4].temp) + '°';
      hourlyForecast__Hour7_Name.textContent = convertUnixTimeStampToHourAndMinute(data.hourly[7].dt);
      hourlyForecast__Hour7_Temperature.textContent = parseInt(data.hourly[7].temp) + '°';
      hourlyForecast__Hour10_Name.textContent = convertUnixTimeStampToHourAndMinute(data.hourly[10].dt);
      hourlyForecast__Hour10_Temperature.textContent = parseInt(data.hourly[10].temp) + '°';
      hourlyForecast__Hour13_Name.textContent = convertUnixTimeStampToHourAndMinute(data.hourly[13].dt);
      hourlyForecast__Hour13_Temperature.textContent = parseInt(data.hourly[13].temp) + '°';
      hourlyForecast__Hour16_Name.textContent = convertUnixTimeStampToHourAndMinute(data.hourly[16].dt);
      hourlyForecast__Hour16_Temperature.textContent = parseInt(data.hourly[16].temp) + '°';
      hourlyForecast__Hour19_Name.textContent = convertUnixTimeStampToHourAndMinute(data.hourly[19].dt);
      hourlyForecast__Hour19_Temperature.textContent = parseInt(data.hourly[19].temp) + '°';


      // E) Next three days forecast values      
      // ## Display data ##
      // ** Day (1/3) **
      threeDaysForecast__FirstDay_Name.textContent = convertUnixTimeStampToDayString(data.daily[1].dt);
      threeDaysForecast__FirstDay_MinTemperature.textContent = parseInt(data.daily[1].temp.min) + '°';
      threeDaysForecast__FirstDay_MaxTemperature.textContent = parseInt(data.daily[1].temp.max) + '°';
      // ** Day (2/3) **
      threeDaysForecast__SecondDay_Name.textContent = convertUnixTimeStampToDayString(data.daily[2].dt);
      threeDaysForecast__SecondDay_MinTemperature.textContent = parseInt(data.daily[2].temp.min) + '°';
      threeDaysForecast__SecondDay_MaxTemperature.textContent = parseInt(data.daily[2].temp.max) + '°';
      // ** Day (3/3) **
      threeDaysForecast__ThirdDay_Name.textContent = convertUnixTimeStampToDayString(data.daily[3].dt);
      threeDaysForecast__ThirdDay_MinTemperature.textContent = parseInt(data.daily[3].temp.min) + '°';
      threeDaysForecast__ThirdDay_MaxTemperature.textContent = parseInt(data.daily[3].temp.max) + '°';

      // F) Next five days forecast values
      // ## Display data ##
      // ** Day (1/5) **
      fiveDaysForecast__FirstDay_Name.textContent = convertUnixTimeStampToDayString(data.daily[1].dt);
      fiveDaysForecast__FirstDay_Date.textContent = convertUnixTimeStampToDayMonth(data.daily[1].dt);
      fiveDaysForecast__FirstDay_MaxTemperature.textContent = parseInt(data.daily[1].temp.max) + '°';
      fiveDaysForecast__FirstDay_MinTemperature.textContent = parseInt(data.daily[1].temp.min) + '°';
      fiveDaysForecast__FirstDay_HumidityPercentage.textContent = parseInt(data.daily[1].humidity) + '%';
      fiveDaysForecast__FirstDay_RainChance.textContent = parseInt(data.daily[1].pop*100) + '%';
      // ** Day (2/5) **
      fiveDaysForecast__SecondDay_Name.textContent = convertUnixTimeStampToDayString(data.daily[2].dt);
      fiveDaysForecast__SecondDay_Date.textContent = convertUnixTimeStampToDayMonth(data.daily[2].dt);
      fiveDaysForecast__SecondDay_MaxTemperature.textContent = parseInt(data.daily[2].temp.max) + '°';
      fiveDaysForecast__SecondDay_MinTemperature.textContent = parseInt(data.daily[2].temp.min) + '°';
      fiveDaysForecast__SecondDay_HumidityPercentage.textContent = parseInt(data.daily[2].humidity) + '%';
      fiveDaysForecast__SecondDay_RainChance.textContent = parseInt(data.daily[2].pop*100) + '%';
      // ** Day (3/5) **
      fiveDaysForecast__ThirdDay_Name.textContent = convertUnixTimeStampToDayString(data.daily[3].dt);
      fiveDaysForecast__ThirdDay_Date.textContent = convertUnixTimeStampToDayMonth(data.daily[3].dt);
      fiveDaysForecast__ThirdDay_MaxTemperature.textContent = parseInt(data.daily[3].temp.max) + '°';
      fiveDaysForecast__ThirdDay_MinTemperature.textContent = parseInt(data.daily[3].temp.min) + '°';
      fiveDaysForecast__ThirdDay_HumidityPercentage.textContent = parseInt(data.daily[3].humidity) + '%';
      fiveDaysForecast__ThirdDay_RainChance.textContent = parseInt(data.daily[3].pop*100) + '%';
      // ** Day (4/5) **
      fiveDaysForecast__FourthDay_Name.textContent = convertUnixTimeStampToDayString(data.daily[4].dt);
      fiveDaysForecast__FourthDay_Date.textContent = convertUnixTimeStampToDayMonth(data.daily[4].dt);
      fiveDaysForecast__FourthDay_MaxTemperature.textContent = parseInt(data.daily[4].temp.max) + '°';
      fiveDaysForecast__FourthDay_MinTemperature.textContent = parseInt(data.daily[4].temp.min) + '°';
      fiveDaysForecast__FourthDay_HumidityPercentage.textContent = parseInt(data.daily[4].humidity) + '%';
      fiveDaysForecast__FourthDay_RainChance.textContent = parseInt(data.daily[4].pop*100) + '%';
      // ** Day (5/5) **
      fiveDaysForecast__FifthDay_Name.textContent = convertUnixTimeStampToDayString(data.daily[5].dt);
      fiveDaysForecast__FifthDay_Date.textContent = convertUnixTimeStampToDayMonth(data.daily[5].dt);
      fiveDaysForecast__FifthDay_MaxTemperature.textContent = parseInt(data.daily[5].temp.max) + '°';
      fiveDaysForecast__FifthDay_MinTemperature.textContent = parseInt(data.daily[5].temp.min) + '°';
      fiveDaysForecast__FifthDay_HumidityPercentage.textContent = parseInt(data.daily[5].humidity) + '%';
      fiveDaysForecast__FifthDay_RainChance.textContent = parseInt(data.daily[5].pop*100) + '%';

      // ## Icons ##
      // ## Change the icon based on the URL code ##
      // Current weather icon
      document.getElementById("current-temp__icon").src = `https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`;

      // Hourly weather icon
      document.getElementById("hourly-forecast__icon-1").src = `https://openweathermap.org/img/wn/${data.hourly[1].weather[0].icon}.png`;
      document.getElementById("hourly-forecast__icon-4").src = `https://openweathermap.org/img/wn/${data.hourly[4].weather[0].icon}.png`;
      document.getElementById("hourly-forecast__icon-7").src = `https://openweathermap.org/img/wn/${data.hourly[7].weather[0].icon}.png`;
      document.getElementById("hourly-forecast__icon-10").src = `https://openweathermap.org/img/wn/${data.hourly[10].weather[0].icon}.png`;
      document.getElementById("hourly-forecast__icon-13").src = `https://openweathermap.org/img/wn/${data.hourly[13].weather[0].icon}.png`;
      document.getElementById("hourly-forecast__icon-16").src = `https://openweathermap.org/img/wn/${data.hourly[16].weather[0].icon}.png`;
      document.getElementById("hourly-forecast__icon-19").src = `https://openweathermap.org/img/wn/${data.hourly[19].weather[0].icon}.png`;

      // Next three days weather icon
      document.getElementById("next-3-days-forecast__icon-1").src = `https://openweathermap.org/img/wn/${data.daily[1].weather[0].icon}@2x.png`;
      document.getElementById("next-3-days-forecast__icon-2").src = `https://openweathermap.org/img/wn/${data.daily[2].weather[0].icon}@2x.png`;
      document.getElementById("next-3-days-forecast__icon-3").src = `https://openweathermap.org/img/wn/${data.daily[3].weather[0].icon}@2x.png`;

      // Next five days weather icon
      document.getElementById("next-5-days-forecast__icon-1").src = `https://openweathermap.org/img/wn/${data.daily[1].weather[0].icon}.png`;
      document.getElementById("next-5-days-forecast__icon-2").src = `https://openweathermap.org/img/wn/${data.daily[2].weather[0].icon}.png`;
      document.getElementById("next-5-days-forecast__icon-3").src = `https://openweathermap.org/img/wn/${data.daily[3].weather[0].icon}.png`;
      document.getElementById("next-5-days-forecast__icon-4").src = `https://openweathermap.org/img/wn/${data.daily[4].weather[0].icon}.png`;
      document.getElementById("next-5-days-forecast__icon-5").src = `https://openweathermap.org/img/wn/${data.daily[5].weather[0].icon}.png`;

      // Remove rotating animation on loading icons
      removeClass();
      // Test
      // console.log(data);
    });
}

// *  03. Other functions *

// This function converts unix timestamps to a (hh:mm) hour format 
function convertUnixTimeStampToHourAndMinute(timestamp) {
  let unix_timestamp = timestamp;
  // Create a new JavaScript Date object based on the timestamp
  // Multiplied by 1000 so that the argument is in milliseconds, not seconds.
  let date = new Date(unix_timestamp * 1000);
  // Hours part from the timestamp
  let hours = date.getHours();
  // Minutes part from the timestamp
  let minutes = "0" + date.getMinutes();
  // Display time
  let formattedTime = hours + ':' + minutes.substr(-2);
  // console.log(formattedTime);
  return formattedTime;
}

// This function converts unix timestamps to a Number (dd/mm) date format 
function convertUnixTimeStampToDayMonth(timestamp) {
  let unix_timestamp = timestamp;
  // Create a new JavaScript Date object based on the timestamp
  // Multiplied by 1000 so that the argument is in milliseconds, not seconds.
  let date = new Date(unix_timestamp * 1000);
  // Day of the month part from the timestamp
  let day = date.getDate();
  // Month part from the timestamp
  let month = date.getMonth();
  // Display time
  let formattedTime = day + "/" + (month + 1);
  // console.log(formattedTime);
  return formattedTime;
}

// This function converts unix timestamps to a String ("Mon") date format 
function convertUnixTimeStampToDayString(timestamp) {
  let unix_timestamp = timestamp;
  // Create a new JavaScript Date object based on the timestamp
  // Multiplied by 1000 so that the argument is in milliseconds, not seconds.
  let date = new Date(unix_timestamp * 1000);
  // Day part from the timestamp
  let day = date.getDay();
  // Return the name of the weekday instead of [number]
  let weekday = new Array(7);
  weekday[0] = "Sun";
  weekday[1] = "Mon";
  weekday[2] = "Tue";
  weekday[3] = "Wed";
  weekday[4] = "Thu";
  weekday[5] = "Fri";
  weekday[6] = "Sat";
  // Display weekday[i] name
  let formattedTime = weekday[day];
  // console.log(formattedTime);
  return formattedTime;
}

// This function will remove the rotate class from the loading icons
function removeClass() {
  for (var i = 0; i < weatherIcons.length; i++) {
    weatherIcons[i].classList.remove("rotate");
  }
}
