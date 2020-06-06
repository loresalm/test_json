// Examples use USGS Earthquake API:
//   https://earthquake.usgs.gov/fdsnws/event/1/#methods
let data;
function preload() {
  // Get the most recent earthquake in the database
  
  //correct = loadJSON('correct.json');
  //wrong = loadJSON('wrong.json');
}

function setup() {


  const firebaseConfig = {
  apiKey: "AIzaSyCTerBeBCFv_1C6i23itfCLLTKyPqFsoQs",
  authDomain: "memoryapp-e81d6.firebaseapp.com",
  databaseURL: "https://memoryapp-e81d6.firebaseio.com",
  projectId: "memoryapp-e81d6",
  storageBucket: "memoryapp-e81d6.appspot.com",
  messagingSenderId: "374050693737",
  appId: "1:374050693737:web:d2b02d3be9471e829af8f8",
  measurementId: "G-GKN4N5QSD3"
  };

  firebase.initializeApp(firebaseConfig)

  
  DB = firebase.database();
  var ref = DB.ref('wrong_Question/correct')

  var Q = {
            question: "Gli elementi, che suddividono lo scafo in senso trasversale, sono:",
            choices: ["le paratie.","gli osteriggi.","i boccaporti."],
            true: 2
          }

  ref.push(Q)

  createCanvas(800, 800);
  background(200)
  fill(0);
  
  text('wrong.question', 10, 30);
  button_a = createButton('wrong.choices[0]');
  button_a.position(20, 110);
  button_a.mousePressed(res_a);

  button_b = createButton('wrong.choices[1]');
  button_b.position(20, 210);
  button_b.mousePressed(res_b);

  button_c = createButton('wrong.choices[2]');
  button_c.position(20, 310);
  button_c.mousePressed(res_c);

}


function res_a(){
  if(1 == 1){
    console.log("Correct")
  }else{
    console.log("wrong")
  }
}

function res_b(){
  if(2 == 2){
    console.log("Correct")
  }else{
    console.log("wrong")
  }
}


function res_c(){
  if(3 == 3){
    console.log("Correct")
  }else{
    console.log("wrong")
  }
}

