function firework(){
  
  this.x = random(200, width - 200);
  this.y = height;
  
  this.size = random(4, 8);
  
  this.targety = random(mouseY + 50, mouseY + 100);
  
  this.speedy = 0;
  
  this.life = random(10, 20);
  
  this.speedx =  -1 * (this.x - mouseX)/(this.life * 4);
  
  this.fuel = 1000;
  
  this.hue = random(0, 255);
  
  this.cons = 15;
  
  this.shown = true;
  
  this.babies = random(200, 300);
  this.deads = 0;
  this.spawned = false;
  
  this.alive = true;
  
  this.p = [];
  
  this.grav = -0.6;
  
  
  this.is_alive = function(){return this.alive;}
  
  
  this.show = function(){
    
    if(this.shown){
      
      fill(this.hue, 255, 255);
      
      ellipse(this.x, this.y, this.size, this.size);
      
    }
    
    if(this.spawned){
      
      for(var i = this.p.length - 1; i >= 0; i--){
        
        this.p[i].pshow();
        
      }
      
    }
    
  }
  
  
  this.update = function(){
    
    if(this.fuel > 0){
      
      this.speedy -= this.cons/10;
      this.y += this.speedy;
      this.fuel -= this.cons;
      this.cons /= 1.10;
      
      this.x += this.speedx;
      
      if(this.y <= this.targety + this.life){
        this.fuel = 0;
        this.speedy -= this.grav;
      }
      
    }else {
      
      this.fuel = 0;
      
      this.speedy -= this.grav;
      this.y += this.speedy;
      
      this.x += this.speedx;
      
      if(this.life > 0){
        
        this.life--;
        
      }else {
        
        this.shown = false;
        
        if(!this.spawned){
          
          this.n = floor(random(1, 8));
          this.d = floor(random(1, 4));
          this.shape = floor(random(1, 11));
          this.shapesize = random(1, 4);
          
          for(var i = 0; i < this.babies; i++){
            var part = new particle(this.x, this.y, this.hue, this.n, this.d, this.shape, this.shapesize, this.size);
            this.p.push(part);
          }
          
          this.spawned = true;
          
        }
        
        for(var i = this.p.length - 1; i >= 0; i--){
          
          this.p[i].pupdate();
          
          if(!this.p[i].pis_alive()){
            this.p.splice(i, 1);
            this.deads++;
          }
          
        }
        
        if(this.deads >= this.babies){
          this.alive = false;
        }
        
      }
    }
    
  }
  
}