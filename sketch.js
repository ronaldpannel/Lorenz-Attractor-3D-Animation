let sigma = 10;
let rho = 28;
let beta = 8 / 3;
let dt = 0.01;
let maxPoints = 150;

let attractors = [];
let num = 25;
let initialCond = 0.05;
const initSlider = document.getElementById("initSlider");
let sliderValue = document.getElementById("valueLabel");

function setup() {
  let canvas =  createCanvas(400, 420, WEBGL);
  canvas.parent("container");

  init();
}

function draw() {
  background(0);
  orbitControl();
  scale(5.5);

  // console.log(initialCond);

  for (let i = 0; i < attractors.length; i++) {
    attractors[i].update();
    attractors[i].draw();
  }
}

function init() {
  for (let i = 0; i < num; i++) {
    let initCond = (i + 1) * initialCond;
    let c = color(((i + 1) / num) * 255, 100, 255);
    attractors.push(new Attractor(initCond, initCond, initCond, c));
  }
}
initSlider.addEventListener("change", (e) => {
  initialCond = e.target.value;
  // console.log(initialCond);
  attractors = [];
  updateSliderValue();
  init();
});
function updateSliderValue() {
  sliderValue.innerHTML = initSlider.value;
}

// function windowResized() {
//   resizeCanvas(400, 400);
// }
