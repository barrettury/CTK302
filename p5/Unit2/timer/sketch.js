let timer = 0;
let state = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {

  switch (state) {
    case 0:
      background('red');
      timer++;
      if(timer> 3*60)
      {
        state++;
      }

      break;

    case 1:
      background('green');
      break;
  }

}
function mouseReleased() {
 state = 0;
 timer = 0;
}
