<<<<<<< HEAD
=======
// Guardian climate article api start
// Retrieve ten climate change article links from the Guardian api
fetch ("https://content.guardianapis.com/search?q=climate%20change&api-key=2b864c12-3fa4-4b07-a5fa-72ff409c8dc3")
  //Convert to JSON
  .then (function(res) {
    return res.json();
  })
  // Extract article title and url from the dataset
  .then (function(data) {
    console.log("Guardian api data", data);
    var climateArticleEl = document.querySelector('.climateArticles');
    var webTitle = (data.response.results[0].webTitle);
    var webUrl = (data.response.results[0].webUrl);
    //var buttonEl = document.createElement("button");
    var aEl = document.createElement("a");
    aEl.href=webUrl;
    aEl.innerHTML=webTitle;
    climateArticleEl.appendChild(aEl);
  });
// Guardian climate article api finish

>>>>>>> 6b503880bbd8ec94e347d8344d308080f2caeae4
//quiz code start
let containerEl = document.querySelector("#container");
let headerEl = document.querySelector(".header");
let ScoreEl = document.querySelector(".score");
let ContentEl = document.querySelector("#content");
let initialEl = document.querySelector("#initial-screen");
let questionsEl = document.querySelector("#questions");
let choicesEl = document.querySelector("#choices");
let answerEl = document.querySelector("#answer");
let resultEl = document.querySelector("#results");
let highScoreEl = document.querySelector("#highscore");
let scoreListEl = document.querySelector("#scoreList");

let isQuizDone = true;

const greenEmission = [
  {
    question: "Which of the following is a greenhouse gas?",
    choices: { 1: "CARBON DIOXIDE", 2: "METHANE", 3: "WATER VAPOUR", 4: "ALL OF THE ABOVE" },
    answer: "4",
    img: "https://image.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600w-1037719192.jpg"
  },
  {
    question: "Which of the following are consequences associated with climate change?",
    choices: {
      1: "THE ICE SHEETS ARE DECLINING, GLACIERS ARE IN RETREAT GLOBALLY.",
      2: "SURFACE TEMPRATURES ARE SETTING NEW HEAT RECORDS ABOUT EACH YEAR.",
      3: "MORE EXTREME WEATHER LIKE DROUGHTS, HEAT WAVES AND HURRICANES.",
      4: "ALL OF THE ABOVE.",
    },
    answer: "4",
    img: "https://image.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600w-1037719192.jpg"
  },
  {
    question: "Scientists argue that the concentration of greenhouse gases in the atmosphere is:",
    choices: {
      1: "GRADUALLY INCREASING",
      2: "GRADUALLY DECREASING",
      3: "RAPIDLY INCREASING",
      4: "RAPIDLY DECREASING",
    },
    answer: "1",
    img: "https://image.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600w-1037719192.jpg"
  },
  {
    question:
      " Which One of the Following Is Not a Greenhouse Gas?",
    choices: {
      1: "METHANE",
      2: "HYDROGEN",
      3: "NITROUS OXIDE",
      4: "OZONE",
    },
    answer: "2",
    img: "https://image.shutterstock.com/image-vector/landscape-photo-image-picture-placeholder-600w-272872412.jpg"
  },
];

const ozone1 = [
  {
    question: "What do chlorofluorocarbons (CFCs) do?",
    choices: {
      1: "CREATE MORE CARBON DIOXIDE",
      2: "DESTROY OZONE",
      3: "CREATE MORE OXYGEN",
      4: "NONE OF THE ABOVE",
    },
    answer: "2",
    img: "https://image.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600w-1037719192.jpg"
  },
  {
    question: "Where do CFCs come from?",
    choices: {
      1: "BURNING FOSSIL FUELS",
      2: "DEFORESTATION",
      3: "AEROSOLS AND FRIDGES",
      4: "SUN",
    },
    answer: "3",
    img: "https://image.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600w-1037719192.jpg"
  },
  {
    question: "What is an ozone molecule formed from?",
    choices: {
      1: "3 OXYGEN ATOMS",
      2: "3 CARBON DIOXIDE MOLECULES",
      3: "2 OXYGEN ATOMS",
      4: "1 HYDROGEN AND 1 OXYGEN ATOM ",
    },
    answer: "1",
    img: "https://image.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600w-1037719192.jpg"
  },
  {
    question:
      "In which sphere Ozone layer depletion is found?",
    choices: {
      1: "IONOSPHERE",
      2: "STRATOSPHERE",
      3: "LITHOSPHERE",
      4: "NONE OF ABOVE",
    },
    answer: "2",
    img: "https://image.shutterstock.com/image-vector/landscape-photo-image-picture-placeholder-600w-272872412.jpg"
  },
];

