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
    question: "Among Sample 1 and Sample 2 which one undergoes a transition from folded to unfolded state?",
    choice1: "Only Sample 1",
    choice2: "Only Sample 2",
    choice3: "None of them",
    choice4: "Both of them",
    answer: 4
  },
  {
    question: "Which of the following statement is true?",
    choice1: "Dynode voltage does not change with temperature at all, for both sample1 and sample2",
    choice2: "Dynode voltage does not change with temperature in sample2 but in sample1 it increases suddenly at transition temperature",
    choice3: "Dynode voltage does not change with temperature in sample1 but in sample2 it increases suddenly at transition temperature",
    choice4: "Dynode voltage increases suddenly at transition temperature for both sample1 and sample2",
    answer: 3
  },
  {
    question: "Which of the following statement is true?",
    choice1: "At unfolded state, sample1 undergoes aggregation, sample2 does not",
    choice2: "At unfolded state, sample2 undergoes aggregation, sample1 does not",
    choice3: "At unfolded state, both sample1 and sample2 undergoes aggregation",
    choice4: "At unfolded state, no one of the sample1 and sample2 undergoes aggregation",
    answer: 2
  }
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

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
