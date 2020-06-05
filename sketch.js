// Examples use USGS Earthquake API:
//   https://earthquake.usgs.gov/fdsnws/event/1/#methods
let data;
function preload() {
  // Get the most recent earthquake in the database
  
  data = loadJSON('data.json');
}

function setup() {
  noLoop();
}

function draw() {
  background(200);
  // Get the magnitude and name of the earthquake out of the loaded JSON
  let earthquakeMag = data.question
  let earthquakeName = data.answere
  ellipse(width / 2, height / 2, earthquakeMag * 10, earthquakeMag * 10);
  textAlign(CENTER);
  text(earthquakeName, 0, height - 30, width, 30);
}