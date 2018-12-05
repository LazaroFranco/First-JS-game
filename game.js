let canvas = document.getElementById('gameCanvas');
let context = canvas.getContext('2d');

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
    context.moveTo(25, 25 );
    context.lineTo(125, 25;
    context.lineTo(125, 75);
    context.lineTo(25, 75);
    context.closePath();

    context.fillStyle = "blue";
    context.fill();
};
