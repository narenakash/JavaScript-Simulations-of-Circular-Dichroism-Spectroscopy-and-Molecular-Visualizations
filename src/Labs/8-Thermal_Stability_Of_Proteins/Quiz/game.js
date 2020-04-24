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
    question: "In the animation protein at which temperature starts unfolding the first?",
    choice1: "298K",
    choice2: "358K",
    choice3: "388K",
    choice4: "418K",
    answer: 4
  },
  {
    question:
      "From the readings of CD spectrum at 222nm we can have information about which secondary structure?",
    choice1: "Sheet",
    choice2: "Turn",
    choice3: "Helix",
    choice4: "Coil",
    answer: 3
  },
  {
    question: "How does the plot of MRE values at 222 nm with temperature looks like?",
    choice1: "Linear",
    choice2: "Sigmoid",
    choice3: "Elliptic",
    choice4: "Parabolic",
    answer: 2
  },
  {
    question: "What is the trend of change of % helicity in Rhodopsin with temperature?",
    choice1: "does non change at all,",
    choice2: "gradually decrease,",
    choice3: "gradually increase,",
    choice4: "first increase and then decrease",
    answer: 2
  },
  {
    question: "What is the transition temperature (the temperature at which the protein goes from a folded to an unfolded state) of Rhodopsin?",
    choice1: "70 degree C",
    choice2: "50 degree C",
    choice3: "100 degree C",
    choice4: "10 degree C",
    answer: 1
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
