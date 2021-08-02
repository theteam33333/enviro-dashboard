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

const ozone = [
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