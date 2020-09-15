var f
var s
var x = 0;
var y = 0;

function preload() {
  s = loadSound("DonkeyKongCountryTheme.mp3");
}
  function setup() {
    f = loadFont("Jumpman.ttf");
    s.play();
    createCanvas(960, 720);
    textAlign(CENTER);
  }

  function draw() {
    background(82, 58, 23);
    textFont(f);
    textSize(69);
    fill(33, 117, 43);
    text("King K. Rool", x, y);
    x++;
    y++;
    if (x > width) {
      x = (random(0,20));
    }
    if(y > width)
    y = random(0,20)
  }
  function touchStarted() {
    getAudioContext().resume();
  }
