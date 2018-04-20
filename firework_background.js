function setup() {
  
  createCanvas(windowWidth, windowHeight);
  
  frameRate(60);
  
  background(0);
  
  noStroke();
    
}

function draw() {
  
  timeCalc();
  
  updateall();
  
  showall();
  
}