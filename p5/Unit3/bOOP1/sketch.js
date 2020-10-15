let myCar1;
let myCar2;
let myCar3;
let myCar4;
function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  ellipseMode(CENTER);
  myCar1 = new Car();
  myCar2 = new Car();
  myCar3 = new Car();
  myCar4 = new Car();


}

function draw() {
background(220);
myCar1.display();
myCar2.display();
myCar1.move();
myCar2.move();
myCar3.display();
myCar4.display();
myCar3.move();
myCar4.move();

}

class Car
{
//where attributes go (variables and such)
constructor(){
this.r = random(255);
this.g = random(255);
this.b = random(255);
this.pos = createVector(random(width),random(height));
this.vel = createVector(random(-5, 5), random(-5, 5));
this.w = random(40,70);


}
//this is where methods go
  display(){
    fill(this.r,this.g,this.b);
    rect(this.pos.x, this.pos.y, this.w,20);
    ellipse(this.pos.x-20, this.pos.y+20,15);
    ellipse(this.pos.x+20, this.pos.y+20,15);


  }
  move()
  {
    this.pos.add(this.vel);
    if(this.pos.x>width) this.pos.x = 0;
    if(this.pos.x<0) this.pos.x = width;
    if(this.pos.y>height) this.pos.y = 0;
    if(this.pos.y<0) this.pos.y = height;

  }
}
