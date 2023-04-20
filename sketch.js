let x, y, diametro;
let cor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  diametro = 150;
}

function draw() {
  background(0);

  stroke(255);
  strokeWeight(2);
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);

  if (x < width / 2 && y < height / 2) {
    cor = color(255, 0, 127); 
  } else if (x > width / 2 && y < height / 2) {
    cor = color(0, 206, 209);
  } else if (x > width / 2 && y > height / 2) {
    stroke(255);
    cor = color (0, 255, 0); 
  } else {
    cor = color(255, 117, 24); 
  }

  fill(cor);
  ellipse(x, y, diametro, diametro);
}

function mouseClicked() {
  x = mouseX;
  y = mouseY;
}