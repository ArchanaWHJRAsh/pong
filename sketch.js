var posX = 0;
var posY = 0;
var playerY = 150;
var compY = 150;
var cscore = 0;
var pscore = 0;
var hit = 0;

var xdirection = 1;
var ydirection = 1;

function setup() {

  createCanvas(400, 400);
  posX = 200;
  posY = 200;

}

function draw() {

  background("white");

  // display 
  text("PING PONG", 150, 10);
  text(cscore, 170, 30);
  text(pscore, 230, 30);
  //draw center line
  for (var i = 0; i < 400; i = i + 30) {
    line(200, i, 200, i + 10);
  }

  playerY = mouseY;
  // to check if player paadle is inside canvas
  if (playerY > 300) {
    playerY = 300;
  }
  rect(390, playerY, 10, 100);


  // Update the position of the ball

  posX = posX + 1.5 * xdirection;
  posY = posY + 2 * ydirection;

  // Test to see if the ball exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (posX > 390 || posX < 10) {
    xdirection *= -1;
  }
  if (posY > 390 || posY < 10) {
    ydirection *= -1;
  }

  // Test to see if the ball touches player paddle
  // If it does, reverse its direction by multiplying by -1
  if (posY >= playerY && posY <= playerY + 100) {
    hit = 1;
  } else {
    hit = 0;
  }
  if (posX + 10 == 390 && hit == 1) {
    xdirection *= -1;
  }
  // increase comp score when ball touches boundry on player side
  if (posX >= 200) {

    if (posX > 390 || posX < 10) {
      cscore = cscore + 1;
    }
  }
  rect(posX, posY, 10, 10);

  compY = posY;
  // to check if computer paadle is inside canvas
  if (compY > 300) {
    compY = 300;
  }
  rect(0, compY, 10, 100);

  // text(mouseX + "," + mouseY, mouseX,mouseY);
}