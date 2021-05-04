var redValue, greenValue, blueValue; 
var fillColor; 
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(120); //mid grey 
  //fill(255,0,0);
  fillColor=0 ; 
}


function draw() {
  //background(120); //this is so that the circle when mouse moves there is no trail 
  //fill(fillColor); 
  redValue= map(mouseX, 0, width, 0, 255); 
  greenValue= map(mouseY,0, height, 0, 255); 
  blueValue= map(second(), 0, 59, 0, 255); //colour change based on time, in 59 seconds the blue turns to zero therefore a full black or green 
  fill (redValue, greenValue, blueValue); 
  square(width/2-150, height/2-150, 300); //square is still, colour change according to position of mouse 
  //circle(mouseX, mouseY, 80); //circle follows mouse 
}

function mousePressed() {
 //if (fillColor==0){   //if fill color is black 
  //fillColor=255; //make it white, if you use RGB use square bracket 
 
// else {
   //fillColor=0; //make its black 
 
}
function keyPressed(){
 // background (120); //clears screen 
}
