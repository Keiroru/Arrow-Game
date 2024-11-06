const nyilak = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];

var keyindex;
var turn = 0;
var score = 0;
var keypressed;
var on = false;

document.onkeydown = function (pressedkey) {
  if (pressedkey.key == "Enter") {
    gameOn();
  }
};

function startTimer(gameTime) {
  var timer = gameTime, seconds;
  setInterval(function () {
      seconds = parseInt(timer % 60, 10);
      seconds = seconds < 10 ? "0" + seconds : seconds;
      document.querySelector('#szamlalo').textContent = seconds;
      if (--timer < 0) {
          stop();
          timer = 0
      }
  }, 1000);
};

function gameOn() {
  on = true;
  keyindex;
  turn = 0;
  score = 0;
  keypressed;
  startTimer(20);
  start();
}

function start() {
  if (on) {
    newArrow();
    response();
  }
  else {
    document.getElementById("kijelzo").innerHTML = score + "/" + turn;
    document.onkeydown = function (pressedkey) {
      if (pressedkey.key == "Enter") {
        gameOn();
      }
    };
  }
};

function newArrow() {
  var rnd = Math.floor(Math.random() * 4);
  keyindex = rnd;
  document.getElementById("kijelzo").style.color = "black";
  document.getElementById("kijelzo").innerHTML = nyilak[rnd];
};

function response() {
  document.onkeydown = function (pressedkey) {
    if (on == false) {
      return
    }
    else if (pressedkey.key == "Backspace") {
      stop();
    }
    else if (pressedkey.key == nyilak[keyindex]) {
      keypressed = pressedkey
      document.getElementById("kijelzo").style.color = "green";
      turn += 1;
      score += 1;
      document.getElementById(pressedkey.key).style.backgroundColor = "grey";
      setTimeout(flash, 100);
      setTimeout(start, 500);
    }
    else {
      keypressed = pressedkey
      document.getElementById("kijelzo").style.color = "red";
      turn += 1;
      document.getElementById(pressedkey.key).style.backgroundColor = "grey";
      setTimeout(flash, 100);
      setTimeout(start, 500);
    };
  };
};

function flash() {
  document.getElementById(keypressed.key).style.backgroundColor = "";
};

function stop() {
  on = false;
  start();
};

