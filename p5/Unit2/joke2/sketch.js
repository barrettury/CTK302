let state = 0;
let timer = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(40);
}

function draw() {
  switch(state){
    case 0:
    background('white');
    text("Why was 6 afraid of 7?", width/2, height/2);
    timer++;
    if(timer> 3*60)
    {
      state = 1;
      timer = 0;
    }

    break;

    case 1:
    background('Cyan');
    text("Because 7 ate 9!!!", width/2, height/2);
    timer++;
    if(timer> 3*60)
    {
      state = 0;
      timer = 0;
    }
    break;

  }

}
