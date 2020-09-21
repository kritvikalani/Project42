var hrAngle, mnAngle, scAngle;
var hr, mn, sc;

function setup() {
  createCanvas(800,500);

  angleMode(DEGREES);

}

function draw() {
  background(0);  

  translate(400, 200);

hr = hour();
mn = minute();
sc = second();

  scAngle = map(sc, 0, 60, 0, 360)
  push();
  rotate(scAngle);
  stroke(237, 56, 51);
  strokeWeight(7);
  line(0,0,100,0)
  pop();
  noFill();
  stroke(237, 56, 51)
  strokeWeight(7)
  arc(0,0,300,300,0,scAngle)

  mnAngle = map(mn, 0, 60, 0, 360)
  push();
  rotate(mnAngle);
  stroke(109, 216, 56);
  strokeWeight(7);
  line(0,0,85,0)
  pop();
  noFill();
  stroke(109, 216, 56)
  strokeWeight(7)
  arc(0,0,320,320,0,mnAngle)

  hrAngle = map(0, 12, 0, 360)
  push();
  rotate(hrAngle);
  stroke(30, 70, 245);
  strokeWeight(7);
  line(0,0,60,0)
  pop();
  noFill();
  stroke(30, 70, 245)
  strokeWeight(7)
  arc(0,0,340,340,0,hrAngle)
  
  drawSprites();
}