const global = [
  {
    question: "How could global warming affect polar regions?",
    choices: { 1: "IT WILL MAKE THEM WARMER", 2: "IT WILL MAKE THEM COLDER", 3: "IT WON'T AFFECT THEM", 4: "IT WILL RESULT IN EXPANSION OF AREA" },
    answer: "1",
    img: "https://image.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600w-1037719192.jpg"
  },
  {
    question: "Which of the following types of sources of energy do not produce carbon di-oxide?",
    choices: {
      1: "WIND ENERGY",
      2: "SOLAR ENERGY",
      3: "TIDAL ENERGY",
      4: "ALL OF THE ABOVE",
    },
    answer: "4",
    img: "https://image.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600w-1037719192.jpg"
  },
  {
    question: "How can we stop global warming?",
    choices: {
      1: "BY TURNING THE LIGHTS ON WHEN NOT IN USE",
      2: "BY RECYCLING PLASTICS",
      3: "BURNING FOSSIL FUELS",
      4: "IT CAN'T BE STOPPED",
    },
    answer: "2",
    img: "https://image.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600w-1037719192.jpg"
  },
  {
    question:
      "Who measures the global warming rate?",
    choices: {
      1: "ASTROLOGERS",
      2: "PHYSICISTS",
      3: "PHILOSOPHERS",
      4: "CLIMATOLOGIST",
    },
    answer: "4",
    img: "https://image.shutterstock.com/image-vector/landscape-photo-image-picture-placeholder-600w-272872412.jpg"
  },
];

const carbonFoot = [
  {
    question: "Which of the following will result in carbon footprint reduction?",
    choices: { 1: "BURNING FOSSIL FUELS", 2: "TAKING LONG SHOWERS", 3: "TURNING ON LIGHTS WHEN NOT IN USE", 4: "AFFORESTATION" },
    answer: "4",
    img: "https://image.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600w-1037719192.jpg"
  },
  {
    question: "Farmer's tractor adds to the carbon footprint of food because___________?",
    choices: {
      1: "IT'S GREEN",
      2: "IT MAKES A LOT OF NOISE",
      3: "IT BURNS FOSSIL FUEL",
      4: "IT HAS RED COLOR",
    },
    answer: "3",
    img: "https://image.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600w-1037719192.jpg"
  },
  {
    question: "Which of these choices in transportation produces less greenhouse gas than the others?",
    choices: {
      1: "WALKING",
      2: "RIDING A BUS",
      3: "RIDING A CAR",
      4: "TAKING A TRAIN",
    },
    answer: "1",
    img: "https://image.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600w-1037719192.jpg"
  },
  {
    question:
      "The total set of carbon emissions caused by an individual is called?",
    choices: {
      1: "CARBON CYCLE",
      2: "CARBON HANDOUT",
      3: "CARBON FOOTPRINT",
      4: "CARBON SUMMARY",
    },
    answer: "3",
    img: "https://image.shutterstock.com/image-vector/landscape-photo-image-picture-placeholder-600w-272872412.jpg"
  },
];


const deforestation = [
  {
    question: "How do plants affect carbon dioxide levels in the atmosphere?",
    choices: { 1: "THEY REDUCE THEM", 2: "THEY INCREASE THEM", 3: "THEY MAKE NO DIFFERENCE", 4: "NONE OF THE ABOVE" },
    answer: "1",
    img: "https://image.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600w-1037719192.jpg"
  },
  {
    question: "Cutting trees on large scale is called_______?",
    choices: {
      1: "DEFORESTATION",
      2: "REFORESTATION",
      3: "AFFORESTATION",
      4: "NONE OF THE ABOVE",
    },
    answer: "1",
    img: "https://image.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600w-1037719192.jpg"
  },
  {
    question: "Soil erosion is prevented by_________?",
    choices: {
      1: "DEFORESTATION",
      2: "AFFORESTION",
      3: "OVERGRAZING",
      4: "NONE OF THE ABOVE",
    },
    answer: "2",
    img: "https://image.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600w-1037719192.jpg"
  },
  {
    question:
      "Which gas is likely to reduce from atmosphere by deforestation?",
    choices: {
      1: "CARBON DIOXIDE",
      2: "NITROGEN",
      3: "OXYGEN",
      4: "SULPHUR DIOXIDE",
    },
    answer: "3",
    img: "https://image.shutterstock.com/image-vector/landscape-photo-image-picture-placeholder-600w-272872412.jpg"
  },
];





