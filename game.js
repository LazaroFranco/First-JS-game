/*
let canvas = document.getElementById('gameCanvas');
let context = canvas.getContext('2d');

window.onload = function() {
  canvas;
  context;

  let framesPerSecond = 1000;
  setInterval(function() {
    loop();
  }, 120/framesPerSecond);
};
/*
let gameArea = {
  canvas : document.createElement("canvas"),
  start : function() {
    this.canvas.width = 800;
    this.canvas.height = 600;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);
    this.frameNum = 0;
  },
  clear: function() {
    this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
  },
  stop: function() {
    clearInterval(this.interval);
  }
};
*/
/*
const drawGame = () => {
  context.fillStyle = 'black';
  context.fillRect(0,0,canvas.width,canvas.height);
};

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

const animate = () => {
  let obstacles = 0;

}

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

const loop = () => {
  drawGame();
  object();
  obstacles();
};

const restartGame = () => {
  window.location.reload();
};

/*
function animate() {
  requestAnimationFrame(animate);
  console.log('kjbff');
}
*/
//animate();

/*///////////////////////////
module.exports = {


};
*/
////////////////////////////////////////////////////

let gamePiece, obstacles = [];
// This is the game's area //
let gameArea = {
  canvas : document.getElementById('gameCanvas'),
// The function startGame() invokes the method start() of the myGameArea object.
  start : function() {
    this.context = this.canvas.getContext("2d");
    this.interval = setInterval(updateGameArea, 20);
    this.frameNum = 0;
  },
  clear: function() {
    this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
  },
  stop: function() {
    clearInterval(this.interval);
  }
}
//////////////////////////////
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

  this.newPosition = function() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  this.crash = function(obstacle) {
    let left = this.x;
    let right = this.x + this.width;
    let top = this.y;
    let bottom = this.y + this.height;
    let obstacleLeft = obstacle.x;
    let obstacleRight = obstacle.x + obstacle.width;
    let obstacleTop = obstacle.y;
    let obstacleBottom = obstacle.y + obstacle.height;
    let crash = true;
    if((left >= obstacleRight) || (right <= obstacleLeft) || (top >= obstacleBottom) || (bottom <= obstacleTop)){
      crash = false;
    }
    else if (crash === true) {
      alert('GAME OVER, To try again press Restart Game');
    }
    return crash;
  }
}

window.onload = function startGame(){

  gameArea.start();
  gamePiece = new player(75,30,"red",10,145);
};

const everyinterval = (n) => {
  if((gameArea.frameNum / n) % 1 == 0){
    return true;
  }
  return false;
};
//      If we do not clear the game area at every update,
//     a trail of all earlier movements will be shown.
const updateGameArea = () => {
  let x, y;
  for(let i=0; i<obstacles.length; i++){
    if(gamePiece.crash(obstacles[i])){
      gameArea.stop();
      return;
    }
  }

  gameArea.clear();
  gameArea.frameNum ++;
  if(gameArea.frameNum == 1 || everyinterval(100)){
    x = gameArea.canvas.width;
    let minHeight = 20;
    let maxHeight = 280;
    let height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
    let minGap = 75;
    let maxGap = 120;
    let gap = Math.floor(Math.random() * (maxGap - minGap +90) + minGap);
    obstacles.push(new player(20,height,"blue",x,0));
    obstacles.push(new player(20,x-height-gap,"green",x,height+gap));
  }
  for(let i=0; i<obstacles.length; i++){
    obstacles[i].x += -2;
    obstacles[i].update();
  }
  gamePiece.update();
  gamePiece.newPosition();
};

window.onkeyup = function stopMove(key) {
  switch(key.keyCode){
    case 37:
    case 39:
      gamePiece.speedX = 0;
      break;
    case 38:
    case 40:
      gamePiece.speedY = 0
  }
};

window.onkeydown = function move(key) {
  switch(key.keyCode){
    case 37:
      gamePiece.speedX = -5;
      break;
    case 38:
      gamePiece.speedY = -5;
      break;
    case 39:
      gamePiece.speedX = 5;
      break;
    case 40:
      gamePiece.speedY = 5
  }
};

let minutesLabel = document.getElementById("minutes");
let secondsLabel = document.getElementById("seconds");
let totalSeconds = 0;
setInterval(setTime);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
};

const pad = (val) => {
  let valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
};
const restartGame = () => {
  window.location.reload();
};
