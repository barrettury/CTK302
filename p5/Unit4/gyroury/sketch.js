/* For mobile phones - accesses accelerometer and gyroscope.
Make sure you turn on orientation lock on your iPhone or Android device. */

let alpha = 0,
  beta = 0,
  gamma = 0; // gyroscope variables
let x = 0.0,
  y = 0.0,
  z = 0.0; // accelerometer variables
let bunnyImage;
let xPooh = 0;
let yPooh = 0;
let xTig = 0;
let xEeo = 0;
let yEeo = 0;
let xRab = 0;
let yRab = 0;
var timer = 0;


function preload(){
  khSound = loadSound("KHIII100AcreWoods.mp3");
}
function setup() {

  createCanvas(720, 720);

  rabbit = loadImage("assets/rabbit.png");
  pooh = loadImage("assets/Winniethepooh.png");
  tigger = loadImage("assets/tigger.png");
  pigglet = loadImage("assets/pigglet.png");
  eeyore = loadImage("assets/eeyore.png");
  khSound.loop();

  imageMode(CENTER);
  rectMode(CENTER);

}

function draw() {

  background('#c6f5ff'); // light blue

  // the map command !!!!
  // takes your variable and maps it from range 1 to range 2
  // map(yourVar, range1_x, range1_y, range2_x, range2_y) ;
  xPooh = map(alpha, 150, 210, 0, width);
  yPooh = map(beta, 60, 90, 0, height);
  xTig = map(alpha, 300, 350, 0, width);
  yTig = map(beta, -15, 15, 0, height);
  xEeo = map(alpha, 50, 100, 0, width);
  yEeo = map(beta, -180, -150, 0, height);
  xRab = map(alpha, 100, 150, 0, width);
  yRab = map(beta, 150, 180, 0, width);
  push();
  translate(xPooh, yPooh);
  rotate(radians(gamma)); // rotate the bunny depending on the alpha intake
  image(pooh, 0, 0, 50, 50);
  image(pigglet, 0, 0, 50, 50);
  pop();

  push();
  translate(xTig, yTig);
  rotate(radians(gamma));
  image(tigger, 0, 0, 50, 50);
  pop();

  push();
  translate(xRab,yRab);
  rotate(radians(gamma));
  image(rabbit, 0, 0, 50, 50);
  pop();

  push();
  translate(xEeo,yEeo);
  rotate(radians(gamma));
  image(eeyore, 0, 0, 50, 50);
  pop();



  // Text commands that display debugging data
  textAlign(LEFT);
  textSize(20);
  fill('black');
  text("orientation data:", 25, 25);
  textSize(15);
  text("alpha: " + alpha, 25, 50);
  text("beta: " + beta, 25, 70);
  text("gamma: " + gamma, 25, 90);
  textSize(20);
  text("acceleration data:", 25, 125);
  textSize(15);
  text("x = " + x.toFixed(2), 25, 150); // .toFixed means just show (x) decimal places
  text("y = " + y.toFixed(2), 25, 170);
  text("z = " + z.toFixed(4), 25, 190);

  // Text that makes CTK type in the background
  fill('black');
  noStroke();
  textSize(50);
  textAlign(CENTER);
  timer++;
  if(timer <300)
  text("Welcome to the \n100 Acre Woods\nScavenger Hunt", width / 2, height / 2);
  if(timer>299 && timer<600)
  text("Try to find Pooh and \nall of his friends", width / 2, height / 2);


}



// Read in gyroscope data
window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});

// Read in accelerometer data
window.addEventListener('devicemotion', function(e) {
  // get accelerometer values
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});

function touchStarted() {
  getAudioContext().resume();
}
