const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
  {
    question: "From the animation determine at which concentration of Urea the protein unfolds to the maximum extent?",
    choice1: "4M",
    choice2: "6M",
    choice3: "8M",
    choice4: "10M",
    answer: 1
  },
  {
    question:
      "With the increase in concentration, the helix content of Rhodopsin ______________ ?",
    choice1: "Remains the same",
    choice2: "Increases monotonically",
    choice3: "Decreases monotonically",
    choice4: "First increases and then decreases.",
    answer: 3
  },
  {
    question: " What is the transition concentration of Rhodopsin in this case?",
    choice1: "2M",
    choice2: "4M",
    choice3: "6M",
    choice4: "8M",
    answer: 4
  },
  {
    question: "Apart from unfolding, is there any other possible effect which can cause such changes in CD spectrum?",
    choice1: "Reaction with solution",
    choice2: "Aggregation",
    choice3: "Interference",
    choice4: "Diffractiona",
    answer: 4
  },
  {
    question: "Is there any way to measure Aggregation, if it is present?",
    choice1: "Investigating Dinode voltage",
    choice2: "Studying CD data at other pints except 222nm",
    choice3: "Use of buffer solution",
    choice4: "No, not possible",
    answer: 4
  }
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    //go to the end page
    return window.location.assign("end.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  //Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};

startGame();
