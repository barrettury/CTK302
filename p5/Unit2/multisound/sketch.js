let state = 0;
var song1;
var song2;
var song3;

function preload() {
  song1 = loadSound("75Barrier.mp4");
  song2 = loadSound("76Bergentruckung.mp4");
  song3 = loadSound("77Asgore.mp4");
  song1.loop();
  song1.pause();
  song2.loop();
  song2.pause();
  song3.loop();
  song3.pause();

}

function setup() {
  createCanvas(500, 500);
}

function draw() {

  switch (state) {

    case 0:
      background(0);
      song1.play();
      state++;
      break;

    case 1:
      background(100);
      break;

    case 2:
      background(0);
      song2.play();
      state++;
      break;

    case 3:
      background("blue");

      break;

    case 4:
      background(0);
      song3.play();
      state++;
      break;

    case 5:
      background("orange");
      break;

  }

}

// function touchStarted() {
//   getAudioContext().resume();
// }

function mouseReleased() {
  state++;
  if (state > 5) state = 0;

  song1.pause();
  song2.pause();
  song3.pause();


}
