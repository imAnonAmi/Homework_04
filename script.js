//Heavy lifter page for Homework 04: Coding Quiz. Pseudo code in comments below

//Define global variables here, might not need all of these
var begin = document.getElementById("begin");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var initScore = document.getElementById("initScore");
var score = 0;
var timer = document.getElementById("timerDiv");
var feedback = document.getElementById("rightWrong");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var initals = document.getElementById("initials");
var countDownTimer;
var scoreArray;

//Simple nav function to View High Scores
document.getElementById("viewHigh").addEventListener("click", viewHighNow);

function viewHighNow(event){
    event.preventDefault();
    window.location.href = "scores.html";
}
//Try to define all questions as an array of objects? That makes sense right?
//Addendum: Commas, NOT semi-colons in objects dammit! 45 min of debugging because I cannot remember the damn syntax. Remember bettter!
var allQuestions = [{
    question: "Commonly used data types do NOT include",
    answer1: "Strings",
    answer2: "Booleans",
    answer3: "Alerts",
    answer4: "Numbers",
    correctAnswer: "3"
}, //FFFFFFFFUUUUUUUUU. And commas after a given object in an array. Damn you syntax, damn you to hell!
{
    question: "The condition in an IF/ELSE statement is enclosed within _______?",
    answer1: "Quotes",
    answer2: "Curly brackets",
    answer3: "Parentheses",
    answer4: "Square brackets",
    correctAnswer: "3"
},
{
    question: "Arrays in javascript can be used to store _______?",
    answer1: "Numbers and strings",
    answer2: "Other arrays",
    answer3: "Booleans",
    answer4: "All of the above",
    correctAnswer: "4"
},
{
    question: "A very useful tool used during debugging and developing for print content to the debugger is:",
    answer1: "Javascript",
    answer2: "Terminal/GitBash",
    answer3: "FOR loops",
    answer4: "Console.log",
    correctAnswer: "4"
},
{
    question: "String values must be enclosed within ______ when being assigned to variables?",
    answer1: "Commas",
    answer2: "Curly brackets",
    answer3: "Quotes",
    answer4: "Parentheses",
    correctAnswer: "3"
},
{
    question: "Forcing students to watch blurry .GIFs over and over again as their only method to access these questions is:",
    answer1: "Likely prohibited by the Geneva Convention",
    answer2: "Going to cause mental anguish",
    answer3: "Hilarity made manifest",
    answer4: "All of the above... you monster.",
    correctAnswer: "4"
}
]
//So start by building the below

//WHEN I click Begin (calls the timer function, begins quiz)
begin.addEventListener("click", beginQuiz);

//Below timer works, in that it counts down from 75, and stops. But still needs to be initiated by Start button, and prevent further questions (i.e. end quiz when it completes)
//Modified this to work,I think?
var timeRemains = 75;
function beginQuiz() {
    begin.style.display = "none";

//THEN a timer starts and I am presented with a question (time remains to be outside function due to scope, allowing for outside modification from  bad question answering)
countDownTimer = setInterval(function () {
    document.getElementById("timerDiv").innerHTML = timeRemains + " seconds left";
    timeRemains -= 1;
    if (timeRemains <= 0) {
        clearInterval(countDownTimer);
        document.getElementById("timerDiv").innerHTML = "Time Is Up!";
        scoreQuiz();

    }
}, 1000);

quiz.style.display = "block";
askQuestions();
}
//ASKING QUESTIONS
//The below can ALL be a function running through a series of arrays representing answers, I believe.
var finalQuestion = allQuestions.length - 1;
var currentQuestion = 0;
var dammit = ("");
var correct = ("");
function askQuestions() {
    var i = allQuestions[currentQuestion];
    question.innerHTML = "<h3>" + i.question + "</h3>";
    answer1.innerHTML = i.answer1;
    answer2.innerHTML = i.answer2;
    answer3.innerHTML = i.answer3;
    answer4.innerHTML = i.answer4;
    correct = i.correctAnswer;
    console.log(correct);
    
}

console.log(correct);

//WHEN I answer a question correctly (var answer = specific array index id)
//THEN I am presented with another question (moves on to next answer array index)

//Ugh. Need to read my syntax and console.log to victory
function checkAnswer(answer) {
        console.log(answer);
        console.log(correct);
    if (correct == answer) {
        score += 10;
        feedback.style.display = "block";
        feedback.innerHTML = "<h2>"+ "Correct!" +"</h2>";
}
    //WHEN I answer a question incorrectly (var answer != specific array index id)
    //THEN time is subtracted from the clock (timer value decremented by specified amount. IF this reduces timer to 0 or below, quiz over, move on to question scoring and high scores)       
    else {
        timeRemains -= 10;
        feedback.style.display = "block";
        feedback.innerHTML = "<h2>"+ "You are Wrong!" + "</h2>";
    
    }
    
    //This is the quiz over code, whether due to time running out or answering all questions
    // WHEN all questions are answered or the timer reaches 0 (OR statement)
    // THEN the game is over (End function Take Quiz, move on to Score Quiz, and Enter Initials)
    if (currentQuestion < finalQuestion) {
        currentQuestion++;
        askQuestions()
    }
    else {
        clearInterval(countDownTimer);
        scoreQuiz();
    }
}

// I love you auto-format!

//Scoring and initials.
//WHEN the game is over
//THEN I can save my initials and score (Might see if I can confirm that score deserves to be in high scores before saving, BUT, that's polish once core functionality is done.)
function scoreQuiz() {
quiz.style.display = "none";
initScore.style.display="block";
initScore.innerHTML= "<h3>"+ "Your score is: "+ score +"</h3>" + "<br>";
formScore.style.display="block";
}
//Right now using two functions to do this because brain is not working
document.getElementById("Grr").addEventListener("click", saveScore);
if (localStorage.getItem("result")){
    scoreArray = JSON.parse(localStorage.getItem("result"));
}
else {
scoreArray=[];}
function saveScore(event){
    event.preventDefault();

var yourData = {
    score: score,
    initials: document.getElementById("initials").value
}
scoreArray.push(yourData);
window.localStorage.setItem("result", JSON.stringify(scoreArray));
window.location.href = "scores.html";
}

//IMPORTANT! Demo .GIF shows choosing the option to Go Back (i.e. to Start screen) and to Clear High Scores (wipe local storage). This is not in README, so make sure and include it.