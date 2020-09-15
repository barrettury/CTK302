function avatar() {
  fill(84, 46, 89);
  quad(600, 250, 575, 400, 725, 400, 700, 250);

  fill('white');
  ellipse(650, 200, 100, 100);
  ellipse(570, 247, 25, 25);
  ellipse(730, 247, 25, 25);
  fill('purple');
  rect(612.5, 250, 75, 110);
  quad(680, 280, 680, 300, 730, 260, 720, 240);
  quad(620, 300, 620, 280, 580, 240, 570, 260);
  quad(620, 360, 640, 360, 610, 405, 595, 405);
  quad(660, 360, 680, 360, 700, 405, 685, 405);
  ellipse(595, 405, 45, 30);
  ellipse(695, 405, 45, 30);
  if(mouseIsPressed){
  fill("white");
  push();
  translate(575, 100);
  star(100, 100, 5, 10, 4);
  pop();

  push();
  translate(575, 150);
  star(50, 50, 5, 10, 4);
  pop();
}

}

function Bg() {
  if (mouseIsPressed) {
    fill(194, 129, 204);
    ellipse(50, 400, 80, 35);
    ellipse(130, 435, 80, 35);
    ellipse(215, 400, 80, 35);
    ellipse(280, 435, 80, 35);
    ellipse(330, 400, 80, 35);
    ellipse(400, 360, 80, 35);
    ellipse(460, 310, 80, 35);
    ellipse(490, 245, 80, 35);
    ellipse(530, 170, 80, 35);
    ellipse(630, 90, 80, 35);
    ellipse(780, 125, 80, 35);
    ellipse(900, 200, 80, 35);
    fill('white');

    push();
    translate(100, 150);
    star(50, 50, 5, 10, 5);
    pop();

    push();
    translate(100, 50);
    star(50, 50, 5, 10, 5);
    pop();

    push();
    translate(130, 75);
    star(50, 50, 5, 10, 5);
    pop();

    push();
    translate(150, 130);
    star(50, 50, 5, 10, 5);
    pop();

    push();
    translate(150, 50);
    star(50, 50, 5, 10, 5);
    pop();

    push();
    translate(200, 40);
    star(50, 50, 5, 10, 5);
    pop();

    push();
    translate(200, 175);
    star(50, 50, 5, 10, 5);
    pop();

    push();
    translate(210, 100);
    star(50, 50, 5, 10, 5);
    pop();

    push();
    translate(100, 25);
    star(50, 50, 5, 10, 5);
    pop();

    push();
    translate(145, 15);
    star(50, 50, 5, 10, 5);
    pop();

    push();
    translate(290, 15);
    star(50, 50, 5, 10, 5);
    pop();

    push();
    translate(300, 85);
    star(50, 50, 5, 10, 5);
    pop();

    push();
    translate(310, 170);
    star(50, 50, 5, 10, 5);
    pop();

    push();
    translate(335, 58);
    star(50, 50, 5, 10, 5);
    pop();

    push();
    translate(375, 155);
    star(50, 50, 5, 10, 5);
    pop();

    push();
    translate(390, 39);
    star(50, 50, 5, 10, 5);
    pop();

    function star(x, y, radius1, radius2, npoints) {
      let angle = TWO_PI / npoints;
      let halfAngle = angle / 2.0;
      beginShape();
      for (let a = 0; a < TWO_PI; a += angle) {
        let sx = x + cos(a) * radius2;
        let sy = y + sin(a) * radius2;
        vertex(sx, sy);
        sx = x + cos(a + halfAngle) * radius1;
        sy = y + sin(a + halfAngle) * radius1;
        vertex(sx, sy);
      }
      endShape(CLOSE);
      //https://p5js.org/examples/form-star.html
    }
  } else {
    fill("white");
    textFont(cook);
    textSize(50);
    text("Luna Spade", 350, 50);
    textSize(40);
    text("They harnass the power of", 400, 100);
    text("the moon and turn it into", 400, 150);
    text("powerful moon beams", 380, 200);


  }
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
  //https://p5js.org/examples/form-star.html
}