display();

function display() {
  let initialScreen = document.createElement("h1");
  initialScreen.textContent = "Climate Quiz";

  let paraScreen = document.createElement("p");
  paraScreen.textContent = `Try to answer the following climate-related questions !`;

  let startBtn = document.createElement("button");
  startBtn.innerHTML = "Start Quiz";
  startBtn.type = "button";
  startBtn.name = "startBtn";



  startBtn.addEventListener("click", displayQuestions);

  initialEl.appendChild(initialScreen);
  initialEl.appendChild(paraScreen);
  initialEl.appendChild(startBtn);
}


let random = [];


random.push(greenEmission[(Math.floor(Math.random() * 4))])
random.push(ozone1[(Math.floor(Math.random() * 4))])
random.push(global[(Math.floor(Math.random() * 4))])
random.push(carbonFoot[(Math.floor(Math.random() * 4))])
random.push(deforestation[(Math.floor(Math.random() * 4))])

ScoreEl.addEventListener('click', viewScore);
headerEl.appendChild(ScoreEl);


let submitScore = document.createElement("button");
submitScore.textContent = "Submit";

const lastQuestion = random.length - 1;
let questionsCtr = 0;
let correctNum = 0;

function displayQuestions() {

  const output = [];
  const choices = [];

  let question = random[questionsCtr];
  for (choice in question.choices) {
    choices.push(
      `<div>
          <button name="question${questionsCtr}" onclick='checkAnswer(${choice})'>${choice} ${question.choices[choice]}</button>
          <br>
          <br>
        </div>
        `
    );
  }
<<<<<<< HEAD
  // fetch ("https://api.climateclock.world/v1/clock") 
  fetch("https://content.guardianapis.com/search?q=climate%20change&api-key=2b864c12-3fa4-4b07-a5fa-72ff409c8dc3")

    .then(function (res) {
      return res.json();
    })

    .then(function (data) {
      console.log(data);
      var climateClockEl = document.querySelector('.climateClock');
      var webTitle = (data.response.results[0].webTitle);
      var webUrl = (data.response.results[0].webUrl);
      var buttonEl = document.createElement("button");
      var aEl = document.createElement("a");
      aEl.href = webUrl;
      aEl.innerHTML = webTitle;
      console.log(aEl);
      //buttonEl.textContent = aEl;
      climateClockEl.appendChild(aEl);
    });
=======
>>>>>>> 6b503880bbd8ec94e347d8344d308080f2caeae4


  output.push(
    `   <div id="questions"><h2> ${question.question} </h2></div>
        <br>
        <div id="choices"> ${choices.join("")} </div>
      `
  );

  ContentEl.innerHTML = output.join("");
}


function checkAnswer(answer) {
  if (answer === parseInt(random[questionsCtr].answer)) {
    displayResult("CORRECT");
    correctNum++
  } else {
    displayResult("WRONG");
  }
  if (questionsCtr < lastQuestion) {
    questionsCtr++;
    displayQuestions();
  } else {
    showScore(correctNum);
  }
}


function displayResult(ans) {

  answerEl.innerHTML = `<div><hr><p>${ans}</p></div>`;
  setInterval(() => {
    answerEl.innerHTML = "";
  }, 1000);

  containerEl.appendChild(answerEl);
}

function showScore(correctNum) {
  isQuizDone = true;
  document.getElementById("questions").style.display = "none";
  document.getElementById("choices").style.display = "none";

  let scoreDiv = document.createElement("div");
  let scoreH1El = document.createElement("h1");
  scoreH1El.innerHTML = "All done!";

  let scoreResult = document.createElement("p");
  scoreResult.textContent = `Your final score is: ${correctNum * 10} out of 50`;

  let nameLabel = document.createElement("span");
  nameLabel.textContent = "Enter your NAME: ";

  let nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "nameId");

  scoreDiv.appendChild(scoreH1El);
  scoreDiv.appendChild(scoreResult);
  scoreDiv.appendChild(nameLabel);
  scoreDiv.appendChild(nameInput);
  scoreDiv.appendChild(submitScore);
  resultEl.appendChild(scoreDiv);
  containerEl.appendChild(resultEl);
}


function saveScore() {
  let initials = document.getElementById("nameId").value;
  let existingData = localStorage.getItem("scores");
  let existing = existingData ? JSON.parse(existingData) : [];
  let newData = { score: correctNum, name: initials };


  existing.push(newData);


  localStorage.setItem("scores", JSON.stringify(existing));
  displayScores();
}


