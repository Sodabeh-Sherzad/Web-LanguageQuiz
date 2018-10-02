let num = 0;
let score = 0;
const point = 2;
const progressBar = _("progressBar");

const options = ["A", "B", "C", "D"];
const timerLimit = 20;
let counter = timerLimit;
let myTimer;

const questions = [
  [
    " What does CSS stand for?",
    "Colorful Style Sheets",
    "Cascading Style Sheets",
    "Computer Style Sheets",
    "Creative Style Sheets",
    "B"
  ],

  [
    " What is the correct HTML for referring to an external style sheet?",
    "link rel='stylesheet' type='text/css' href='mystyle.css'",
    "style src='mystyle.css'",
    "stylesheet mystyle.css stylesheet",
    "All Correct",
    "A"
  ],

  [
    "Where in an HTML document is the correct place to refer to an external style sheet?",
    "At the end of the document",
    "In the <head> section",
    "In the <body>section",
    "Java",
    "B"
  ],

  [
    " Which HTML tag is used to define an internal style sheet?",
    "script",
    "style",
    "css",
    "The World Wide Web Consortium",
    "B"
  ],

  [
    "Which HTML attribute is used to define inline styles?",
    "class",
    "font",
    "style",
    "styles",
    "C"
  ],

   [
    "Which is the correct CSS syntax?",
    "body:color=black;",
    "body {color: black;}",
    "{body:color=black;}",
    "{body;color:black;}",
    "B"
  ],

  [
    "Which property is used to change the background color?",
    "bgcolor",
    "color",
    "background-color",
    "Nothing",
    "C"
  ],

  [
    "Which HTML attribute is used to define inline styles?",
    "class",
    "font",
    "style",
    "styles",
    "C"
  ],

   [
    "Which is the correct CSS syntax?",
    "body:color=black;",
    "body {color: black;}",
    "{body:color=black;}",
    "{body;color:black;}",
    "B"
  ],

  [
    "Which property is used to change the background color?",
    "bgcolor",
    "color",
    "background-color",
    "Nothing",
    "B"
  ],
 
 
];

function _(x) {
  return document.getElementById(x);
}

function Questions() {
  _("info").style.display = "none";
  _("quiz").style.display = "block";

  if (num >= questions.length) {
    result();
  } else {
    Timer();
    _("question").innerHTML = questions[num][0];
    _("btn0").innerHTML = questions[num][1];
    _("btn1").innerHTML = questions[num][2];
    _("btn2").innerHTML = questions[num][3];
    _("btn3").innerHTML = questions[num][4];
    _("count").innerHTML = num + 1 + " of " + questions.length;

    let currentValue = parseInt(progressBar.value);
    currentValue += 100 / questions.length;
    progressBar.value = currentValue;
  }
}

function result() {
  _("info").style.display = "block";
  _("quiz").style.display = "none";
  if (score >= 8) {
    _("info").innerHTML = `<h1>Well Done</h1>
                            <p>Your score is ${score} out of ${point * questions.length}.<p>
                            <p>You answered ${score/point} out of ${questions.length} correctly.<br><br><br>
                            <a href="jsQuiz.html" id="Restart" class="load"><button>Next</button></a>
                            <a href="index.html" id="exit" class="load"><button>Exit</button></a>
                            <img src="css/images/celebrate.gif" class="img">`;
  } else if (score > 4) {
    _("info").innerHTML = `<h1>Good</h1>
                            <p>Your score is ${score} out of ${point * questions.length}.<p>
                            <p>You answered ${score/point} out of ${questions.length} correctly.<br><br><br>
                            <a href="htmlQuiz.html" id="Restart" class="load"><button>Restart</button></a>
                            <a href="start.html" id="exit" class="load"><button>Exit</button></a>
                            <img src="css/images/animate.gif" class="img">`; 
  } else {
    _("info").innerHTML = `<h1>Not Good</h1>
                            <p>Your score is ${score} out of ${point * questions.length}.<p>
                            <p>You answered ${score/point} out of ${questions.length} correctly.<br><br><br>
                            <a href="https://www.w3schools.com/html/default.asp" id="Toturial" class="load"><button>Toturial</button></a>
                            <a href="start.html" id="exit" class="load"><button>Exit</button></a>
                            <img src="css/images/animat.gif" class="img">`;
  }         
}

function checkAnswer(choice) {
  if (choice == questions[num][5]) {
    score += point;
    document.querySelector(".btn[value = '"+choice+"']").style.backgroundColor = "rgb(0, 102, 34)";
    //document.querySelector(".btn[value = '"+choice+"']").disabled = true;
 }else if(choice != questions[num][5]){
    document.querySelector(".btn[value = '"+choice+"']").style.backgroundColor = "rgb(179, 0, 0)";
    document.querySelector(".btn[value = '"+questions[num][5]+"']").style.backgroundColor = "rgb(0, 102, 34)";
  }
  
  counter = timerLimit;
  clearTimeout(myTimer);
  document.getElementById("btn0").disabled = true;
  document.getElementById("btn1").disabled = true;
  document.getElementById("btn2").disabled = true;
  document.getElementById("btn3").disabled = true;
}


 _("next").onclick = function () {
    document.getElementById("btn1").style.backgroundColor = "black";
    document.getElementById("btn2").style.backgroundColor = "black";
    document.getElementById("btn0").style.backgroundColor = "black";
    document.getElementById("btn3").style.backgroundColor = "black";
    document.getElementById("btn1").style.backgroundColor = "black";

    document.getElementById("btn0").disabled = false;
    document.getElementById("btn1").disabled = false;
    document.getElementById("btn2").disabled = false;
    document.getElementById("btn3").disabled = false;
    num++;
    Questions();
     
  }

function Timer() {
  _('counter').innerHTML = counter + " seconds";
  counter--;
  if (counter < 0) {
    counter = timerLimit;
    checkAnswer(options[Math.floor(Math.random() * 4)]);
  }
  else {
    myTimer = setTimeout(Timer, 1000);
  }
}

window.addEventListener("load", function(e) {
  _("info").style.display = "block";
  _("quiz").style.display = "none";
  progressBar.value = "0";
  _("totalQuestions").innerText = questions.length;
  _("point").innerText = point;
});

var backward = document.getElementById("back");
var forward = document.getElementById("forward");
backward.style.display = "none";

forward.onclick = function () {
  var side = document.getElementById("sidebar");
  side.style.display = "block";
  side.style.height = "89%";
  forward.style.display = "none";
  backward.style.display = "block";
}

backward.onclick = function () {
  var side = document.getElementById("sidebar");
  side.style.display = "none";
  forward.style.display = "block";
  backward.style.display = "none";
}