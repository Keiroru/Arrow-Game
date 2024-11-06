const nyilak = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];

var keyindex;
var turn = 0;
var score = 0;
var keypressed;

function start() {
    newarrow();
    response();

};

function response() {
  document.onkeydown = function (pressedkey) {
    if (pressedkey.key == nyilak[keyindex]) {
      keypressed = pressedkey
      document.getElementById("kijelzo").style.color = "green";
      turn += 1;
      score += 1;
      document.getElementById(pressedkey.key).style.backgroundColor = "grey";
      setTimeout(flash, 100);
      setTimeout(newarrow, 500);
    }
    else {
      keypressed = pressedkey
      document.getElementById("kijelzo").style.color = "red";
      turn += 1;
      document.getElementById(pressedkey.key).style.backgroundColor = "grey";
      setTimeout(flash, 100);
      setTimeout(newarrow, 500);
    };
  };
};

function newarrow() {
  var rnd = Math.floor(Math.random() * 4);
  keyindex = rnd;
  document.getElementById("kijelzo").style.color = "black";
  document.getElementById("kijelzo").innerHTML = nyilak[rnd];
};

function flash() {
  document.getElementById(keypressed.key).style.backgroundColor = "";
}
