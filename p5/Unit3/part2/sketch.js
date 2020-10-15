let cars = [];

function setup() {
  createCanvas(500, 500);
  // for (let i = 0; i < 100; i++) {
  //   cars.push(new Car());
  // }
  noStroke();
}

function draw() {
  background(120);
  cars.push(new Car());

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if(cars[i].a<=0){
      cars.splice(i,1);
    }

  }
}


class Car {
  //where attributes go
  constructor() {
    this.pos = createVector(width-40, 40);
    this.vel = createVector(random(-.8, -4), random(5,10 ));
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.a = random(200,255);
  }
  //this is where methods go
  display() {
    fill(this.r,this.g,this.b,this.a);
    ellipse(this.pos.x, this.pos.y, 20);
  }
  move() {
    this.pos.add(this.vel);
    this.a = this.a-5;
    // if (this.pos.x > width) this.pos.x = 0;
    // if (this.pos.x < 0) this.pos.x = width;
    // if (this.pos.y > height) this.pos.y = 0;
    // if (this.pos.y < 0) this.pos.y = height;

  }
}
