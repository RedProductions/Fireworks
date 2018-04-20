var currentTime;
var pastTime = 0;
var timeGap;

var lastShown = 0;
var showRate = 30;

var lastSpawned = 0;
var spawnRate =  200;

function timeCalc(){
  
  pastTime = currentTime;
  currentTime = millis();
  
  timeGap = currentTime - pastTime;
  
}