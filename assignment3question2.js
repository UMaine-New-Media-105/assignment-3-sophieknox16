// Sophie Knox
// Assignment 3 Question 2
// This sketch adds a frog sprite to the canvas that will have its tounge out as it its catching a fly when the mouse is pressed 

function setup() {
  createCanvas(400, 400);
  
  frogHeight = 50;
  frogWidth = 50;
  
  frogX = 50;
  frogY = 320;
  
  angleMode(DEGREES); //Made it easier to draw the smile of the frog
}

function draw() {
  background("lightblue");
 
  fill("tan")
  noStroke();
  rect(0, 370, 400, 30)
  
  drawFrog(frogX, frogY, 1);
}

function drawFrog(mouseX, mouseY, size){
  translate(mouseX, mouseY)
  scale(size)
  noStroke()
  fill("green")
  ellipse(50, 50, 50) //head
  fill("lightgreen")
  ellipse(35, 30, 31) //left eye
  ellipse(65, 30, 31) //right eye
  push()
  fill("black")
  stroke("white")
  strokeWeight(5)
  ellipse(35, 30, 15)//left pupil
  ellipse(65, 30, 15)//right pupil
  pop()
  push()
  fill("red")
  arc(50, 50, 20, 30, 0, 180) //frogs smile
  pop()
  if (mouseIsPressed){
  noFill()
  strokeWeight(10)
  stroke("red")
  line(50, 60, 90, 30)
  }
}
