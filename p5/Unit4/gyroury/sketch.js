/* For mobile phones - accesses accelerometer and gyroscope.
Make sure you turn on orientation lock on your iPhone or Android device. */

let alpha = 0,
  beta = 0,
  gamma = 0; // gyroscope variables
let x = 0.0,
  y = 0.0,
  z = 0.0; // accelerometer variables
let bunnyImage;
let xPosition = 0;
let yPosition = 0;
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
  xPosition = map(alpha, 0, 360, 0, width);
  yPosition = map(beta, -180, 180, 0, height);
  push();

  translate(xPosition, yPosition);

  rotate(radians(gamma)); // rotate the bunny depending on the alpha intake
  image(pooh, 360, 25, 50, 50);
  image(pigglet, 450, 25, 50, 50);
  image(tigger, 50, 360, 50, 50);
  image(rabbit, 360, 360, 50, 50);
  image(eeyore, 660, 660, 50, 50);
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
  fill('white');
  noStroke();
  textSize(300);
  textAlign(CENTER);
  text("ctk", width / 2, height / 2);

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
