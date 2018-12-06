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
};
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
  };
  
    this.newPosition = function() {
    this.x += this.speedX;
    this.y += this.speedY;
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

// This is listening to key pressed from keyboard. WILL MOVE YOUR CHARACTER
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
/*
// This is just hard coding, for the window.onload function.
const loop = () => {
  drawGame();
  object();
  obstacles();
};
*/
