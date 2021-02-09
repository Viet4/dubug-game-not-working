var hr, mn, sc;
var hrAngle, mnAngle, scAngle;


function setup() {
  createCanvas(400,400);

  hr = hour();
  mn = minute();
  sc = second();

}

function draw() {
  background(0,0,0);  
  
  angleMode(DEGREES);

  stroke(255,0,0);
  strokeWeight(7);
  
  hrAngle = map(hr, 0, 12, 0, 360);
  fill("blue");
  line(200,200,hrAngle,hrAngle);

  mnAngle = map(mn, 0, 60, 0, 360);
  fill("green");
  line(200,200,mnAngle,mnAngle);

  scAngle = map(sc, 0, 60, 0, 360);
  fill("red");
  line(200,200,scAngle,scAngle);

  drawSprites();
  
}

/*
async function getTime() {

  var response = await fetch("http://worldtimeapi.org/api/timezone/America/Toronto");
  var responseJSON = await response.json();

  //console.log(responseJSON);

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  var min = datatime.slice(14,16);
  var sec = datahour.slice(17,19);

  //console.log(hour);
}
*/