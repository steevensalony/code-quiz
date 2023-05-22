var question = document.getElementById("question");
var choices = document.getElementsByClassName("choice-text");
var scoreCount = document.getElementById("score");
var timerEl = document.getElementById("time");
var timeText = document.getElementsByClassName("timeTexts");

// Creating variables
var currentQuestion = {};
var score = 0;
var timerCount;
var timer;
var nextQuestion = 0;
var questionRemaining = [];

var questions = [
  {

    question: "How can a value be appended to an array?",
    choice1: "arr(length).value;",
    choice2: "arr[arr.length]=value;",
    choice3: "arr[]=add(value);",
    choice4: "None of the above",
    answer: 2
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    choice1: "msg('Hello World')",
    choice2: "msgBox('Hello World');",
    choice3: "alertBox('Hello World');",
    choice4: "alert('Hello World')",
    answer: 4
  },
  {
    question: "JavaScript is a ___ -side programming language.",
    choice1: "Client",
    choice2: "Server",
    choice3: "Both",
    choice4: "None",
    answer: 3
  },
  {
    question: "Which of the following statements will throw an error?",
    choice1: "var fun = function bar(){}",
    choice2: "var fun = function bar{}",
    choice3: "function fun(){}",
    choice4: "None of these",
    answer: 2
  },
  {
    question: "Which are the correct “if” statements to execute certain code if “x” is equal to 2?",
    choice1: "if (x 2)",
    choice2: "if (x = 2)",
    choice3: "if (x == 2)",
    choice4: "if (x != 2)",
    answer: 3
  }
]

// constants
var points = 10;
var numberOfQuestion = 5;

function startQuiz() {
  // Using the spread operator to get a new array
  timerCount = 20;
  questionRemaining = [...questions];
  startTimer();
  getNewQuestion();
}

function getNewQuestion() {
  var nextQuestion = 0;
  // Ending the quiz when there are no more questions
  if (questionRemaining.length === 0 || nextQuestion >= numberOfQuestion) {
    // Saving the high scores to local storage
    localStorage.setItem('highScore', score);
    return window.location.assign("./end.html");
  }

  nextQuestion++;
  // Getting a random question from our choices(stackoverflow.com)
  var randomQuestion = Math.floor(Math.random() * questionRemaining.length);
  currentQuestion = questionRemaining[randomQuestion];
  question.innerText = currentQuestion.question;

  // Getting the answer choices to the questions
  Array.from(choices).forEach(choice => {
    var number = choice.dataset['number'];
    choice.innerText = currentQuestion['choice' + number];
  });

  questionRemaining.splice(randomQuestion, 1);
};

Array.from(choices).forEach(choice => {
  choice.addEventListener('click', Event => {
    var selectedChoice = Event.target;
    var selectedAnswer = selectedChoice.dataset['number'];

    //checking correct and incorrect answers
    var classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

    //updating score
    if (classToApply === 'correct') {
      incrementScore(points);
    } else if (classToApply === 'incorrect') {
      timerCount = timerCount - 5;
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply)
      getNewQuestion()
    }, 1000);
  })
})

function startTimer() {
  // Sets timer
  timer = setInterval(function () {
    timerCount--;
    timerEl.textContent = timerCount;
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      localStorage.setItem('highScore', score);
      return window.location.assign("./end.html");
    }
    if (timerCount <= 9) {
      document.getElementById("time").style.color = "red";
    }
  }, 1000);
}

// checking the score
function incrementScore(num) {
  score += num;
  scoreCount.innerText = score;
}

startQuiz()