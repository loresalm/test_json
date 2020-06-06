// Examples use USGS Earthquake API:
//   https://earthquake.usgs.gov/fdsnws/event/1/#methods
let data;
function preload() {
  // Get the most recent earthquake in the database
  
  correct = loadJSON('correct.json');
  wrong = loadJSON('wrong.json');
}

function setup() {
  createCanvas(800, 800);
  fill(0);
  textAlign(CENTER);
  text(wrong.question, 10, 80);
  button_a = createButton(wrong.question);
  button_b = createButton(wrong.question);
  button_c = createButton(wrong.question);

}
