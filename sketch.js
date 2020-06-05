// Examples use USGS Earthquake API:
//   https://earthquake.usgs.gov/fdsnws/event/1/#methods
let data;
function preload() {
  // Get the most recent earthquake in the database
  
  data = loadJSON('data.json');
}

function setup() {
  createCanvas(710, 400);
  button = createButton(data.answere);
}
