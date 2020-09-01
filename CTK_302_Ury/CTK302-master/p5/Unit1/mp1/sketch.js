function setup() {
  createCanvas(960, 720);
}

function draw() {
  background(30);
  fill(255, 203, 164);
  ellipse(650, 200, 100, 100);
  rect(612.5, 250, 75, 110);
  ellipse(570, 247, 25, 25);
  ellipse(730, 247, 25, 25);
  quad(680, 280, 680, 300, 730, 260, 720, 240);
  quad(620, 300, 620, 280, 580, 240, 570, 260);
  quad(620, 360, 640, 360, 610, 405, 595, 405);
  quad(660, 360, 680, 360, 700, 405, 685, 405);
  ellipse(595, 405, 45, 30);
  ellipse(695, 405, 45, 30);
  if (mouseIsPressed) {
    fill('white');
    push();
    translate(575, 100);
    star(100, 100, 5, 10, 4);
    pop();

    push();
    translate(575, 150);
    star(50, 50, 5, 10, 4);
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

  }
  fill('red');
  rect(0,600,150,200);
  triangle(0,500,0,600,150,600);
}
