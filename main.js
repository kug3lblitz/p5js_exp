let maxCircleSize = 20
let phase = 0, speed = 0.03;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(127);
  let x = width/2;
  let y = height/2 + sin(phase) * 50;
  phase = frameCount * speed;
  let sizeOffset = (cos(phase) + 1) * 0.5;
  let circleSize = sizeOffset * maxCircleSize;

  ellipse(x, y, circleSize, circleSize);
}
