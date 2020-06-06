// Examples use USGS Earthquake API:
//   https://earthquake.usgs.gov/fdsnws/event/1/#methods
let data;
function preload() {
  // Get the most recent earthquake in the database
  
  //correct = loadJSON('correct.json');
  wrong = loadJSON('wrong.json');
}

function setup() {
  createCanvas(800, 800);
  background(200)
  fill(0);
  
  text(wrong.question, 10, 30);
  button_a = createButton(wrong.choices[0]);
  button_a.position(20, 110);
  button_a.mousePressed(check(1));

  button_b = createButton(wrong.choices[1]);
  button_b.position(20, 210);
  button_b.mousePressed(check(2));

  button_c = createButton(wrong.choices[2]);
  button_c.position(20, 310);
  button_c.mousePressed(check(3));

}


function check(ans){
  if(ans == wrong.true){
    background(0,255,0)
  }else{
    background(255,0,0)
  }
}
