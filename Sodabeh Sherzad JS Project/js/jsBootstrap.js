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
    " Inside which HTML element do we put the JavaScript?",
    "js",
    "javascript",
    "script",
    "scripting",
    "C"
  ],

  [
    "Where is the correct place to insert a JavaScript?",
    "The body section",
    "The head section",
    "Both of them",
    "None of them",
    "A"
  ],

  [
    "What is the correct syntax for referring to an external script called xxx.js?",
    "script src=xxx.js",
    "script name=xxx.js",
    "script href=xxx.js",
    "None of them",
    "A"
  ],

  [
    "The external JavaScript file must contain the <script> tag?",
    "True",
    "False",
    "The Network",
    "The World Wide Web Consortium",
    "B"
  ],

  [
    "How do you write 'Hello World' in an alert box?",
    'msgBox("Hello World")',
    'alert("Hello World")',
    'msg("Hello World")',
    'alertBox("Hello World")',
    "B"
  ],

   [
    "How do you create a function in JavaScript?",
    "function = myFunction()",
    "function:myFunction()",
    "function myFunction()",
    "function function()",
    "C"
  ],

   [
    "How do you call a function named 'myFunction'?",
    "call myFunction()",
    "myFunction()",
    "call function myFunction()",
    "None of them",
    "B"
  ],

   [
    "How to write an IF statement in JavaScript?",
    "if (i == 5)",
    "if i = 5 then",
    "if i = 5",
    "if i == 5 then",
    "A"
  ],

   [
    "How to write an IF statement for executing some code if i is NOT equal to 5?",
    "if i <> 5", 
    "if (i <> 5)",
    "if i =! 5 then",
    "if (i != 5)",
    "D"
  ],

   [
    "How can you add a comment in a JavaScript?",
    "//This is a comment",
    "!--This is a comment--",
    "This is a comment",
    "/*",
    "A"
  ],

   [
    "What is the correct way to write a JavaScript array?",
    "var colors = 1 = (red), 2 = (green), 3 = (blue)",
    "var colors = (1:red, 2:green, 3:blue)",
    "var colors = [red, green, blue]",
    "var colors = red, green, blue",
    "C"
  ],

   [
    "How do you round the number 7.25, to the nearest integer?",
    "round(7.25)",
    "Math.rnd(7.25)",
    "Math.round(7.25)",
    "rnd(7.25)",
    "C"
  ],

   [
    "How do you find the number with the highest value of x and y?",
    "ceil(x, y)",
    "Math.max(x, y)",
    "Math.ceil(x, y)",
    "top(x, y)",
    "C"
    ],

   [
    "What is the correct JavaScript syntax for opening a new window called w2?",
    'w2 = window.new("http://www.w3schools.com");',
    'w2 = window.open("http://www.w3schools.com");',
    "None of them",
    "Both of them",
    "B"
  ],

   [
    "JavaScript is the same as Java?",
    "True",
    " False",
    "Both of them",
    "None of them",
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
                            <a href="index.html" id="exit" class="load"><button>Exit</button></a>
                            <img src="css/images/celebrate.gif" class="img">`;
  } else if (score > 4) {
    _("info").innerHTML = `<h1>Good</h1>
                            <p>Your score is ${score} out of ${point * questions.length}.<p>
                            <p>You answered ${score/point} out of ${questions.length} correctly.<br><br><br>
                            <a href="htmlQuiz.html" id="Restart" class="load"><button>Restart</button></a>
                            <a href="index.html" id="exit" class="load"><button>Exit</button></a>
                            <img src="css/images/animate.gif" class="img">`; 
  } else {
    _("info").innerHTML = `<h1>Not Good</h1>
                            <p>Your score is ${score} out of ${point * questions.length}.<p>
                            <p>You answered ${score/point} out of ${questions.length} correctly.<br><br><br>
                            <a href="https://www.w3schools.com/html/default.asp" id="Toturial" class="load"><button>Toturial</button></a>
                            <a href="index.html" id="exit" class="load"><button>Exit</button></a>
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
    //
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