function displayScores() {

  resultEl.style.display = "none";
  headerEl.style.display = "none";

  let scoreH1El = document.createElement("h1");
  let scoreList = document.createElement("div");
  let tempList = [];
  let tempListEl = document.createElement("div");


  let goBack = document.createElement("button");
  goBack.textContent = "Go Back";
  goBack.className = "btn edit-btn";
  goBack.setAttribute("id", "goback");
  goBack.setAttribute("click", "goBackToHome");


  let clearScore = document.createElement("button");
  clearScore.textContent = "Clear Highscore";
  clearScore.className = "btn edit-btn";
  clearScore.setAttribute("id", "clearscore");

  scoreH1El.textContent = "Highscores";
  highScoreEl.appendChild(scoreH1El);
  scoreList.setAttribute("id", "scoreList");
  highScoreEl.appendChild(scoreList);

  let data = localStorage.getItem("scores");
  data = data ? JSON.parse(data) : [];


  data.sort((a, b) => {
    return b.score - a.score;
  });

  for (list in data) {
    tempList.push(`<div id="score">
    ${parseInt(list) + 1}. ${data[list].name} - ${data[list].score}
    </div>`);
  }


  scoreList.innerHTML = tempList.join("");
  highScoreEl.appendChild(tempListEl);
  highScoreEl.appendChild(goBack);
  highScoreEl.appendChild(clearScore);
  ContentEl.appendChild(highScoreEl);
  clearScore.addEventListener("click", clearHighScore);
  goBack.addEventListener("click", goBackToHome);
}

function clearHighScore() {
  var e = document.querySelector("#scoreList");
  var child = e.firstElementChild;
  while (child) {
    e.removeChild(child);
    child = e.firstElementChild;
  }
  localStorage.setItem("scores", []);
}

function viewScore() {

  if (!isQuizDone) {

    return;
  } else {
    initialEl.style.display = "none";
  }
  displayScores();
}

function goBackToHome() {
  location.reload();
}

submitScore.addEventListener("click", saveScore);
//quiz code ends




// Code for Pollution Widget

var pollutionEl = $("#pollution");
// var cityName = 'Toronto';
var currentDate = moment().format("MM/DD/YYYY");
var apiKey = '936da452efddec94d3bf53bc5ce3701728278b67 '
var airPollutionUrl = 'https://api.waqi.info/feed/'

function getPollutionData(cityName) {
  fetch(airPollutionUrl + cityName + "/?token=" + apiKey)
    .then(function (response) {
      return response.json();
    })
    .then(function (pollutionData) {
      console.log("pollutionData= ", pollutionData);
      displayPollution(pollutionData);
    })
}
<<<<<<< HEAD
function displayPollution(pollutionData) {

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
  else if (aqi > 100 && aqi < 151) {
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
=======
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
    oozone = pollutionData.data.forecast.daily.o3[2].avg;

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
    ozoneEl.text("O3 " + oozone);
    uviEl.text("UVI " + uvi);

    //  Append the elements
    pollutionEl.append(cityNameEl);
    pollutionEl.append(aqiEl);
    pollutionEl.append(airQualityEl);
    pollutionEl.append(pm25El);
    pollutionEl.append(pm10El);
    pollutionEl.append(ozoneEl);
    pollutionEl.append(uviEl);
>>>>>>> 6b503880bbd8ec94e347d8344d308080f2caeae4

}

// Click the Search button
var searchCityEl = $("#searchCity");

<<<<<<< HEAD
searchCityEl.click(function () {
  var inputEl = $("#cityName");
  cityName = inputEl.val().toUpperCase();
  console.log("City name is = ", cityName);
  getPollutionData(cityName);
=======
searchCityEl.click(function() {
    var inputEl = $("#cityName");
    console.log("city name is ", cityName);
    cityName = inputEl.val().toUpperCase();
    console.log("City name is = ", cityName);
    getPollutionData(cityName);
>>>>>>> 6b503880bbd8ec94e347d8344d308080f2caeae4
})


//  Code for Pollution Widget ends






























































































// Colin -------------------------------------------------------------------------------------------//
// THE JAVASCRIPT CODE FOR THE SEARCH INPUT FORM STARTS HERE-------------------------------------------------------------------------------------------//

$(".default_option").click(function () {
  $(".dropdown ul").addClass("active");
});

$(".dropdown ul li").click(function () {
  var text = $(this).text();
  $(".default_option").text(text);
  $(".dropdown ul").removeClass("active");
});



  // Colin -------------------------------------------------------------------------------------------//
//  THE JAVASCRIPT CODE FOR THE SEARCH INPUT FORM ENDS -------------------------------------------------------------------------------------------//