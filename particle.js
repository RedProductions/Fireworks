function particle(nx, ny, nhue, nn, nd, nshape, nshapesize, nsize){
  
  this.x = nx;
  this.y = ny;
  
  this.shape = nshape;
  
  this.shapesize = nshapesize;
  
  if(this.shape == 1){
    this.dist = random(360);
    
    this.speedx = (16*pow(sin(degrees(this.dist)), 3))/random(3, 3.5);
    this.speedy = -(13 * cos(degrees(this.dist)) - 5 * cos(degrees(2*this.dist)) - 2 * cos(degrees(3 * this.dist)) - cos(degrees(4 * this.dist)))/random(3, 3.5);
  }else{
    this.n = nn;
    this.d = nd;
    
    this.k = this.n/this.d;
    this.dist = random(360);
    
    this.speedx = (cos(this.k * this.dist) * cos(this.dist)) * this.shapesize;
    this.speedy = (cos(this.k * this.dist) * sin(this.dist)) * this.shapesize;
  }
  
  
  this.speedx *= nsize/6;
  this.speedy *= nsize/6;
  
  
  this.size = random(2, 5);
  
  this.hue = nhue;
  
  this.alive = true;
  
  this.life = random(80, 150);
  
  
  
  this.grav = -0.2;
  
  
  
  this.pis_alive = function(){return this.alive;}
  
  
  this.pshow = function(){
    
    fill(this.hue, 255, 255);
    
    ellipse(this.x, this.y, this.size, this.size);
    
  }
  
  
  this.pupdate = function(){
    
    this.speedy -= this.grav/10;
    this.y += this.speedy;
    
    this.x += this.speedx;
    
    this.life--;
    
    if(this.life < 0 || this.y - this.size > height){
      this.alive = false;
    }
    
  }
  
}