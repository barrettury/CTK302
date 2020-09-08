var song1;

function preload(){
  song1 = loadSound("WhereFlavor.wav");

}
function setup() {
  createCanvas(200, 200);
  song1.loop();
}

function draw() {
  background(100);
}

function mouseReleased(){
  if(song1.isPlaying())
  {
    song1.pause();
  }
    else
    {
      song1.loop();
    }
  }
