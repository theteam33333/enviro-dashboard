// fetch ("https://api.climateclock.world/v1/clock") 
fetch ("https://content.guardianapis.com/search?q=climate%20change&api-key=2b864c12-3fa4-4b07-a5fa-72ff409c8dc3")

  .then (function(res) {
    return res.json();
  })

  .then (function(data) {
    console.log(data);
    var climateClockEl = document.querySelector('.climateClock');
    var webTitle = (data.response.results[0].webTitle);
    var webUrl = (data.response.results[0].webUrl);
    var buttonEl = document.createElement("button");
    var aEl = document.createElement("a");
    aEl.href=webUrl;
    aEl.innerHTML=webTitle;
    console.log(aEl);
    //buttonEl.textContent = aEl;
    climateClockEl.appendChild(aEl);
  });






// Code for Pollution Widget

var pollutionEl = $("#pollution");
// var cityName = 'Toronto';
var currentDate = moment().format("MM/DD/YYYY");
var apiKey='936da452efddec94d3bf53bc5ce3701728278b67 '
var airPollutionUrl = 'https://api.waqi.info/feed/'

function getPollutionData(cityName) {
fetch(airPollutionUrl + cityName + "/?token=" + apiKey)
.then(function(response){
    return response.json();
})
.then(function(pollutionData){
    console.log("pollutionData= ", pollutionData);
    displayPollution(pollutionData);
})
}
function displayPollution(pollutionData){

    // clear out the previous data
    pollutionEl.empty();
    const cityNameEl = $("<div>");
    const aqiEl = $("<div>");
    const airQualityEl = $("<div>");
    const pm25El = $("<div>");
    const pm10El = $("<div>");
    const uviEl = $("<div>");
    const ozoneEl = $("<div>");

    aqi = pollutionData.data.aqi;
    pm25 = pollutionData.data.forecast.daily.pm25[2].avg;
    pm10 = pollutionData.data.forecast.daily.pm10[2].avg;
    uvi = pollutionData.data.forecast.daily.uvi[2].avg;
    ozone = pollutionData.data.forecast.daily.o3[2].avg;

    console.log("pm25=", pm25);
    cityNameEl.text(cityName + " Air Quality");
    if (aqi < 51) {
        airQuality = "Good";
        cityNameEl.addClass("green");
        aqiEl.addClass("green");
        airQualityEl.addClass("green");
    }
    else if (aqi > 50 && aqi < 101) {
        airQuality = "Moderate"
        aqiEl.addClass("yellow");
    }
    else if (aqi > 100 && aqi < 151){
        airQuality = "Unhealthy";
        aqiEl.addClass("orange");
    }
    else if (aqi > 150) {
        airQuality = "Hazardous";
        aqiEl.addClass("red");
    }

    // Fill the data 
    
    aqiEl.text(aqi);
    airQualityEl.text(airQuality);
    pm25El.text("PM2.5 " + pm25);
    pm10El.text("PM10 " + pm10);
    ozoneEl.text("O3 " + ozone);
    uviEl.text("UVI " + uvi);

    //  Append the elements
    pollutionEl.append(cityNameEl);
    pollutionEl.append(aqiEl);
    pollutionEl.append(airQualityEl);
    pollutionEl.append(pm25El);
    pollutionEl.append(pm10El);
    pollutionEl.append(ozoneEl);
    pollutionEl.append(uviEl);

}

// Click the Search button
var searchCityEl = $("#searchCity");

searchCityEl.click(function() {
    var inputEl = $("#cityName");
    cityName = inputEl.val().toUpperCase();
    console.log("City name is = ", cityName);
    getPollutionData(cityName);
})


//  Code for Pollution Widget ends






























































































// Colin -------------------------------------------------------------------------------------------//
// THE JAVASCRIPT CODE FOR THE SEARCH INPUT FORM STARTS HERE-------------------------------------------------------------------------------------------//

$(".default_option").click(function(){
    $(".dropdown ul").addClass("active");
  });
  
  $(".dropdown ul li").click(function(){
    var text = $(this).text();
    $(".default_option").text(text);
    $(".dropdown ul").removeClass("active");
  });



  // Colin -------------------------------------------------------------------------------------------//
//  THE JAVASCRIPT CODE FOR THE SEARCH INPUT FORM ENDS -------------------------------------------------------------------------------------------//