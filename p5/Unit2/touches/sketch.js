var numberOfTouches ;
let state = 0;
var s;
var img1;
var img2;
function preload(){
s = loadSound("KRoolFinestHour.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  img1 = loadImage("crystalCoconut.png");
  img2 = loadImage("King_K._Rool_Smash_Ultimate.png");
  imageMode(CENTER);
  textAlign(CENTER);
}

function draw() {
  clear();
  background(200);
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 30, 10);
  image(img1, width/2, height/2);

  switch(state) {
    case 0:
    text("Heheheheh hohohohho.\nI'm devilish", width/2, 22) ;
    if(numberOfTouches>1) state++;
      break ;

      case 1:
       s.play();
       state++;
      break ;
      case 2:
       image(img2, width/4,height/2);
       
       break;

  }

}
