window.onload = function() {
  let framesPerSecond = 10;

  setInterval(function() {
    drawObject();
    drawObstacles();
  }, .5/framesPerSecond);

  // here
};

const getCanvas = () => {
  let canvas = document.getElementById('gameCanvas');
  let context = canvas.getContext('2d');

  return {
    canvas,
    context
  };
};

const drawGame = () => {
  const { context, canvas } = getCanvas();
  context.fillStyle = 'black';
  context.fillRect(0,0,canvas.width,canvas.height);
};

const drawObstacles = () => {
  const { context } = getCanvas();
  context.fillStyle = 'green';
  context.fillRect(400,350,25,250);
  context.fillStyle = 'red';
  context.fillRect(550,1,25,280);
  context.fillStyle = 'blue';
  context.fillRect(300,1,25,250);
  context.fillStyle = 'blue';
  context.fillRect(700,460,25,250);
};

function player(width,height,color,x,y){
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.update = function() {
    context = gameArea.context;
    context.fillStyle = color;
    context.fillRect(this.x,this.y,this.width,this.height);
  }

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
/*
// This is just hard coding, for the window.onload function.
const loop = () => {
  drawGame();
  object();
  obstacles();
};
*/
