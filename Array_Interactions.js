function showall(){
  
  if(currentTime - lastShown >= showRate){
    
    colorMode(RGB);
    
    background(0, 80);
    
    colorMode(HSB);
    
    for(var i = 0; i < f.length; i++){
      f[i].show();
    }
    
    lastShown = currentTime;
    
  }
  
}

function updateall(){
  
  for(var i = f.length - 1; i >= 0; i--){
    f[i].update();
    
    if(!f[i].is_alive()){
      f.splice(i, 1);
    }
    
  }
  
}