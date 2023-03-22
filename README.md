# assignment-3-sophieknox16
assignment-3-sophieknox16 created by GitHub Classroom
## Question 1
For this sketch I created a function called drawFrog that draws a frog on the 400,400 canvas. 
To create this frog I made three circles, the head and two for the eyes. 
For the eyes I added circles in the middle of them and made the fill black for the pupil and added a thick white stroke for the whites of the eyes. 
I then added an arc for the mouth of the frog to make it look like it is smiling.
```Javascript
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
 ```
I then called this function in draw to draw the sprite. 
I created variables with values in the setup function so that it will be easier to change the location and dementions of the frog in the future. This is seen in this code below. 
```Javascript
  frogHeight = 50;
  frogWidth = 50;
  
  frogX = 50;
  frogY = 320;
 ```
I also changed the background to make it look a bit more animated and added a rectagle to creat e a ground in which the frog is sitting. 
```Javascript
function draw() {
  background("lightblue");
 
  fill("tan")
  noStroke();
  rect(0, 370, 400, 30)
```
Link to this Sketch: https://editor.p5js.org/Sophiek/sketches/3o2MH2KkO

## Question 2 
For this assignment I copied and pasted the previous code into a new sketch
I added an if(mousepressed) statement to make the frog look like it was sticking its tongue out.
```Javascript
  if (mouseIsPressed){
  noFill()
  strokeWeight(10)
  stroke("red")
  line(50, 60, 90, 30)
 ```
 Link to sketch: https://editor.p5js.org/Sophiek/sketches/56NBVxcnG 
 
 ## Question 3
 For this part I created a function that drew a seed and I set seedX and seedY as the parameters of the circle. 
 ```Javascript
 function seed(seedX, seedY){
  fill("black")
  ellipse(seedX,seedY,10)
 ```
 I  put seenX and seedY in setup and made them equal to random through 400 witha  speed of 3 for when the seed falls form the top of the canvas.
 Lastly in draw I wrote the equation 
```Javascript
  seedY = seedY + speed 
 ```
So the seed would fall from the top of the canvas to the bottom when the sketch is played. 
Link to Sketch: https://editor.p5js.org/Sophiek/sketches/gAVpjqeS_
