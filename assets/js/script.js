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