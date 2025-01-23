let sigma = 10;
let rho = 28;
let beta = 8 / 3;
let dt = 0.01;
let maxPoints = 150;

let attractors = [];
let num = 25;

function setup() {
  createCanvas(400, 400, WEBGL);

  for (let i = 0; i < num; i++) {
    let initCond = (i + 1) * 0.05;
    let c = color(((i + 1) / num) * 255, 100, 255);
    attractors.push(new Attractor(initCond, initCond, initCond, c));
  }
}

function draw() {
  background(0);
  orbitControl();
  scale(5);

  for (let i = 0; i < attractors.length; i++) {
    attractors[i].update();
    attractors[i].draw();
  }
}

// function windowResized() {
//   resizeCanvas(400, 400);
// }
