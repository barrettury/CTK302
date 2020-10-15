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
    this.pos = createVector(width / 2, height-80);
    this.vel = createVector(random(-.8, .8), random(-10, -5));
    this.r = 255//random(255);
    this.g = 255//random(255);
    this.b = 255//random(255);
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
