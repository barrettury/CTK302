function setup() {
  createCanvas(500, 500);
  myCar1 = new Car();
}

function draw() {
background(220);
myCar1.display();
}

class Car
{
//where attributes go
constructor(){
this.x = 100
}
//this is where methods go
  display(){
    rect(this.x, 100, 50, 25);
  }

}
