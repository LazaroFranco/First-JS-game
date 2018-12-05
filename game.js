let canvas = document.getElementById('gameCanvas');
let context = canvas.getContext('2d');

// This function will load the game and my character.
window.onload = function() {
  canvas;
  context;

  let framesPerSecond = 1000;
  setInterval(function() {
    loop();
  }, 120/framesPerSecond);
};

// Modifying the canvas
const drawGame = () => {
  context.fillStyle = 'black';
  context.fillRect(0,0,canvas.width,canvas.height);
};

// Creates the obstacles i will go against
const obstacles = () => {
  context.fillStyle = 'green';
  context.fillRect(400,350,25,250);
  context.fillStyle = 'red';
  context.fillRect(550,1,25,280);
  context.fillStyle = 'blue';
  context.fillRect(300,1,25,250);
  context.fillStyle = 'blue';
  context.fillRect(700,460,25,250);
  context.fillStyle = 'green';
  context.fillRect(750,350,25,250);
  //              (x, y, width, height)
};

// Creates my player (which is me)
function object() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.moveTo(25 + moveX, 25 + moveY);
    context.lineTo(125 + moveX, 25 + moveY);
    context.lineTo(125 + moveX, 75 + moveY);
    context.lineTo(25 + moveX, 75 + moveY);
    context.closePath();

    context.fillStyle = "blue";
    context.fill();
};

// This is listening to key pressed from keyboard. WILL MOVE YOUR CHARACTER
var moveX = 0;
var moveY = 0;

window.addEventListener("keydown", keysPressed, false);
window.addEventListener("keyup", keysReleased, false);

let keys = [];

function keysPressed(e) {
    // store an entry for every key pressed
    keys[e.keyCode] = true;

    // left
    if (keys[37]) {
      moveX -= 10;
    }

    // right
    if (keys[39]) {
      moveX += 10;
    }

    // down
    if (keys[38]) {
      moveY -= 10;
    }

    // up
    if (keys[40]) {
      moveY += 10;
    }

    e.preventDefault();

    object();
};

function keysReleased(e) {
    // mark keys that were released
    keys[e.keyCode] = false;
};
// This is just hard coding, for the window.onload function.
const loop = () => {
  drawGame();
  object();
  obstacles();
};
