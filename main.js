let phase, speed, maxCircleSize, numRows, numCols, numStrands, colorA, colorB;

function setup() {
  createCanvas(500, 500);
  noStroke();

  phase = 0;
  speed = 0.07;
  maxCircleSize = 20;
  numRows = 10;
  numCols = 16;
  numStrands = 2;

  colorA = color(0, 255, 0);
  colorB = color(0, 0, 255);
}

function draw() {
  background(4, 58, 74);
  phase = frameCount * speed;

  for(let strand = 0; strand < numStrands; strand += 1) {
    let strandPhase = phase + map(strand, 0, numStrands, 0, TWO_PI);

    for(let col = 0; col < numCols; col += 1) {
      let colOffset = map(col, 0, numCols, 0, TWO_PI);
      let x = map(col, 0, numCols, 50, width - 50);

      for(let row = 0; row < numRows; row += 1) {
        let y = height/2 + row * 10 + sin(strandPhase + colOffset) * 50;
        let sizeOffset = (cos(strandPhase - (row / numRows) + colOffset) + 1) * 0.5;
        let circleSize = sizeOffset * maxCircleSize;

        fill(lerpColor(colorA, colorB, row / numRows));
        ellipse(x, y, circleSize, circleSize);
      }
    }
  }
}
