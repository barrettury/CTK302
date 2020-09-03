var img1, img2, img3;
function setup() {
createCanvas(1000,800);

img1 = loadImage("pics/Bitch_Move_Im_Gay2.png");
img2 = loadImage("pics/PizzaSauce.png");
img3 = loadImage("pics/Take_The_Bus.png");

imageMode(CENTER);
}

function draw() {
  background(100);

  image(img1, width/4, height/4,175,350);
  image(img2, width/2, height/2,175,350);
  image(img3, 800, 600, 450, 300);
}
