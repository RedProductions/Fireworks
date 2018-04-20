function mousePressed(){
  
  if(currentTime - lastSpawned >= spawnRate && !trown){
    f.push(new firework());
    
    lastSpawned = currentTime;
  }
  
}

function mouseDragged(){
  
  if(currentTime - lastSpawned >= spawnRate && !trown){
    
    lastSpawned = currentTime;
    
    f.push(new firework());
    trown = true;
  }else {
    trown = false;
  }
  
}