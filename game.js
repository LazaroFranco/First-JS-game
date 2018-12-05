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

function drawObject() {
  const { context } = getCanvas();
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

drawObject();


var moveX = 0;
var moveY = 0;

let keys = [];

function keysPressed(e) {
    // store an entry for every key pressed
    keys[e.keyCode] = true;

    // left
    if (keys[37]) {
      moveX -= 20;
    }

    // right
    if (keys[39]) {
      moveX += 20;
    }

    // down
    if (keys[38]) {
      moveY -= 20;
    }

    // up
    if (keys[40]) {
      moveY += 20;
    }

    e.preventDefault();

    drawObject();
};

function keysReleased(e) {
    // mark keys that were released
    keys[e.keyCode] = false;
};





////////////////////////////

module.exports = {
  drawObstacles

};
