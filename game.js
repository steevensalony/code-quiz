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
