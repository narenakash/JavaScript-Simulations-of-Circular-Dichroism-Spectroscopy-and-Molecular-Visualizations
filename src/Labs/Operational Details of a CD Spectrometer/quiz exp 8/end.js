const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = "Congratulations!! Correct Answer!!";
console.log(mostRecentScore)
const selectfunction = (num) => {
  if (num == 1) {
    document.getElementById("a2").style.display = "none";
    document.getElementById("a3").style.display = "none";
    document.querySelector(".i").style.display = "none";

  } else if (num == 2) {
    document.getElementById("a1").style.display = "none";
    document.getElementById("a3").style.display = "none";
    document.querySelector(".i").style.display = "none";

  } else if (num == 3) {
    document.getElementById("a1").style.display = "none";
    document.getElementById("a2").style.display = "none";
    document.querySelector(".i").style.display = "none";

  }
};
var numberget = localStorage.getItem("Selection");
numberget = parseInt(numberget);
if (parseInt(mostRecentScore)) {
  selectfunction(numberget);

}
else {
  finalScore.innerText = "Sorry!! Your Answer is Incorrect.. Try Again";

  document.getElementById("a1").style.display = "none";
  document.getElementById("a2").style.display = "none";
  document.getElementById("a3").style.display = "none";

}
username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
  console.log("clicked the save button!");
  e.preventDefault();

  const score = {
    score: Math.floor(Math.random() * 100),
    name: username.value
  };
  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(5);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("index.html");
};
