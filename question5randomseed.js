// Sophie Knox
// This sketch adds a frog sprite to the canvas that will have its tounge out as it its catching a fly when the mouse is pressed. Also has a seed which falls randomly each time the sketch is ran.

let frogX;
let frogY;
let seedY;
let seedX;
let seedSpeed;
let frogIsFed;

function setup() {
  createCanvas(400, 400);

  ground = 370;

  seedX = random(400);
  seedY = 0;
  speed = random(1,8);

  frogHeight = 50;
  frogWidth = 50;
  frogX = mouseX;
  frogY = 320;

  frogIsFed = false;
  seedIsFalling = false;

  angleMode(DEGREES); //Made it easier to draw the smile of the frog
}

function draw() {
  background("lightblue");

  push();
  fill("tan");
  noStroke();
  rect(0, 370, 400, 30); // Ground
  pop();

  seed(seedX, seedY, 1);
  drawFrog(mouseX, frogY, 1);

  if (seedY > ground) {
    seedIsFalling = false;
    seedY = 0;
  }
  if (seedIsFalling) {
    seedY = seedY + speed;
  }
  let d = dist(mouseX, ground, seedX, seedY);
  if (d < 50) {
    frogIsFed = true;
  } else {
    frogIsFed = false;
  }
}

function drawFrog(mouseX, mouseY, size) {
  if (frogIsFed) {
    translate(mouseX, mouseY);
    scale(size);
    noStroke();
    fill("green");
    ellipse(50, 50, 50); //head
    fill("lightgreen");
    ellipse(35, 30, 31); //left eye
    ellipse(65, 30, 31); //right eye
    push();
    fill("black");
    stroke("white");
    strokeWeight(5);
    ellipse(35, 30, 15); //left pupil
    ellipse(65, 30, 15); //right pupil
    pop();
    push();
    fill("red");
    arc(50, 50, 20, 30, 0, 180); //frogs smile
    pop();
  } else {
    push();
    translate(mouseX, mouseY);
    scale(size);
    noStroke();
    fill("green");
    ellipse(50, 50, 50); //head
    fill("lightgreen");
    ellipse(35, 30, 31); //left eye
    ellipse(65, 30, 31); //right eye
    push();
    fill("black");
    stroke("white");
    strokeWeight(5);
    ellipse(35, 30, 15); //left pupil
    ellipse(65, 30, 15); //right pupil
    pop();
    push();
    fill("red");
    arc(50, 50, 20, 30, 0, 180); //frogs smile
    pop();
    noFill();
    strokeWeight(10);
    stroke("red");
    line(50, 60, 90, 30);
    pop(); 
  }
}

function seed(seedX, seedY) {
  fill("black");
  ellipse(seedX, seedY, 10);
  if (seedIsFalling) {
    seedY = seedY + speed;
  }
}
function mousePressed() {
  if (!seedIsFalling) {
    seedIsFalling = true;
    seedX = random(0, 300);
  }
}
